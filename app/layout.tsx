import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "MS Transfer | Transferencias Internacionales Seguras",
  description:
    "Transferencias en dólares, euros y soles. Paga a proveedores en el exterior, recibe en Bolivia y envía remesas al mundo. Rápido, seguro y confiable.",
  generator: "Pedroriverop",
  authors: [{ name: "Pedroriverop" }],
  
  openGraph: {
    title: "MS Transfer | Transferencias Internacionales Seguras",
    description:
      "Transferencias en dólares, euros y soles. Paga a proveedores en el exterior, recibe en Bolivia y envía remesas al mundo. Rápido, seguro y confiable.",
    url: "https://mstransfer.com.bo",
    siteName: "MS Transfer",
    locale: "es_BO",
    type: "website",
    images: [
      {
        url: "/images/ms-transfer-logo.png",
        width: 1200,
        height: 630,
        alt: "MS Transfer - Transferencias Internacionales Seguras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MS Transfer | Transferencias Internacionales Seguras",
    description:
      "Transferencias globales en múltiples divisas, entrega rápida en Bolivia, pagos a proveedores y remesas.",
    images: ["/images/ms-transfer-logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
