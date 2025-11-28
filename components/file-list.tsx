"use client"

import { Trash2, Download } from "lucide-react"

interface ConvertedFile {
  id: string
  name: string
  size: string
  format: string   // ⬅ change this
  status: "Ready" | "Converting..." | "Done"
  progress?: number
}

interface FileListProps {
  files: ConvertedFile[]
  onRemoveFile: (id: string) => void
  onDownload: (id: string) => void
}

export default function FileList({ files, onRemoveFile, onDownload }: FileListProps) {
  return (
    <div className="space-y-2">
      {files.map((file) => (
        <div
          key={file.id}
          className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg"
          style={{ backgroundColor: "rgba(161, 227, 249, 0.15)" }}
        >
          {/* File Info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate" style={{ color: "#2A2A2A" }}>
              {file.name}
            </p>
            <p className="text-xs" style={{ color: "#578FCA" }}>
              {file.size}
            </p>
          </div>

          {/* Format Badge */}
          <div
            className="px-3 py-1 rounded-full text-xs font-medium w-fit"
            style={{
              /* Updated badge: light aqua background, deep blue text */
              backgroundColor: "#A1E3F9",
              color: "#3674B5",
            }}
          >
            {file.format}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 min-w-fit">
            {file.status === "Converting..." ? (
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div
                    className="h-1 rounded-full"
                    style={{
                      width: `${(file.progress || 0) / 3}px`,
                      backgroundColor: "#3674B5",
                    }}
                  ></div>
                  <div
                    className="h-1 rounded-full flex-1"
                    style={{
                      backgroundColor: "#A1E3F9",
                    }}
                  ></div>
                </div>
                <span className="text-xs" style={{ color: "#578FCA" }}>
                  Converting...
                </span>
              </div>
            ) : (
              <span
                className="text-xs font-medium px-2 py-1 rounded"
                style={{
                  /* Updated status badges */
                  backgroundColor: file.status === "Done" ? "rgba(54, 116, 181, 0.1)" : "rgba(87, 143, 202, 0.1)",
                  color: file.status === "Done" ? "#3674B5" : "#578FCA",
                }}
              >
                {file.status}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {file.status === "Done" && (
              <button
                onClick={() => onDownload(file.id)}
                className="p-2 hover:opacity-70 transition-opacity"
                style={{ color: "#3674B5" }}
                title="Download file"
              >
                <Download size={18} />
              </button>
            )}
            <button
              onClick={() => onRemoveFile(file.id)}
              className="p-2 hover:opacity-70 transition-opacity"
              style={{ color: "#578FCA" }}
              title="Remove file"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
