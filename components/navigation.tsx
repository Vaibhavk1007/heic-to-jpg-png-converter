export default function Navigation() {
  return (
    <nav className="border-b" style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}>
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg md:text-xl font-semibold" style={{ color: "#3674B5" }}>
            HEIC
          </span>
          <span className="text-lg md:text-xl font-normal" style={{ color: "#578FCA" }}>
            Convert
          </span>
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          <a
            href="#how-it-works"
            className="text-sm md:text-base hover:opacity-80 transition-opacity"
            style={{ color: "#2A2A2A" }}
          >
            How it works
          </a>
          <a
            href="/privacy"
            className="text-sm md:text-base hover:opacity-80 transition-opacity"
            style={{ color: "#2A2A2A" }}
          >
            Privacy
          </a>
          <a
            href="/contact"
            className="text-sm md:text-base hover:opacity-80 transition-opacity"
            style={{ color: "#2A2A2A" }}
          >
            Support
          </a>
        </div>
      </div>
    </nav>
  )
}
