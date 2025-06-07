import type { Metadata } from "next";
import "./globals.css";
import FooterComp from "@/components/Footer/Footer";
import HeaderComp from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Afsar Rakha",
  description: "Afsar Rakha's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/afsar_logo.png" />
      </head>
      <body className="bg-gradient-to-r from-green-100 to-blue-100 flex flex-col min-h-screen">
        <HeaderComp />
        <main className="flex flex-grow justify-center items-center">{children}</main>
        <FooterComp/>
      </body>
    </html>
  );
}
