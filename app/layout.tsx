import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Outfit, Space_Mono } from "next/font/google";

import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

import "./global.css";

const outfit = Outfit({
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Oz Ertas",
    template: "%s | A corner of the interwebs",
  },
  description: "A corner of the interwebs that belongs to Oz Ertas",
  openGraph: {
    title: "Oz Ertas",
    description: "A corner of the interwebs that belongs to Oz Ertas",
    url: baseUrl,
    siteName: "Oz Ertas",
    locale: "en_US",
    type: "website",
  },
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
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-stone-900 bg-stone-50 dark:text-stone-100 dark:bg-stone-900",
        outfit.className,
        spaceMono.className,
      )}
    >
      <body className="antialiased max-w-prose mx-auto">
        <main className="h-full min-w-0 pt-6 flex flex-col px-2 md:px-0 min-h-screen">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
