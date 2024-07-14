"use client"
import { useState, useRef } from 'react';

import Scroller from './ui/scroller';
import FlipCard from './ui/card';
import ScrollContainer from 'react-indiana-drag-scroll';

const ProjectSection = () => {
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
        <div className='min-h-screen'>
            <div className="grid grid-cols-4  lg:grid-cols-12 gap-4 items-center mt-16 h-full mx-4">
                <div className="col-start-1 col-end-5  lg:col-start-2 lg:col-span-10">
                    <p className='text-4xl lg:text-6xl xl:text-7.5xl text-light-gray pt-12'>My recent work</p>
                    <div className="flex flex-col lg:flex-row justify-between items-center mt-8">
                        <div className="flex flex-col lg:w-2/5 text-light-gray gap-6 lg:gap-12">

                            <div className="flex justify-between lg:w-8/12  text-light-gray">

                                <span className="flex flex-col gap-2  lg:gap-4">
                                    <p>Project name</p>
                                    <p>Dispoo</p>
                                </span>
                                <span className="flex flex-col gap-2 lg:gap-4">
                                    <p>Role</p>
                                    <p>UI Designer</p>
                                </span>

                            </div>
                            <span className="flex flex-col gap-2 lg:gap-4">
                                <p>About the project </p>
                                <p className='text-justify w-fit lg:w-8/12'>This application is designed to facilitate appointment booking between clients and artisans such as plumbers, masons, painters, and other construction professionals.</p>
                            </span>
                            <div className=" space-y-4">
                                <p>Key features </p>
                                <ul className='space-y-4'>
                                    <li>
                                        User Registration and Profile
                                    </li>
                                    <li>
                                        Search and Filter
                                    </li>
                                    <li>
                                        Calendar Management
                                    </li>
                                    <li>
                                        Appointment Booking
                                    </li>
                                    <li>
                                        Ratings and Reviews
                                    </li>
                                    <li>
                                        Integrated Messaging
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-fit w-full  lg:w-3/5  flex lg:justify-center items-center px-0  " style={{ padding: 0 }} >
                        <ScrollContainer className="scroll-container gap-4">
                                <FlipCard
                                    frontContent={<div className="flex flex-col justify-center items-center h-full ">
                                        <img src="/dispooCalendar.png" alt="Description of image" className="w-[235px] h-[535px] " />
                                        <p className='py-4'>Calendar management</p>
                                    </div>}
                                    backContent={<div className="flex justify-center items-center h-full">
                                        <p>The home screen for artisans provides a comprehensive overview of their tasks, helping them manage their schedule efficiently</p>
                                    </div>}
                                />
                                <FlipCard
                                    frontContent={<div className="flex flex-col justify-center items-center h-full">
                                        <img src="/dispooCalendar.png" alt="Description of image" className="w-[235px] h-[535px] " />
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
                                </ScrollContainer>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ProjectSection;
