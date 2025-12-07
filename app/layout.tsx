import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script";

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  // 🔥 Brand-focused title
  title:
    "Formyxa — Free HEIC to JPG Converter | AI Blog Writer & Email Writer Tools",
  description:
    "Formyxa is a suite of smart AI tools including a free HEIC to JPG / PNG converter, AI Blog Writer, and AI Email Writer to help you work faster.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x323.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-light-32x323.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon3.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    // 🔥 Brand in OG title too
    title:
      "Formyxa — Free HEIC to JPG Converter & AI Writing Tools",
    description:
      "Use Formyxa to convert HEIC photos to JPG / PNG in your browser and access AI tools like Blog Writer and Email Writer.",
    url: "https://formyxa.com",
    siteName: "Formyxa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Formyxa — HEIC to JPG / PNG Converter & AI Tools",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // 🔥 Canonical should be root domain
  const siteUrl = "https://formyxa.com"

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this HEIC to JPG / PNG converter free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. This online HEIC converter is free to use for personal image conversion. You can upload multiple HEIC photos and convert them to JPG or PNG without creating an account.",
        },
      },
      {
        "@type": "Question",
        name: "Are my HEIC photos uploaded to your servers?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. All HEIC to JPG / PNG conversion happens directly in your browser using client-side code. Your photos are not sent to a remote server, and we do not store or view your images.",
        },
      },
      {
        "@type": "Question",
        name: "What devices and browsers does this HEIC converter support?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "This tool works best in modern browsers such as Chrome, Edge, Firefox, and Safari. HEIC support is strongest on Apple devices including iPhone, iPad, and Mac. On some Windows setups, a few HEIC files may not convert correctly due to limited browser support.",
        },
      },
      {
        "@type": "Question",
        name: "What is the maximum HEIC file size I can upload?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The current limit is 100 MB per file. Large HEIC images may take longer to convert, especially on older devices or slower browsers.",
        },
      },
    ],
  }

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Formyxa — HEIC to JPG / PNG Converter",
    url: siteUrl,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    description:
      "Formyxa offers a free HEIC to JPG / PNG converter and AI tools to help you work faster.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  return (
    <html lang="en">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-1598776319431655"
        />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
        />

        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />

        {/* Plausible Analytics */}
        <script
          async
          src="https://plausible.io/js/pa-gPoEbX13yb9IRied8_i-U.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible = window.plausible || function () {
                (plausible.q = plausible.q || []).push(arguments)
              };
              plausible.init = plausible.init || function (i) {
                plausible.o = i || {};
              };
              plausible.init();
            `,
          }}
        />

        <Script
          id="adsense-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1598776319431655"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
