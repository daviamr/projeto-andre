import React, { useState, useRef, useEffect } from 'react';
import './FlipCard.css';

export const FlipCard = ({ text, path, info }) => {
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
    <div className={`flip-card ${flipped ? 'flipped' : ''}`} onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave}>
      <div className="flip-card-inner" ref={cardInnerRef}>
        <div className="flip-card-front">
          <img className="flip-img" src={path} alt={info} ref={imgRef} />
        </div>
        <div className="flip-card-back">
          <h2 className="flip-text">{text}</h2>
        </div>
      </div>
    </div>
  );
};
