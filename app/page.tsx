"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import ConverterCard from "@/components/converter-card"
import HowItWorks from "@/components/how-it-works"
import Footer from "@/components/footer"
import ErrorToast from "@/components/error-toast"
import AdPlaceholder from "@/components/ad-placeholder"

interface ConvertedFile {
  id: string
  name: string
  size: string
  format: string   // ⬅ change this
  status: "Ready" | "Converting..." | "Done"
  progress?: number
  downloadUrl?: string
}

export default function Home() {
  const [files, setFiles] = useState<ConvertedFile[]>([])
  const [outputFormat, setOutputFormat] = useState<"JPG" | "PNG">("JPG")
  const [quality, setQuality] = useState(85)
  const [resize, setResize] = useState("original")
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

    const convertedFiles = validFiles.map((file, index) => {
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
        format: formatLabel,        // ✅ now shows original type
        status: "Ready" as const,
        originalFile: file,
      }
    })

    setFiles((prev) => [...prev, ...convertedFiles] as ConvertedFile[])

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
    if (files.length === 0) return

    setIsConverting(true)

    // Update UI to show converting state
    setFiles((prev) =>
      prev.map((file) => ({
        ...file,
        status: "Converting..." as const,
        progress: 0,
      })),
    )

    try {
      // Create FormData with all files and conversion settings
      const formData = new FormData()
      formData.append("format", outputFormat)
      formData.append("quality", quality.toString())
      formData.append("resize", resize)

      // Add original files to FormData
      files.forEach((file) => {
        const originalFile = (file as unknown as { originalFile: File }).originalFile
        if (originalFile) {
          formData.append("files", originalFile)
        }
      })

      // Simulate progress during upload
      const progressInterval = setInterval(() => {
        setFiles((prev) =>
          prev.map((file) => ({
            ...file,
            progress: (file.progress || 0) + Math.random() * 30,
          })),
        )
      }, 200)

      // Call the API
      const response = await fetch("/api/convert", {
        method: "POST",
        body: formData,
      })

      clearInterval(progressInterval)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Conversion failed")
      }

      const data = await response.json()

      if (data.success && data.files) {
        // Update files with download URLs, final name, and final format
        setFiles((prev) =>
          prev.map((file, index) => {
            const convertedFile = data.files[index] as { name?: string; downloadUrl?: string }
            return {
              ...file,
              name: convertedFile?.name || file.name,            // jpg → png filename etc.
              format: outputFormat,                              // ✅ now reflects final format
              status: "Done" as const,
              progress: 100,
              downloadUrl: convertedFile?.downloadUrl ?? file.downloadUrl,
            }
          }),
        )
      } else {
        throw new Error(data.error || "Conversion failed")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed")
      setFiles((prev) =>
        prev.map((file) => ({
          ...file,
          status: "Ready" as const,
          progress: undefined,
        })),
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
    if (file?.downloadUrl) {
      const link = document.createElement("a")
      link.href = file.downloadUrl
      link.download = file.name
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleDownloadAll = () => {
    // Download all files individually
    files.forEach((file) => {
      if (file.status === "Done" && file.downloadUrl) {
        const link = document.createElement("a")
        link.href = file.downloadUrl
        link.download = file.name
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
      <div className="w-full px-4" style={{ backgroundColor: "##F0F4F9" }}>
        <div className="max-w-6xl mx-auto py-4 flex justify-center">
          <AdPlaceholder width="728" height="90" />
        </div>
      </div>

      {error && <ErrorToast message={error} onClose={() => setError(null)} />}

      <section style={{ backgroundColor: "white" }} className="py-12 md:py-20 px-4">
        <div className="max-w-2xl mx-auto">
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
      </section>

      <main className="flex-1 px-4" style={{ backgroundColor: "rgba(209, 248, 239, 0.12)" }}>
        <div className="max-w-6xl mx-auto">
          {/* Inline ad slot - after hero card, before how-it-works */}
          <div className="flex justify-center py-4 md:py-6" style={{ margin: "24px 0" }}>
            <AdPlaceholder width="728" height="90" inline />
          </div>
        </div>
        <HowItWorks />
      </main>

      <Footer />
    </div>
  )
}
