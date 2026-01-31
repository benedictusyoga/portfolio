import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';
import type { ProjectGalleryItem, Story } from '../../types/Project';
import { BsArrowLeft, BsGithub, BsGlobe, BsPeopleFill, BsPersonFill, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { SiApple } from "react-icons/si";
import './ProjectDetail.css';
import '../../components/ProjectsSection.css';

const StoryCard: React.FC<{ story: Story; defaultOpen?: boolean }> = ({ story, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="story-card">
            <div className="story-header" onClick={() => setIsOpen(!isOpen)} role="button" tabIndex={0}>
                <span className="story-category">{story.category}</span>
                <span className="story-toggle-btn">
                    {isOpen ? 'Collapse' : 'Expand'}
                    {isOpen ? <BsChevronUp /> : <BsChevronDown />}
                </span>
            </div>

            <div className={`story-body ${isOpen ? 'open' : ''}`}>
                <h3 className="story-title">{story.title}</h3>
                <p className="story-description">{story.description}</p>
                {story.image && (
                    <div className="story-image-container">
                        <img src={story.image} alt={story.title} className="story-image" />
                    </div>
                )}

                {(story.challenges || story.learnings) && (
                    <div className="story-takeaways-grid">
                        {story.challenges && (
                            <div className="takeaway-col">
                                <h4 className="takeaway-title">CHALLENGES</h4>
                                <ul className="takeaway-list">
                                    {story.challenges.map((c, i) => <li key={i}>{c}</li>)}
                                </ul>
                            </div>
                        )}
                        {story.learnings && (
                            <div className="takeaway-col">
                                <h4 className="takeaway-title">KEY TAKEAWAYS</h4>
                                <ul className="takeaway-list">
                                    {story.learnings.map((l, i) => <li key={i}>{l}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState<ProjectGalleryItem | null>(null);

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
            case 'testflight': return <SiApple />;
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
                    <span className="project-year" style={{ fontSize: '1rem' }}>{project.year}</span>
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
                    <h2 className="insights-header">my story</h2>

                    {project.stories ? (
                        <div className="stories-list">
                            {project.stories.map((story, index) => (
                                <StoryCard key={story.id} story={story} defaultOpen={index === 0} />
                            ))}
                        </div>
                    ) : (
                        // Fallback for projects without stories (e.g. existing hardcoded insights)
                        <>
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
                        </>
                    )}
                </div>

                {project.gallery && project.gallery.length > 0 && (
                    <div className="gallery-section">
                        <h2 className="gallery-header">gallery</h2>
                        <div className="gallery-grid">
                            {project.gallery.map((item, index) => (
                                <div key={index} className="gallery-card" onClick={() => setSelectedImage(item)}>
                                    <img src={item.image} alt="Gallery" className="gallery-image" />
                                    <div className="gallery-overlay">
                                        <p className="gallery-text">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {selectedImage && (
                <div className="gallery-modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="gallery-modal-close" onClick={() => setSelectedImage(null)}>&times;</button>
                        <img src={selectedImage.image} alt="Gallery Full" className="gallery-modal-image" />
                        <p className="gallery-modal-text">{selectedImage.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;
