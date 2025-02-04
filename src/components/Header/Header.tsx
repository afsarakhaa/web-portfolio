"use client";

import { FiMessageCircle } from "react-icons/fi";
import Image from "next/image";
import HeaderMobile from "./HeaderMobile"

export default function HeaderComp() {
    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center text-gray-700">
                            <Image src={'/image/afsar_logo.png'} alt="Afsar's Logo" width={48} height={48} />
                            <span className="font-bold ml-2">Afsar Rakha</span>
                        </a>
                    </div>

                    {/* Primary Nav */}
                    <div className="hidden md:flex space-x-6 font-bold">
                        <a href="/" className="text-gray-700 hover:text-green-600 transition duration-300 hover:bg-green-200 rounded-xl py-2 px-3">
                            Home
                        </a>
                        <a href="/projects" className="text-gray-700 hover:text-green-600 transition duration-300 hover:bg-green-200 rounded-xl py-2 px-3">
                            Projects
                        </a>
                        <a href="/contact" className="text-gray-700 hover:text-green-600 transition duration-300 hover:bg-green-200 rounded-xl py-2 px-3">
                            Study Case
                        </a>
                        <a href="/about" className="text-gray-700 hover:text-green-600 transition duration-300 hover:bg-green-200 rounded-xl py-2 px-3">
                            About
                        </a>
                    </div>

                    {/* Contact Button */}
                    <div className="hidden md:block">
                        <a href="/contact" className="flex items-center py-2 px-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition duration-300">
                            <FiMessageCircle className='w-6 h-6' />
                            <span className='ml-2'>Contact</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden pt-2 pb-1 px-2 border border-gray-200 rounded-xl shadow mr-2">
                        <HeaderMobile />
                    </div>
                </div>
            </div>
        </nav>
    );
}
