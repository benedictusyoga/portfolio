export interface ProjectLink {
    label: string;
    url: string;
    type: 'github' | 'live' | 'figma' | 'other';
}

export interface ProjectInsights {
    impact: string[];
    novelty: string[];
    challenges: string[];
    learnings: string[];
}

export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    techStack: string[];
    isGroupProject: boolean;
    isFeatured?: boolean;
    year: string;
    thumbnail: string;
    links: ProjectLink[];
    insights: ProjectInsights;
    gradient?: string;
}
