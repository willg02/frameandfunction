import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';
import { Tag } from './Tag';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/work/${project.slug}`} className="project-card-link">
      <article className="project-card card">
        <div className="project-card-image">
          <img src={project.cover} alt={project.title} loading="lazy" />
        </div>
        <div className="project-card-content">
          <div className="project-card-header">
            <h3 className="project-card-title">{project.title}</h3>
            <Tag variant="default">{project.category}</Tag>
          </div>
          <p className="project-card-summary">{project.summary}</p>
          <div className="project-card-meta">
            <span className="project-card-year">{project.year}</span>
            <div className="project-card-tags">
              {project.role.slice(0, 2).map((role, i) => (
                <Tag key={i}>{role}</Tag>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
