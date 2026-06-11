import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import './Home.css';

function Home() {
  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '25+', label: 'Years Experience' },
    { value: '200+', label: 'Team Members' },
    { value: '99%', label: 'Client Satisfaction' }
  ];

  const services = [
    { icon: '🏢', title: 'Commercial Building', desc: 'Professional construction for offices and retail' },
    { icon: '🏠', title: 'Residential', desc: 'Custom homes built to perfection' },
    { icon: '🔧', title: 'Renovation', desc: 'Modernize existing spaces' },
    { icon: '🌉', title: 'Infrastructure', desc: 'Large-scale public projects' }
  ];

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Building Dreams Into Reality</h1>
            <p>Excellence in construction with innovative solutions and exceptional craftsmanship</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project <FaArrowRight />
              </Link>
              <Link to="/projects" className="btn btn-secondary btn-lg">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <span>Construction Visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section primary-gradient">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive construction solutions for every need</p>
          </div>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-preview-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt">
            <Link to="/services" className="btn btn-primary">
              Explore All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section primary-gradient">
        <div className="container text-center">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Build Your Project?</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
            Let's turn your vision into reality with professional construction services
          </p>
          <Link to="/contact" className="btn btn-accent btn-lg">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
