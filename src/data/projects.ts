import type { Project } from '../types/Project';

export const projects: Project[] = [
    {
        id: 'tiny',
        title: 'TINY',
        shortDescription: "Hear your baby's heartbeat!",
        mainTech: 'React',
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
        shortDescription: "Get your appliances fixed fast!",
        mainTech: 'Node',
        thumbnail: 'placeholder',
        gradient: 'linear-gradient(135deg, #ea580c 0%, transparent 60%)',
        story: []
    },
    {
        id: 'tiny-2',
        title: 'TINY',
        shortDescription: "Hear your baby's heartbeat!",
        mainTech: 'React',
        thumbnail: 'placeholder',
        gradient: 'linear-gradient(135deg, #2563eb 0%, transparent 60%)',
        story: []
    },
    {
        id: 'come-and-fix-2',
        title: 'COME&FIX',
        shortDescription: "Get your appliances fixed fast!",
        mainTech: 'Node',
        thumbnail: 'placeholder',
        gradient: 'linear-gradient(135deg, #16a34a 0%, transparent 60%)',
        story: []
    }
];
