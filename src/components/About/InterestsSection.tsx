"use client"

import { motion } from "framer-motion"
import { FiStar } from "react-icons/fi"
import GlassCard from "@/components/ui/GlassCard"
import { interests } from "@/data/interests"

export default function InterestsSection() {
    return (
        <GlassCard className="p-8" hover={false}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FiStar className="mr-3 text-yellow-500" />
                What I Love Doing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                    <motion.div
                        key={interest.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="bg-white/50 p-4 rounded-xl border border-gray-200/50 hover:shadow-lg transition-all duration-300"
                    >
                        <div className="text-3xl mb-2">{interest.icon}</div>
                        <h4 className="font-bold text-gray-800 mb-1">{interest.title}</h4>
                        <p className="text-sm text-gray-600">{interest.description}</p>
                    </motion.div>
                ))}
            </div>
        </GlassCard>
    )
}
