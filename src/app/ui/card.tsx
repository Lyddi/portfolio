// components/FlipCard.js
"use client"
import React, { useState } from 'react';

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000 " >
      <div className={`relative w-[320px] h-[560px] transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full backface-hidden bg-card-pattern  " onClick={handleClick}>
          <div className="flex justify-center items-center h-full p-4">
            {frontContent}
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden bg-card-pattern transform rotate-y-180" onClick={handleClick}>
          <div className="flex justify-center items-center h-full p-4">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
