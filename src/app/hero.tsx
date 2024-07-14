"use client"
import { useState } from 'react';

const HeroSection = () => {


    return (
        <div className="h-screen relative overflow-hidden">
        <div className="flex flex-col justify-center items-center h-full m-0 relative z-10">
            <p className="text-light-gray pt-8 md:pt-16 text-base lg:text-xl text-center">Lydia BELLOUL</p>
            <div className="relative flex flex-col items-center justify-center m-0 h-full">
                <p className="text-9xl md:text-18xl text-light-gray/[0.08] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">Portfolio</p>
                <div className="absolute top-2/3 md:top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex space-x-32 md:space-x-96">
                        <p className="text-5xl md:text-6xl text-light-gray/[0.04]">Portfolio</p>
                        <p className="text-5xl md:text-6xl text-light-gray/[0.04]">Portfolio</p>
                    </div>
            </div>
            <div className="absolute left-auto lg:bottom-0 md:bottom-10 2xl:bottom-14 z-20">
                <img src="/hero-img.png" alt="Description of image" className="w-[302px] h-[389px] md:w-[390px] md:h-[502px] lg:w-[490px] lg:h-[630px] m-auto" />
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 absolute md:top-1/3 w-full h-full z-20">
                <div className="col-start-1 col-end-5 lg:col-start-2 lg:col-span-10 w-full h-full md:h-fit">
                    <div className="flex flex-col items-center justify-around md:justify-between md:flex-row w-full h-full md:h-fit">
                        <div className="pb-32 md:pb-0 md:ms-16 xl:ms-24 xl:py-2 md:py-6">
                            <p className="text-light-gray text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl drop-shadow-text-shadow">UI Designer</p>
                        </div>
                        <div className="xl:py-2 md:py-6">
                            <p className="text-light-gray text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl drop-shadow-text-shadow md:pe-8 lg:ps-20 xl:pe-0">Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    );
};

export default HeroSection;
