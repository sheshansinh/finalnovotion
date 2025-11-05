import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Primary Title: Short, descriptive, and keyword-rich
  title: "Novotion | RPO Partner & IT Career Support for UK & USA Markets",

  // Primary Description: Comprehensive and compelling, including key services and markets.
  description:
    "Novotion is your strategic RPO partner and IT career support specialist. Delivering recruitment excellence, end-to-end RPO services for UK & USA businesses, and career facilitation for US-based IT professionals. Trusted since 2021.",

  // Open Graph (OG) & Twitter Tags (Crucial for social sharing)
  // Note: Replace the URL and image placeholder with your actual domain and logo/banner.
  openGraph: {
    title: "Novotion | RPO Partner & IT Career Support for UK & USA Markets",
    description:
      "Strategic RPO solutions for UK/USA businesses and specialized career support for US IT professionals. Leverage our India-based offshore team for 24/7 recruitment operations.",
    url: "https://www.yournovotiondomain.com", // <-- REPLACE THIS
    siteName: "Novotion",
    images: [
      {
        url: "https://www.yournovotiondomain.com/images/og-image.jpg", // <-- REPLACE THIS with a high-res image
        width: 1200,
        height: 630,
        alt: "Novotion RPO and Career Support Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Keywords (While less critical than they once were, still helpful for context)
  keywords: [
    "RPO Services",
    "Recruitment Process Outsourcing",
    "IT Career Support",
    "Recruitment UK",
    "Recruitment USA",
    "IT Placement USA",
    "Offshore Recruitment Support",
    "Technology Recruitment",
    "Novotion",
  ],

  twitter: {
    card: "summary_large_image",
    title: "Novotion | RPO & IT Career Support",
    description:
      "Strategic RPO solutions for UK/USA businesses and specialized career support for US IT professionals.",
    creator: "@YourTwitterHandle", // <-- REPLACE THIS if you have one
    images: ["https://www.yournovotiondomain.com/images/twitter-image.jpg"], // <-- REPLACE THIS
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
