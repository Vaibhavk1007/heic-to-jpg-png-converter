"use client"

interface ActionButtonsProps {
  filesCount: number
  allDone: boolean
  onConvert: () => void
  onDownloadAll: () => void
  isConverting?: boolean
}

export default function ActionButtons({
  filesCount,
  allDone,
  onConvert,
  onDownloadAll,
  isConverting = false,
}: ActionButtonsProps) {
  const isMultiple = filesCount > 1

  const convertLabel = isMultiple
    ? "Convert HEIC files to JPG / PNG"
    : "Convert HEIC to JPG / PNG"

  const downloadLabel = isMultiple
    ? "Download all converted images"
    : "Download converted image"

  const canConvert = filesCount > 0 && !isConverting
  const canDownload = filesCount > 0 && allDone && !isConverting

  // 👉 Put your real pCloud affiliate link here
  const PCLOUD_AFFILIATE_URL = "https://YOUR_PCLOUD_AFFILIATE_LINK"

  return (
    <>
      <div
        className="
          flex 
          flex-col items-end
          sm:flex-row sm:justify-end sm:items-center
          gap-3 mt-4
        "
      >
        {/* Secondary: Download (left) — only when all conversions are done */}
        {filesCount > 0 && allDone && (
          <button
            type="button"
            onClick={onDownloadAll}
            disabled={!canDownload}
            aria-disabled={!canDownload}
            aria-label={
              isMultiple
                ? "Download all converted HEIC images"
                : "Download converted HEIC image"
            }
            className="px-4 py-2 rounded-lg font-medium text-sm transition-all border w-full sm:w-auto"
            style={{
              borderColor: "#3674B5",
              color: "#3674B5",
              backgroundColor: "white",
              opacity: canDownload ? 1 : 0.5,
              cursor: canDownload ? "pointer" : "not-allowed",
            }}
          >
            {downloadLabel}
          </button>
        )}

        {/* Primary: Convert (right) */}
        <button
          type="button"
          onClick={onConvert}
          disabled={!canConvert}
          aria-disabled={!canConvert}
          aria-label={
            isMultiple
              ? "Convert selected HEIC files to JPG or PNG"
              : "Convert selected HEIC file to JPG or PNG"
          }
          className="px-6 py-3 rounded-lg font-semibold text-base transition-all text-white w-full sm:w-auto shadow"
          style={{
            backgroundColor: canConvert ? "#3674B5" : "#0F6E8C",
            opacity: canConvert ? 1 : 0.5,
            cursor: canConvert ? "pointer" : "not-allowed",
          }}
        >
          {isConverting ? "Converting..." : convertLabel}
        </button>
      </div>

      {/* ⭐ pCloud affiliate suggestion (subtle, under buttons) */}
      <div className="mt-3 w-full text-[11px] sm:text-xs text-slate-600 text-center sm:text-right">
        Need extra space for your photos?{" "}
        <a
          href={"https://partner.pcloud.com/r/152668"}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#3674B5] underline underline-offset-2"
        >
          Back them up with pCloud cloud storage
        </a>
        .
      </div>
    </>
  )
}
