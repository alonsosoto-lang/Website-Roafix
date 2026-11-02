import { Boot } from "@/components/Boot";
import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roafix — La ciudad también puede reportar",
  description:
    "Roafix conecta a la ciudadanía de Tijuana con un mapa público de baches: foto, ubicación y seguimiento del estado.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${grotesk.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Boot />
        {children}
      </body>
    </html>
  );
}
