import type { Metadata, Viewport } from "next";
import "@fontsource/open-sauce-sans/400.css";
import "@fontsource/open-sauce-sans/500.css";
import "@fontsource/open-sauce-sans/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roafix — La ciudad también puede reportar",
  description:
    "Roafix conecta a la ciudadanía de Tijuana con un mapa público de baches: foto, ubicación y seguimiento del estado.",
};

export const viewport: Viewport = {
  themeColor: "#FFB201",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
