"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface PageHeaderProps {
    title: string
    subtitle: string
    icon?: ReactNode
    className?: string
}

export default function PageHeader({ title, subtitle, icon, className = "" }: PageHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center mb-16 ${className}`}
        >
            <h1 className="text-5xl font-extrabold text-green-600 mb-4 flex items-center justify-center">
                {icon && <span className="mr-4">{icon}</span>}
                {title}
                {icon && <span className="ml-4">{icon}</span>}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>
    )
}
