import { Geist, Geist_Mono } from "next/font/google";

import { Toaster } from "sonner";

import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import "./globals.css";
import { constructMetaData } from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = constructMetaData();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Toaster position="bottom-center" richColors />
        {children}
        <Footer />
      </body>
    </html>
  );
}
