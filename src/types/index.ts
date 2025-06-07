export interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    github: string
    demo: string
    featured: boolean
}

export interface StudyCase {
    id: number
    title: string
    question: string
    options: StudyCaseOption[]
    category: string
    totalVotes: number
    comments: number
    trending: boolean
}

export interface StudyCaseOption {
    text: string
    votes: number
    emoji: string
}

export interface Skill {
    name: string
    level: number
    color: string
}

export interface Interest {
    icon: string
    title: string
    description: string
}

export interface SocialLink {
    name: string
    icon: any
    url: string
    color: string
    bgColor: string
    description: string
}

export interface ContactInfo {
    icon: any
    title: string
    info: string
    description: string
}

// Under Construction, will develop really soon
// export interface FormData {
//     name: string
//     email: string
//     subject: string
//     message: string
// }
