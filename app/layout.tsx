import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
} from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant =
  Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-display",
    weight: [
      "400",
      "500",
      "600",
      "700",
    ],
  });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://afterhoursvendingcompany.com",
  ),

  title: {
    default:
      "AfterHours Vending | Premium Vending for 21+ Venues",
    template:
      "%s | AfterHours Vending",
  },

  description:
    "AfterHours Vending provides fully managed vending solutions for qualifying 21+ bars, nightclubs, lounges, and nightlife venues in Illinois.",

  applicationName:
    "AfterHours Vending",

  keywords: [
    "AfterHours Vending",
    "bar vending machines",
    "nightlife vending",
    "21+ vending",
    "vending machines Illinois",
    "bar vending Illinois",
    "nightclub vending",
  ],

  authors: [
    {
      name: "AfterHours Vending LLC",
    },
  ],

  creator:
    "AfterHours Vending LLC",

  publisher:
    "AfterHours Vending LLC",

  openGraph: {
    title:
      "AfterHours Vending",
    description:
      "Premium fully managed vending solutions for qualifying 21+ nightlife venues.",
    url: "https://afterhoursvendingcompany.com",
    siteName:
      "AfterHours Vending",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "AfterHours Vending",
    description:
      "Premium vending solutions for qualifying 21+ nightlife venues.",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable}`}
      >
        {children}
      </body>
    </html>
  );
}