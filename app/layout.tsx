import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  metadataBase: new URL("https://relaxed-axolotl.com"),
  title: {
    default: "Relaxed Axolotl - Videos para Meditación y Relajación Profunda",
    template: "%s | Relaxed Axolotl",
  },
  description:
    "Descubre videos relajantes y contenido sobre meditación, mindfulness y bienestar. Videos originales para meditación profunda, yoga y relajación. Blog con consejos de bienestar.",
  keywords: [
    "videos para meditación",
    "videos relajantes",
    "videos para dormir",
    "meditación guiada",
    "mindfulness",
    "relajación profunda",
    "yoga videos",
    "bienestar mental",
    "paz interior",
    "videos zen",
    "videos de frecuencias curativas",
    "videos para estudiar",
    "videos antiestrés",
    "canal de youtube meditación",
  ],
  authors: [{ name: "Relaxed Axolotl Team" }],
  creator: "Relaxed Axolotl",
  publisher: "Relaxed Axolotl",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://relaxed-axolotl.com",
    siteName: "Relaxed Axolotl",
    title: "Relaxed Axolotl - Música para Meditación y Relajación Profunda",
    description:
      "Descubre música relajante y contenido sobre meditación, mindfulness y bienestar. Composiciones originales para meditación profunda.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Relaxed Axolotl - Música para Meditación",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relaxed Axolotl - Música para Meditación",
    description: "Música relajante y contenido sobre meditación, mindfulness y bienestar.",
    images: ["/twitter-image.jpg"],
    creator: "@relaxedaxolotl",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://relaxed-axolotl.com",
    languages: {
      "es-ES": "https://relaxed-axolotl.com",
      "en-US": "https://relaxed-axolotl.com/en",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="canonical" href="https://relaxed-axolotl.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#92400e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Relaxed Axolotl",
              url: "https://relaxed-axolotl.com",
              logo: "https://relaxed-axolotl.com/logo.png",
              description:
                "Canal de YouTube con videos para meditación y relajación profunda con contenido sobre bienestar y mindfulness",
              sameAs: [
                "https://youtube.com/@relaxedaxolotl",
                "https://instagram.com/relaxedaxolotl",
                "https://twitter.com/relaxedaxolotl",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "Spanish",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
