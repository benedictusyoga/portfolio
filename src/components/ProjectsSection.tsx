import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectsSection.css';
import { projects } from '../data/projects';
import { BsArrowUpRight, BsPeopleFill, BsPersonFill } from "react-icons/bs";
import { IoMdArrowRoundForward } from "react-icons/io";

const ProjectsSection: React.FC = () => {
    const navigate = useNavigate();
    const featuredProjects = projects
        .filter(p => p.isFeatured)
        .sort((a, b) => parseInt(b.year) - parseInt(a.year));

    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h2 className="projects-title-primary">FEATURED</h2>
                    <h2 className="projects-title-secondary">projects</h2>
                </div>

                <div className="projects-grid">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card"
                            style={{ '--card-gradient': project.gradient } as React.CSSProperties}
                            onClick={() => navigate(`/projects/${project.id}`)}
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

                <button className="see-all-btn" onClick={() => navigate('/projects')}>
                    See All My Projects <IoMdArrowRoundForward />
                </button>
            </div>
        </section>
    );
};

export default ProjectsSection;
