// app/heic-to-png/page.tsx
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free HEIC to PNG Converter – Online HEIC Image to PNG",
  description:
    "Convert HEIC images from your iPhone to PNG format online. Free HEIC to PNG converter that runs in your browser with no image uploads.",
}

export default function HeicToPngPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFF]">
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#123265] mb-6">
          Free HEIC to PNG Converter (Online)
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Need transparent PNGs from your iPhone photos? This page explains how
          to convert HEIC images to PNG format quickly using our browser-based
          converter.
        </p>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold text-[#123265]">
            How to convert HEIC to PNG
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>
              Open our{" "}
              <Link
                href="/heic-to-jpg"
                className="text-[#3674B5] underline font-medium"
              >
                HEIC converter
              </Link>
              .
            </li>
            <li>Upload one or more HEIC images from your device.</li>
            <li>Select <span className="font-semibold">PNG</span> as the output format.</li>
            <li>Click <span className="font-semibold">Convert</span> and download your PNG files.</li>
          </ol>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold text-[#123265]">
            Why choose PNG instead of JPG?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>PNG supports transparency (no white background).</li>
            <li>Better for logos, UI elements, and screenshots.</li>
            <li>Widely supported across browsers, apps, and design tools.</li>
          </ul>
        </section>

        <div className="border border-[#D1E5FF] bg-white rounded-xl p-5 md:p-6 space-y-3">
          <h2 className="text-lg font-semibold text-[#123265]">
            Open the HEIC to PNG converter
          </h2>
          <p className="text-gray-700">
            Our main tool lets you convert HEIC images to either{" "}
            <span className="font-semibold">JPG</span> or{" "}
            <span className="font-semibold">PNG</span> directly in your browser.
          </p>
          <Link
            href="/heic-to-jpg"
            className="inline-flex items-center justify-center mt-2 px-5 py-2.5 rounded-full bg-[#3674B5] text-white font-medium hover:bg-[#2b5f92] transition-colors"
          >
            Go to HEIC to JPG / PNG converter
          </Link>
        </div>
      </div>
    </main>
  )
}
