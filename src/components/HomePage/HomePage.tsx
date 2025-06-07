"use client"

import AnimatedFrogs from "./AnimatedFrogs"
import HeroSection from "./HeroSection"

export default function HomePage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center py-8 md:py-16 overflow-hidden">
            {/* Animated Background Frogs */}
            <AnimatedFrogs />

            {/* Main Hero Content */}
            <HeroSection />
        </div>
    )
}
