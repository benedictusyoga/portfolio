import type { Project } from '../types/Project';

export const projects: Project[] = [
    {
        id: 'tiny',
        title: 'TINY',
        shortDescription: "A pregnancy-companion app that helps families capture the little one's precious moments.",
        techStack: ['React', 'Swift'],
        isGroupProject: false,
        isFeatured: true,
        thumbnail: 'placeholder',
        gradient: 'linear-gradient(135deg, #7c3aed 0%, transparent 60%)',
        story: [
            {
                stepTitle: 'The Problem',
                description: 'Parents often struggle to monitor their unborn baby’s health at home.',
                image: 'placeholder'
            },
            {
                stepTitle: 'The Solution',
                description: 'A mobile app connected to a smart device that amplifies and records heartbeats.',
                image: 'placeholder'
            }
        ]
    },
    {
        id: 'come-and-fix',
        title: 'COME&FIX',
        shortDescription: "A web application that helps homeowners quickly look for handymen in their local area.",
        techStack: ['React', 'Node', 'PostgreSQL'],
        isGroupProject: true,
        isFeatured: true,
        thumbnail: 'placeholder',
        gradient: 'linear-gradient(135deg, #ea580c 0%, transparent 60%)',
        story: []
    },
    {
        id: 'tiny-2',
        title: 'TINY',
        shortDescription: "Hear your baby's heartbeat!",
        techStack: ['React'],
        isGroupProject: false,
        thumbnail: 'placeholder',
        gradient: 'linear-gradient(135deg, #2563eb 0%, transparent 60%)',
        story: []
    },
    {
        id: 'come-and-fix-2',
        title: 'COME&FIX',
        shortDescription: "Get your appliances fixed fast!",
        techStack: ['Node'],
        isGroupProject: true,
        thumbnail: 'placeholder',
        gradient: 'linear-gradient(135deg, #16a34a 0%, transparent 60%)',
        story: []
    }
];
