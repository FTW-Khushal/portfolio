import { Box } from "@mui/material";
import React from "react";
import ContactMe from "../components/ContactMe";
import AboutMeIntro from "../components/AboutMeIntro";
import MyExperience from "../components/MyExperience";
import MyEducation from "../components/MyEducation";

const About = () => {
  return (
    <Box>
      <section id="about">
        <AboutMeIntro />
      </section>
      <div className="h-[1px] w-full bg-[#484848]"></div>
      <section id="featured-projects">
        <MyExperience />
      </section>
      <div className="h-[1px] w-full bg-[#484848]"></div>
      <section id="my-education">
        <MyEducation />
      </section>
      <div className="h-[1px] w-full bg-[#484848]"></div>
      <section id="contact">
        <ContactMe />
      </section>
    </Box>
  );
};

export default About;
