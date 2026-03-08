"use client";
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

const NavBar: React.FC = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const tab = searchParams?.get('tab') || '';

    const isActive = (hrefTab: string) => {
        if (hrefTab === 'home') return pathname === '/';
        return tab === hrefTab;
    };

    return (
        <nav className="bg-sky-600 shadow-sm">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Left: logo + title */}
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-sky-600 text-lg">❄️</div>
                    <Link href="/" className="text-white text-xl font-bold">SnowShare</Link>
                </div>

                {/* Center: primary nav (hidden on small screens) */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/?tab=request"
                        aria-current={isActive('request') ? 'page' : undefined}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${isActive('request') ? 'bg-white text-sky-600' : 'text-white hover:bg-sky-500/80'}`}
                    >
                        Request Help
                    </Link>
                    <Link
                        href="/?tab=browse"
                        aria-current={isActive('browse') ? 'page' : undefined}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${isActive('browse') ? 'bg-white text-sky-600' : 'text-white hover:bg-sky-500/80'}`}
                    >
                        Browse Jobs
                    </Link>
                    <Link href="/about" className="px-4 py-2 rounded-full text-sm text-white hover:bg-sky-500/80 transition">About</Link>
                </div>

                {/* Right: action buttons */}
                <div className="flex items-center gap-3">
                    <Link href="/register" className="hidden sm:inline-block rounded-full bg-white text-sky-600 px-4 py-2 text-sm font-semibold hover:opacity-95">
                        Become a Helper
                    </Link>
                    <Link href="/?tab=request" className="rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/20 transition">
                        Request Help
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;