import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, title: 'Office Interior', cat: 'commercial', img: 'Gallery 1' },
    { id: 2, title: 'Apartment Living', cat: 'residential', img: 'Gallery 2' },
    { id: 3, title: 'Glass Facade', cat: 'commercial', img: 'Gallery 3' },
    { id: 4, title: 'Kitchen Design', cat: 'residential', img: 'Gallery 4' },
    { id: 5, title: 'Skyline Project', cat: 'infrastructure', img: 'Gallery 5' },
    { id: 6, title: 'Retail Complex', cat: 'commercial', img: 'Gallery 6' },
    { id: 7, title: 'Villa Exterior', cat: 'residential', img: 'Gallery 7' },
    { id: 8, title: 'Bridge Project', cat: 'infrastructure', img: 'Gallery 8' },
    { id: 9, title: 'Office Lobby', cat: 'commercial', img: 'Gallery 9' },
    { id: 10, title: 'Bedroom Suite', cat: 'residential', img: 'Gallery 10' },
    { id: 11, title: 'Lobby Design', cat: 'commercial', img: 'Gallery 11' },
    { id: 12, title: 'Highway Project', cat: 'infrastructure', img: 'Gallery 12' }
  ];

  return (
    <div className="gallery-page">
      <section className="page-header primary-gradient">
        <div className="container text-center">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Project Gallery</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 0 }}>
            Visual showcase of our completed projects
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {images.map(image => (
              <div key={image.id} className="gallery-item" onClick={() => setSelectedImage(image)}>
                <div className="gallery-image">
                  <div className="gallery-placeholder">{image.img}</div>
                  <div className="gallery-overlay">
                    <span className="view-btn">View</span>
                  </div>
                </div>
                <div className="gallery-info">
                  <h3>{image.title}</h3>
                  <p>{image.cat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>
            <div className="modal-image">
              <div className="modal-placeholder">{selectedImage.img}</div>
            </div>
            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.cat}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;