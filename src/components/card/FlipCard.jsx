import React, { useState } from 'react';
import './FlipCard.css';

export const FlipCard = ({text, path, info}) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="flip-img" src={path} alt={info} />
        </div>
        <div className="flip-card-back">
          <h2 className="flip-text">{text}</h2>
        </div>
      </div>
    </div>
  );
};
