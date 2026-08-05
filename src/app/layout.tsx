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
  title: "BellCurve Studio | Custom Software & Web Engineering",
  description:
    "Transforming ideas and legacy systems into modern, scalable software. We build web applications, website revamps, internal tools, and custom AI software.",
  keywords: [
    "Custom Software",
    "Web Applications",
    "Website Revamp",
    "Internal Tools",
    "CRM",
    "SaaS",
    "Next.js Development"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col selection:bg-[#ffbd5f] selection:text-[#17232d]">
        {children}
      </body>
    </html>
  );
}
