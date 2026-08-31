import type { Metadata } from "next";
import { clashDisplay, generalSans } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ishita — Product Designer",
  description:
    "Product Designer with a love for motion, interaction design and crime documentaries.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${generalSans.variable} antialiased`}
    >
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
