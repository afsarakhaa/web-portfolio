"use client"

import { motion } from "framer-motion"
import { FiCode, FiStar } from "react-icons/fi"
import { useState } from "react"
import PageHeader from "@/components/ui/PageHeader"
import GlassCard from "@/components/ui/GlassCard"
import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard"
import { CgWebsite } from "react-icons/cg"

export default function ProjectsPage() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)

    return (
        <section className="min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4">
                <PageHeader
                    title="My Projects"
                    subtitle="Here are some of the projects I've worked on. From web applications to mobile apps, I love bringing ideas to life!"
                    icon={<CgWebsite className="text-green-500" />}
                />

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            hoveredProject={hoveredProject}
                            setHoveredProject={setHoveredProject}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <GlassCard className="p-8 max-w-2xl mx-auto" hover={false}>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Interested in collaborating? 🤝</h3>
                        <p className="text-gray-600 mb-6">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition duration-300 shadow-lg transform hover:scale-105"
                        >
                            <FiCode className="mr-2" />
                            Let's Work Together!
                        </a>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    )
}
