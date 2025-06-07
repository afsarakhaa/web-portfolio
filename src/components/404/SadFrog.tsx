"use client"

import { motion } from "framer-motion"

export default function SadFrog() {
    return (
        <motion.div
            className="relative"
            animate={{
                y: [-5, 5, -5],
                rotate: [-2, 2, -2],
            }}
            transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            }}
        >
            {/* Main Frog */}
            <motion.div
                className="text-8xl md:text-9xl lg:text-[12rem] filter drop-shadow-lg"
                whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 },
                }}
            >
                🐸
            </motion.div>

            {/* Tear Drop */}
            <motion.div
                className="absolute top-1/4 right-1/4 text-2xl md:text-3xl"
                animate={{
                    y: [0, 10, 0],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            >
                💧
            </motion.div>

            {/* Question Marks */}
            <motion.div
                className="absolute -top-4 -right-4 text-xl md:text-2xl"
                animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            >
                ❓
            </motion.div>
        </motion.div>
    )
}
