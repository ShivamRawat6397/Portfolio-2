import React, { useRef } from "react";
import { CssBaseline } from "@mui/material";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer"; // Import the Footer component

const App = () => {
  const aboutMeRef = useRef(null);
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);

  // Scroll functions
  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTechStack = () => {
    techStackRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <CssBaseline />
      {/* Hero Section */}
      <HeroSection
        scrollToAboutMe={scrollToAboutMe}
        scrollToTechStack={scrollToTechStack}
        scrollToProjects={scrollToProjects}
      />
      {/* About Me Section */}
      <AboutMeSection ref={aboutMeRef} />
      {/* Tech Stack Section */}
      <TechStack ref={techStackRef} />
      {/* Projects Section */}
      <Projects ref={projectsRef} />
      {/* Footer Section */}
      <Footer /> {/* Add the Footer component */}
    </>
  );
};

export default App;
