import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

import Navbar from "@/components/Navbar";
import SocialSidebars from "@/components/SocialSidebars";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dvskr.dev'),
  title: "Sathish Kumar | Data Engineer & Product Builder",
  description: "Portfolio of Sathish Kumar - Data Engineer by Day, Product Builder by Night. Building scalable data pipelines and AI-powered SaaS products.",
  keywords: ["Data Engineer", "Product Builder", "Portfolio", "Next.js", "React", "Python", "AWS", "Azure", "Data Engineering", "SaaS", "AI", "PySpark", "Snowflake"],
  authors: [{ name: "Sathish Kumar", url: "https://dvskr.dev" }],
  creator: "Sathish Kumar",
  publisher: "Sathish Kumar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://dvskr.dev',
  },
  openGraph: {
    type: "profile",
    title: "Sathish Kumar | Data Engineer & Product Builder",
    description: "Data Engineer by Day, Product Builder by Night. Building scalable data pipelines and AI-powered SaaS products.",
    url: "https://dvskr.dev",
    siteName: "Sathish Kumar Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 1200,
        alt: "Sathish Kumar - Data Engineer & Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathish Kumar | Data Engineer & Product Builder",
    description: "Data Engineer by Day, Product Builder by Night. Building scalable data pipelines and AI-powered SaaS products.",
    images: ["/profile.png"],
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sathish Kumar",
  alternateName: "dvskr",
  url: "https://dvskr.dev",
  image: "https://dvskr.dev/profile.png",
  jobTitle: "Data Engineer & Product Builder",
  description: "Data Engineer by Day, Product Builder by Night. Building scalable data pipelines handling 1TB+ daily data and AI-powered SaaS products.",
  knowsAbout: [
    "Data Engineering",
    "Python",
    "PySpark",
    "AWS",
    "Azure",
    "Snowflake",
    "TypeScript",
    "Next.js",
    "React",
    "Product Development",
    "SaaS",
    "AI",
    "Kafka",
    "SQL"
  ],
  sameAs: [
    "https://github.com/dvskr",
    "https://linkedin.com/in/dvskr"
  ],
  worksFor: {
    "@type": "Organization",
    name: "Propper International"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-navy text-white-off selection:bg-cyan-tint selection:text-cyan`}
      >
        <SmoothScroll>
          <Navbar />
          <SocialSidebars />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
