import Link from "next/link"

export const metadata = {
  title: "Terms of Service | YourSiteName",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFF]">
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#123265] mb-6">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: 27 November 2025
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Welcome to <span className="font-semibold">YourSiteName</span>
            , an online tool that helps you convert image files (for example
            HEIC, JPG, PNG, WEBP). By accessing or using this website,
            you agree to these Terms of Service. If you do not agree, please do
            not use the site.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              1. Use of the Service
            </h2>
            <p>
              You may use this website only for lawful purposes and in
              accordance with these terms. You agree not to upload any content
              that is illegal, harmful, infringing, or that you do not have the
              right to use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              2. File Handling & Storage
            </h2>
            <p>
              Files you upload are processed by our servers solely for the
              purpose of conversion. We aim to delete files automatically after
              a short period of time and do not use your files to train any
              models or for analytics beyond basic usage statistics.
            </p>
            <p className="mt-2">
              However, you are responsible for not uploading sensitive,
              confidential, or private information. We cannot guarantee that
              data transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              3. No Warranty
            </h2>
            <p>
              The service is provided on an <span className="italic">“as is”</span> and{" "}
              <span className="italic">“as available”</span> basis, without any
              warranties of any kind, whether express or implied. We do not
              guarantee that:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>The site will be available at all times or error-free</li>
              <li>Conversions will always succeed or keep original quality</li>
              <li>
                The output files will be compatible with all apps or devices
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              4. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law,{" "}
              <span className="font-semibold">YourSiteName</span> and its owner
              are not liable for any indirect, incidental, special, or
              consequential damages, or any loss of data, profits, or goodwill,
              arising out of or in connection with your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              5. Changes to the Service & Terms
            </h2>
            <p>
              We may update or discontinue parts of the service at any time.
              We may also update these Terms from time to time. When we do, we
              will update the “Last updated” date at the top of this page. Your
              continued use of the site after changes means you accept the
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#123265] mb-2">
              6. Contact
            </h2>
            <p>
              If you have any questions about these Terms, email{" "}
              <a href="vaibhavk102001@gmail.com" className="text-[#3674B5]">
                vaibhavk102001@gmail.com
              </a>
              .
            </p>
          </section>

          <p className="text-xs text-gray-500 mt-6">
            This text is provided as a simple template and does not constitute
            legal advice. For a production product, please ask a qualified
            lawyer to review or draft your Terms of Service.
          </p>
        </div>
      </div>
    </main>
  )
}
