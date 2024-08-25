import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {

  const projects = [
    {
      tag: "Conceptual Work",
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-2c12f.appspot.com/o/truvoye_social_banner.png?alt=media&token=516746a6-9d03-46c5-9d08-dcebe018a359",
      imgAlt: "banner for truvoye web app",
      title: "Truvoye - Logistics Management Platform",
      description:
        "To solve logistics companies’ operational problems and increase customer satisfaction, we created a web platform called Truvoye. Our platform offers features such as real-time shipment tracking, shipment time and cost estimation, analytical metrics, driver onboarding and OTP verification. These features will enable logistics companies to increase their operational efficiency and the safety of shipments.",
      projectInfo: [
        ["Year", "2024"],
        ["Role", "Full Stack Developer"],
      ],
      links: { demo: "https://www.truvoye.com/", github: "https://github.com/Kartavya052000/Truvoye-frontend" },
    },
    {
      tag: "Worked On",
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-2c12f.appspot.com/o/postart_banner.png?alt=media&token=03ea560e-a5e6-49c1-a4d3-09117b8cea6f",
      imgAlt: "banner for postart android app",
      title: "PostArt - Poster Maker & Video",
      description:
        "A user-friendly platform that empowers users to create professional-quality posters for business, social media, and special occasions, all without requiring design skills. Built using Android(Java), the platform features a library of expertly crafted templates, designed by a dedicated team. This project involved streamlining complex design processes into an intuitive interface, making it accessible to users of all levels.",
      projectInfo: [
        ["Year", "2023"],
        ["Role", "Android Engineer"],
      ],
      links: { demo: "https://play.google.com/store/apps/details?id=com.aspiration.postermaker.editor" },
    },
    {
      tag: "Worked On",
      img: "https://firebasestorage.googleapis.com/v0/b/portfolio-2c12f.appspot.com/o/mirchi_banner.png?alt=media&token=2f3ed705-8bc2-4428-89da-8cb738872dfa",
      imgAlt: "banner for mirchi android app",
      title: "Mirchi - South Asian Dating",
      description:
        "Contributed to the development of the app, it features an intuitive interface that allows users to like, comment on photos, match, and engage through video snaps and text messages. I implemented the asynchronous disappearing video snap messaging feature, enhancing user interaction and connection. Additionally, the 'friendzone' feature was developed to help users build friendships, broadening the app's appeal beyond dating.",
      projectInfo: [
        ["Year", "2022"],
        ["Role", "Android Engineer"],
      ],
      links: { demo: "https://play.google.com/store/apps/details?id=com.dating.mirchi" },
    },
  ]


  return (
    <Container maxWidth="lg" sx={{paddingBottom:"20px"}}>
      <Box marginTop={"80px"} marginBottom={"20px"}>
        <Typography
          color="textPrimary"
          variant="h2"
          sx={{ fontSize: "76px", fontWeight: "400", lineHeight: "100%" }}
        >
          {"FEATURED PROJECTS"}
        </Typography>

        <Typography
          color="textSecondary"
          variant="subtitle1"
          sx={{ fontSize: "18px", marginTop: "8px", marginBottom: "40px" }}
        >
          Here are some of the selected projects that showcase my passion for software development.
        </Typography>
      </Box>

      {projects.map(project => (<ProjectCard data={project} ></ProjectCard>))}
    </Container>
  );
};

export default FeaturedProjects;
