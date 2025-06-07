"use client"

import { motion } from "framer-motion"
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi"
import type { Project } from "@/types"

interface ProjectCardProps {
    project: Project
    index: number
    hoveredProject: number | null
    setHoveredProject: (id: number | null) => void
}

export default function ProjectCard({ project, index, hoveredProject, setHoveredProject }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
            className="relative group"
        >
            <div className="bg-white/40 backdrop-blur-lg border border-gray-200/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">

                {/* Project Image */}
                <div className="relative overflow-hidden">
                    <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed text-justify">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                        {project.github &&
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 text-sm font-medium"
                            >
                                <FiGithub className="mr-2" />
                                Code
                            </a>
                        }
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 text-sm font-medium"
                        >
                            <FiExternalLink className="mr-2" />
                            Demo
                        </a>
                    </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                    className=" pointer-events-none absolute inset-0 border-2 border-green-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={hoveredProject === project.id ? { scale: [1, 1.02, 1] } : {}}
                    transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                />
            </div>
        </motion.div>
    )
}
