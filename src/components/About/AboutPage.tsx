"use client"

import { motion } from "framer-motion"
import { FiHeart, FiMail, FiCode } from "react-icons/fi"
import PageHeader from "@/components/ui/PageHeader"
import GlassCard from "@/components/ui/GlassCard"
import ProfileCard from "./ProfileCard"
import SkillsSection from "./SkillsSection"
import InterestsSection from "./InterestsSection"
import FunFactsSection from "./FunFactsSection"
import { PiHandWaving } from "react-icons/pi"

export default function AboutPage() {
    return (
        <section className="min-h-screen py-16">
            <div className="max-w-6xl mx-auto px-4">
                <PageHeader title="About Me" subtitle="" />

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-1"
                    >
                        <ProfileCard />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* Introduction */}
                        <GlassCard className="p-8" hover={false}>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                <PiHandWaving className="mr-3 text-green-500 w-8 h-8" />
                                Hello There!
                            </h3>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    Hi! I'm <span className="text-green-600 font-bold">Afsar Rakha Farrasandi</span>, an Information
                                    Systems student at the University of Indonesia who thrives at the intersection of{" "}
                                    <span className="text-gray-800 font-semibold">technology</span>,
                                    <span className="text-gray-800 font-semibold"> design</span>, and
                                    <span className="text-gray-800 font-semibold"> user experiences</span>.
                                </p>
                                <p>
                                    What makes me unique? Well, I'm a <span className="text-pink-600 font-bold">natural-born yapper</span>{" "}
                                    🗣️ who can turn any conversation into an engaging discussion! I love creating interactive digital
                                    experiences, building web applications, and most importantly - having fun while doing it.
                                </p>
                                <p>
                                    When I'm not coding or designing, I’m probably lifting at the gym, strumming my guitar, creating study cases about
                                    random life dilemmas, or probably yapping about hot takes from social media. I believe that the best
                                    projects come from combining technical skills with creativity and a good sense of humor! 🎭
                                </p>
                            </div>
                        </GlassCard>

                        <SkillsSection />
                        <InterestsSection />
                        <FunFactsSection />
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center"
                >
                    <GlassCard className="p-8 max-w-3xl mx-auto" hover={false}>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Let's Create Something Amazing Together! 🚀</h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            I'm always excited to work on new projects, collaborate with amazing people, or just have a good
                            conversation about tech, design, or life in general!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition duration-300 shadow-lg transform hover:scale-105"
                            >
                                <FiMail className="mr-2" />
                                Contact Me
                            </a>
                            <a
                                href="/projects"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105"
                            >
                                <FiCode className="mr-2" />
                                View My Work
                            </a>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    )
}
