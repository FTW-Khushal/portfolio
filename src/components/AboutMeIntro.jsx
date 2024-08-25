import {
  Box,
  Button,
  Container,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import CTAButton from "./CTAButton";
import GithubIcon from "../assets/imageSVG/bxl-github.svg";
import LinkedinIcon from "../assets/imageSVG/bxl-linkedin.svg";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Collapsible from "react-collapsible";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const AboutMeIntro = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const [isLanguagesOpen, setIsLanguagesOpen] = React.useState(false);
  const [isFrameWorkAndLibsOpen, setIisFrameWorkAndLibsOpen] =
    React.useState(false);
  const [isDatabaseOpen, setIsDatabaseOpen] = React.useState(false);
  const [isMiscellaneous, setIsMiscellaneous] = React.useState(false);

  const data = [
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      name: "JAVA",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
      name: "KOTLIN",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      name: "JAVASCRIPT",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      name: "HTML",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      name: "CSS",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
      name: "SWIFT",
    },

    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg",
      name: "XML",
    },

    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      name: "C#",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      name: "PHP",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      name: "PYTHON",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
      name: "DART",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
      name: "JSON",
    },
  ];

  const frameworkAndLibs = [
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg",
      name: "ANDROID",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      name: "REACT",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-plain.svg",
      name: "IOS",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
      name: "DOT NET",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg",
      name: "JETPACK COMPOSE",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
      name: "MONGOOSE",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      name: "TAILWIND",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      name: "FLUTTER",
    },
  ];

  const database = [
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      name: "MY SQL",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
      name: "SQLLITE",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg",
      name: "MARIA DB",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      name: "MONGO DB",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      name: "FIREBASE",
    },
  ];

  const miscellaneous = [
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
      name: "JIRA",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      name: "FIGMA",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
      name: "INTELLI J",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      name: "GIT",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      name: "AWS",
    },
  ];

  const onExpandClick = () => {
    if (
      isLanguagesOpen &&
      isFrameWorkAndLibsOpen &&
      isDatabaseOpen &&
      isMiscellaneous
    ) {
      setIsLanguagesOpen(false);
      setIisFrameWorkAndLibsOpen(false);
      setIsDatabaseOpen(false);
      setIsMiscellaneous(false);
    } else {
      setIsLanguagesOpen(true);
      setIisFrameWorkAndLibsOpen(true);
      setIsDatabaseOpen(true);
      setIsMiscellaneous(true);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ paddingTop: "122px", paddingBottom: "80px" }}
    >
      <Grid container spacing={10}>
        <Grid item xs={12} md={4}>
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
              sx={{ fontSize: "101px", fontWeight: "400", lineHeight: "90%" }}
            >
              About Me
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Typography
              variant="subtitle1"
              component="h3"
              color={"textPrimary"}
              fontSize={"32px"}
              fontWeight={"500"}
              lineHeight={"140%"}
            >
              I am a software developer based in Vancouver. Has background in
              building scalable apps
            </Typography>
            <Typography
              color={"textSecondary"}
              variant="subtitle1"
              sx={{
                fontSize: "18px",
                marginTop: "8px",
                marginBottom: "40px",
              }}
            >
              I am a software developer based in Vancouver looking for exciting
              opportunities. Has experience in building scalable applications.
              Likes to focus on accessibility when developing. Passionate and
              curious about solving problems. Currently, I’m exploring AI ane
              Real time web rendering While I am not programming, I enjoy going
              on camping and plying video games. Learning more to improve skill.
            </Typography>

            <Box>
              <CTAButton
                onClick={() => {
                  const url =
                    "https://firebasestorage.googleapis.com/v0/b/portfolio-2c12f.appspot.com/o/Resume.pdf?alt=media&token=162c7615-a4b4-42e9-a2de-ffb6f334577a";
                  window.open(url, "_blank", "noopener,noreferrer");
                }}
                text="DOWNLOAD RESUME"
                icon={FileDownloadOutlinedIcon}
              />
              <IconButton
                href="https://github.com/FTW-Khushal"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                sx={{
                  background: "#222",
                  marginLeft: "8px",
                  marginRight: "8px",
                }}
              >
                <Icon>
                  <img src={GithubIcon} alt="github" />
                </Icon>
              </IconButton>

              <IconButton
                href="https://www.linkedin.com/in/khushal-khunt"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                className="ml-2"
                sx={{ background: "#222" }}
              >
                <Icon>
                  <img src={LinkedinIcon} alt="linkedin" />
                </Icon>
              </IconButton>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Box>
              <img
                src="https://via.placeholder.com/1224x700"
                alt={"a man wearing a shirt"}
                className="w-full h-full rounded-2xl"
              />
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Typography
              color="textPrimary"
              component="h2"
              variant="h1"
              sx={{ fontSize: "76px", fontWeight: "400", lineHeight: "100%" }}
            >
              MY CAPABILITIES
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              color={"textSecondary"}
              variant="subtitle1"
              sx={{
                fontSize: "18px",
                marginBottom: "32px",
              }}
            >
              I am always looking to add more skills.Morbi egestas neque eu
              blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
              purus faucibus tristique ut et dolor.
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            width="100%"
          >
            <Button sx={{ textTransform: "none" }} onClick={onExpandClick}>
              {isLanguagesOpen &&
              isFrameWorkAndLibsOpen &&
              isDatabaseOpen &&
              isMiscellaneous
                ? "Collapse All"
                : "Expand All"}
            </Button>
          </Box>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.4,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Box className="border-t border-[#484848] border-t-[1px]">
              <Collapsible
                open={isLanguagesOpen}
                onOpening={() => {
                  setIsLanguagesOpen(true);
                }}
                onClosing={() => {
                  setIsLanguagesOpen(false);
                }}
                trigger={
                  // bg-[#1c1c1e] py-4 px-4
                  <Box className="flex items-center justify-between w-full py-4">
                    <Typography
                      color={"textPrimary"}
                      variant="body1"
                      fontSize={"16px"}
                      component={"h4"}
                    >
                      Languages
                    </Typography>

                    <div
                      className={`text-white transition-transform duration-500 ease-in-out transform ${
                        isLanguagesOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <KeyboardArrowUpRoundedIcon />
                    </div>
                  </Box>
                }
              >
                <Grid
                  className="pb-4"
                  container
                  spacing={2}
                  // sx={{ bgcolor: "#1c1c1e7b", padding: "16px" }}
                >
                  {data.map((item) => (
                    <Grid item>
                      <div className="border border-[#484848] rounded-full px-4 flex items-center space-x-2 hover:border-[#d3e97a] transition-colors duration-300 max-w-max">
                        <div className="relative group flex-shrink-0">
                          <div className="w-6 h-6 flex items-center justify-center ">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:animate-spin"
                            />
                          </div>
                        </div>
                        <Typography
                          variant="subtitle1"
                          margin={"0.8rem 0px"}
                          color={"textPrimary"}
                          fontSize={"16px"}
                          fontWeight={"700"}
                          component={"subtitle1"}
                          lineHeight={"100%"}
                          textTransform={"uppercase"}
                        >
                          {item.name}
                        </Typography>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Collapsible>
            </Box>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.4,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Box className="border-t border-[#484848] border-t-[1px]">
              <Collapsible
                open={isFrameWorkAndLibsOpen}
                onOpening={() => {
                  setIisFrameWorkAndLibsOpen(true);
                }}
                onClosing={() => {
                  setIisFrameWorkAndLibsOpen(false);
                }}
                trigger={
                  // bg-[#1c1c1e] py-4 px-4
                  <Box className="flex items-center justify-between w-full py-4">
                    <Typography
                      color={"textPrimary"}
                      variant="body1"
                      fontSize={"16px"}
                      component={"h4"}
                    >
                      Frameworks and Libraries
                    </Typography>

                    <div
                      className={`text-white transition-transform duration-500 ease-in-out transform ${
                        isFrameWorkAndLibsOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <KeyboardArrowUpRoundedIcon />
                    </div>
                  </Box>
                }
              >
                <Grid
                  className="pb-4"
                  container
                  spacing={2}
                  // sx={{ bgcolor: "#1c1c1e7b", padding: "16px" }}
                >
                  {frameworkAndLibs.map((item) => (
                    <Grid item>
                      <div className="border border-[#484848] rounded-full px-4 flex items-center space-x-2 hover:border-[#d3e97a] transition-colors duration-300 max-w-max">
                        <div className="relative group flex-shrink-0">
                          <div className="w-6 h-6 flex items-center justify-center ">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:animate-spin"
                            />
                          </div>
                        </div>
                        <Typography
                          margin={"0.8rem 0px"}
                          color={"textPrimary"}
                          fontSize={"16px"}
                          fontWeight={"700"}
                          component={"subtitle1"}
                          lineHeight={"100%"}
                          textTransform={"uppercase"}
                        >
                          {item.name}
                        </Typography>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Collapsible>
            </Box>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Box className="border-t border-[#484848] border-t-[1px]">
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
                      color={"textPrimary"}
                      variant="body1"
                      fontSize={"16px"}
                      component={"h4"}
                    >
                      Database
                    </Typography>

                    <div
                      className={`text-white transition-transform duration-500 ease-in-out transform ${
                        isDatabaseOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <KeyboardArrowUpRoundedIcon />
                    </div>
                  </Box>
                }
              >
                <Grid
                  className="pb-4"
                  container
                  spacing={2}
                  // sx={{ bgcolor: "#1c1c1e7b", padding: "16px" }}
                >
                  {database.map((item) => (
                    <Grid item>
                      <div className="border border-[#484848] rounded-full px-4 flex items-center space-x-2 hover:border-[#d3e97a] transition-colors duration-300 max-w-max">
                        <div className="relative group flex-shrink-0">
                          <div className="w-6 h-6 flex items-center justify-center ">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:animate-spin"
                            />
                          </div>
                        </div>
                        <Typography
                          margin={"0.8rem 0px"}
                          color={"textPrimary"}
                          fontSize={"16px"}
                          fontWeight={"700"}
                          component={"subtitle1"}
                          lineHeight={"100%"}
                          textTransform={"uppercase"}
                        >
                          {item.name}
                        </Typography>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Collapsible>
            </Box>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.8,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Box className="border-t border-b border-[#484848] border-t-[1px] border-b-[1px]">
              <Collapsible
                open={isMiscellaneous}
                onOpening={() => {
                  setIsMiscellaneous(true);
                }}
                onClosing={() => {
                  setIsMiscellaneous(false);
                }}
                trigger={
                  // bg-[#1c1c1e] py-4 px-4
                  <Box className="flex items-center justify-between w-full py-4">
                    <Typography
                      color={"textPrimary"}
                      variant="body1"
                      fontSize={"16px"}
                      component={"h4"}
                    >
                      Miscellaneous
                    </Typography>

                    <div
                      className={`text-white transition-transform duration-500 ease-in-out transform ${
                        isMiscellaneous ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <KeyboardArrowUpRoundedIcon />
                    </div>
                  </Box>
                }
              >
                <Grid
                  className="pb-4"
                  container
                  spacing={2}
                  // sx={{ bgcolor: "#1c1c1e7b", padding: "16px" }}
                >
                  {miscellaneous.map((item) => (
                    <Grid item>
                      <div className="border border-[#484848] rounded-full px-4 flex items-center space-x-2 hover:border-[#d3e97a] transition-colors duration-300 max-w-max">
                        <div className="relative group flex-shrink-0">
                          <div className="w-6 h-6 flex items-center justify-center ">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:animate-spin"
                            />
                          </div>
                        </div>
                        <Typography
                          margin={"0.8rem 0px"}
                          color={"textPrimary"}
                          fontSize={"16px"}
                          fontWeight={"700"}
                          component={"subtitle1"}
                          lineHeight={"100%"}
                          textTransform={"uppercase"}
                        >
                          {item.name}
                        </Typography>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Collapsible>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMeIntro;
