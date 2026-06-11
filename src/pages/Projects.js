import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, title: 'Modern Office Complex', cat: 'commercial', img: 'Project 1', loc: 'Downtown' },
    { id: 2, title: 'Luxury Residences', cat: 'residential', img: 'Project 2', loc: 'Waterfront' },
    { id: 3, title: 'Shopping Center', cat: 'commercial', img: 'Project 3', loc: 'City Center' },
    { id: 4, title: 'Villa Community', cat: 'residential', img: 'Project 4', loc: 'Suburbs' },
    { id: 5, title: 'Highway Bridge', cat: 'infrastructure', img: 'Project 5', loc: 'Metro Area' },
    { id: 6, title: 'Hospital Wing', cat: 'commercial', img: 'Project 6', loc: 'Medical District' },
    { id: 7, title: 'Smart Homes', cat: 'residential', img: 'Project 7', loc: 'Green Valley' },
    { id: 8, title: 'Tech Hub', cat: 'commercial', img: 'Project 8', loc: 'Innovation Zone' }
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter);

  return (
    <div className="projects-page">
      <section className="page-header primary-gradient">
        <div className="container text-center">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Our Projects</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 0 }}>
            Showcase of our excellence in construction
          </p>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <div className="filter-buttons">
            {['all', 'commercial', 'residential', 'infrastructure'].map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filtered.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">{project.img}</div>
                  <div className="project-overlay">
                    <span className="category-badge">{project.cat}</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="location">📍 {project.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;