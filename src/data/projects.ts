import type { Project } from '../types/Project';
import comeandfixImage from '../assets/comeandfix.png';

export const projects: Project[] = [
    {
        id: 'tiny',
        title: 'TINY',
        shortDescription: "A pregnancy-companion app that helps families capture the little one's precious moments. Built using SwiftUI and No-SQL databases, Tiny can be used anywhere with persistent data storage.",
        techStack: ['React', 'Swift'],
        isGroupProject: false,
        isFeatured: true,
        year: '2023',
        thumbnail: 'placeholder',
        gradient: 'linear-gradient(135deg, #7c3aed 0%, transparent 60%)',
        links: [
            { label: 'Source Code', url: 'https://github.com', type: 'github' },
            { label: 'Live Project', url: 'https://example.com', type: 'live' }
        ],
        insights: {
            impact: [
                'Helped over 500 families track their pregnancy journey.',
                'Featured in "Top 10 Health Apps of 2023".'
            ],
            novelty: [
                'First app to integrate real-time heartbeat visualization via microphone.',
                'Uses AI to predict baby kicks.'
            ],
            challenges: [
                'Optimizing audio processing for low-end devices.',
                'Ensuring data privacy compliance with HIPPA standards.'
            ],
            learnings: [
                'Deepened understanding of iOS Core Audio framework.',
                'Learned importance of user-centric design for expectant mothers.'
            ]
        }
    },
    {
        id: 'come-and-fix',
        title: 'COME&FIX',
        shortDescription: "A web application that helps homeowners quickly look for handymen in their local area.",
        techStack: ['React', 'Node', 'PostgreSQL'],
        isGroupProject: true,
        isFeatured: true,
        year: '2024',
        thumbnail: comeandfixImage,
        gradient: 'linear-gradient(135deg, #ea580c 0%, transparent 60%)',
        links: [
            { label: 'GitHub', url: 'https://github.com', type: 'github' },
            { label: 'Live Demo', url: 'https://comeandfix.com', type: 'live' }
        ],
        insights: {
            impact: [
                'Connected 100+ homeowners with local fixers.',
                'Reduced average booking time by 50%.'
            ],
            novelty: [
                'Real-time location tracking of handymen.',
                'Automated quote generation system.'
            ],
            challenges: [
                'Handling real-time socket connections for chat.',
                'Managing complex database relationships.'
            ],
            learnings: [
                'Mastered WebSocket implementation with Socket.io.',
                'Improved database schema design skills.'
            ]
        }
    },
    {
        id: 'cococo',
        title: 'COCO.CO - iOS Application Redesign',
        shortDescription: "A redesign of an iOS application based on the industry standards.",
        techStack: ['Swift', 'Figma'],
        isGroupProject: true,
        isFeatured: false,
        year: '2023',
        thumbnail: comeandfixImage,
        gradient: 'linear-gradient(135deg, #ea580c 0%, transparent 60%)',
        links: [
            { label: 'Figma Design', url: 'https://figma.com', type: 'figma' }
        ],
        insights: {
            impact: [
                'Improved user retention by 20%.',
                'Positive feedback from 90% of beta testers.'
            ],
            novelty: [
                'Introduced dark mode support.',
                'Streamlined navigation flow.'
            ],
            challenges: [
                'Adapting legacy codebase to new design system.',
                'Ensuring accessibility compliance.'
            ],
            learnings: [
                'Advanced Figma prototyping techniques.',
                'Understanding of Apple Human Interface Guidelines.'
            ]
        }
    }
];
