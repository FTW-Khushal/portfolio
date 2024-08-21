import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Collapsible from "react-collapsible";

const MyEducation = () => {
  const [isDatabaseOpen, setIsDatabaseOpen] = React.useState(false);

  const education = [
    {
      institution: {
        name: "Langara College",
        timePeriod: "Apr 2023 - Dec 2024",
      },
      degree: {
        name: "Postgraduate Diploma in Web and Mobile app Development",
        place: "Vancouver, British Columbia",
        courseLink:
          "https://langara.ca/programs-and-courses/courses/WMDD/index.html",
      },

      description: {
        title: "Relevant Coursework",
        desc: "Software Engineering, Database Management, Mobile Application Development",
        skillsAcquired: [
          {
            name: "Team Projects",
            desc: "Collaborated with peers to develop industry-standard software solutions, working with modern technologies like React, Android and ios in an Agile environment.",
          },
          {
            name: "Leadership",
            desc: "Led a team of 4 in a project, successfully delivering a fully functional web application within project deadlines.",
          },
          {
            name: "Agile Methodology",
            desc: "Applied Agile principles in project development, including regular sprints, stand-ups, and iterative progress, ensuring timely delivery and continuous improvement",
          },
        ],
      },
    },

    {
      institution: {
        name: "SRKI",
        timePeriod: "Jun 2017 - Jul 2021",
      },
      degree: {
        name: "Bachelors of Science (Honours) in Computer Science",
        place: "Surat, India",
        courseLink: " ",
      },
      description: {
        title: "Relevant Coursework",
        desc: "Data Structures, Algorithms, OOP, Operating Systems, System Level Programming",
      },
    },
  ];

  return (
    <Container className="pt-20" maxWidth="lg">
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Typography
              color="textPrimary"
              variant="h1"
              component="h2"
              sx={{ fontSize: "76px", fontWeight: "400", lineHeight: "90%" }}
            >
              My Education
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
            {education.map((edu, index) => (
              <motion.div
                key={index}
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
                      {edu.institution.name}
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
                      {edu.institution.timePeriod}
                    </Typography>
                  </Box>

                  <Box paddingTop={1} display={"flex"} alignItems={"baseline"}>
                    <Typography
                      flexGrow={1}
                      color="#D3E97A"
                      variant="body1"
                      component="a"
                      href={edu.degree.courseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      fontWeight={"600"}
                      lineHeight={"160%"}
                      fontSize={"18px"}
                    >
                      {edu.degree.name}
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
                      {edu.degree.place}
                    </Typography>
                  </Box>

                  <Box pt={2}>
                    <Typography
                      fontWeight={"400"}
                      fontSize={"18px"}
                      color="textSecondary"
                      component={"body2"}
                    >
                      <b>{edu.description.title} : </b> {edu.description.desc}
                    </Typography>

                    {edu.description.skillsAcquired && (
                      <List className="list-disc ml-5">
                        {edu.description.skillsAcquired.map((skill, index) => (
                          <ListItem className="p-0">
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
                              className="p-0 border-b border-[#484848] border-b-[1px]"
                            >
                              <Collapsible
                                open={isDatabaseOpen}
                                onOpening={() => {
                                  setIsDatabaseOpen(true);
                                }}
                                onClosing={() => {
                                  setIsDatabaseOpen(false);
                                }}
                                trigger={
                                  // bg-[#1c1c1e] py-4 px-4
                                  <Box className="flex items-center justify-between w-full py-4">
                                    <Typography
                                      fontWeight={"400"}
                                      fontSize={"18px"}
                                      color="textSecondary"
                                      component={"body2"}
                                    >
                                      <b>{skill.name} </b>
                                    </Typography>

                                    <div
                                      className={`text-white transition-transform duration-500 ease-in-out transform ${
                                        isDatabaseOpen
                                          ? "rotate-180"
                                          : "rotate-0"
                                      }`}
                                    >
                                      <KeyboardArrowUpRoundedIcon />
                                    </div>
                                  </Box>
                                }
                              >
                                <Box pb={2}>
                                  <Typography
                                    fontWeight={"400"}
                                    fontSize={"18px"}
                                    color="textSecondary"
                                    component={"body2"}
                                  >
                                    {skill.desc}
                                  </Typography>
                                </Box>
                              </Collapsible>
                            </motion.div>
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </Box>
                </Box>
              </motion.div>
            ))}

            {/* ))} */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyEducation;
