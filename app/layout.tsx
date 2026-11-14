import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
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

const title = "AMP ACE Multimedia | Events, Conferences & Venues";
const description =
  "A visual portfolio of conferences, workshops and events organized by AMP ACE Multimedia at distinguished venues across Ghana and Nigeria.";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the live domain so social preview images resolve.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  keywords: ["AMP ACE Multimedia", "AMP ACE", "conferences", "events", "Accra", "Lagos", "event management", "workshops"],
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
  themeColor: "#f4f1eb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
