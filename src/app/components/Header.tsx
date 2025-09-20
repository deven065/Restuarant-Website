"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-[#fcfbf9] shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="font-semibold text-gray-800">Maison Verdure</span>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex space-x-8 text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <Link href="/menu" className="hover:text-gray-900 transition-colors">Menu</Link>
            <Link href="/gallery" className="hover:text-gray-900 transition-colors">Gallery</Link>
            <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
            </div>

            {/* Button */}
            <Link
            href="/book"
            className="bg-[#17352d] text-white px-5 py-2 rounded-lg hover:bg-[#0f241e] transition-colors"
            >
            Book a Table
            </Link>
        </nav>
        </header>
    );
}
