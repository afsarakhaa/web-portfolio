"use client"

import { motion } from "framer-motion"
import { FiArrowRight, FiCode } from "react-icons/fi"
import { GiFrog, GiFrogFoot } from "react-icons/gi"
import TypeWriterComp from "./TypeWriterComp"

export default function HeroSection() {
    return (
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            {/* Main Title */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 md:mb-8"
            >
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-green-800 mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                    <span className="flex items-center">
                        <GiFrog className="text-green-600 text-4xl sm:text-3xl md:text-4xl lg:text-5xl mr-2" />
                        Hi, I'm Afsar
                        <GiFrogFoot className="text-green-600 text-4xl sm:text-3xl md:text-4xl lg:text-5xl ml-2" />
                    </span>
                </h1>
            </motion.div>

            {/* Typewriter Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-8 md:mb-12"
            >
                <div className="bg-white/40 backdrop-blur-lg border border-green-200/50 p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-lg max-w-4xl mx-auto">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-700 mb-4 md:mb-6">
                        <span className="text-green-600 font-bold block sm:inline">
                            <TypeWriterComp />
                        </span>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                        who loves{" "}
                        <span className="line-through p-1 md:p-2 border text-black font-medium bg-gray-100 rounded-lg md:rounded-xl mx-1">
                            You 🤭
                        </span>{" "}
                        creating impactful digital experiences.
                    </p>
                </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
                <a
                    href="/about"
                    className="group flex items-center text-white bg-green-600 hover:bg-green-700 font-bold py-3 px-6 md:py-4 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl text-sm md:text-base"
                >
                    About Me
                    <FiArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <a
                    href="/projects"
                    className="group flex items-center text-green-600 bg-white/50 backdrop-blur-lg border border-green-200 hover:bg-green-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl text-sm md:text-base"
                >
                    <FiCode className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                    View Projects
                </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto"
            >
                {[
                    { number: "3", label: "Years Coding", icon: "💻" },
                    { number: "5+", label: "Projects", icon: "🚀" },
                    { number: "∞", label: "Yapping Hours", icon: "🗣️" },
                    { number: "100%", label: "Enthusiasm", icon: "🔥" },
                ].map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        className="bg-white/30 backdrop-blur-lg border border-gray-200/30 rounded-xl md:rounded-2xl p-3 md:p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        <div className="text-lg md:text-xl mb-1">{stat.icon}</div>
                        <div className="text-lg md:text-2xl font-bold text-green-600">{stat.number}</div>
                        <div className="text-xs md:text-sm text-gray-600 font-medium">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
