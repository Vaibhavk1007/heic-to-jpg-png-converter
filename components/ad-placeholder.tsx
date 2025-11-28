export interface AdPlaceholderProps {
  width?: string
  height?: string
  inline?: boolean
}

export default function AdPlaceholder({ width = "728", height = "90", inline = false }: AdPlaceholderProps) {
  const containerClass = inline ? "mx-auto my-6 md:my-8" : "w-full"
  const borderStyle = "1px solid #A1E3F9"

  return (
    <div className={containerClass} style={{ maxWidth: `${width}px`, padding: inline ? "0" : "0" }}>
      <div
        className="flex items-center justify-center rounded-lg"
        style={{
          width: "100%",
          height: `${height}px`,
          backgroundColor: "#D1F8EF",
          border: borderStyle,
          minHeight: `${height}px`,
        }}
      >
        <p className="text-xs md:text-sm text-center" style={{ color: "#578FCA" }}>
          Ad space – {width}×{height}
        </p>
      </div>
    </div>
  )
}
