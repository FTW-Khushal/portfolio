import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const MyExperience = () => {
  const experiences = [
    {
      job: {
        title: "Software Engineer",
        timePeriod: "Aug 2021 - Mar 2023",
      },
      company: "Aspiration Solutions",
      link: "https://aspirationsolutions.com/",
      description:["Built an Android app with WebRTC, increasing active users by 30% and engagement by 25%.", "Reduced API load by 66% by optimizing frontend queries for a Node.js + GraphQL backend.","Managed cloud deployments with CI/CD, ensuring zero-downtime releases and version control.","Collaborated with cross-functional teams to deliver high-quality features on schedule.","Conducted code reviews and mentored interns, fostering a culture of clean code and learning."],
    },
    {
      job: {
        title: "Full-Stack Developer Intern",
        timePeriod: "Feb 2021 - Jul 2021",
      },
      company: "Aspiration Solutions",
      link: "https://aspirationsolutions.com/",
      description:
        ["Built features for an internal lead management tool using Java, JavaScript, and SQL, boosting efficiency by 30%.","Optimized recursive database queries and refactored logic, reducing load times by 20%.", "Implemented CI pipelines with GitHub Actions and wrote unit tests, cutting deployment errors by 30%.","Worked across backend (Spring Boot) and frontend (React.js) to debug and deliver production fi xes.", "Actively contributed in Agile ceremonies, aligning sprint goals with cross-functional teams."],
    },
  ];

  return (
    <Container className="pt-20" maxWidth="lg">
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Typography
              color="textPrimary"
              variant="h1"
              component="h2"
              sx={{ fontSize: "76px", fontWeight: "400", lineHeight: "90%" }}
            >
              My Experience
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
            {experiences.map((experience, index) => (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  delay: index * 0.2,
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Box pb={10}>
                  <Box display={"flex"} alignItems={"baseline"}>
                    <Typography
                      flexGrow={"1"}
                      color="textPrimary"
                      fontSize="24px"
                      fontWeight="500"
                      lineHeight="130%"
                      letterSpacing="-0.24px"
                      component="h5"
                    >
                      {experience.job.title}
                    </Typography>
                    <Typography
                      pl={2}
                      textAlign={"end"}
                      color="textSecondary"
                      fontSize="18px"
                      fontWeight="400"
                      lineHeight="150%"
                      component={"subtitle1"}
                    >
                      {experience.job.timePeriod}
                    </Typography>
                  </Box>

                  <Box paddingTop={1}>
                    <Typography
                      textAlign={"end"}
                      color="#D3E97A"
                      variant="body1"
                      component="a"
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      fontWeight={"600"}
                      lineHeight={"160%"}
                      fontSize={"18px"}
                    >
                      {experience.company}
                    </Typography>
                  </Box>

                  <Box pt={2}>
                    <Typography
                      fontWeight={"400"}
                      fontSize={"18px"}
                      color="textSecondary"
                      component={"body2"}
                    >
                      <ul style={{listStyleType: "disc", paddingLeft: "20px"}}>
                        {experience.description.map((point, index) => (
                          <li key={index}>
                             {point}
                          </li>
                        ))}
                      </ul>
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyExperience;
