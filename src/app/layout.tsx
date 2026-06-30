import type { Metadata } from "next";
import { Inter, Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Davaam Life | Sustainable Technology for a Better Pakistan",
  description:
    "Davaam Life manufactures smart refill stations, sanitary vending machines, and sustainable automation solutions across Pakistan. Engineered locally. Built for impact.",
  keywords: [
    "Davaam Life",
    "smart refill stations",
    "sanitary vending machines",
    "sustainable technology Pakistan",
    "RFID payment",
    "IoT machines",
    "refill stations Pakistan",
    "eco-friendly automation",
  ],
  authors: [{ name: "Davaam Life" }],
  metadataBase: new URL("https://davaam.life"),
  alternates: {
    canonical: "https://davaam.life/",
  },
  openGraph: {
    title: "Davaam Life | Sustainable Technology for a Better Pakistan",
    description:
      "Smart refill stations, sanitary vending machines, and sustainable automation solutions engineered in Pakistan.",
    url: "https://davaam.life",
    siteName: "Davaam Life",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Davaam Life | Sustainable Technology for a Better Pakistan",
    description:
      "Smart refill stations, sanitary vending machines, and sustainable automation solutions engineered in Pakistan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Davaam Life",
  url: "https://davaam.life",
  description:
    "Davaam Life designs and manufactures smart refill stations, sanitary vending machines, and sustainable automation solutions across Pakistan.",
  areaServed: "Pakistan",
  knowsAbout: [
    "Sustainable Technology",
    "Smart Refill Stations",
    "Sanitary Vending Machines",
    "RFID Payment Systems",
    "IoT Enabled Machines",
  ],
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
