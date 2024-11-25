import type { Metadata } from "next";
import { Cedarville_Cursive, Montserrat } from "next/font/google";
import "./globals.css";

const cedarvileCursive = Cedarville_Cursive({
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mold",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ori - Marco",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cedarvileCursive.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
