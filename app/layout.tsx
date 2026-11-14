import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = "AMP ACE Multimedia | Live Event Streaming";
const description =
  "Conferences, workshops and corporate events streamed live by AMP ACE Multimedia from venues across Ghana and Nigeria.";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the live domain so social preview images resolve.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  keywords: ["AMP ACE Multimedia", "AMP ACE", "conferences", "events", "Accra", "Lagos", "live streaming", "event streaming", "event management", "workshops"],
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/images/kempinski.jpg", alt: "Kempinski Hotel Gold Coast City, Accra" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/kempinski.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
