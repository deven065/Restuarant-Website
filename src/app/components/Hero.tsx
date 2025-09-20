"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section
        className="relative w-full h-[90vh] flex items-center justify-center text-center text-white"
        style={{
            backgroundImage: "url('/Restuarant-home.avif')", // <-- Put your image in /public folder
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        {/* Overlay (for gradient/fade effect at bottom) */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-100 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-md rounded-full mb-4">
            PREMIUM DINING
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Maison Verdure</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
            Farm-to-table cuisine, crafted with seasonal ingredients and served in
            an elegant, welcoming space.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
            <Link
                href="/book"
                className="bg-[#17352d] text-white px-6 py-3 rounded-lg hover:bg-[#0f241e] transition-colors"
            >
                Book a Table
            </Link>
            <Link
                href="/menu"
                className="bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
                Explore Menu
            </Link>
            </div>
        </div>
        </section>
    );
}
