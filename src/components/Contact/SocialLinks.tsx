"use client"

import { motion } from "framer-motion"
import { FiMessageCircle } from "react-icons/fi"
import { socialLinks } from "@/data/contact"
import GlassCard from "@/components/ui/GlassCard"

export default function SocialLinks() {
    return (
        <GlassCard className="p-8" hover={false}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FiMessageCircle className="mr-3 text-blue-500" />
                Find Me Online
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`flex items-center p-4 bg-white/50 rounded-xl border border-gray-200/50 transition-all duration-300 ${social.bgColor} ${social.color} hover:shadow-lg group`}
                    >
                        <social.icon className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-110" />
                        <div>
                            <h3 className="font-semibold text-gray-800">{social.name}</h3>
                            <p className="text-xs text-gray-600">{social.description}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </GlassCard>
    )
}
