import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amber Honey | Nature’s Goodness. Purely Yours.",
  description: "Discover Amber Honey by Amber Harvest Ventures. Explore our honey sizes and enquire or order directly on WhatsApp.",
  openGraph: {
    title: "Amber Honey",
    description: "Nature’s Goodness. Purely Yours.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}