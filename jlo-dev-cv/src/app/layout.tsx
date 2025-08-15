import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"],});
const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin"],});

export const metadata: Metadata = {
  title: "Jean-Louis Jean - Développeur Web et Mobile Full Stack",
  description: "Mon CV en ligne pour le poste de Développeur Web et Mobile Full Stack",
  openGraph: {
    title: "Jean-Louis Jean - CV en ligne",
    description: "Découvrez mon parcours, mes projets et mes compétences.",
    url: "https://tonsite.com",
    type: "website",
    images: [
      {
        url: "https://tonsite.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "CV Jean-Louis Jean",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}


