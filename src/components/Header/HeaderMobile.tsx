'use client';

import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";

export default function HeaderMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <button className="mobile-menu-button" onClick={handleMobileMenuToggle}>
                <RiMenu4Line className='w-6 h-6' />
            </button>

            <div className={`mobile-menu ${isMenuOpen ? 'block' : 'hidden'} md:hidden p-4 font-bold`}>
                <a href="/" className="flex justify-center py-4 px-4 text-base hover:bg-green-200 hover:text-green-600 transition duration-300 rounded-xl">
                    Home
                </a>
                <a href="/about" className="flex justify-center py-4 px-4 text-base hover:bg-green-200 hover:text-green-600 transition duration-300 rounded-xl">
                    About
                </a>
                <a href="/projects" className="flex justify-center mb-2 py-4 px-4 text-base hover:bg-green-200 hover:text-green-600 transition duration-300 rounded-xl">
                    Projects
                </a>
                <div className='flex items-center justify-center'>
                    <a href="/contact" className="flex items-center py-2 px-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition duration-300">
                        <span className='ml-2'>Contact</span>
                    </a>
                </div>
            </div>
        </>
    );
}
