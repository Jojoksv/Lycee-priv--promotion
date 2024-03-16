import { useState } from 'react';
import '../styles/Orienter.css';
import biblio2 from '../assets/biblio2.jpg'

function Orienter() {
  const [activeTab, setActiveTab] = useState('gallery');

  const showTab = (tabName) => {
    setActiveTab(tabName);
  };

  const galleryImages = [
    { id: 1, src: biblio2, alt: 'Description de l\'image 1', description: 'Description de l\'image 1' },
    { id: 2, src: biblio2, alt: 'Description de l\'image 2', description: 'Description de l\'image 2' },
  ];

  return (
    <div className="app">
      <header>
        <div className="container">
          <h1>Lycée Privé Promotion</h1>
          <p>Un lieu d'apprentissage exceptionnel</p>
        </div>
      </header>

      <nav className="tabs">
        <div className="container">
          <ul>
            <li className={`tab ${activeTab === 'gallery' ? 'active' : ''}`} onClick={() => showTab('gallery')}>Galerie</li>
            <li className={`tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => showTab('about')}>À propos</li>
            <li className={`tab ${activeTab === 'features' ? 'active' : ''}`} onClick={() => showTab('features')}>Fonctionnalités</li>
          </ul>
        </div>
      </nav>

      <div className="container">
        {activeTab === 'gallery' && (
          <section className="tab-content">
            <h2>Galerie d'images</h2>
            <div className="image-gallery">
              {galleryImages.map(image => (
                  <div key={image.id} className="image-container">
                    <img src={image.src} alt={image.alt} />
                    <p>{image.description}</p>
                  </div>
                ))}
            </div>
          </section>
        )}

        {activeTab === 'about' && (
          <section className="tab-content">
            <h2>À propos de notre école</h2>
            <p>Une brève description de l'histoire, des valeurs et de la mission de l'école.</p>
          </section>
        )}

        {activeTab === 'features' && (
          <section className="tab-content">
            <h2>Fonctionnalités de l'école</h2>
            <ul>
              <li>Infrastructure moderne</li>
              <li>Équipe pédagogique dévouée</li>
              <li>Programmes académiques de qualité</li>
              {/* Ajoutez d'autres fonctionnalités */}
            </ul>
          </section>
        )}
      </div>

      <footer>
        <div className="container">
          <p>&copy; 2023 Lycée Privé Promotion</p>
        </div>
      </footer>
    </div>
  );
}

export default Orienter;
