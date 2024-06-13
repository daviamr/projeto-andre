import React, { useState, useRef, useEffect } from 'react';
import { CardModal } from '../card-modal/CardModal';
import './FlipCard.css';

const highlightText = (text, highlights) => {
  if (!highlights || highlights.length === 0) return text;
  let highlightedText = text;
  highlights.forEach(word => {
    const regex = new RegExp(`(${word})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
  });
  return highlightedText;
};

export const FlipCard = ({ text, path, info, highlights, onButtonClick }) => {
  const [flipped, setFlipped] = useState(false);
  const cardInnerRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseEnter = () => {
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    setFlipped(false);
  };

  useEffect(() => {
    const handleImageLoad = () => {
      if (imgRef.current && cardInnerRef.current) {
        cardInnerRef.current.style.height = `${imgRef.current.offsetHeight}px`;
      }
    };

    const img = imgRef.current;
    if (img) {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
      }
    }

    return () => {
      if (img) {
        img.removeEventListener('load', handleImageLoad);
      }
    };
  }, [path]);

  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flip-card-inner" ref={cardInnerRef}>
        <div className="flip-card-front">
          <img className="flip-img" src={path} alt={info} ref={imgRef} />
        </div>
        <div className="flip-card-back">
          <h2 className="flip-text" dangerouslySetInnerHTML={{ __html: highlightText(text, highlights) }}></h2>
          <button className="card-back-button" onClick={onButtonClick}>Saiba mais</button>
        </div>
      </div>
    </div>
  );
};
