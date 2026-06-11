import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import './About.css';

function About() {
  const values = [
    { icon: '⭐', title: 'Quality', desc: 'Excellence in every project detail' },
    { icon: '🤝', title: 'Integrity', desc: 'Honest and transparent dealings' },
    { icon: '💡', title: 'Innovation', desc: 'Modern methods and technology' },
    { icon: '🛡️', title: 'Safety', desc: 'Zero-tolerance safety standards' }
  ];

  const reasons = [
    'Over 25 years of industry experience',
    '500+ successfully completed projects',
    'Dedicated team of skilled professionals',
    'Advanced construction technology',
    'Transparent communication throughout',
    'On-time delivery guarantee'
  ];

  return (
    <div className="about-page">
      <section className="page-header primary-gradient">
        <div className="container text-center">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>About BuildPro</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 0 }}>Excellence in construction since 1999</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                BuildPro is a leading construction company with over 25 years of experience delivering exceptional
                projects across commercial, residential, and infrastructure sectors.
              </p>
              <p>
                Our team of skilled professionals is dedicated to transforming visions into reality through innovative
                design, meticulous planning, and superior execution.
              </p>
              <p>
                We take pride in our reputation for on-time delivery, budget compliance, and exceeding client expectations.
              </p>
              <div className="about-features">
                {reasons.map((reason, idx) => (
                  <div key={idx} className="feature">
                    <FaCheckCircle />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-image">
              <div className="about-placeholder">
                <span>Company Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>
                To deliver world-class construction services that combine innovation, quality, and sustainability,
                while building lasting relationships with clients and communities.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and respected construction partner, known for delivering exceptional projects
                that enhance the built environment and stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="core-values">
        <div className="container">
          <div className="section-header">
            <h2>Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;