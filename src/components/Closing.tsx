import React, { useState } from 'react';
import { Share2, Check, Heart } from 'lucide-react';
import { eventDetails } from '../config/eventDetails';
import { OrnateDivider, PeacockMotif } from './Decorations';

export const Closing: React.FC = () => {
  const { closing, sharing } = eventDetails;
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareData = {
      title: sharing.shareTitle,
      text: sharing.shareText,
      url: shareUrl,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if ((err as Error).name === 'AbortError') {
          return;
        }
      }
    }

    // Fallback: Clipboard
    let copied = false;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        copied = true;
      } catch {
        copied = false;
      }
    }

    if (!copied) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        copied = true;
      } catch {
        copied = false;
      }
    }

    setIsCopied(true);
    setToastMessage(sharing.shareSuccessToast);

    setTimeout(() => {
      setIsCopied(false);
      setToastMessage(null);
    }, 3500);
  };

  return (
    <section className="closing-section" aria-label="समारोप व निमंत्रक">
      <div className="closing-royal-seal">
        <div className="seal-motif">
          <PeacockMotif size={36} />
        </div>

        {/* Host Family */}
        <div className="host-seal-wrap">
          <span className="host-seal-tag">{closing.hostLabel}</span>
          <h3 className="host-seal-name">{closing.hostName}</h3>
        </div>

        <OrnateDivider compact />

        {/* Poetic Blessing */}
        <div className="closing-poetry">
          <p className="poetry-line">
            {closing.blessingLine1}
            <br />
            {closing.blessingLine2}
          </p>
        </div>

        {/* Share Button */}
        <div className="share-btn-wrap">
          <button
            type="button"
            className={`btn-royal-share ${isCopied ? 'copied' : ''}`}
            onClick={handleShare}
            aria-label={sharing.shareButtonText}
          >
            {isCopied ? (
              <Check className="share-icon pulse" size={20} aria-hidden="true" />
            ) : (
              <Share2 className="share-icon" size={20} aria-hidden="true" />
            )}
            <span className="share-text">
              {isCopied ? 'लिंक कॉपी झाली!' : sharing.shareButtonText}
            </span>
          </button>
        </div>

        <div className="closing-love-note">
          <span className="heart-icon-dot" aria-hidden="true">
            <Heart size={14} fill="#C87D55" stroke="none" />
          </span>
          <p className="love-note-text">
            रोहन आणि स्नेहल यांच्या आनंदात सहभागी व्हा
          </p>
        </div>
      </div>

      {/* Accessible Live Toast */}
      <div
        className={`toast-notification ${toastMessage ? 'visible' : ''}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {toastMessage && (
          <div className="toast-content">
            <Check size={18} className="toast-icon" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </section>
  );
};
