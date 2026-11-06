import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Sparkles } from 'lucide-react';
import { eventDetails, GalleryPhoto } from '../config/eventDetails';
import { OrnateDivider, PeacockMotif } from './Decorations';

const toDevanagariNumeral = (num: number): string => {
  const marathiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  return num
    .toString()
    .split('')
    .map((d) => marathiDigits[parseInt(d, 10)] ?? d)
    .join('');
};

export const PhotoGallery: React.FC = () => {
  const { gallery, photographerCredit } = eventDetails;
  const [activeTab, setActiveTab] = useState<'all' | 'traditional' | 'modern'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const filteredPhotos = gallery.photos.filter((p) => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredPhotos.length : 0
    );
  }, [filteredPhotos.length]);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        : filteredPhotos.length - 1
    );
  }, [filteredPhotos.length]);

  // Keyboard navigation & escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  useEffect(() => {
    if (lightboxIndex !== null && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [lightboxIndex]);

  const activePhoto: GalleryPhoto | null =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  // Separate featured photo (first one) and remaining photos for balanced magazine layout
  const isAll = activeTab === 'all';
  const featuredPhoto = isAll ? filteredPhotos[0] : null;
  const gridPhotos = isAll ? filteredPhotos.slice(1) : filteredPhotos;

  return (
    <section className="photo-gallery-section" aria-label={gallery.heading}>
      {/* Decorative Crown */}
      <div className="gallery-decorative-header">
        <div className="gallery-header-motif">
          <PeacockMotif size={36} />
        </div>
        <h2 className="gallery-main-heading">{gallery.heading}</h2>
        <p className="gallery-main-subheading">{gallery.subheading}</p>
      </div>

      <OrnateDivider />

      {/* Category Filter Tabs */}
      <div className="gallery-filter-tabs" role="tablist" aria-label="छायाचित्र प्रकार">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'all'}
          className={`filter-tab-pill ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          <Sparkles size={14} className="tab-icon" />
          <span>सर्व छायाचित्रे ({toDevanagariNumeral(gallery.photos.length)})</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'traditional'}
          className={`filter-tab-pill ${activeTab === 'traditional' ? 'active' : ''}`}
          onClick={() => setActiveTab('traditional')}
        >
          <span>पारंपरिक रूप ({toDevanagariNumeral(3)})</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'modern'}
          className={`filter-tab-pill ${activeTab === 'modern' ? 'active' : ''}`}
          onClick={() => setActiveTab('modern')}
        >
          <span>वेस्टर्न रूप ({toDevanagariNumeral(2)})</span>
        </button>
      </div>

      {/* Magazine Layout: 1 Featured Card + Balanced 2x2 Grid */}
      <div className="gallery-magazine-container">
        {featuredPhoto && (
          <div
            className="gallery-feature-card"
            onClick={() => openLightbox(0)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(0);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`${featuredPhoto.title} - मोठे करून पाहण्यासाठी क्लिक करा`}
          >
            <div className="feature-arch-frame">
              <picture>
                <source srcSet={featuredPhoto.srcWebp} type="image/webp" />
                <img
                  src={featuredPhoto.src}
                  alt={featuredPhoto.alt}
                  className="feature-photo-img"
                  loading="lazy"
                />
              </picture>
              <div className="gallery-card-shimmer" aria-hidden="true" />
              <div className="feature-overlay">
                <div className="feature-badge">विशेष क्षण</div>
                <div className="zoom-btn-pill">
                  <ZoomIn size={18} />
                  <span>मोठे करा</span>
                </div>
              </div>
            </div>
            <div className="feature-caption-bar">
              <div className="caption-text-wrap">
                <h3 className="feature-card-title">{featuredPhoto.title}</h3>
                <p className="feature-card-desc">{featuredPhoto.caption}</p>
              </div>
              <span className="photographer-pill">{photographerCredit}</span>
            </div>
          </div>
        )}

        {/* Balanced 2-Column Grid (4 photos in 2x2, or 2/3 photos in category views) */}
        <div
          className={`gallery-balanced-grid ${
            !isAll && gridPhotos.length === 2 ? 'two-items' : ''
          }`}
          role="list"
        >
          {gridPhotos.map((photo, index) => {
            const actualIndex = isAll ? index + 1 : index;
            return (
              <div
                key={photo.id}
                className="gallery-grid-card"
                role="listitem"
                onClick={() => openLightbox(actualIndex)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(actualIndex);
                  }
                }}
                tabIndex={0}
                aria-label={`${photo.title} - मोठे करून पाहण्यासाठी क्लिक करा`}
              >
                <div className="grid-card-media">
                  <picture>
                    <source srcSet={photo.srcWebp} type="image/webp" />
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="grid-photo-img"
                      loading="lazy"
                    />
                  </picture>
                  <div className="grid-hover-vignette">
                    <span className="grid-zoom-pill">
                      <ZoomIn size={16} />
                      <span>पहा</span>
                    </span>
                  </div>
                </div>
                <div className="grid-card-info">
                  <h4 className="grid-card-title">{photo.title}</h4>
                  <p className="grid-card-desc">{photo.caption}</p>
                  <span className="grid-credit-text">{photographerCredit}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accessible Full-screen Lightbox Modal */}
      {activePhoto && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="छायाचित्र गॅलरी"
        >
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="lightbox-toolbar">
              <span className="lightbox-counter">
                छायाचित्र {toDevanagariNumeral((lightboxIndex ?? 0) + 1)} /{' '}
                {toDevanagariNumeral(filteredPhotos.length)}
              </span>

              <button
                type="button"
                className="lightbox-close-btn"
                onClick={closeLightbox}
                ref={closeButtonRef}
                aria-label="गॅलरी बंद करा"
              >
                <X size={20} aria-hidden="true" />
                <span>बंद करा</span>
              </button>
            </div>

            {/* Photo Stage & Navigation */}
            <div className="lightbox-stage">
              <button
                type="button"
                className="lightbox-nav-btn prev-btn"
                onClick={showPrev}
                aria-label="मागील छायाचित्र"
              >
                <ChevronLeft size={28} aria-hidden="true" />
              </button>

              <div className="lightbox-image-wrap">
                <picture>
                  <source srcSet={activePhoto.srcWebp} type="image/webp" />
                  <img
                    src={activePhoto.src}
                    alt={activePhoto.alt}
                    className="lightbox-main-image"
                  />
                </picture>
              </div>

              <button
                type="button"
                className="lightbox-nav-btn next-btn"
                onClick={showNext}
                aria-label="पुढील छायाचित्र"
              >
                <ChevronRight size={28} aria-hidden="true" />
              </button>
            </div>

            {/* Footer */}
            <div className="lightbox-footer">
              <h4 className="lightbox-title">{activePhoto.title}</h4>
              <p className="lightbox-desc">{activePhoto.caption}</p>
              <p className="lightbox-credit">{photographerCredit}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
