export interface ProjectStep {
    stepTitle: string;
    description: string;
    image: string;
}

export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    techStack: string[];
    isGroupProject: boolean;
    isFeatured?: boolean;
    thumbnail: string;
    story: ProjectStep[];
    gradient?: string;
}
