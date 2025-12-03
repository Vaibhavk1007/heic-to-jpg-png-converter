import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script";

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Free HEIC to JPG / PNG Converter – Fast, Secure Image Conversion",
  description:
    "Convert HEIC images to JPG or PNG directly in your browser. Fast, free, and secure HEIC converter with no image uploads and full privacy.",
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
    title: "Free HEIC to JPG / PNG Converter",
    description:
      "Convert HEIC photos to JPG or PNG in your browser. Fast, free, private HEIC converter.",
    url: "https://formyxa.com/heic-to-jpg",
    siteName: "Formyxa HEIC Converter",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HEIC to JPG / PNG Converter",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl = "https://formyxa.com/heic-to-jpg"

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
    name: "HEIC to JPG / PNG Converter",
    url: siteUrl,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    description:
      "Convert HEIC images to JPG or PNG directly in your browser. Fast, free, and secure online HEIC converter.",
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
        {/* Privacy-friendly analytics by Plausible */}
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
