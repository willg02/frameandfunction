import React, { useEffect, useState } from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { ProjectGrid } from '../components/ProjectGrid';
import { getProjects } from '../data/projects';
import type { Project } from '../data/projects';

export const Work: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    loadProjects();
  }, []);

  return (
    <main id="main-content">
      <Section>
        <Container>
          <div className="page-header">
            <h1>Work</h1>
            <p className="page-description">
              Case studies and projects spanning web design, brand identity, UX research, and design systems. 
              Each one built with clarity, modularity, and longevity in mind.
            </p>
          </div>
        </Container>
      </Section>

      <Section size="small">
        <Container>
          <ProjectGrid projects={projects} showFilters={true} />
        </Container>
      </Section>
    </main>
  );
};
