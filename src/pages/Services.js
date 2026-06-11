import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Services.css';

function Services() {
  const services = [
    {
      icon: '🏢',
      title: 'Commercial Building',
      desc: 'Professional office and retail construction with modern design',
      features: ['Modern Design', 'Advanced Technology', 'Budget Compliance', 'Timely Completion']
    },
    {
      icon: '🏠',
      title: 'Residential Construction',
      desc: 'Custom homes built with premium materials and craftsmanship',
      features: ['Custom Design', 'Quality Materials', 'Expert Craftsmanship', 'On-Time Delivery']
    },
    {
      icon: '🔧',
      title: 'Renovation & Remodeling',
      desc: 'Transform existing spaces with modern updates and improvements',
      features: ['Space Planning', 'Material Selection', 'Minimal Disruption', 'Expert Execution']
    },
    {
      icon: '🌉',
      title: 'Infrastructure',
      desc: 'Large-scale public projects including roads, bridges, and utilities',
      features: ['Engineering Excellence', 'Safety Standards', 'Environmental Care', 'Quality Assurance']
    },
    {
      icon: '📋',
      title: 'Project Management',
      desc: 'End-to-end management ensuring smooth execution and optimal results',
      features: ['Planning & Scheduling', 'Cost Management', 'Quality Control', 'Risk Management']
    },
    {
      icon: '🎨',
      title: 'Design & Consulting',
      desc: 'Professional design and consulting services for your projects',
      features: ['Architectural Design', 'Feasibility Studies', 'Cost Estimation', 'Technical Support']
    }
  ];

  const process = [
    { num: '01', title: 'Consultation', desc: 'Understand your vision and requirements' },
    { num: '02', title: 'Planning', desc: 'Create detailed designs and proposals' },
    { num: '03', title: 'Estimation', desc: 'Provide accurate cost estimates' },
    { num: '04', title: 'Construction', desc: 'Execute with precision and quality' },
    { num: '05', title: 'Quality Check', desc: 'Rigorous testing and inspection' },
    { num: '06', title: 'Handover', desc: 'Project completion and support' }
  ];

  return (
    <div className="services-page">
      <section className="page-header primary-gradient">
        <div className="container text-center">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Our Services</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 0 }}>
            Comprehensive construction solutions for every need
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="features-list">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheckCircle />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Construction Process</h2>
            <p>A systematic approach to project excellence</p>
          </div>
          <div className="process-grid">
            {process.map((step, idx) => (
              <div key={idx} className="process-card">
                <div className="process-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;