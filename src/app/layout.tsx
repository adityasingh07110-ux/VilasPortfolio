import type { Metadata } from "next";
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
  title: "Vilas Kachhwaha | Film Maker & Graphics Designer",
  description: "8+ years of experience in Cinematography, Photography, and Graphic Design. Specialized in Commercials, Stories, and Shorts Films using RED, Arri, and Sony systems.",
  keywords: ["Vilas Kachhwaha", "Film Maker", "Graphics Designer", "Cinematographer Mumbai", "Video Editor", "Commercial Films"],
  authors: [{ name: "Vilas Kachhwaha" }],
  openGraph: {
    title: "Vilas Kachhwaha | Visual Studio",
    description: "Expert Film Maker & Graphics Designer with 8 years of experience in visual storytelling.",
    type: "website",
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
