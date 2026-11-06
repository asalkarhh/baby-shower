import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { eventDetails } from '../config/eventDetails';

export const MusicPlayer: React.FC = () => {
  const { music } = eventDetails;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set gentle, warm background volume
    audio.volume = 0.45;

    const onCanPlay = () => setIsReady(true);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => setIsPlaying(false));
    };

    audio.addEventListener('canplay', onCanPlay);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('canplay', onCanPlay);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
    } else {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Playback could not begin:', err);
          setIsPlaying(false);
        });
      }
    }
  };

  return (
    <>
      {/* Hidden HTML5 Audio Element with local multi-source fallbacks */}
      <audio ref={audioRef} loop preload="auto" playsInline>
        <source src={music.audioSrcM4a} type="audio/mp4" />
        <source src={music.audioSrcMp4} type="audio/mp4" />
        {music.audioSrcMp3 && <source src={music.audioSrcMp3} type="audio/mpeg" />}
        <source src={music.audioSrcWavFallback} type="audio/wav" />
      </audio>

      {/* Persistent Audio Control Pill */}
      <div className="music-player-container" role="region" aria-label={music.ariaLabel}>
        <button
          type="button"
          onClick={toggleMusic}
          className={`music-toggle-btn ${isPlaying ? 'playing' : 'paused'} ${isReady ? 'ready' : ''}`}
          aria-label={isPlaying ? music.pauseLabel : music.playLabel}
          aria-pressed={isPlaying}
        >
          {isPlaying ? (
            <>
              <div className="music-wave-bars" aria-hidden="true">
                <span className="wave-bar bar-1" />
                <span className="wave-bar bar-2" />
                <span className="wave-bar bar-3" />
              </div>
              <Volume2 className="music-icon" size={17} aria-hidden="true" />
              <span className="music-btn-text">{music.pauseLabel}</span>
            </>
          ) : (
            <>
              <VolumeX className="music-icon" size={17} aria-hidden="true" />
              <Music className="music-icon-note" size={14} aria-hidden="true" />
              <span className="music-btn-text">{music.playLabel}</span>
            </>
          )}
        </button>
      </div>
    </>
  );
};
