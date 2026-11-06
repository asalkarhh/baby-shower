import React from 'react';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus } from 'lucide-react';
import { eventDetails } from '../config/eventDetails';
import { OrnateDivider, PeacockMotif } from './Decorations';
import { CountdownTimer } from './CountdownTimer';

export const EventDetails: React.FC = () => {
  const { details } = eventDetails;

  // Generate Google Calendar Link
  const gcalTitle = encodeURIComponent('स्नेहलचे डोहाळे जेवण (रोहन आणि स्नेहल)');
  const gcalDetails = encodeURIComponent(
    'स्नेहलचे डोहाळे जेवण सोहळा — बालाजी मंगल कार्यालय, दहिवडी. या आनंदसोहळ्यास आपण सहर्ष उपस्थित राहावे!'
  );
  const gcalLocation = encodeURIComponent('बालाजी मंगल कार्यालय, दहिवडी');
  // 11 Nov 2026, 11:00 AM IST to 3:00 PM IST (UTC: 20261111T053000Z to 20261111T093000Z)
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${gcalTitle}&dates=20261111T053000Z/20261111T093000Z&details=${gcalDetails}&location=${gcalLocation}`;

  return (
    <section className="event-details-section" aria-label="कार्यक्रमाचे तपशील">
      <div className="event-royal-patrika">
        {/* Ornate Gold Crown */}
        <div className="patrika-header">
          <div className="patrika-motif">
            <PeacockMotif size={32} variant="eye" />
          </div>
          <span className="patrika-tag">शुभ मुहूर्त व स्थळ</span>
          <h2 className="patrika-title">कार्यक्रमाचे तपशील</h2>
        </div>

        <OrnateDivider />

        {/* Live Countdown Timer */}
        <CountdownTimer />

        {/* Detail Cards Row/Grid */}
        <div className="patrika-grid">
          {/* Date Card */}
          <div className="patrika-card date-card">
            <div className="patrika-icon-badge" aria-hidden="true">
              <Calendar size={26} />
            </div>
            <div className="patrika-info">
              <span className="info-label">{details.dateLabel}</span>
              <p className="info-value gold-text">{details.dateValue}</p>
            </div>
          </div>

          {/* Time Card */}
          <div className="patrika-card time-card">
            <div className="patrika-icon-badge" aria-hidden="true">
              <Clock size={26} />
            </div>
            <div className="patrika-info">
              <span className="info-label">{details.timeLabel}</span>
              <p className="info-value gold-text">{details.timeValue}</p>
            </div>
          </div>

          {/* Venue Card */}
          <div className="patrika-card venue-card">
            <div className="patrika-icon-badge" aria-hidden="true">
              <MapPin size={26} />
            </div>
            <div className="patrika-info">
              <span className="info-label">{details.venueLabel}</span>
              <p className="info-value venue-main">{details.venueName}</p>
              <p className="venue-sub">{details.venueCity}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="patrika-actions">
          {/* Prominent Google Maps Button with exact supplied URL */}
          <a
            href={details.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-primary"
            aria-label={`${details.mapsButtonText} - ${details.venueName}, ${details.venueCity} गुगल मॅप्सवर उघडा`}
          >
            <Navigation size={20} className="btn-icon" aria-hidden="true" />
            <span className="btn-text">{details.mapsButtonText}</span>
            <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>

          {/* Add to Calendar Button */}
          <a
            href={gcalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-teal-secondary"
            aria-label={`${details.calendarButtonText} - गुगल कॅलेंडरमध्ये नोंद करा`}
          >
            <CalendarPlus size={18} className="btn-icon" aria-hidden="true" />
            <span className="btn-text">{details.calendarButtonText}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
