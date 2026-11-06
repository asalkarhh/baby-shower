import React from 'react';
import { eventDetails } from '../config/eventDetails';
import { OrnateDivider, PeacockMotif } from './Decorations';

export const InvitationMessage: React.FC = () => {
  return (
    <section className="invitation-letter-section" aria-label="सस्नेह निमंत्रण संदेश">
      <div className="royal-letter-scroll">
        <div className="letter-header">
          <div className="letter-motif">
            <PeacockMotif size={28} variant="flourish" />
          </div>
          <h2 className="letter-title">सस्नेह निमंत्रण</h2>
        </div>

        <OrnateDivider compact />

        {/* Snehal's Supporting Portrait in Arched Vignette */}
        <div className="letter-portrait-wrap">
          <div className="letter-portrait-frame">
            <picture>
              <source srcSet="/images/supporting-snehal-peacock.webp" type="image/webp" />
              <img
                src="/images/supporting-snehal-peacock.jpg"
                alt="स्नेहलचे मोरपीस हातात धरलेले पारंपरिक छायाचित्र"
                className="letter-portrait-img"
                width={768}
                height={1024}
                loading="lazy"
              />
            </picture>
            <div className="portrait-glow" aria-hidden="true" />
          </div>
          <p className="photo-credit-tag">{eventDetails.photographerCredit}</p>
        </div>

        {/* Marathi Message Text */}
        <div className="letter-body-block">
          <p className="letter-para lead-para">
            {eventDetails.invitationMessage.paragraph1}
          </p>
          <p className="letter-para highlight-para">
            {eventDetails.invitationMessage.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
};
