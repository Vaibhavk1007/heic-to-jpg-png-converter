"use client";

export const metadata = {
  title: "Contact | YourSiteName",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFF]">
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#123265] mb-4">
          Contact
        </h1>
        <p className="text-gray-700 mb-8">
          Have feedback, found a bug, or want to suggest a new feature or file
          format? We’d love to hear from you.
        </p>

        <div className="space-y-6 text-gray-700">
          <section className="bg-white rounded-2xl shadow-sm border border-[#E0ECF8] p-5 md:p-6">
            <h2 className="text-lg font-semibold text-[#123265] mb-2">
              Email
            </h2>
            <p>
              You can reach us directly at{" "}
              <a href="vaibhavk102001@gmail.com" className="text-[#3674B5]">
                vaibhavk102001@gmail.com
              </a>
              .
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-sm border border-[#E0ECF8] p-5 md:p-6">
            <h2 className="text-lg font-semibold text-[#123265] mb-2">
              Contact Form
            </h2>
            <p className="mb-4">
              Prefer using a form? Fill this out and we’ll reply as soon as we
              can.
            </p>

            {/* This is only UI; handle the submit in future if you want backend */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-[#D4E3F5] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3674B5]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-[#D4E3F5] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3674B5]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-[#D4E3F5] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3674B5]"
                  placeholder="Tell us what’s on your mind…"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-[#3674B5] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2f65a0] transition-colors"
              >
                Send message
              </button>

              <p className="text-xs text-gray-500 mt-2">
                This form is currently for demo / static use. To actually send
                messages, connect it to an email service or API.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}
