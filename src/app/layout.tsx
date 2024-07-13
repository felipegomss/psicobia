import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SessionProvider from "@/lib/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bianca Vieira - Psicologa",
  description: "Psicologia Fenomenológica Existencial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={`${inter.className} max-w-7xl m-auto px-4 bg-noise`}>
          <Header />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
