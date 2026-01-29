import React from 'react';
import './ProjectsSection.css';
import { projects } from '../data/projects';
import { FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiJavascript } from 'react-icons/si';
import { BsArrowUpRight } from "react-icons/bs";

const iconMap: { [key: string]: React.ReactNode } = {
    'React': <FaReact />,
    'Node': <FaNodeJs />,
    'Python': <FaPython />,
    'Java': <FaJava />,
    'TypeScript': <SiTypescript />,
    'JavaScript': <SiJavascript />
};

const ProjectsSection: React.FC = () => {
    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h2 className="projects-title-primary">CREATION</h2>
                    <h2 className="projects-title-secondary">highlights</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card"
                            style={{ '--card-gradient': project.gradient } as React.CSSProperties}
                        >
                            <div className="project-card-image">
                                <div className="card-overlay"></div>
                            </div>
                            <div className="project-card-content">
                                <BsArrowUpRight className="project-arrow" />
                                <div className="project-info">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.shortDescription}</p>
                                    <div className="project-tech-icon" style={{ marginTop: '0.5rem', fontSize: '1.2rem' }}>
                                        {iconMap[project.mainTech]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
