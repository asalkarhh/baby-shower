import React, { useState, useEffect } from 'react';
import { eventDetails } from '../config/eventDetails';

const toDevanagari = (num: number): string => {
  const digits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  const s = Math.max(0, num).toString().padStart(2, '0');
  return s
    .split('')
    .map((c) => digits[parseInt(c, 10)] ?? c)
    .join('');
};

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });

  useEffect(() => {
    const target = new Date(eventDetails.eventDateISO).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-widget" aria-label="सोहळ्याची वेळ मोजणी">
      <div className="countdown-header">
        <span className="countdown-sparkle">✦</span>
        <span className="countdown-title">आनंदसोहळ्यास अवघे काही क्षण बाकी</span>
        <span className="countdown-sparkle">✦</span>
      </div>

      <div className="countdown-grid">
        <div className="time-tile">
          <span className="time-num">{toDevanagari(timeLeft.days)}</span>
          <span className="time-label">दिवस</span>
        </div>
        <div className="time-sep">:</div>
        <div className="time-tile">
          <span className="time-num">{toDevanagari(timeLeft.hours)}</span>
          <span className="time-label">तास</span>
        </div>
        <div className="time-sep">:</div>
        <div className="time-tile">
          <span className="time-num">{toDevanagari(timeLeft.minutes)}</span>
          <span className="time-label">मिनिटे</span>
        </div>
        <div className="time-sep">:</div>
        <div className="time-tile">
          <span className="time-num">{toDevanagari(timeLeft.seconds)}</span>
          <span className="time-label">सेकंद</span>
        </div>
      </div>
    </div>
  );
};

