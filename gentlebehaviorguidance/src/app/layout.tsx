// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Gentle Behavior Guidance – Supporting Families with Autism",
  description: "Empowering Spanish-speaking families and anyone interested in gentle care for Autism. Find support, training, and resources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-grow container mx-auto max-w-7xl px-4 py-6">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}