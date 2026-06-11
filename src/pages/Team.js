import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Team.css';

function Team() {
  const members = [
    { name: 'John Smith', role: 'CEO', bio: '25+ years experience', img: 'Member 1' },
    { name: 'Sarah Johnson', role: 'COO', bio: 'Operations expert', img: 'Member 2' },
    { name: 'Michael Chen', role: 'CTO', bio: 'Tech innovator', img: 'Member 3' },
    { name: 'Emily Davis', role: 'Design Head', bio: 'Award-winning architect', img: 'Member 4' },
    { name: 'Robert Wilson', role: 'Project Director', bio: 'Construction lead', img: 'Member 5' },
    { name: 'Jessica Brown', role: 'Safety Manager', bio: 'Safety specialist', img: 'Member 6' },
    { name: 'David Garcia', role: 'Senior Engineer', bio: 'Engineering expert', img: 'Member 7' },
    { name: 'Lisa Anderson', role: 'Business Dev', bio: 'Growth strategist', img: 'Member 8' }
  ];

  return (
    <div className="team-page">
      <section className="page-header primary-gradient">
        <div className="container text-center">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Our Team</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 0 }}>
            Expert professionals committed to excellence
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="team-grid">
            {members.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-image">
                  <div className="team-placeholder">{member.img}</div>
                  <div className="team-overlay">
                    <div className="social-icons">
                      <a href="#linkedin" aria-label="LinkedIn"><FaLinkedin /></a>
                      <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
                      <a href="#email" aria-label="Email"><FaEnvelope /></a>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;