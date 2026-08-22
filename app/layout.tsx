import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CCTV Security Solutions | Securing What Matters Most",
  description:
    "Advanced CCTV solutions for homes, offices & industries. High quality, best pricing, expert installation. Serving Delhi NCR.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
