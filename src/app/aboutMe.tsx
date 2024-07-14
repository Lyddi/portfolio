"use client"
import { useState } from 'react';

const AboutMeSection = () => {
    const [isImageOn, setIsImageOn] = useState(false);


    const handleClick = () => {
        setIsImageOn(!isImageOn);

    };

    return (
        <div className='h-screen  '>

            <div className="md:grid md:grid-cols-12 gap-4 hidden p-0 h-screen ">
                <div className="col-start-2 col-span-10 flex h-full ">
                    <img
                        src={isImageOn ? "/aboutMeOn.png" : "/aboutMeOff.png"}
                        alt="Description of image"
                        className="2xl:w-[480px] 2xl:h-[741px] xl:w-[400px] xl:h-[617px] lg:w-[320px] lg:h-[494px] md:w-[250px] md:h-[388px] m-auto cursor-pointer self-center drop-shadow-imgAbout"
                        onClick={handleClick}
                    />
                    <div className={`flex flex-col  w-full h-full justify-center gap-4 xl:gap-4 ${isImageOn ? 'animate-slide-up pt-5' : 'animate-slide-down pb-5'}`}>
                        <p className={`text-3xl lg:text-5xl xl:text-6xl 2xl:text-7.5xl text-light-gray ${isImageOn ? 'animate-slide-up' : 'animate-slide-down'}`}>About me</p>
                        <p className={`text-light-gray text-justify text-sm lg:text-base 2xl:text-xl ${isImageOn ? 'animate-slide-up' : 'animate-slide-down'}`}>
                            My name is Belloul Lydia, and I am a passionate web developer and UI designer dedicated to creating innovative and intuitive digital experiences. With expertise in front-end development and user interface design, I transform creative ideas into functional and aesthetically pleasing web solutions. My goal is to blend technology and design to deliver products that meet user needs while being visually appealing. Although I currently have only one project to showcase, I am actively learning and expanding my skills. My journey in the field is just beginning, and I am excited to continue developing my portfolio with more diverse and challenging projects. Explore my portfolio to discover my work and follow my progress.
                        </p>
                        {!isImageOn ? (
                            <div className="animate-slide-down-and-out space-y-4 mt-4">
                                <button
                                    type="button"
                                    className="bg-light-gray text-black px-4 py-2 w-64 rounded-[10px]"
                                    onClick={handleClick}
                                >
                                    Know more about me
                                </button>
                                <p className="text-light-gray">Or click on me to see magic</p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3 xl:gap-4 animate-slide-up-and-in">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="lg:text-3xl 2xl:text-5xl text-light-gray">Education</p>
                                        <ul className="w-fit text text-sm">
                                            <li>I love coding and learning new technologies.</li>
                                            <li>I have a keen eye for design and detail.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="lg:text-3xl 2xl:text-5xl text-light-gray">Experience</p>
                                        <ul className="text-base">
                                            <li>I love coding and learning new technologies.</li>
                                            <li>I have a keen eye for design and detail.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-5xl text-light-gray">Skills</p>
                                    <ul className='text-light-gray'>
                                        <li>I love coding and learning new technologies.</li>
                                        <li>I have a keen eye for design and detail.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>






            <div className="grid grid-cols-4 gap-4 mx-4 md:hidden h-fit mb-96  ">
                <div className="col-start-1 col-end-5">
                    <div className="flex flex-col">
                        <div className={` ${isImageOn ? 'animate-slide-up' : 'animate-slide-down-and-in'}`}>
                            <p className="text-3xl text-light-gray py-4">About me</p>
                            <p className="text-light-gray text-justify text-sm font-normal">
                                My name is Belloul Lydia, and I am a passionate web developer and UI designer dedicated to creating innovative and intuitive digital experiences. With expertise in front-end development and user interface design, I transform creative ideas into functional and aesthetically pleasing web solutions. My goal is to blend technology and design to deliver products that meet user needs while being visually appealing. Although I currently have only one project to showcase, I am actively learning and expanding my skills. My journey in the field is just beginning, and I am excited to continue developing my portfolio with more diverse and challenging projects. Explore my portfolio to discover my work and follow my progress.
                            </p>
                        </div>
                    </div>

                    <div className="flex relative h-full ">
                        <div className={`flex flex-col w-1/2 sm:w-3/4    ${isImageOn ? 'animate-slide-up-and-in' : 'animate-slide-down-and-in'}`}>
                            {!isImageOn && (
                                <div className="animate-slide-down-and-in gap-11">
                                    <button
                                        type="button"
                                        className="bg-light-gray text-black px-4 py-2 w-fit rounded-[10px] my-4"
                                        onClick={handleClick}
                                    >
                                        Know more about me
                                    </button>
                                    <p>Or click on me to see magic</p>
                                </div>
                            )}
                            {isImageOn && (
                                <div className="flex flex-col   gap-4 h-fit animate-slide-up-and-in  ">
                                    <div className="flex flex-col justify-between lg:flex-row">
                                        <div>
                                            <p className="text-3xl lg:text-4xl 2xl:text-5xl text-light-gray">Education</p>
                                            <ul className="w-fit text-sm">
                                                <li className=''>I love coding and learning new technologies.</li>
                                                <li>I have a keen eye for design and detail.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-3xl lg:text-4xl 2xl:text-5xl text-light-gray">Experience</p>
                                            <ul className=" text-sm">
                                                <li>I love coding and learning new technologies.</li>
                                                <li>I have a keen eye for design and detail.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text:3xl md:text-5xl text-light-gray">Skills</p>
                                        <ul className='text-sm'>
                                            <li>I love coding and learning new technologies.</li>
                                            <li>I have a keen eye for design and detail.</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <img
                            src={isImageOn ? "/aboutMeOn.png" : "/aboutMeOff.png"}
                            alt="Description of image"
                            className={`w-[235px] h-[364px] cursor-pointer absolute right-0  ${isImageOn ? '' : ' '}`}
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>


        </div>

    );
};

export default AboutMeSection;
