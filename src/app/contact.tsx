"use client"
import { useState, useEffect } from 'react';

const ContactSection = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isSplit, setIsSplit] = useState(false);

  const handleImageClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsSplit(true);
      }, 10); // Ajouter un léger délai pour permettre à l'état de se mettre à jour
    }
  }, [isClicked]);

  return (
    <div className="h-screen relative">
      <div className={`absolute inset-x-0 inset-y-3/4 md:inset-0 flex justify-center items-center transition-all duration-1000 ${isClicked ? 'text-move-up' : ''}`}>
        <p className={`text-light-gray text-5xl md:text-7.5xl z-10 ${isClicked ? ' text-6xl lg:top-0 md:top-0 ' : ''}`} >Get in touch</p>
      </div>
      {isClicked && (
        <div className="absolute  inset-0 flex justify-center items-center transition-all duration-1000 new-text">
          <p className='text-light-gray text-sm md:text-xl lg:text-3xl z-10'>belloullydia9@gmail.com</p>
        </div>
      )}
      <div className="absolute bottom-0 w-full flex justify-center">
        <div className={`relative w-[217px] h-[298px] md:w-[451px] md:h-[619px] z-20`} onClick={handleImageClick}>
          {!isClicked && (
            <img src="/contact.png" alt="Description of image" className="w-full h-full cursor-pointer" />
          )}
          {isClicked && (
            <>
              <div className={`absolute left-0 top-0 w-1/2 h-full bg-no-repeat bg-contact bg-cover bg-left transition-all duration-1000 ${isSplit ? 'split-left-active' : ''}`}></div>
              <div className={`absolute right-0 top-0 w-1/2 h-full bg-no-repeat bg-contact bg-cover bg-right transition-all duration-1000 ${isSplit ? 'split-right-active' : ''}`}></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;