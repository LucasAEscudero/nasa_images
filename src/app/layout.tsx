import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { pt_sans } from "@/lib/fonts";

import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NASA Images",
    template: "%s - NASA Images",
  },
  description:
    "This is a web page that renders images from the NASA API developed by Lucas Agustin Escudero",
  authors: {
    url: "https://www.linkedin.com/in/lucas-escudero-54195322b/",
    name: "Lucas Agustin Escudero",
  },
  keywords: "images, nasa, nasa images, Lucas Agustin Escudero, fullstack, web",
  openGraph: {
    title: "NASA Images",
    description:
      "Web page that render images from NASA API developed by Lucas Agustin Escudero",
  },
  twitter: {
    card: "summary_large_image",
  },
  // metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pt_sans.className} antialiased`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
