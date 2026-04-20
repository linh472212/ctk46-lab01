"use client"; // Bắt buộc vì dùng useState để mở/đóng menu
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            Mai Linh
          </Link>
          
          {/* Nút Hamburger cho Mobile */}
          <button 
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menu cho Desktop */}
          <div className="hidden md:flex gap-6">
            <NavLinks />
          </div>
        </div>

        {/* Menu xổ xuống cho Mobile */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2 flex flex-col border-t mt-4 dark:border-gray-800">
            <NavLinks mobile onClick={() => setIsOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
}

// Component phụ để tránh lặp code
function NavLinks({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const baseClass = `text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium ${mobile ? 'block py-2' : ''}`;
  return (
    <>
      <Link href="/" className={baseClass} onClick={onClick}>Trang chủ</Link>
      <Link href="/about" className={baseClass} onClick={onClick}>Giới thiệu</Link>
      <Link href="/skills" className={baseClass} onClick={onClick}>Kỹ năng</Link>
      <Link href="/blog" className={baseClass} onClick={onClick}>Blog</Link>
      <Link href="/projects" className={baseClass} onClick={onClick}>Dự án</Link>
      <Link href="/countries" className={baseClass} onClick={onClick}>Quốc gia</Link>
      <Link href="/contact" className={baseClass} onClick={onClick}>Liên hệ</Link>
    </>
  );
}
