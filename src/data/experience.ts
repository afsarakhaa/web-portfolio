import type { Experience } from "@/types"

export const experiences: Experience[] = [
    {
        id: 1,
        company: "PT Pustaka Mulia Sejahtera",
        position: "Software Engineer Intern",
        duration: "Jun 2024 - Sep 2024",
        location: "Pasar Rebo, Jakarta, Indonesia",
        description: [
            "Developed and revamped the company's official website using Django for back-end development.",
            "Implemented responsive UI components with Tailwind CSS, ensuring a consistent and modern user experience.",
            "Integrated MySQL database via Django ORM for efficient data management and scalability.",
            "Consumed external Web Services APIs to enable dynamic content and enhance website functionality."
        ],
        technologies: ["Django", "MySQL", "Tailwind CSS", "Web Services API"],
        current: false,
    },
    {
        id: 2,
        company: "PT Pustaka Mulia Sejahtera",
        position: "UX Designer Intern",
        duration: "Jan 2024 - Apr 2024",
        location: "Pasar Rebo, Jakarta, Indonesia",
        description: [
            "Designed intuitive UI/UX using Figma, improving usability and visual coherence across pages.",
            "Collaborated closely with the development team to ensure design implementation matched product goals.",
            "Conducted user research and usability testing to support design decisions.",
        ],
        technologies: ["Figma"],
        current: false,
    },
    {
        id: 3,
        company: "Pesta Rakyat Komputer",
        position: "Manager of Marketing",
        duration: "Nov 2023 - May 2024",
        location: "Depok, West Java, Indonesia",
        description: [
            "Led a 30+ member marketing team with 4 PIC/VPIC",
            "Implemented direct & digital campaigns that attracted 400+ attendees to the main event",
        ],
        technologies: ["Marketing", "Direct Marketing", "Social Media Marketing"],
        current: false,
    },
    {
        id: 4,
        company: "MAGNIFICOMPS",
        position: "Project Officer",
        duration: "Aug 2023 - Dec 2023",
        location: "Depok, West Java, Indonesia",
        description: [
            "Spearheaded the organization of Apresiasi BEM Fasilkom UI 2023, the first offline event held at Balai Sidang UI.",
            "Led project planning, coordination, and execution involving 250+ participants.",
            "Ensured successful collaboration across departments and handled event logistics and execution.",
        ],
        technologies: ["Project Management", "Leadership", "Communication"],
        current: false,
    },
    {
        id: 5,
        company: "RISTEK Fasilkom UI",
        position: "Member of Marketing and Communications",
        duration: "Mar 2023 - Dec 2023",
        location: "Depok, West Java, Indonesia",
        description: [
            "Served as the official voice actor for Bikun Tracker 2023, enhancing user engagement through audio interaction.",
            "Awarded Best Member for exceptional contributions in the first quarter of 2023."
        ],
        technologies: ["Marketing", "Leadership", "Team Management", "Communication"],
        current: false,
    },
]
