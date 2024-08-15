import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {

  const projects = [
    {
      tag: "Conceptual Work",
      img: "https://via.placeholder.com/1200x2420",
      imgAlt: "Some description",
      title: "Promotional landing page for our favorite show",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      projectInfo: [
        ["Year", "2023"],
        ["Role", "Front-end Developer"],
      ],
      links: { demo: "www.myproject.com", github: "www.github.com" },
    },
    {
      tag: "Conceptual Work",
      img: "https://via.placeholder.com/1200x2420",
      imgAlt: "Some description",
      title: "Promotional landing page for our favorite show",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      projectInfo: [
        ["Year", "2023"],
        ["Role", "Front-end Developer"],
      ],
      links: { demo: "www.myproject.com", github: "www.github.com" },
    },
    {
      tag: "Conceptual Work",
      img: "https://via.placeholder.com/1200x2420",
      imgAlt: "Some description",
      title: "Promotional landing page for our favorite show",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      projectInfo: [
        ["Year", "2023"],
        ["Role", "Front-end Developer"],
      ],
      links: { demo: "www.myproject.com", github: "www.github.com" },
    },
  ]


  return (
    <Container maxWidth="xl" sx={{paddingBottom:"20px"}}>
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
