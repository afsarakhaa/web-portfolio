"use client"

import { motion } from "framer-motion"

const frogs = [
    { xStart: "10%", yStart: "20%", xMove: [0, 100, -50, 0], yMove: [0, -30, 20, 0], duration: 8 },
    { xStart: "80%", yStart: "15%", xMove: [0, -80, 40, 0], yMove: [0, 40, -20, 0], duration: 6 },
    { xStart: "20%", yStart: "70%", xMove: [0, 60, -60, 0], yMove: [0, -25, 25, 0], duration: 7 },
    { xStart: "70%", yStart: "80%", xMove: [0, -40, 80, 0], yMove: [0, -35, 15, 0], duration: 9 },
    { xStart: "5%", yStart: "50%", xMove: [0, 120, -60, 0], yMove: [0, 20, -40, 0], duration: 5 },
]

export default function AnimatedFrogs() {
    return (
        <>
            {frogs.map((frog, index) => (
                <motion.div
                    key={index}
                    className="absolute text-green-600/30 text-2xl md:text-4xl lg:text-5xl pointer-events-none z-0"
                    initial={{ left: frog.xStart, top: frog.yStart }}
                    animate={{ x: frog.xMove, y: frog.yMove }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: frog.duration, ease: "easeInOut" }}
                >
                    🐸
                </motion.div>
            ))}
        </>
    )
}
