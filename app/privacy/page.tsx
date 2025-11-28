import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | YourSiteName",
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
            <span className="font-semibold">YourSiteName</span> collects, uses,
            and protects information when you use our image conversion
            service at <span className="text-[#3674B5]">yourdomain.com</span>.
          </p>

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
                <span className="font-semibold">Files you upload</span> for
                conversion (e.g., HEIC, JPG, PNG, WEBP).
              </li>
              <li>
                <span className="font-semibold">Technical data</span> such as
                your IP address, browser type, device type, and basic usage
                statistics (for example: number of conversions).
              </li>
              <li>
                <span className="font-semibold">Contact information</span> if
                you contact us via email or the contact form.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              2. How We Use Your Files
            </h2>
            <p>
              Files you upload are used only for performing the requested
              conversion. We do not manually review your files or use them to
              train AI models.
            </p>
            <p className="mt-2">
              We aim to delete converted files from our servers automatically
              after a short period of time. However, we recommend that you do
              not upload highly sensitive or confidential material.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              3. Cookies & Analytics
            </h2>
            <p>
              We may use basic analytics tools and cookies to understand
              anonymous usage patterns (for example, how many conversions per
              day, which formats are used most). This helps us improve the
              service.
            </p>
            <p className="mt-2">
              You can control or disable cookies in your browser settings. Some
              features may not work perfectly without cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              4. Data Sharing
            </h2>
            <p>
              We do not sell your personal information. We may share limited
              technical data with trusted service providers (for example,
              hosting providers or analytics tools) who help us operate the
              website. They are required to protect your data and only use it
              for providing their services to us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              5. Data Security
            </h2>
            <p>
              We use reasonable technical and organisational measures to
              protect your data. However, no method of transmission over the
              internet or electronic storage is completely secure. Use the
              service at your own risk and avoid uploading sensitive content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              6. Your Rights
            </h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal data, such as the right to access, correct, or
              request deletion of your information. You can contact us at{" "}
              <a href="mailto:hello@yourdomain.com" className="text-[#3674B5]">
                hello@yourdomain.com
              </a>{" "}
              to make such a request, and we will do our best to respond within
              a reasonable time.
            </p>
          </section>

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
              <a href="mailto:hello@yourdomain.com" className="text-[#3674B5]">
                hello@yourdomain.com
              </a>
              .
            </p>
          </section>

          <p className="text-xs text-gray-500 mt-6">
            This is a simple, generic Privacy Policy template and does not
            constitute legal advice. For a real production product, please ask a
            qualified lawyer to review or prepare your policy.
          </p>
        </div>
      </div>
    </main>
  )
}
