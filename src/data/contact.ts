import type { SocialLink, ContactInfo } from "@/types"
import { FiMapPin, FiMail, FiClock } from "react-icons/fi"
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        icon: FaGithub,
        url: "https://github.com/afsarakhaa",
        color: "hover:text-gray-800",
        bgColor: "hover:bg-gray-100",
        description: "Check out my code and projects",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        url: "https://linkedin.com/in/afsar-rakha-farrasandi",
        color: "hover:text-blue-600",
        bgColor: "hover:bg-blue-100",
        description: "Let's connect professionally",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        url: "https://instagram.com/afsarakhaa",
        color: "hover:text-pink-600",
        bgColor: "hover:bg-pink-100",
        description: "Follow my daily adventures",
    },
    {
        name: "X",
        icon: FaXTwitter,
        url: "#",
        color: "hover:text-gray-900",
        bgColor: "hover:bg-gray-200",
        description: "Join the conversation",
    },
    {
        name: "Discord",
        icon: FaDiscord,
        url: "https://discord.com",
        color: "hover:text-indigo-600",
        bgColor: "hover:bg-indigo-100",
        description: "pangeran_kodok",
    },
]

export const contactInfo: ContactInfo[] = [
    {
        icon: FiMapPin,
        title: "Location",
        info: "Jakarta, Indonesia",
        description: "Available for remote work worldwide",
    },
    {
        icon: FiMail,
        title: "Email",
        info: "afsarrakha140604@gmail.com",
        description: "Best way to reach me",
    },
    {
        icon: FiClock,
        title: "Response Time",
        info: "Within 24 hours",
        description: "Usually much faster!",
    },
]
