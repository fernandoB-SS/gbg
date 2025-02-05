import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Or switch to a font like Inter/Roboto if preferred
import "./globals.css";
import Header from "@/components/Header";  // Create a Header component
import Footer from "@/components/Footer";  // Create a Footer component

export const metadata: Metadata = {
  title: "Gentle Behavior Guidance – Supporting Families with Autism",
  description: "Empowering Spanish-speaking families and anyone interested in gentle care for Autism. Find support, training, and resources.",
}; export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased">
        <Header />
        <main className="flex-grow container mx-auto max-w-7xl px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}