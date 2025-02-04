"use client";

import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function FooterComp() {
    return (
        <div className="p-6">
            <footer className="bg-white/30 backdrop-blur-lg border border-gray-200/30 py-8 mt-16 rounded-xl shadow-lg">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Logo and Copyright */}
                        <div className="flex items-center space-x-2">
                            <img
                                src="/image/afsar_logo.png"
                                alt="Afsar Logo"
                                className="h-8 w-8"
                            />
                            <p className="text-gray-600">
                                &copy; {new Date().getFullYear()} Afsar Rakha. All rights reserved.
                            </p>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex space-x-6">
                            <Link
                                href="https://github.com/afsarakhaa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-green-600 transition duration-300"
                            >
                                <FaGithub className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/afsar-rakha-farrasandi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-green-600 transition duration-300"
                            >
                                <FaLinkedin className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://instagra.com/afsarakhaa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-green-600 transition duration-300"
                            >
                                <FaInstagram className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}