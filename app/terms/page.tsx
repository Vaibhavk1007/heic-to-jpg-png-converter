import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Use – HEIC Convert",
  description:
    "Read the terms of use for HEIC Convert, a free online HEIC to JPG / PNG converter that runs in your browser.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFF]">
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#123265] mb-6">
          Terms of Use
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: 27 November 2025
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
          {/* 1. Acceptance */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using{" "}
              <span className="font-semibold">HEIC Convert</span> (the
              “Service”), you agree to be bound by these Terms of Use. If you do
              not agree with these terms, please do not use the website.
            </p>
          </section>

          {/* 2. Description of the service */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              2. Description of the Service
            </h2>
            <p>
              HEIC Convert is a free online tool that helps you convert HEIC
              images to JPG or PNG formats. Conversion happens locally in your
              browser using client-side code. We do not intentionally upload or
              store your images on our servers.
            </p>
            <p className="mt-2">
              We may update, change, or discontinue parts of the Service at any
              time without prior notice.
            </p>
          </section>

          {/* 3. Acceptable use */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              3. Acceptable Use
            </h2>
            <p>When using the Service, you agree that you will not:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Use the tool for any illegal or harmful purpose.</li>
              <li>
                Upload or process images that contain unlawful, abusive,
                defamatory, or offensive content.
              </li>
              <li>
                Attempt to reverse engineer, disrupt, or overload the Service or
                its infrastructure.
              </li>
              <li>
                Use automated scripts or bots in a way that may negatively
                impact other users.
              </li>
            </ul>
          </section>

          {/* 4. No warranties */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              4. No Warranties
            </h2>
            <p>
              The Service is provided on an “as is” and “as available” basis.
              While we try to keep the website available and functioning, we do
              not guarantee that it will be error-free, secure, or available at
              all times.
            </p>
            <p className="mt-2">
              We make no warranties regarding the accuracy of conversions, the
              quality of the output images, or compatibility with any specific
              software or hardware.
            </p>
          </section>

          {/* 5. Limitation of liability */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, we shall not be liable for
              any indirect, incidental, consequential, or special damages,
              including loss of data, loss of profits, or system failures,
              arising out of or in connection with your use of the Service.
            </p>
            <p className="mt-2">
              You are responsible for backing up your files and verifying the
              converted output before using it for important work (for example,
              printing, publishing, or client deliveries).
            </p>
          </section>

          {/* 6. Intellectual property */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              6. Intellectual Property
            </h2>
            <p>
              The design, branding, text, and code of the website (excluding the
              images you upload) are owned by the site owner or its licensors
              and are protected by applicable copyright and intellectual
              property laws.
            </p>
            <p className="mt-2">
              You retain all rights to the images you upload and the converted
              files you download.
            </p>
          </section>

          {/* 7. Third-party services */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              7. Third-Party Services & Links
            </h2>
            <p>
              The Service may use third-party libraries, content delivery
              networks (CDNs), analytics tools, or advertising networks. We are
              not responsible for the content or practices of any third-party
              websites or services that may be linked or integrated.
            </p>
          </section>

          {/* 8. Changes to terms */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              8. Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Use from time to time. When we do, we
              will update the “Last updated” date at the top of this page.
              Continued use of the Service after any change means you accept the
              updated terms.
            </p>
          </section>

          {/* 9. Contact */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              9. Contact
            </h2>
            <p>
              If you have questions about these Terms of Use, please visit our{" "}
              <Link href="/contact" className="text-[#3674B5] underline">
                contact page
              </Link>{" "}
              or email{" "}
              <a
                href="mailto:hello@yourdomain.com"
                className="text-[#3674B5]"
              >
                hello@yourdomain.com
              </a>
              .
            </p>
          </section>

          <p className="text-xs text-gray-500 mt-6">
            This Terms of Use page is a simple, generic template and does not
            constitute legal advice. For a real production product, you should
            consult a qualified lawyer to review or prepare your legal
            documents.
          </p>
        </div>
      </div>
    </main>
  )
}
