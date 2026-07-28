import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Quality Performance | Professional Paint Protection Film",
    template: "%s | Quality Performance",
  },
  description:
    "Professional PPF installation for dealerships and car owners. Protect your vehicle's paint with precision-cut, self-healing paint protection film.",
  keywords: [
    "PPF",
    "paint protection film",
    "car paint protection",
    "dealership PPF",
    "Quality Performance",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Quality Performance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <LocalBusinessJsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.$zoho=window.$zoho||{};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`,
          }}
        />
        <script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siq6ec4d50b83704d862cdf6a83484cc398f752ce0cd6cb61351717223771877edf"
          defer
        />
      </body>
    </html>
  );
}
