import type { Metadata } from "next";
import { Playfair_Display, Roboto, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SessionProvider from "@/lib/SessionProvider";

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-serif",
});
const fontDefault = Roboto({
  subsets: ["latin"],
  weight: ["700", "300", "400", "900", "100", "500"],
});

const fontTitle = Raleway({
  subsets: ["latin"],
  weight: ["700", "300", "400", "900", "100", "500"],
  style: "italic",
  variable: "--font-title",
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
    <html
      lang="pt-br"
      className={`${fontSerif.variable} ${fontTitle.variable}`}
    >
      <SessionProvider>
        <body
          className={`${fontDefault.className} max-w-7xl m-auto px-4 bg-noise`}
        >
          <Header />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
