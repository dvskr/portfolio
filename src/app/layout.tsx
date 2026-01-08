import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";
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
  title: "Sathish Kumar | Data Engineer & Product Builder",
  description: "Portfolio of Sathish Kumar - Data Engineer by Day, Product Builder by Night. Building scalable data pipelines and AI-powered SaaS products.",
  keywords: ["Data Engineer", "Product Builder", "Portfolio", "Next.js", "React", "Python", "AWS", "Azure", "Data Engineering"],
  authors: [{ name: "Sathish Kumar" }],
  openGraph: {
    title: "Sathish Kumar | Data Engineer & Product Builder",
    description: "Data Engineer by Day, Product Builder by Night.",
    url: "https://sathish.com",
    siteName: "Sathish Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-navy text-white-off selection:bg-cyan-tint selection:text-cyan`}
      >
        <PageLoader>
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <SocialSidebars />
            <main>{children}</main>
          </SmoothScroll>
        </PageLoader>
      </body>
    </html>
  );
}
