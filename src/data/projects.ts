import type { Project } from '../types/Project';
import comeandfixImage from '../assets/comeandfix.png';

export const projects: Project[] = [
    {
        id: 'tiny',
        title: 'TINY',
        shortDescription: "A pregnancy-companion app that helps families capture the little one's precious moments.",
        techStack: ['React', 'Swift'],
        isGroupProject: false,
        isFeatured: true,
        year: '2023',
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
        year: '2024',
        thumbnail: comeandfixImage,
        gradient: 'linear-gradient(135deg, #ea580c 0%, transparent 60%)',
        story: []
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
        story: []
    }
];
