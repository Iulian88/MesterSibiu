import type { Metadata, Viewport } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/tracking/Analytics";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: "#1F5C45",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      className={`${plusJakarta.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-ink">
        <LocalBusinessJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
