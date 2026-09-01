import type { Metadata } from "next";
import { clashDisplay, generalSans } from "./fonts/fonts";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divy — Full Stack Web Developer",
  description:
    "I am a Full Stack Web Developer with experience with 1+ year.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${generalSans.variable} antialiased`}
    >
      <body className="bg-background text-foreground">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
