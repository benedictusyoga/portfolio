import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';
import { BsArrowLeft, BsGithub, BsGlobe, BsPeopleFill, BsPersonFill } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import './ProjectDetail.css';
import '../../components/ProjectsSection.css';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <div className="project-detail-page">Project not found</div>;
    }

    const getLinkIcon = (type: string) => {
        switch (type) {
            case 'github': return <BsGithub />;
            case 'live': return <BsGlobe />;
            case 'figma': return <FaFigma />;
            default: return <FiExternalLink />;
        }
    };

    return (
        <div className="project-detail-page">
            <div className="project-detail-container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <BsArrowLeft /> Back
                </button>

                <div className="detail-header">
                    <h1 className="detail-title">{project.title}</h1>
                    <p className="detail-description">{project.shortDescription}</p>

                    <div className="detail-meta-row">
                        <div className="project-type-indicator">
                            {project.isGroupProject ? <BsPeopleFill /> : <BsPersonFill />}
                        </div>

                        <div className="tech-stack-scroll">
                            {project.techStack.map((tech) => (
                                <span key={tech} className="tech-pill">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="detail-actions">
                        {project.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`action-btn ${index === 0 ? 'primary' : 'outline'}`}
                            >
                                {link.label}
                                {getLinkIcon(link.type)}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="insights-section">
                    <h2 className="insights-header">My Insights</h2>

                    {project.insights.impact && project.insights.impact.length > 0 && (
                        <div className="insight-block">
                            <h3 className="insight-title">Impact</h3>
                            <ul className="insight-list">
                                {project.insights.impact.map((item, i) => (
                                    <li key={i} className="insight-item">{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.insights.novelty && project.insights.novelty.length > 0 && (
                        <div className="insight-block">
                            <h3 className="insight-title">Novelty</h3>
                            <ul className="insight-list">
                                {project.insights.novelty.map((item, i) => (
                                    <li key={i} className="insight-item">{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.insights.challenges && project.insights.challenges.length > 0 && (
                        <div className="insight-block">
                            <h3 className="insight-title">Main Challenges</h3>
                            <ul className="insight-list">
                                {project.insights.challenges.map((item, i) => (
                                    <li key={i} className="insight-item">{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.insights.learnings && project.insights.learnings.length > 0 && (
                        <div className="insight-block">
                            <h3 className="insight-title">Key Takeaways and Learnings</h3>
                            <ul className="insight-list">
                                {project.insights.learnings.map((item, i) => (
                                    <li key={i} className="insight-item">{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
