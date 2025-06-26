"use client"

import Typewriter from "typewriter-effect"
import { useState } from "react"

export default function TypeWriterComp() {
    const [roles] = useState([
        "an Information Systems student @ University of Indonesia",
        "a Product & Software Engineer",
        "a Natural-Born Yapper :')",
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
