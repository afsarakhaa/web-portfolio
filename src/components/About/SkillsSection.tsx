"use client"

import { motion } from "framer-motion"
import { FiCode } from "react-icons/fi"
import GlassCard from "@/components/ui/GlassCard"
import { skills } from "@/data/skills"

export default function SkillsSection() {
    return (
        <GlassCard className="p-8" hover={false}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FiCode className="mr-3 text-blue-500" />
                Skills & Expertise
            </h3>
            <div className="space-y-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-gray-800">{skill.name}</span>
                            <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                                className={`h-full rounded-full ${skill.color} shadow-sm`}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </GlassCard>
    )
}
