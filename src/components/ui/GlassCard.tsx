"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassCardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    delay?: number
}

export default function GlassCard({ children, className = "", hover = true, delay = 0 }: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : {}}
            className={`bg-white/40 backdrop-blur-lg border border-gray-200/30 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ${className}`}
        >
            {children}
        </motion.div>
    )
}
