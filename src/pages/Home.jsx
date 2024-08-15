import { Box } from "@mui/material";
import React from "react";
import Intro from "../components/Intro";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutMeSection from "../components/AboutMeSection";
import ContactMe from "../components/ContactMe";

const Home = () => {
  return (
    <Box>
      <section id="intro">
        <Intro />
      </section>
      <div className="h-[1px] w-full bg-[#484848]"></div>
      <section id="featured-projects">
        <FeaturedProjects />
      </section>
      <div className="h-[1px] w-full bg-[#484848]"></div> 
      <section id="about" > <AboutMeSection/> </section>
      <div className="h-[1px] w-full bg-[#484848]"></div>
      <section id="contact" >
        <ContactMe/>
      </section>
    </Box>
  );
};

export default Home;
