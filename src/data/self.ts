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
            },
            {
                description: "Machine learning and iOS developer - Telly, a BISINDO sign language learning app",
                points: [
                    "Developed a BISINDO machine learning classifier model with an average F1-Score of 0.88",
                    "Gathered primary datasets for training and testing purposes of the machine learning model",
                    "Implemented the machine learning model to the iOS application"
                ]
            }
        ],
        logo: appleLogo
    }
];

export const uniqueSkills = [
    "Swift",
    "SQL",
    "Java",
    "C/C++",
    "PHP/Laravel",
    "REST APIs",
    "AWS",
    "Azure",
    "Railway",
    "Xcode",
    "Xcode Cloud",
    "AppStore Connect",
    "GitHub & Actions"
];
