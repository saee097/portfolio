import type { Metadata } from "next";
import type { ReactNode } from "react";
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

export const metadata: Metadata = {
  title: "Saeed Ur Rahman | Full-Stack Web Developer",
  description: "Full-Stack Web Developer specializing in React, Next.js, TypeScript, and Node.js. Building scalable, modern web applications.",
  keywords: "Full-Stack Developer, React, Next.js, TypeScript, Node.js, Web Developer",
  authors: [{ name: "Saeed Ur Rahman" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0f172a] text-[#f8fafc]">{children}</body>
    </html>
  );
}
