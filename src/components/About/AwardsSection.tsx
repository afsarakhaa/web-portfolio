"use client"

import { motion } from "framer-motion"
import { FiAward, FiCalendar, FiTag } from "react-icons/fi"
import { awards } from "@/data/awards"
import GlassCard from "@/components/ui/GlassCard"

export default function AwardsSection() {
    return (
        <GlassCard className="p-8" hover={false}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FiAward className="mr-3 text-yellow-500" />
                Awards & Achievements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                    <motion.div
                        key={award.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative"
                    >
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                            {/* Award icon */}
                            <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                                <span className="text-2xl">{award.icon}</span>
                            </div>

                            {/* Award title */}
                            <h4 className="text-lg font-bold text-gray-800 mb-1 pr-8">{award.title}</h4>

                            {/* Issuer */}
                            <p className="text-green-600 font-medium mb-2">{award.issuer}</p>

                            {/* Date and category */}
                            <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                                <div className="flex items-center">
                                    <FiCalendar className="mr-1 text-gray-400" />
                                    <span>{award.date}</span>
                                </div>
                                <div className="flex items-center">
                                    <FiTag className="mr-1 text-gray-400" />
                                    <span>{award.category}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 text-sm">{award.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </GlassCard>
    )
}
