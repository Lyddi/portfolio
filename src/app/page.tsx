import Image from "next/image";
import AboutMeSection from "./aboutMe";
import FlipCard from "./ui/card";
import ProjectSection from "./Project";
import Scroller from "./ui/scroller";
import ContactSection from "./contact";
import HeroSection from "./hero";
export default function Home() {
  return (
    <main className=" ">
   
    
   <HeroSection></HeroSection>
      <AboutMeSection></AboutMeSection>
  
      <ProjectSection></ProjectSection>
      <ContactSection></ContactSection>
     

    </main>
  );
}
