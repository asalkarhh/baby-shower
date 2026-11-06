import React from 'react';
import { eventDetails } from '../config/eventDetails';
import { PeacockMotif, OrnateDivider } from './Decorations';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" aria-label="मुख्य निमंत्रण">
      {/* Top Auspicious Invocation with Divine Glow */}
      <div className="hero-top-invocation animate-fade-in">
        <div className="om-divine-symbol">ॐ</div>
        <p className="invocation-text">{eventDetails.invocation}</p>
      </div>

      {/* Royal Arch Frame for Couple Portrait */}
      <div className="royal-pavilion-frame">
        {/* Poetic Couplet */}
        <div className="hero-couplet-wrap">
          <blockquote className="hero-couplet">
            {eventDetails.poeticCouplet.line1}
            <br />
            {eventDetails.poeticCouplet.line2}
          </blockquote>
        </div>

        <OrnateDivider compact />

        {/* Arched Couple Portrait */}
        <div className="arch-photo-container">
          <div className="arch-photo-frame">
            <picture>
              <source srcSet="/images/hero-rohan-snehal.webp" type="image/webp" />
              <img
                src="/images/hero-rohan-snehal.jpg"
                alt="रोहन आणि स्नेहल यांचे डोहाळे जेवणाचे पारंपरिक छायाचित्र"
                className="arch-hero-img"
                width={768}
                height={1024}
                loading="eager"
                fetchPriority="high"
              />
            </picture>
            <div className="arch-inner-glow" aria-hidden="true" />
          </div>
          <p className="photo-credit-tag">{eventDetails.photographerCredit}</p>
        </div>

        {/* Ceremony Titles */}
        <div className="hero-names-section">
          <div className="hero-peacock-icon">
            <PeacockMotif size={38} />
          </div>

          <h1 className="hero-ceremony-title">{eventDetails.eventTitle}</h1>

          <div className="invitation-gold-pill">
            <span className="pill-star">✦</span>
            <span className="pill-label">{eventDetails.eventSubtitle}</span>
            <span className="pill-star">✦</span>
          </div>

          <p className="hero-couple-display">{eventDetails.coupleNames}</p>
        </div>
      </div>
    </section>
  );
};
