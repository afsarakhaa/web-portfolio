"use client"

import { motion } from "framer-motion"
import { FiPhone } from "react-icons/fi"
import GlassCard from "@/components/ui/GlassCard"
import { contactInfo } from "@/data/contact"

export default function ContactInfo() {
    return (
        <GlassCard className="p-8" hover={false}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FiPhone className="mr-3 text-green-500" />
                Contact Information
            </h2>

            <div className="space-y-6">
                {contactInfo.map((info, index) => (
                    <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                    >
                        <div className="bg-green-100 p-3 rounded-xl">
                            <info.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">{info.title}</h3>
                            <p className="text-green-600 font-medium">{info.info}</p>
                            <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </GlassCard>
    )
}
