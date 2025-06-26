import type { Skill } from "@/types"
import { FaJava, FaPython, FaReact, FaVuejs, FaNodeJs, FaFigma, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiJavascript, SiNextdotjs, SiSpringboot, SiDjango, SiExpress, SiPostgresql, SiMysql, SiTailwindcss, SiDart, SiFlutter, SiTypescript } from "react-icons/si"

export const skills: Skill[] = [
    // --- Language ---
    { name: "HTML", level: 95, color: "text-orange-500", category: "Language", icon: FaHtml5 },
    { name: "CSS", level: 90, color: "text-blue-500", category: "Language", icon: FaCss3Alt },
    { name: "JavaScript", level: 90, color: "text-yellow-400", category: "Language", icon: SiJavascript },
    { name: "TypeScript", level: 90, color: "text-blue-600", category: "Language", icon: SiTypescript },
    { name: "Python", level: 90, color: "text-sky-700", category: "Language", icon: FaPython },
    { name: "Java", level: 85, color: "text-orange-400", category: "Language", icon: FaJava },
    { name: "Dart", level: 75, color: "text-sky-500", category: "Language", icon: SiDart },

    // --- Framework ---
    { name: "Tailwind CSS", level: 90, color: "text-cyan-400", category: "Framework", icon: SiTailwindcss },
    { name: "React", level: 90, color: "text-sky-400", category: "Framework", icon: FaReact },
    { name: "Next.js", level: 90, color: "text-gray-900", category: "Framework", icon: SiNextdotjs },
    { name: "Vue.js", level: 85, color: "text-green-500", category: "Framework", icon: FaVuejs },
    { name: "Spring Boot", level: 85, color: "text-green-600", category: "Framework", icon: SiSpringboot },
    { name: "Django", level: 85, color: "text-emerald-800", category: "Framework", icon: SiDjango },
    { name: "Node.js", level: 85, color: "text-lime-500", category: "Framework", icon: FaNodeJs },
    { name: "Express.js", level: 85, color: "text-gray-700", category: "Framework", icon: SiExpress },
    { name: "Flutter", level: 75, color: "text-sky-600", category: "Framework", icon: SiFlutter },

    // --- Database ---
    { name: "PostgreSQL", level: 85, color: "text-sky-700", category: "Database", icon: SiPostgresql },
    { name: "MySQL", level: 85, color: "text-sky-800", category: "Database", icon: SiMysql },

    // --- Design ---
    { name: "Figma", level: 90, color: "text-purple-500", category: "Design", icon: FaFigma },
]
