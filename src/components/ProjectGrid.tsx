import React, { useState } from 'react';
import { Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import './ProjectGrid.css';

interface ProjectGridProps {
  projects: Project[];
  showFilters?: boolean;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ 
  projects, 
  showFilters = false 
}) => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', 'Website', 'Identity', 'UI/UX', 'Systems'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="project-grid-container">
      {showFilters && (
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-chip ${filter === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      
      <div className="project-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="no-results">No projects found in this category.</p>
      )}
    </div>
  );
};
