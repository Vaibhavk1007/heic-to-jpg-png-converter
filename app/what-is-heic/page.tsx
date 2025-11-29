// app/what-is-heic/page.tsx
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "What is a HEIC File? – HEIC vs JPG and PNG Explained",
  description:
    "Learn what HEIC images are, why iPhones use HEIC, and how to convert HEIC to JPG or PNG when apps or websites don’t support it.",
}

export default function WhatIsHeicPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFF]">
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#123265] mb-6">
          What is a HEIC file?
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          HEIC (High Efficiency Image Container) is a modern image format used
          by Apple on iPhones and iPads. It stores your photos in high
          quality but with a smaller file size compared to traditional JPG
          images.
        </p>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold text-[#123265]">
            Why do iPhones use HEIC?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Since iOS 11, iPhones save new photos as HEIC by default. The main
            reason is efficiency: HEIC uses newer compression that lets you
            store more photos in the same storage space, without a visible loss
            in quality.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Smaller file size than JPG for similar quality</li>
            <li>Supports transparency and multiple images in one file</li>
            <li>Designed for modern phones and cameras</li>
          </ul>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold text-[#123265]">
            Pros and cons of HEIC
          </h2>
          <h3 className="font-semibold text-gray-800">Advantages</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>High image quality with smaller file sizes</li>
            <li>Good for saving storage on mobile devices</li>
            <li>Modern format with support for extra metadata</li>
          </ul>

          <h3 className="font-semibold text-gray-800 mt-3">Disadvantages</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Not every website or app accepts HEIC uploads (many only accept
              JPG or PNG)
            </li>
            <li>
              Older Windows and Android devices may not open HEIC without
              installing extra codecs
            </li>
            <li>
              Some photo editors and printing services still expect JPG files
            </li>
          </ul>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold text-[#123265]">
            When should you convert HEIC to JPG or PNG?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Converting a HEIC image to JPG or PNG is useful when:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>You need to upload photos to a website that doesn’t accept HEIC</li>
            <li>You want to share images with people using older devices</li>
            <li>
              You plan to use the photo in design tools, documents, or
              presentations that only accept JPG/PNG
            </li>
          </ul>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="text-xl font-semibold text-[#123265]">
            How to convert HEIC to JPG or PNG
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The easiest way is to use an online HEIC converter that runs in your
            browser. With{" "}
            <Link
              href="/heic-to-jpg"
              className="text-[#3674B5] underline font-medium"
            >
              our free HEIC to JPG / PNG converter
            </Link>
            , all conversion happens on your device – your images are not
            uploaded to a remote server.
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Open the converter page.</li>
            <li>Drag &amp; drop your HEIC photos into the upload area.</li>
            <li>Choose JPG or PNG as the output format.</li>
            <li>Click &quot;Convert&quot; and then download your images.</li>
          </ol>
        </section>

        <div className="border border-[#D1E5FF] bg-white rounded-xl p-5 md:p-6 space-y-3">
          <h2 className="text-lg font-semibold text-[#123265]">
            Convert HEIC to JPG or PNG now
          </h2>
          <p className="text-gray-700">
            Ready to convert your HEIC photos? Use our{" "}
            <Link
              href="/heic-to-jpg"
              className="text-[#3674B5] underline font-medium"
            >
              free HEIC converter
            </Link>{" "}
            to turn them into standard JPG or PNG files in your browser.
          </p>
        </div>
      </div>
    </main>
  )
}
