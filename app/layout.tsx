import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Portfolio Nguyễn Trần Mai Linh",
  description: "Website portfolio cá nhân",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative selection:bg-emerald-200 selection:text-emerald-900 dark:selection:bg-emerald-900/50 dark:selection:text-emerald-100 before:absolute before:top-0 before:left-0 before:w-full before:h-96 before:bg-gradient-to-b before:from-emerald-100/30 before:to-transparent dark:before:from-emerald-900/20 before:-z-10">
        <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] opacity-60"></div>
        <Navbar />
        
        <main className="flex-1">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}