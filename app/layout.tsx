import type { Metadata, Viewport } from "next";
import { Archivo_Black, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/SiteChrome";
import EditorBridge from "@/components/__kodagen/EditorBridge";
import { siteConfig } from "@/content/site-config";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    siteName: siteConfig.company.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: siteConfig.assets.images["og-image"]
      ? [{ url: siteConfig.assets.images["og-image"], width: 1200, height: 630 }]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.seo.twitter,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-bg text-fg antialiased">
        <SiteChrome />
        <Header />
        <main>{children}</main>
        <Footer />
        <EditorBridge />
      </body>
    </html>
  );
}
