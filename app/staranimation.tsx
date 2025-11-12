"use client"
import { useRef, useEffect } from "react";

export default function FriendConnect() {
    return (
        <section className="w-full bg-black py-20">
            <div className="max-w-xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl text-white text-center mb-8">
                    Connect with friends, share your favorite moments, and explore endless communities all in one place.
                </h2>
                <div className="flex justify-between items-center mt-10 relative h-32">
                    {/* Friend 1 Card */}
                    <div className="rounded-2xl bg-gray-900 border border-gray-700 px-8 py-6 text-white font-semibold shadow z-10">
                        Friend 1
                    </div>
                    {/* Friend 2 Card */}
                    <div className="rounded-2xl bg-gray-900 border border-gray-700 px-8 py-6 text-white font-semibold shadow z-10">
                        Friend 2
                    </div>
                    {/* SVG Line */}
                    <svg className="absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none" width="100%" height="55" viewBox="0 0 400 60" fill="none">
                        <path d="M30 30 Q900 0 360 190" stroke="#ad3dfa" strokeWidth="5" fill="none" />
                    </svg>
                    {/* Moving star/circle (absolute, animated) */}
                    <span className="absolute top-1/2 -translate-y-1/2 left-[40px] animate-star-move">
                        {/* Replace below with an SVG star for a star shape */}
                        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 shadow-lg" />
                    </span>
                </div>
            </div>
        </section>
    )
}
