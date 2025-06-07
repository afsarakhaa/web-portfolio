"use client"

import { motion } from "framer-motion"
import { FiTrendingUp } from "react-icons/fi"
import GlassCard from "@/components/ui/GlassCard"
import { funFacts } from "@/data/funFacts"

export default function FunFactsSection() {
    return (
        <GlassCard className="p-8" hover={false}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FiTrendingUp className="mr-3 text-green-500" />
                Fun Facts About Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {funFacts.map((fact, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-r from-green-100 to-blue-100 p-3 rounded-xl border border-green-200 hover:shadow-md transition-all duration-300"
                    >
                        <p className="text-sm font-medium text-gray-700">{fact}</p>
                    </motion.div>
                ))}
            </div>
        </GlassCard>
    )
}
