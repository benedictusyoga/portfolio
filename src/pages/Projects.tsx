import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { BsArrowUpRight, BsPeopleFill, BsPersonFill, BsArrowLeft } from "react-icons/bs";
import '../components/ProjectsSection.css'; // Reuse card styles
import './Projects.css'; // Page specific styles

const Projects: React.FC = () => {
    const navigate = useNavigate();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sortedProjects = [...projects].sort((a, b) => parseInt(b.year) - parseInt(a.year));

    return (
        <div className="projects-page">
            <div className="projects-page-container">
                <div className="projects-page-header">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        <BsArrowLeft /> Back
                    </button>
                    <h1 className="projects-page-title">MY PROJECTS</h1>
                    <p className="projects-page-description">
                        These are a selection of my projects that I have worked on for the past few years,
                        whether as a group or a solo project.
                    </p>
                </div>

                <div className="projects-grid">
                    {sortedProjects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card"
                            style={{ '--card-gradient': project.gradient } as React.CSSProperties}
                        >
                            <div className="project-card-image">
                                <img src={project.thumbnail} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div className="card-overlay"></div>
                            </div>
                            <div className="project-card-content">
                                <BsArrowUpRight className="project-arrow" />
                                <div className="project-info">
                                    <span className="project-year">{project.year}</span>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.shortDescription}</p>

                                    <div className="project-meta">
                                        <div className="project-type-indicator">
                                            {project.isGroupProject ? <BsPeopleFill /> : <BsPersonFill />}
                                        </div>

                                        <div className="tech-stack-scroll">
                                            {project.techStack.map((tech) => (
                                                <span key={tech} className="tech-pill">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;