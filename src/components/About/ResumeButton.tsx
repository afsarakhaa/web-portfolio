"use client"

import { motion } from "framer-motion"
import { FiDownload, FiFileText } from "react-icons/fi"

export default function ResumeButton() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
        >
            <a
                href="https://drive.google.com/file/d/1uHtAeF8HpaMI1_LIj-y7z6VeuVn0lBIi/view?usp=sharing"
                download="Afsar_Rakha_Resume.pdf"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
                {/* Background animation */}
                <span className="absolute w-0 h-0 bg-white opacity-10 rounded-full group-hover:w-[600px] group-hover:h-[600px] transition-all duration-700"></span>

                {/* Icon */}
                <span className="bg-white/20 p-2 rounded-lg mr-3">
                    <FiFileText className="w-5 h-5" />
                </span>

                {/* Text */}
                <span className="relative z-10 flex items-center">
                    Download Resume
                    <FiDownload className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
            </a>
        </motion.div>
    )
}
