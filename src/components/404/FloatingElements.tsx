"use client"

import { motion } from "framer-motion"

const floatingElements = [
    { emoji: "🐸", x: "10%", y: "20%", delay: 0, duration: 6 },
    { emoji: "💻", x: "80%", y: "15%", delay: 1, duration: 8 },
    { emoji: "🔍", x: "15%", y: "70%", delay: 2, duration: 7 },
    { emoji: "📱", x: "75%", y: "80%", delay: 0.5, duration: 9 },
    { emoji: "⭐", x: "5%", y: "50%", delay: 1.5, duration: 5 },
    { emoji: "🚀", x: "85%", y: "45%", delay: 2.5, duration: 6 },
    { emoji: "💡", x: "25%", y: "25%", delay: 3, duration: 7 },
    { emoji: "🎯", x: "65%", y: "65%", delay: 0.8, duration: 8 },
]

export default function FloatingElements() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {floatingElements.map((element, index) => (
                <motion.div
                    key={index}
                    className="absolute text-2xl md:text-3xl opacity-20"
                    style={{ left: element.x, top: element.y }}
                    animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        rotate: [-5, 5, -5],
                    }}
                    transition={{
                        duration: element.duration,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: element.delay,
                        ease: "easeInOut",
                    }}
                >
                    {element.emoji}
                </motion.div>
            ))}
        </div>
    )
}
