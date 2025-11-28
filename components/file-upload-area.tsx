"use client"

import type React from "react"

import { Cloud } from "lucide-react"

interface FileUploadAreaProps {
  dragOver: boolean
  onDragOver: (e: React.DragEvent) => void
  onDragLeave: () => void
  onDrop: (e: React.DragEvent) => void
  onFilesSelected: (files: File[]) => void
}

export default function FileUploadArea({
  dragOver,
  onDragOver,
  onDragLeave,
  onDrop,
  onFilesSelected,
}: FileUploadAreaProps) {
  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className="rounded-xl p-8 md:p-12 text-center transition-all cursor-pointer"
      style={{
        borderWidth: "2px",
        borderStyle: "dashed",
        /* Updated colors to match design: medium blue border, light aqua hover */
        borderColor: dragOver ? "#3674B5" : "#578FCA",
        backgroundColor: dragOver ? "rgba(161, 227, 249, 0.15)" : "transparent",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <Cloud size={48} style={{ color: "#3674B5" }} />

        <div className="space-y-1">
          <p className="text-lg md:text-xl font-medium" style={{ color: "#2A2A2A" }}>
            Drag & drop your HEIC files here
          </p>
          <p className="text-sm" style={{ color: "#556B5B" }}>
            or{" "}
            <button
              onClick={() => {
                const input = document.createElement("input")
                input.type = "file"
                input.multiple = true
                input.accept = "image/heic,.heic,image/jpeg,.jpg,.jpeg,image/png,.png"
                input.onchange = (e) => {
                  const target = e.target as HTMLInputElement
                  if (target.files) {
                    onFilesSelected(Array.from(target.files))
                  }
                }
                input.click()
              }}
              className="underline font-medium hover:opacity-70 transition-opacity"
              style={{ color: "#3674B5" }}
            >
              click to browse
            </button>
          </p>
        </div>

        <p className="text-xs md:text-sm" style={{ color: "#578FCA" }}>
          We support multiple files · Max 100 MB per file
        </p>
      </div>
    </div>
  )
}
