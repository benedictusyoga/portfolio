export interface ProjectStep {
    stepTitle: string;
    description: string;
    image: string;
}

export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    mainTech: string;
    thumbnail: string;
    story: ProjectStep[];
    gradient?: string;
}
