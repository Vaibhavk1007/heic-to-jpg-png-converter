export default function Footer() {
  return (
    <footer className="py-8 px-4 text-center text-sm" style={{ backgroundColor: "#578FCA", color: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
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
        <p>© 2025 HEIC Convert. All rights reserved.</p>
      </div>
    </footer>
  )
}
