import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Tag } from '../components/Tag';
import { Button } from '../components/Button';
import { getProjectBySlug } from '../data/projects';
import type { Project } from '../data/projects';
import './ProjectDetail.css';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      if (slug) {
        const data = await getProjectBySlug(slug);
        setProject(data || null);
      }
    };
    loadProject();
  }, [slug]);

  if (!project) {
    return (
      <main id="main-content">
        <Section>
          <Container>
            <h1>Project not found</h1>
            <Button variant="secondary" as="link" href="/work">
              Back to Work
            </Button>
          </Container>
        </Section>
      </main>
    );
  }

  return (
    <main id="main-content">
      <Section>
        <Container>
          <div className="project-detail-header">
            <Link to="/work" className="back-link">← Back to Work</Link>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-summary-large">{project.summary}</p>
            
            <div className="project-meta-grid">
              <div className="meta-item">
                <h4>Role</h4>
                <div className="meta-tags">
                  {project.role.map((role, i) => (
                    <Tag key={i}>{role}</Tag>
                  ))}
                </div>
              </div>
              
              <div className="meta-item">
                <h4>Deliverables</h4>
                <div className="meta-tags">
                  {project.deliverables.map((item, i) => (
                    <Tag key={i}>{item}</Tag>
                  ))}
                </div>
              </div>
              
              <div className="meta-item">
                <h4>Stack</h4>
                <div className="meta-tags">
                  {project.stack.map((tech, i) => (
                    <Tag key={i}>{tech}</Tag>
                  ))}
                </div>
              </div>
              
              <div className="meta-item">
                <h4>Year</h4>
                <p className="meta-value">{project.year}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section size="small">
        <Container>
          <div className="project-cover">
            <img src={project.cover} alt={project.title} />
          </div>
        </Container>
      </Section>

      {project.gallery && project.gallery.length > 0 && (
        <Section size="small">
          <Container>
            <h2>Gallery</h2>
            <div className="project-gallery">
              {project.gallery.map((image, i) => (
                <div key={i} className="gallery-item">
                  <img src={image} alt={`${project.title} - Image ${i + 1}`} />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {project.outcome && (
        <Section size="small" className="outcome-section">
          <Container>
            <div className="outcome-box">
              <h3>Outcome</h3>
              <p>{project.outcome}</p>
            </div>
          </Container>
        </Section>
      )}

      <Section size="small">
        <Container>
          <div className="project-detail-cta">
            <h2>Interested in working together?</h2>
            <Button variant="primary" as="link" href="/contact">
              Get in touch
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
};
