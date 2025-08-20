import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "../providers/ConvexClerkProvider";
import AudioProvider from "@/providers/AudioProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Podcastr - Create Amazing Podcasts',
  description: 'Transform your ideas into professional podcasts with AI-powered tools, studio-quality editing, and seamless publishing.',
  keywords: 'podcast, AI, audio editing, content creation, SaaS',
  authors: [{ name: 'Podcastr Team' }],
  openGraph: {
    title: 'Podcastr - Create Amazing Podcasts',
    description: 'Transform your ideas into professional podcasts with AI-powered tools',
    type: 'website',
    url: 'https://podcastr.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <AudioProvider>
          <body className={`${manrope.className}`}>
              {children}
          </body>
        </AudioProvider>
      </html>
    </ConvexClerkProvider>
  );
}
