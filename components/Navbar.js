import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold text-primary">
          ShopHub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-primary transition">
            首页
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-primary transition">
            产品
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary transition">
            关于我们
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-primary transition">
            博客
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary transition">
            联系我们
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/dashboard" className="text-gray-700 hover:text-primary transition">
            仪表板
          </Link>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
            登录
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            首页
          </Link>
          <Link href="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            产品
          </Link>
          <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            关于我们
          </Link>
          <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            博客
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            联系我们
          </Link>
          <Link href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            仪表板
          </Link>
        </div>
      )}
    </nav>
  );
}
