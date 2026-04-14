import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
    <html lang="vi">
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        {/* Thanh Navbar sẽ nằm ở trên cùng */}
        <Navbar />
        
        {/* Phần nội dung các trang sẽ thay đổi ở giữa */}
        <main className="flex-1">{children}</main>
        
        {/* Footer nằm ở dưới cùng */}
        <Footer />
      </body>
    </html>
  );
}