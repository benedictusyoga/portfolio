import appleLogo from '../assets/ada_logo.jpeg';

export interface ExperienceDetail {
    description: string;
    points: string[];
}

export interface ExperienceItem {
    id: number;
    company: string;
    role: string;
    period: string;
    logo?: string;
    details: ExperienceDetail[];
}

export const experiences: ExperienceItem[] = [
    {
        id: 1,
        company: "Apple Developer Academy",
        role: "Junior iOS Developer",
        period: "Jan 2025 - Dec 2025",
        details: [
            {
                description: "Backend iOS developer and CI/CD lead - Tiny, pregnancy companion to help parents connect with baby with heartbeat",
                points: [
                    "Established firebase backend with authentication, object storage, and firestore capabilities",
                    "Established CI/CD pipelines for automated testing and deployment workflows using Xcode cloud",
                    "Supervised code architecture and quality standards for maintainable codebase",
                    "Contributed to the development logic including sound processing logic using audio and interface frameworks"
                ]
            }
        ],
        logo: appleLogo
    },
    {
        id: 2,
        company: "Apple Developer Academy",
        role: "Junior iOS Developer",
        period: "Jan 2025 - Dec 2025",
        details: [
            {
                description: "iOS Developer for various cohort projects focusing on health and utility apps.",
                points: [
                    "Collaborated with cross-functional teams to design and implement user-centric iOS applications",
                    "Utilized SwiftUI and UIKit to build responsive and accessible user interfaces",
                    "Conducted user research and usability testing to iterate on product features",
                    "Mentored junior peers in Swift programming best practices"
                ]
            }
        ],
        logo: appleLogo
    }
];

export const uniqueSkills = ["React", "Swift", "TypeScript", "Node.js", "CSS", "HTML", "Git", "Figma", "Xcode", "Firebase"];
