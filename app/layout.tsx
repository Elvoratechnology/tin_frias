import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { BackgroundGlow } from "@/components/BackgroundGlow";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Justin Frias — Frontend Developer",
  description:
    "Frontend Developer from Antipolo City, Philippines specializing in React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion. Crafting cinematic real-time web experiences.",
  authors: [{ name: "Justin Lyoid T. Frias" }],
  creator: "Justin Lyoid T. Frias",
  keywords: [
    "Justin Frias",
    "Justin Lyoid Frias",
    "Frontend Developer",
    "Antipolo City",
    "Philippines",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Real-time Web Apps",
  ],
  openGraph: {
    title: "Justin Frias — Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and TypeScript. Real-time web apps with cinematic liquid glass UI.",
    url: "https://justinfrias.vercel.app",
    siteName: "Justin Frias Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Frias — Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and TypeScript. Real-time web apps with cinematic liquid glass UI.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${inter.variable} dark`}
    >
      <body className="min-h-screen bg-[#0c0d12] font-sans text-white antialiased selection:bg-[#b0e0e6]/30 selection:text-white">
        <BackgroundGlow />
        <Header />
        {children}
      </body>
    </html>
  );
}

