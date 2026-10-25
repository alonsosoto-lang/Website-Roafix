import type { Metadata } from "next";
import { Fraunces, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "800"],
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roafix · Biblioteca de inspiración",
  description:
    "Herramienta interna: referencias visuales, paletas y prompts para el sitio de difusión de Roafix.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${fraunces.variable} ${schibsted.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
