"use client"

import { motion } from "framer-motion"
import { FiArrowLeft, FiRefreshCw } from "react-icons/fi"
import { useRouter } from "next/navigation"
import FloatingElements from "./FloatingElements"
import GlitchText from "./GlitchText"
import SadFrog from "./SadFrog"

export default function NotFoundPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center py-8 px-4">

            {/* Floating Background Elements */}
            <FloatingElements />

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-6xl mx-auto">
                {/* 404 Number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="mb-8"
                >
                    <GlitchText
                        text="404"
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-green-600 mb-4 block"
                    />
                </motion.div>

                {/* Sad Frog */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <SadFrog />
                </motion.div>

                {/* Error Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-12"
                >
                    <div className="bg-white/40 backdrop-blur-lg border border-gray-200/30 rounded-3xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found 🤔</h1>
                        <p className="text-base md:text-lg text-gray-500">Don't worry though, let's get you back on track!</p>
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.button
                        onClick={() => router.back()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                        <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                        Go Back
                    </motion.button>

                    <motion.button
                        onClick={() => router.refresh()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-6 py-3 bg-white/50 backdrop-blur-lg border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                        <FiRefreshCw className="mr-2 group-hover:rotate-180 transition-transform duration-500" />
                        Refresh Page
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}
