"use client"

import { motion } from "framer-motion"
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi"
import { experiences } from "@/data/experience"
import GlassCard from "@/components/ui/GlassCard"

export default function ExperienceSection() {
    return (
        <GlassCard className="p-8" hover={false}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FiBriefcase className="mr-3 text-purple-500" />
                Experiences
            </h3>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-green-300 to-blue-300 ml-4 md:ml-0" />

                {/* Experience items */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative pl-12 md:pl-20"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-6 top-0 w-9 h-9 rounded-full bg-white border-2 border-green-400 flex items-center justify-center ml-0 md:-ml-4 shadow-lg">
                                <span className="text-lg">{exp.current ? "🌟" : "💼"}</span>
                            </div>

                            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
                                {/* Company and position */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h4 className="text-xl font-bold text-gray-800">{exp.position}</h4>
                                    <span className="text-green-600 font-semibold">{exp.company}</span>
                                </div>

                                {/* Duration and location */}
                                <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center">
                                        <FiCalendar className="mr-1 text-gray-400" />
                                        <span>{exp.duration}</span>
                                        {exp.current && (
                                            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                                                Current
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center">
                                        <FiMapPin className="mr-1 text-gray-400" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <ul className="space-y-2 mb-4">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <FiCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Technologies */}
                                {exp.technologies && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {exp.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </GlassCard>
    )
}
