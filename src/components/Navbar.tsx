'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Griya Harianto Utama Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-ghu-primary">Griya Harianto Utama</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-ghu-dark hover:text-ghu-primary transition-colors">
              Beranda
            </Link>
            <Link href="/properti" className="text-ghu-dark hover:text-ghu-primary transition-colors">
              Properti
            </Link>
            <Link href="/tanah" className="text-ghu-dark hover:text-ghu-primary transition-colors">
              Tanah
            </Link>
            <Link href="/renovasi" className="text-ghu-dark hover:text-ghu-primary transition-colors">
              Renovasi
            </Link>
            <Link href="#contact" className="px-4 py-2 bg-ghu-accent text-ghu-dark font-semibold rounded-md hover:brightness-95 transition-colors">
              Kontak
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              className="text-ghu-dark hover:text-ghu-primary focus:outline-none focus:text-ghu-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-ghu-dark hover:text-ghu-primary hover:bg-ghu-bg">
              Beranda
            </Link>
            <Link href="/properti" className="block px-3 py-2 rounded-md text-base font-medium text-ghu-dark hover:text-ghu-primary hover:bg-ghu-bg">
              Properti
            </Link>
            <Link href="/tanah" className="block px-3 py-2 rounded-md text-base font-medium text-ghu-dark hover:text-ghu-primary hover:bg-ghu-bg">
              Tanah
            </Link>
            <Link href="/renovasi" className="block px-3 py-2 rounded-md text-base font-medium text-ghu-dark hover:text-ghu-primary hover:bg-ghu-bg">
              Renovasi
            </Link>
            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-ghu-primary font-semibold hover:bg-ghu-bg">
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
