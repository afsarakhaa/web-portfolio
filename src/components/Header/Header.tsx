"use client";

import { FiMessageCircle } from "react-icons/fi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HeaderMobile from "./HeaderMobile"
import Link from "next/link";

export default function HeaderComp() {
    const pathname = usePathname();

    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center text-gray-700">
                            <Image src={'/image/afsar_logo.png'} alt="Afsar's Logo" width={48} height={48} />
                            <span className="font-bold ml-2">Afsar Rakha</span>
                        </Link>
                    </div>

                    {/* Primary Nav */}
                    <div className="hidden md:flex space-x-6 font-bold">
                        <Link
                            href="/"
                            className={`py-2 px-3 rounded-xl transition duration-300 ${pathname === "/"
                                ? "bg-green-600 text-white"
                                : "text-gray-700 hover:text-green-600 hover:bg-green-200"
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/studycase"
                            className={`py-2 px-3 rounded-xl transition duration-300 ${pathname === "/studycase"
                                ? "bg-green-600 text-white"
                                : "text-gray-700 hover:text-green-600 hover:bg-green-200"
                                }`}
                        >
                            Study Case
                        </Link>
                        <Link
                            href="/projects"
                            className={`py-2 px-3 rounded-xl transition duration-300 ${pathname === "/projects"
                                ? "bg-green-600 text-white"
                                : "text-gray-700 hover:text-green-600 hover:bg-green-200"
                                }`}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/about"
                            className={`py-2 px-3 rounded-xl transition duration-300 ${pathname === "/about"
                                ? "bg-green-600 text-white"
                                : "text-gray-700 hover:text-green-600 hover:bg-green-200"
                                }`}
                        >
                            About
                        </Link>
                    </div>

                    {/* Contact Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className={`flex items-center py-2 px-4 font-bold rounded-xl transition duration-300 ${pathname === "/contact"
                                ? "bg-green-800 text-white"
                                : "bg-green-600 text-white hover:bg-green-700"
                                }`}
                        >
                            <FiMessageCircle className='w-6 h-6' />
                            <span className='ml-2'>Contact</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="relative md:hidden pt-2 pb-1 px-2 border border-gray-200 rounded-xl shadow mr-2">
                        <HeaderMobile />
                    </div>
                </div>
            </div>
        </nav>
    );
}
