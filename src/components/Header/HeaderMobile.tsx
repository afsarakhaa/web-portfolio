'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";

export default function HeaderMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const handleMobileMenuToggle = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <button className="mobile-menu-button z-50" onClick={handleMobileMenuToggle}>
                {isMenuOpen ? <RiCloseLine className='w-6 h-6' /> : <RiMenu4Line className='w-6 h-6' />}
            </button>

            <div
                className={`
                    absolute top-12 right-0 z-40 w-56 p-4 font-bold bg-white rounded-xl shadow-lg border border-gray-200/50
                    transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'block translate-y-0 opacity-100' : 'hidden -translate-y-2 opacity-0'}
                `}
            >
                <Link href="/" onClick={handleLinkClick} className={`block text-center py-3 px-4 text-base rounded-xl transition duration-300 ${pathname === "/" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"}`}>
                    Home
                </Link>
                <Link href="/about" onClick={handleLinkClick} className={`block text-center py-3 px-4 text-base rounded-xl transition duration-300 ${pathname === "/about" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"}`}>
                    About
                </Link>
                <Link href="/projects" onClick={handleLinkClick} className={`block text-center py-3 px-4 text-base rounded-xl transition duration-300 ${pathname === "/projects" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"}`}>
                    Projects
                </Link>
                <Link href="/studycase" onClick={handleLinkClick} className={`block text-center py-3 px-4 text-base rounded-xl transition duration-300 ${pathname === "/studycase" ? "bg-green-100 text-green-700" : "hover:bg-gray-100"}`}>
                    Study Case
                </Link>
                <div className='mt-4'>
                    <Link href="/contact" onClick={handleLinkClick} className="flex items-center justify-center py-2 px-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition duration-300">
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
}
