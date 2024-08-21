import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const MyExperience = () => {
  const experiences = [
    {
      job: {
        title: "Software Engineer - Android",
        timePeriod: "Aug 2021 - Mar 2023",
      },
      company: "Aspiration Solutions",
      link: "https://aspirationsolutions.com/",
      description:
        "Developed and maintained native Android applications, ensuring seamless functionality across multiple OS versions by adapting to new regulations and standards with each release. Spearheaded the modernization of legacy apps, improving compatibility and reducing crash rates by 30%. Enhanced user engagement by optimizing UI/UX design, resulting in a 20% increase in user retention. Successfully integrated API solutions, leading to a 15% reduction in load times and contributing to a 25% boost in user satisfaction ratings.",
    },
    {
      job: {
        title: "Software Engineer - Intern",
        timePeriod: "Feb 2021 - Jul 2021",
      },
      company: "Aspiration Solutions",
      link: "https://aspirationsolutions.com/",
      description:
        "Engineered critical features for internal tools using JavaScript, Python, and SQL, driving a 30% improvement in workflow efficiency. Led the refactoring of a major legacy system, cutting maintenance costs by 25% and boosting application performance by 15%. Developed and deployed a new reporting dashboard, which reduced data retrieval times by 40% and provided actionable insights that enhanced decision-making. Contributed to projects that directly improved user experience, leading to a 20% increase in user satisfaction.",
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
                      {experience.description}
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
