"use client"

import { motion } from "framer-motion"
import { FiMessageCircle, FiMail } from "react-icons/fi"
import { GiFrog } from "react-icons/gi"
import PageHeader from "@/components/ui/PageHeader"
import GlassCard from "@/components/ui/GlassCard"
import ContactInfo from "./ContactInfo"
import SocialLinks from "./SocialLinks"

export default function ContactPage() {
    return (
        <section className="min-h-screen py-16">
            <div className="max-w-6xl mx-auto px-4">
                <PageHeader
                    title="Let's Connect!"
                    subtitle="Ready to collaborate, discuss ideas, or just have a good chat? I'm always excited to meet new people and work on amazing projects together!"
                    icon={<FiMessageCircle className="text-green-500" />}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Info Kontak */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <ContactInfo />
                    </motion.div>

                    {/* Link Sosial Media */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <SocialLinks />
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <GlassCard className="p-8 max-w-2xl mx-auto" hover={false}>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Something Great? 🌟</h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            Whether it's a project collaboration, a job opportunity, or just wanting to chat about tech
                            and life - I'd love to hear from you!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:afsar.rakha@example.com"
                                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition duration-300 shadow-lg transform hover:scale-105"
                            >
                                <FiMail className="mr-2" />
                                Email Me Directly
                            </a>
                            <a
                                href="/studycase"
                                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition duration-300 shadow-lg transform hover:scale-105"
                            >
                                <GiFrog className="mr-2" />
                                Check My Study Cases
                            </a>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    )
}
