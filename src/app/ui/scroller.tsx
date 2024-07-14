"use client"
import { useRef, useState } from 'react';
import FlipCard from "./card";

export default function Scroller() {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    };
  
    const handleMouseLeave = () => {
      setIsDragging(false);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 3; // La vitesse du défilement
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };
  
    return (
      <div className="h-fit  flex justify-center items-center">
        <div 
          className={`scroll-container ${isDragging ? 'dragging' : ''} gap-4`} 
          ref={scrollContainerRef} 
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
       <FlipCard 
        frontContent={<div className="flex flex-col justify-center items-center h-full">
           <img src="/dispooCalendar.png" alt="Description of image" className=" " />
           <p className='py-4'>Calendar management</p>
        </div>}
        backContent={<div className="flex justify-center items-center h-full">
            <p>The home screen for artisans provides a comprehensive overview of their tasks, helping them manage their schedule efficiently</p>
        </div>}
      />
          <FlipCard 
        frontContent={<div className="flex flex-col justify-center items-center h-full">
           <img src="/dispooCalendar.png" alt="Description of image" className=" " />
           <p className='py-4'>Calendar management</p>
        </div>}
        backContent={<div className="flex justify-center items-center h-full">
            <p>The home screen for artisans provides a comprehensive overview of their tasks, helping them manage their schedule efficiently</p>
        </div>}
      />
          <FlipCard frontContent={<div>Front Side 3</div>} backContent={<div>Back Side 3</div>} />
          <FlipCard frontContent={<div>Front Side 4</div>} backContent={<div>Back Side 4</div>} />
          <FlipCard frontContent={<div>Front Side 5</div>} backContent={<div>Back Side 5</div>} />
          <FlipCard frontContent={<div>Front Side 3</div>} backContent={<div>Back Side 3</div>} />
          <FlipCard frontContent={<div>Front Side 4</div>} backContent={<div>Back Side 4</div>} />
          <FlipCard frontContent={<div>Front Side 5</div>} backContent={<div>Back Side 5</div>} />
        </div>
      </div>
    );
  }