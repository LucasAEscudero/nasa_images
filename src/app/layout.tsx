import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";
import Spinner from "@/components/spinner/Spinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>
          <Suspense fallback={<Spinner />}>{children}</Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
