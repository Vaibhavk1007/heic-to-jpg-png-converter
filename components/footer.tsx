export default function Footer() {
  return (
    <footer
      className="py-8 px-4 text-sm"
      style={{ backgroundColor: "#578FCA", color: "#FFFFFF" }}
    >
      <div className="max-w-6xl mx-auto space-y-4 text-center">
        {/* Short about / trust blurb */}
        <p className="max-w-xl mx-auto">
          <strong>HEIC Convert</strong> is a free online HEIC to JPG / PNG
          converter. All conversions happen locally in your browser – your
          photos are never uploaded to our servers.
        </p>

        {/* Links row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
          <a href="/terms" className="hover:opacity-80 transition-opacity">
            Terms
          </a>
          <span>·</span>
          <a href="/privacy" className="hover:opacity-80 transition-opacity">
            Privacy
          </a>
          <span>·</span>
          <a href="/contact" className="hover:opacity-80 transition-opacity">
            Contact
          </a>
        </div>

        <p>© {new Date().getFullYear()} HEIC Convert. All rights reserved.</p>
      </div>
    </footer>
  )
}
