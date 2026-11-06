import React from 'react';
import { Hero } from './components/Hero';
import { InvitationMessage } from './components/InvitationMessage';
import { EventDetails } from './components/EventDetails';
import { PhotoGallery } from './components/PhotoGallery';
import { Closing } from './components/Closing';
import { MusicPlayer } from './components/MusicPlayer';

export const App: React.FC = () => {
  return (
    <div className="invitation-app-root">
      {/* Background Ambience Layers */}
      <div className="bg-ambience" aria-hidden="true">
        <div className="bg-gradient-radial" />
        <div className="bg-paithani-pattern" />
        <div className="bg-glow-orb orb-1" />
        <div className="bg-glow-orb orb-2" />
      </div>

      {/* Persistent Audio Controller */}
      <header className="site-header">
        <div className="header-inner">
          <div className="auspicious-knot">
            <span className="knot-icon">卐</span>
            <span className="knot-text">शुभ सोहळा</span>
          </div>
          <MusicPlayer />
        </div>
      </header>

      {/* Main Single Page Invitation Flow */}
      <main className="invitation-main-container">
        <Hero />
        <InvitationMessage />
        <EventDetails />
        <PhotoGallery />
        <Closing />
      </main>

      {/* Auspicious Maharashtrian Footer */}
      <footer className="site-footer" role="contentinfo">
        <div className="footer-content">
          <p className="footer-shloka">॥ सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके ॥</p>
          <p className="footer-copyright">
            सप्रेम निमंत्रण — रोहन आणि स्नेहल
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

