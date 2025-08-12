import Footer from "@/components/footer";
import Header from "@/components/header";
import SessionProvider from "@/lib/SessionProvider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "400", "900", "500"],
  variable: "--font-serif",
});
const fontDefault = Roboto({
  subsets: ["latin"],
  weight: ["700", "300", "400", "900", "100", "500"],
});

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
    <html lang="pt-br" className={`${fontSerif.variable}`}>
      <SessionProvider>
        <body className={`${fontDefault.className} relative`}>
          <div className="max-w-7xl m-auto px-4 py-8">
            <Header />
            {children}
            <Analytics />
          </div>
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
