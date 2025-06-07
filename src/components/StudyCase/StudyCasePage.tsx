"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FiMessageCircle, FiTrendingUp } from "react-icons/fi"
import { GiFrog } from "react-icons/gi"
import { studyCases } from "@/data/studyCases"
import StudyCaseStats from "./StudyCaseStats"
import StudyCaseCard from "./StudyCaseCard"
import GlassCard from "../ui/GlassCard"
import PageHeader from "../ui/PageHeader"

export default function StudyCasePage() {
    const [votedCases, setVotedCases] = useState<{ [key: number]: number }>({})
    const [filter, setFilter] = useState("all")

    const handleVote = (caseId: number, optionIndex: number) => {
        if (!votedCases[caseId]) {
            setVotedCases((prev) => ({
                ...prev,
                [caseId]: optionIndex,
            }))
        }
    }

    const filteredCases = filter === "trending" ? studyCases.filter((case_) => case_.trending) : studyCases

    return (
        <section className="min-h-screen py-16">
            <div className="max-w-6xl mx-auto px-4">
                <PageHeader
                    title="Afsar's Study Cases"
                    subtitle="Tempat segala bentuk pertanyaan aneh dan dilematis dari Afsar. Dari love life sampai kehidupan, semua bisa jadi study case!"
                    icon={<GiFrog className="text-green-500" />}
                />

                {/* Filter and Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col md:flex-row justify-between items-center mb-12"
                >
                    {/* Filter Buttons */}
                    <div className="bg-white/30 backdrop-blur-lg border border-gray-200/30 rounded-xl p-2 shadow-lg mb-4 md:mb-0">
                        <button
                            onClick={() => setFilter("all")}
                            className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${filter === "all" ? "bg-green-600 text-white shadow-lg" : "text-gray-700 hover:bg-green-100"
                                }`}
                        >
                            All Cases
                        </button>
                        <button
                            onClick={() => setFilter("trending")}
                            className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ml-2 ${filter === "trending" ? "bg-green-600 text-white shadow-lg" : "text-gray-700 hover:bg-green-100"
                                }`}
                        >
                            <FiTrendingUp className="inline mr-2" />
                            Trending
                        </button>
                    </div>

                    <StudyCaseStats />
                </motion.div>

                {/* Study Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredCases.map((studyCase, index) => (
                        <StudyCaseCard
                            key={studyCase.id}
                            studyCase={studyCase}
                            index={index}
                            votedCases={votedCases}
                            onVote={handleVote}
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
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Punya ide study case seru? 🤔💡</h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            Punya pertanyaan random tentang love life atau teori hidup yang nggak ada ujungnya? Kirim aja!
                            Siapa tahu bisa kita bahas rame-rame!
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition duration-300 shadow-lg transform hover:scale-105"
                        >
                            <FiMessageCircle className="mr-2" />
                            Kirim Study Case Kalian!
                        </a>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    )
}
