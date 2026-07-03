import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Nandita K | MBA Graduate — Human Resources & Business Analytics",
  description:
    "Portfolio of Nandita K, MBA graduate specializing in Human Resource Management and Business Analytics. Open to opportunities in HR, Talent Acquisition, and HR Analytics.",
  keywords: [
    "Nandita K",
    "HR",
    "Human Resources",
    "Business Analytics",
    "MBA",
    "HR Analytics",
    "Talent Acquisition",
  ],
  authors: [{ name: "Nandita K" }],
  openGraph: {
    title: "Nandita K | HR & Business Analytics",
    description:
      "MBA graduate specializing in Human Resource Management and Business Analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} font-body antialiased bg-bg`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
