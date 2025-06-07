"use client"

import Typewriter from "typewriter-effect"
import { useState } from "react"

export default function TypeWriterComp() {
    const [roles] = useState([
        "an IS student @ University of Indonesia",
        "a Web Dev & UX Design Enthusiast",
        "a Professional Yapper 😎",
        "someone who loves creating digital magic ✨",
    ])

    return (
        <Typewriter
            options={{
                strings: roles,
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 80,
            }}
        />
    )
}
