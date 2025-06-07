"use client"

import { motion } from "framer-motion"
import { FiMapPin, FiMail, FiCalendar } from "react-icons/fi"
import { GiFrog } from "react-icons/gi"
import GlassCard from "@/components/ui/GlassCard"

export default function ProfileCard() {
    return (
        <GlassCard className="p-8 sticky top-8" hover={false}>
            {/* Profile Image */}
            <div className="relative mb-6">
                <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-green-400 shadow-lg"
                >
                    <img
                        src="image/afsar.png"
                        alt="Afsar Rakha Farrasandi"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full">
                    <GiFrog className="w-6 h-6" />
                </div>
            </div>

            {/* Basic Info */}
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Afsar Rakha Farrasandi</h2>
                <p className="text-green-600 font-semibold mb-4">Information Systems Student</p>

                <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                        <FiMapPin className="mr-2" />
                        Jakarta, Indonesia
                    </div>
                    <div className="flex items-center justify-center">
                        <FiCalendar className="mr-2" />
                        University of Indonesia
                    </div>
                    <div className="flex items-center justify-center">
                        <FiMail className="mr-2" />
                        Available for opportunities
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-green-100 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">3</div>
                    <div className="text-xs text-gray-600">Years Coding</div>
                </div>
                <div className="text-center p-3 bg-blue-100 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">8</div>
                    <div className="text-xs text-gray-600">Projects</div>
                </div>
                <div className="text-center p-3 bg-purple-100 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">∞</div>
                    <div className="text-xs text-gray-600">Yapping Hours</div>
                </div>
                <div className="text-center p-3 bg-yellow-100 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-600">100%</div>
                    <div className="text-xs text-gray-600">Enthusiasm</div>
                </div>
            </div>

            {/* Contact Button */}
            <a
                href="/contact"
                className="w-full flex items-center justify-center py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition duration-300 shadow-lg"
            >
                <FiMail className="mr-2" />
                Get In Touch
            </a>
        </GlassCard>
    )
}
