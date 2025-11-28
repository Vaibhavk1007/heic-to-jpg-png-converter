"use client"

interface ConversionSettingsProps {
  outputFormat: "JPG" | "PNG"
  quality: number
  resize: string
  onFormatChange: (format: "JPG" | "PNG") => void
  onQualityChange: (quality: number) => void
  onResizeChange: (resize: string) => void
  disabled?: boolean
}

export default function ConversionSettings({
  outputFormat,
  quality,
  resize,
  onFormatChange,
  onQualityChange,
  onResizeChange,
  disabled = false,
}: ConversionSettingsProps) {
  return (
    <div className="space-y-6 p-4 md:p-6 rounded-lg" style={{ backgroundColor: "rgba(161, 227, 249, 0.1)" }}>
      {/* Format Selector */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <label className="text-sm font-medium" style={{ color: "#2A2A2A" }}>
          Output Format
        </label>
        <div className="flex gap-2">
          {(["JPG", "PNG"] as const).map((format) => (
            <button
              key={format}
              onClick={() => onFormatChange(format)}
              disabled={disabled}
              className="px-4 py-2 rounded-full font-medium transition-all text-sm"
              style={{
                /* Updated colors: deep blue selected, medium blue border unselected */
                backgroundColor: outputFormat === format ? "#3674B5" : "white",
                color: outputFormat === format ? "white" : "#2A2A2A",
                borderWidth: outputFormat === format ? "0px" : "1px",
                borderColor: outputFormat === format ? "transparent" : "#578FCA",
                opacity: disabled ? 0.5 : 1,
                cursor: disabled ? "not-allowed" : "pointer",
              }}
            >
              {format}
            </button>
          ))}
        </div>
      </div>

      {/* Quality Slider */}
      {outputFormat === "JPG" && (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <label className="text-sm font-medium" style={{ color: "#2A2A2A" }}>
            Quality: <span style={{ color: "#578FCA" }}>{quality}%</span>
          </label>
          <div className="flex-1 md:max-w-xs">
            <input
              type="range"
              min="60"
              max="100"
              value={quality}
              onChange={(e) => onQualityChange(Number.parseInt(e.target.value))}
              disabled={disabled}
              className="w-full"
              style={{
                accentColor: "#3674B5",
                opacity: disabled ? 0.5 : 1,
                cursor: disabled ? "not-allowed" : "pointer",
              }}
            />
          </div>
        </div>
      )}

      {/* Resize Dropdown
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <label className="text-sm font-medium" style={{ color: "#2A2A2A" }}>
          Resize
        </label>
        <select
          value={resize}
          onChange={(e) => onResizeChange(e.target.value)}
          disabled={disabled}
          className="px-4 py-2 rounded-lg border text-sm"
          style={{
            borderColor: "#578FCA",
            backgroundColor: "white",
            color: "#2A2A2A",
            opacity: disabled ? 0.5 : 1,
            cursor: disabled ? "not-allowed" : "pointer",
          }}
        >
          <option value="original">Keep original size</option>
          <option value="50">50% of original</option>
          <option value="custom">Custom size</option>
        </select>
      </div> */}
    </div>
  )
}
