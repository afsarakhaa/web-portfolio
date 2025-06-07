"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface GlitchTextProps {
    text: string
    className?: string
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
    const [glitchText, setGlitchText] = useState(text)

    useEffect(() => {
        const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
        let interval: NodeJS.Timeout

        const startGlitch = () => {
            interval = setInterval(() => {
                if (Math.random() > 0.8) {
                    const glitched = text
                        .split("")
                        .map((char) => (Math.random() > 0.9 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char))
                        .join("")
                    setGlitchText(glitched)

                    setTimeout(() => setGlitchText(text), 100)
                }
            }, 2000)
        }

        startGlitch()
        return () => clearInterval(interval)
    }, [text])

    return (
        <motion.span
            className={className}
            animate={{
                textShadow: ["0 0 0 transparent", "2px 2px 0 #ff0000, -2px -2px 0 #00ff00", "0 0 0 transparent"],
            }}
            transition={{
                duration: 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
            }}
        >
            {glitchText}
        </motion.span>
    )
}
