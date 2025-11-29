import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact – HEIC Convert",
  description:
    "Get in touch with the HEIC Convert team. Ask questions, report issues, or suggest improvements for our HEIC to JPG / PNG converter.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFF]">
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#123265] mb-6">
          Contact
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Have a question about HEIC Convert, found a bug, or want to suggest a feature?
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              Email
            </h2>
            <p>
              The easiest way to reach us is by email. We&apos;ll do our best to respond as
              soon as we can.
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:hello@formyxa.com"
                className="text-[#3674B5] underline"
              >
                hello@formyxa.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              What to include in your message
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>The browser and device you&apos;re using (for example: Chrome on Windows).</li>
              <li>
                A short description of what you were trying to do (for example: convert HEIC
                to JPG, number of files).
              </li>
              <li>
                Any error messages you saw on the page (you can copy–paste them or send a
                screenshot).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              Privacy & data
            </h2>
            <p>
              Remember that image conversion happens locally in your browser – we do not
              receive your HEIC files. Please{" "}
              <Link href="/privacy" className="text-[#3674B5] underline">
                read our Privacy Policy
              </Link>{" "}
              for more details on how we handle analytics and any personal data you might
              send us in email.
            </p>
            {/* 👇 Added "Back to Homepage" section */}
            <div className="pt-10 border-t border-gray-200 mt-10 text-center">
              <Link
                href="/"
                className="inline-block bg-[#3674B5] text-white px-5 py-2 rounded-lg shadow hover:bg-[#2f5fa0] transition"
              >
                ← Back to Homepage
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
