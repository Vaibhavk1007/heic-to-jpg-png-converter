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
  const convertLabel = isMultiple ? "Convert Files" : "Convert"
  const downloadLabel = isMultiple ? "Download as ZIP" : "Download"

  return (
    <div
      className="
        flex 
        flex-col items-end           /* mobile: stack, right aligned */
        sm:flex-row sm:justify-end   /* desktop: row, right side */
        sm:items-center 
        gap-3 mt-4
      "
    >
      {filesCount > 0 && allDone && (
        <button
          type="button"
          onClick={onDownloadAll}
          disabled={isConverting}
          className="px-4 py-2 rounded-lg font-medium text-sm transition-all border w-full sm:w-auto"
          style={{
            borderColor: "#3674B5",
            color: "#3674B5",
            backgroundColor: "white",
            opacity: isConverting ? 0.5 : 1,
            cursor: isConverting ? "not-allowed" : "pointer",
          }}
        >
          {downloadLabel}
        </button>
      )}

      <button
        type="button"
        onClick={onConvert}
        disabled={filesCount === 0 || isConverting}
        className="px-6 py-3 rounded-lg font-semibold text-base transition-all text-white w-full sm:w-auto"
        style={{
          backgroundColor:
            filesCount === 0 || isConverting ? "#0F6E8C" : "#3674B5",
          opacity: filesCount === 0 || isConverting ? 0.5 : 1,
          cursor: filesCount === 0 || isConverting ? "not-allowed" : "pointer",
        }}
      >
        {isConverting ? "Converting..." : convertLabel}
      </button>
    </div>
  )
}
