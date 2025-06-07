import React from "react";
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
      <body className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 min-h-screen flex flex-col">
        <HeaderComp />
        <main className="flex-grow">{children}</main>
        <FooterComp />
      </body>
    </html>
  );
}
