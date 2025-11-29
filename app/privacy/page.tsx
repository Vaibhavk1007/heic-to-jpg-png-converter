import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy – HEIC Convert",
  description:
    "Learn how HEIC Convert handles your photos and data. All HEIC to JPG / PNG conversions happen locally in your browser – we do not store or upload your images.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFF]">
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#123265] mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: 27 November 2025
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            This Privacy Policy explains how{" "}
            <span className="font-semibold">HEIC Convert</span> handles your
            information when you use our image conversion service at{" "}
            <span className="text-[#3674B5]">formyxa.com</span>.
          </p>

          {/* 1. Information we process */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              1. Information We Process
            </h2>
            <p>
              When you use our website, we may process the following
              information:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-semibold">
                  Images you work with in your browser
                </span>{" "}
                for conversion (e.g., HEIC, JPG, PNG, WEBP). These files are
                processed locally on your device and are not uploaded to our
                servers.
              </li>
              <li>
                <span className="font-semibold">Technical data</span> such as
                your IP address, browser type, device type, and basic usage
                statistics (for example: number of visits or which pages are
                used most), collected via analytics tools.
              </li>
              <li>
                <span className="font-semibold">Contact information</span> if
                you contact us via email or the contact form (for example, your
                name and email address).
              </li>
            </ul>
          </section>

          {/* 2. How we use your files */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              2. How We Use Your Images
            </h2>
            <p>
              Image conversion is performed entirely in your browser using
              client-side code. Your HEIC, JPG or PNG files are{" "}
              <strong>not uploaded</strong> to our servers, and we do not store
              or manually review your images.
            </p>
            <p className="mt-2">
              The converted files are held temporarily in your browser&apos;s
              memory to allow you to download them. When you refresh the page or
              close the tab, those files are lost. Even though we do not receive
              a copy of your images, we still recommend that you avoid using the
              service for highly sensitive or confidential content.
            </p>
          </section>

          {/* 3. Cookies & analytics */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              3. Cookies & Analytics
            </h2>
            <p>
              We may use basic analytics tools and cookies to understand
              anonymous usage patterns (for example, how many visits per day and
              which features are used most). This helps us improve the service.
            </p>
            <p className="mt-2">
              These analytics do not give us access to the images you convert.
              You can control or disable cookies in your browser settings, but
              some features may not work perfectly without them.
            </p>
          </section>

          {/* 4. Data sharing */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              4. Data Sharing
            </h2>
            <p>
              We do not sell your personal information. We may share limited
              technical data with trusted service providers (for example, hosting
              providers, content delivery networks, or analytics tools) who help
              us operate the website. They are required to protect your data and
              only use it to provide services to us.
            </p>
          </section>

          {/* 5. Data security */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              5. Data Security
            </h2>
            <p>
              We use reasonable technical and organisational measures to protect
              the data we control. However, no method of transmission over the
              internet or method of electronic storage is completely secure. Use
              the service at your own risk and avoid uploading or converting
              extremely sensitive content on shared or untrusted devices.
            </p>
          </section>

          {/* 6. Your rights */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              6. Your Rights
            </h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal data, such as the right to access, correct, or
              request deletion of information we hold about you (for example,
              when you contact us). You can email us at{" "}
              <a
                href="mailto:hello@formyxa.com"
                className="text-[#3674B5]"
              >
                hello@formyxa.com
              </a>{" "}
              to make such a request, and we will do our best to respond within a
              reasonable time.
            </p>
          </section>

          {/* 7. Changes */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we do,
              we will update the “Last updated” date at the top of this page.
              Your continued use of the website after any change means you
              accept the updated policy.
            </p>
          </section>

          {/* 8. Contact */}
          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please visit
              our{" "}
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
