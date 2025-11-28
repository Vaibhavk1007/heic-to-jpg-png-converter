"use client"

import type React from "react"

import FileUploadArea from "./file-upload-area"
import ConversionSettings from "./conversion-settings"
import FileList from "./file-list"
import ActionButtons from "./action-buttons"

interface ConvertedFile {
  id: string
  name: string
  size: string
  format: string
  status: "Ready" | "Converting..." | "Done"
  progress?: number
  downloadUrl?: string
}

interface ConverterCardProps {
  files: ConvertedFile[]
  outputFormat: "JPG" | "PNG"
  quality: number
  resize: string
  dragOver: boolean
  onDragOver: (e: React.DragEvent) => void
  onDragLeave: () => void
  onDrop: (e: React.DragEvent) => void
  onFilesSelected: (files: File[]) => void
  onFormatChange: (format: "JPG" | "PNG") => void
  onQualityChange: (quality: number) => void
  onResizeChange: (resize: string) => void
  onConvert: () => void
  onRemoveFile: (id: string) => void
  onDownload: (id: string) => void
  onDownloadAll: () => void
  allDone: boolean
  isConverting?: boolean
}

export default function ConverterCard({
  files,
  outputFormat,
  quality,
  resize,
  dragOver,
  onDragOver,
  onDragLeave,
  onDrop,
  onFilesSelected,
  onFormatChange,
  onQualityChange,
  onResizeChange,
  onConvert,
  onRemoveFile,
  onDownload,
  onDownloadAll,
  allDone,
  isConverting,
}: ConverterCardProps) {
  return (
    <div
      className="rounded-2xl shadow-lg p-6 md:p-8 space-y-6 md:space-y-8"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: "#E8F4FA",
        borderWidth: "1px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Title & Subtitle */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold text-balance" style={{ color: "#2A2A2A" }}>
          Convert HEIC to JPG or PNG in seconds
        </h1>
        <p className="text-base md:text-lg" style={{ color: "#556B5B" }}>
          Secure, fast, and lossless conversion right in your browser.
        </p>
      </div>

      {/* Upload Area */}
      <FileUploadArea
        dragOver={dragOver}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onFilesSelected={onFilesSelected}
      />

      {/* Conversion Settings */}
      {files.length > 0 && (
        <ConversionSettings
          outputFormat={outputFormat}
          quality={quality}
          resize={resize}
          onFormatChange={onFormatChange}
          onQualityChange={onQualityChange}
          onResizeChange={onResizeChange}
          disabled={isConverting}
        />
      )}

      {/* File List */}
      {files.length > 0 && <FileList files={files} onRemoveFile={onRemoveFile} onDownload={onDownload} />}

      {/* Action Buttons */}
      <ActionButtons
        filesCount={files.length}
        allDone={allDone}
        onConvert={onConvert}
        onDownloadAll={onDownloadAll}
        isConverting={isConverting}
      />
    </div>
  )
}
