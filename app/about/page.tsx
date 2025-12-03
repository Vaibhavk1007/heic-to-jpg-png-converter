export const metadata = {
  title: "About Formyxa | Simple Tools for Everyday Files",
  description:
    "Learn about Formyxa, a small project focused on building simple, fast tools like our HEIC to JPG converter and smart document utilities.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <header className="mb-8">
        <p className="text-sm font-medium text-emerald-600 mb-2">
          About Formyxa
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">
          Simple tools that actually solve a problem
        </h1>
        <p className="text-base md:text-lg text-slate-600">
          Formyxa is a small, independent project focused on building practical,
          no-nonsense tools for everyday work — starting with a fast HEIC to JPG
          converter.
        </p>
      </header>

      <section className="space-y-5 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Why we built a HEIC to JPG converter
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Modern phones, especially iPhones, save photos as HEIC to reduce
            file size. That&apos;s great for storage, but not so great when you
            try to upload those photos to websites, send them to clients, or use
            them in tools that only accept JPG or PNG.
          </p>
          <p className="text-slate-700 leading-relaxed mt-2">
            We wanted a converter that feels lightweight, clean, and focused:
            drag your photos, convert, download — no dark patterns, no endless
            popups, no confusing options.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            What Formyxa will become
          </h2>
          <p className="text-slate-700 leading-relaxed">
            The HEIC to JPG converter is just the starting point. Formyxa is
            evolving into a small suite of tools around documents and media:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-700 mt-2">
            <li>Smart document formatting and export (Word / PDF).</li>
            <li>Helpful utilities around everyday file conversions.</li>
            <li>Cleaner, faster experiences for small but annoying tasks.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Our basic principles</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>Clarity:</strong> Tools should be easy to understand in one glance.</li>
            <li><strong>Speed:</strong> No unnecessary steps, no bloated UI.</li>
            <li><strong>Respect:</strong> No fake download buttons or spammy behaviour.</li>
          </ul>
        </div>
      </section>

      <section className="border rounded-xl p-5 md:p-6 bg-slate-50 mb-8">
        <h2 className="text-lg font-semibold mb-2">
          Need to convert a HEIC file right now?
        </h2>
        <p className="text-slate-700 mb-4">
          You can start using the HEIC to JPG converter immediately. It works
          directly in your browser.
        </p>
        <a
          href="/heic-to-jpg"
          className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
        >
          Open HEIC to JPG converter
        </a>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold mb-1">Contact & feedback</h2>
        <p>
          If you notice a bug, have a feature request, or just want to say
          thanks, you can always reach out using the{" "}
          <a
            href="/contact"
            className="text-emerald-700 underline underline-offset-2"
          >
            contact page
          </a>
          .
        </p>
        <p>
          Formyxa is still very early, so every piece of feedback genuinely
          helps shape what we build next.
        </p>
      </section>
    </main>
  );
}
