import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <section className="page-header primary-gradient">
        <div className="container text-center">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Contact Us</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 0 }}>
            Let's discuss your construction project
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon"><FaPhone /></div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543</p>
              </div>

              <div className="info-card">
                <div className="info-icon"><FaEnvelope /></div>
                <h3>Email</h3>
                <p>info@buildpro.com</p>
                <p>projects@buildpro.com</p>
              </div>

              <div className="info-card">
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <h3>Address</h3>
                <p>123 Construction Ave</p>
                <p>City, State 12345</p>
              </div>

              <div className="info-card">
                <h3>Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <p>We'll get back to you within 24 hours</p>

              {submitted && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Project Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                  {loading ? 'Sending...' : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;