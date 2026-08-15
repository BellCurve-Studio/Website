import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BellCurve Studio | Business Systems Engineering for Organisations",
  description:
    "We help organisations replace fragmented workflows with technology systems that work — starting with a free audit.",
  keywords: [
    "Business Systems Engineering",
    "Operational Audit",
    "Digital Presence",
    "Core Infrastructure",
    "Custom Operations",
    "BellCurve Studio",
    "Workflow Automation",
  ],
  icons: {
    icon: [
      { url: "/white_logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/white_logo.png",
    apple: "/white_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-[#ffbd5f] selection:text-[#17232d]">
        {children}
      </body>
    </html>
  );
}
