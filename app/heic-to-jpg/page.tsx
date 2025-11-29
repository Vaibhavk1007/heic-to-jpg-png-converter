"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import ConverterCard from "@/components/converter-card"
import HowItWorks from "@/components/how-it-works"
import Footer from "@/components/footer"
import ErrorToast from "@/components/error-toast"
import AdPlaceholder from "@/components/ad-placeholder"
import Link from "next/link"

/* ---------- heic2any from CDN ---------- */

declare global {
  interface Window {
    heic2any?: (options: any) => Promise<Blob | Blob[]>
  }
}

// Lazy-load heic2any from CDN in the browser
let heic2anyPromise: Promise<(options: any) => Promise<Blob | Blob[]>> | null =
  null

function loadHeic2AnyFromCDN() {
  if (heic2anyPromise) return heic2anyPromise

  heic2anyPromise = new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("heic2any can only be loaded in the browser"))
      return
    }

    if (window.heic2any) {
      resolve(window.heic2any as any)
      return
    }

    const script = document.createElement("script")
    // ✅ known-working public build
    script.src = "https://unpkg.com/heic2any@0.0.3/dist/heic2any.min.js"
    script.async = true

    script.onload = () => {
      if (window.heic2any) {
        resolve(window.heic2any as any)
      } else {
        reject(
          new Error("heic2any script loaded but window.heic2any is missing"),
        )
      }
    }

    script.onerror = () => {
      reject(new Error("Failed to load heic2any script from CDN"))
    }

    document.body.appendChild(script)
  })

  return heic2anyPromise
}

/* ---------- types & helpers ---------- */

interface ConvertedFile {
  id: string
  name: string
  size: string
  format: string
  status: "Ready" | "Converting..." | "Done"
  progress?: number
  downloadUrl?: string
  originalFile: File
}

const getTargetMime = (format: "JPG" | "PNG") =>
  format === "PNG" ? "image/png" : "image/jpeg"

const readFileAsDataUrl = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

const loadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })

// HEIC / non-HEIC → JPG/PNG using browser APIs
const convertImageClientSide = async (
  file: File,
  format: "JPG" | "PNG",
  quality: number,
): Promise<Blob> => {
  try {
    const lowerName = file.name.toLowerCase()
    const isHeic =
      lowerName.endsWith(".heic") ||
      file.type === "image/heic" ||
      file.type === "image/heif"

    const targetMime = getTargetMime(format)

    if (isHeic) {
      // HEIC → JPG/PNG via heic2any from CDN
      const heic2any = await loadHeic2AnyFromCDN()

      const result = await heic2any({
        blob: file,
        toType: targetMime,
        quality: quality / 100,
      })

      const blob = Array.isArray(result) ? (result[0] as Blob) : (result as Blob)
      return blob
    }

    // Non-HEIC → canvas re-encode
    const dataUrl = await readFileAsDataUrl(file)
    const img = await loadImage(dataUrl)

    const canvas = document.createElement("canvas")
    canvas.width = img.width
    canvas.height = img.height

    const ctx = canvas.getContext("2d")
    if (!ctx) throw new Error("Canvas not supported in this browser")

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (b) => (b ? resolve(b) : reject(new Error("Conversion failed"))),
        targetMime,
        quality / 100,
      )
    })

    return blob
  } catch (e: any) {
    // Log the real internal error once here
    console.error("convertImageClientSide internal error:", e)

    let message =
      (typeof e === "object" && e?.message) ||
      (typeof e === "string" && e) ||
      "This HEIC file type is not supported in this browser."

    // Throw a clean Error so handleConvert can show it in UI
    throw new Error(message)
  }
}

/* ---------- page component ---------- */

export default function Home() {
  const [files, setFiles] = useState<ConvertedFile[]>([])
  const [outputFormat, setOutputFormat] = useState<"JPG" | "PNG">("JPG")
  const [quality, setQuality] = useState(85)
  const [resize, setResize] = useState("original") // reserved for future
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isConverting, setIsConverting] = useState(false)

  const allowedExtensions = [".heic", ".jpg", ".jpeg", ".png", ".jfif", ".webp"]

  const handleFilesSelected = (newFiles: File[]) => {
    setError(null)

    const validFiles = newFiles.filter((file) => {
      const lowerName = file.name.toLowerCase()
      const isAllowed = allowedExtensions.some((ext) => lowerName.endsWith(ext))

      if (!isAllowed) {
        setError("Unsupported file type. Please upload HEIC, JPG or PNG images.")
        return false
      }

      if (file.size > 100 * 1024 * 1024) {
        setError("File size exceeds 100 MB limit.")
        return false
      }

      return true
    })

    if (validFiles.length === 0) return

    const convertedFiles: ConvertedFile[] = validFiles.map((file, index) => {
      const lowerName = file.name.toLowerCase()
      const ext = lowerName.split(".").pop() || ""
      let formatLabel = ext.toUpperCase()

      if (ext === "jpg" || ext === "jpeg" || ext === "jfif") {
        formatLabel = "JPG"
      } else if (ext === "png") {
        formatLabel = "PNG"
      } else if (ext === "heic") {
        formatLabel = "HEIC"
      } else if (ext === "webp") {
        formatLabel = "WEBP"
      }

      return {
        id: `${Date.now()}-${index}`,
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        format: formatLabel,
        status: "Ready",
        originalFile: file,
      }
    })

    setFiles((prev) => [...prev, ...convertedFiles])
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = () => {
    setDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    handleFilesSelected(droppedFiles)
  }

  const handleConvert = async () => {
    if (files.length === 0) {
      setError("Add at least one file to convert.")
      return
    }

    setError(null)
    setIsConverting(true)

    // mark all as converting
    setFiles((prev) =>
      prev.map((file) => ({
        ...file,
        status: "Converting...",
        progress: 10,
      })),
    )

    try {
      const results = await Promise.all(
        files.map(async (file) => {
          const blob = await convertImageClientSide(
            file.originalFile,
            outputFormat,
            quality,
          )

          const url = URL.createObjectURL(blob)
          const sizeMb = blob.size / 1024 / 1024

          return {
            id: file.id,
            downloadUrl: url,
            size: `${sizeMb.toFixed(2)} MB`,
          }
        }),
      )

      setFiles((prev) =>
        prev.map((file) => {
          const result = results.find((r) => r.id === file.id)
          if (!result) return file

          return {
            ...file,
            status: "Done",
            progress: 100,
            downloadUrl: result.downloadUrl,
            size: result.size,
            format: outputFormat, // final format badge
          }
        }),
      )
    } catch (err: any) {
      console.error("Client-side conversion error (raw):", err)
      setError(
        err instanceof Error
          ? err.message
          : "Conversion failed. Please try again.",
      )
      setFiles((prev) =>
        prev.map((file) =>
          file.status === "Converting..."
            ? { ...file, status: "Ready", progress: undefined }
            : file,
        ),
      )
    } finally {
      setIsConverting(false)
    }
  }

  const handleRemoveFile = (id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id))
  }

  const handleDownload = (id: string) => {
    const file = files.find((f) => f.id === id)
    if (!file?.downloadUrl) return

    const ext = file.format.toLowerCase() // "jpg" or "png"
    const dotIndex = file.name.lastIndexOf(".")
    const baseName = dotIndex !== -1 ? file.name.slice(0, dotIndex) : file.name
    const downloadName = `${baseName}.${ext}`

    const link = document.createElement("a")
    link.href = file.downloadUrl
    link.download = downloadName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownloadAll = () => {
    files.forEach((file) => {
      if (file.status === "Done" && file.downloadUrl) {
        const ext = file.format.toLowerCase()
        const dotIndex = file.name.lastIndexOf(".")
        const baseName =
          dotIndex !== -1 ? file.name.slice(0, dotIndex) : file.name
        const downloadName = `${baseName}.${ext}`

        const link = document.createElement("a")
        link.href = file.downloadUrl
        link.download = downloadName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    })
  }

  const allDone = files.length > 0 && files.every((f) => f.status === "Done")

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      <Navigation />

      {/* Top banner ad slot - below navbar, above hero section */}
      <div className="w-full px-4" style={{ backgroundColor: "#F0F4F9" }}>
        <div className="max-w-6xl mx-auto py-4 flex justify-center">
          <AdPlaceholder width="728" height="90" />
        </div>
      </div>

      {error && <ErrorToast message={error} onClose={() => setError(null)} />}

      <section style={{ backgroundColor: "white" }} className="py-12 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* 🔹 SEO H1 + subheadline */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Convert HEIC to JPG or PNG Online (Free, Secure)
            </h1>
            <p className="mt-3 text-sm md:text-base text-gray-600">
              Use this free HEIC converter to turn your iPhone HEIC photos into standard JPG
              or PNG files. All conversions happen in your browser — no signup, no image
              uploads to our servers.
            </p>
          </div>
          

          <ConverterCard
            files={files}
            outputFormat={outputFormat}
            quality={quality}
            resize={resize}
            dragOver={dragOver}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onFilesSelected={handleFilesSelected}
            onFormatChange={setOutputFormat}
            onQualityChange={setQuality}
            onResizeChange={setResize}
            onConvert={handleConvert}
            onRemoveFile={handleRemoveFile}
            onDownload={handleDownload}
            onDownloadAll={handleDownloadAll}
            allDone={allDone}
            isConverting={isConverting}
          />
        </div>
        <p className="text-sm md:text-base text-gray-600 mt-3 text-center">
            Not sure what a HEIC image is?{" "}
            <Link href="/what-is-heic" className="text-[#3674B5] underline">
                Learn more about HEIC files.
            </Link>
        </p>
      </section>

            <main
        className="flex-1 px-4"
        style={{ backgroundColor: "rgba(209, 248, 239, 0.12)" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Inline ad slot - after hero card, before how-it-works */}
          <div
            className="flex justify-center py-4 md:py-6"
            style={{ margin: "24px 0" }}
          >
            <AdPlaceholder width="728" height="90" inline />
          </div>
        </div>

        {/* Existing “How it works” component */}
        <HowItWorks />

        {/* 🔹 SEO content sections */}
        <section className="max-w-3xl mx-auto py-12 space-y-8">
          {/* How to use */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              How to use this HEIC to JPG / PNG converter
            </h2>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm md:text-base leading-relaxed">
              <li>Click on the upload area or drag and drop your HEIC images.</li>
              <li>
                Choose your preferred output format: <strong>JPG</strong> or{" "}
                <strong>PNG</strong>.
              </li>
              <li>
                Adjust the image quality if needed, then click{" "}
                <strong>Convert</strong>.
              </li>
              <li>
                When the status shows <strong>Done</strong>, download each
                converted file or use <strong>Download All</strong>.
              </li>
            </ol>
          </div>

          {/* Why convert */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Why convert HEIC to JPG or PNG?
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              HEIC images look great and keep file sizes small, but many devices,
              websites, and older apps still do not fully support the HEIC
              format. Converting HEIC to JPG or PNG makes your iPhone photos
              easy to open on Windows PCs, older Android phones, online forms,
              printing services, and most image editors. JPG is ideal for
              everyday sharing, while PNG is better when you need lossless
              quality or transparent backgrounds.
            </p>
          </div>

          {/* What is HEIC */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              What is a HEIC file?
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              HEIC (High Efficiency Image Container) is the default photo format
              used by many iPhones and iPads. It stores high–quality images in a
              much smaller size compared to traditional JPG files. This is great
              for saving storage, but it also means that some programs and
              operating systems cannot open HEIC without conversion. This online
              HEIC converter helps you quickly turn those HEIC photos into
              standard JPG or PNG files.
            </p>
          </div>

          {/* Safety */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Is this HEIC converter safe?
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Yes. This HEIC to JPG / PNG converter runs entirely in your
              browser using client-side code. Your images are not uploaded to
              our servers, and we do not store, view, or track your photos in
              any way. As soon as you close the tab or refresh the page, the
              conversion data is gone from memory.
            </p>
          </div>

          {/* Limitations */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Limitations and browser support
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              HEIC support depends on your device and browser. This tool works
              best for HEIC photos in modern browsers, especially on Apple
              devices. On some desktop browsers (for example certain Windows
              setups), we may not be able to convert every HEIC file. If you see
              an error, try again in Safari on an iPhone, iPad, or Mac, or first
              export the photo as JPG/PNG using your system&apos;s Photos app or
              another offline converter.
            </p>
          </div>
        </section>
        {/* 🔹 FAQ block for users + SEO */}
        <section className="max-w-3xl mx-auto pb-16 space-y-4">
          <h2 className="text-2xl font-semibold mb-2">
            Frequently asked questions about HEIC conversion
          </h2>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <div>
              <h3 className="font-semibold">
                Is this HEIC to JPG / PNG converter free to use?
              </h3>
              <p>
                Yes. This online HEIC converter is free to use for personal
                image conversion. You can upload multiple HEIC photos and
                convert them to JPG or PNG without creating an account.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Are my HEIC photos uploaded to your servers?
              </h3>
              <p>
                No. All HEIC to JPG / PNG conversion happens directly in your
                browser using client-side code. Your photos are not sent to a
                remote server, and we do not store or view your images.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What devices and browsers does this HEIC converter support?
              </h3>
              <p>
                This tool works best in modern browsers such as Chrome, Edge,
                Firefox, and Safari. HEIC support is strongest on Apple devices
                (iPhone, iPad, Mac). On some Windows setups, a few HEIC files
                may not convert correctly due to limited browser support.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What is the maximum HEIC file size I can upload?
              </h3>
              <p>
                The current limit is <strong>100&nbsp;MB per file</strong>.
                Large HEIC images may take longer to convert, especially on
                older devices or slower browsers.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
