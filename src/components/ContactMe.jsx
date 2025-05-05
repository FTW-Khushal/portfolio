import {
  Box,
  Container,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ContactFrom from "./ContactForm";
import { Link } from "react-router-dom";
import GithubIcon from "../assets/imageSVG/bxl-github.svg";
import LinkedinIcon from "../assets/imageSVG/bxl-linkedin.svg";
import InstagramIcon from "../assets/imageSVG/bxl-instagram.svg";
import TweeterIcon from "../assets/imageSVG/bxl-tweeter.svg";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={10}
        sx={{ paddingTop: "56px", paddingBottom: "64px" }}
      >
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="h-full"
          >
            <Box display={"flex"} flexDirection={"column"} height={"100%"}>
              <Typography
                color="textPrimary"
                variant="h2"
                sx={{ fontSize: "76px", fontWeight: "400", lineHeight: "100%" }}
              >
                {"LET'S CONNECT"}
              </Typography>

              <Typography
                color="textSecondary"
                variant="subtitle1"
                sx={{
                  fontSize: "18px",
                  marginTop: "8px",
                  marginBottom: "32px",
                }}
              >
                For more info, here is my{" "}
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/portfolio-2c12f.appspot.com/o/Resume%20Khushal%20Khunt.pdf?alt=media&token=4b703316-1a12-45f2-9098-a64fc7d88f54"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#D3E97A] text-white underline-offset-[6px] hover:text-[#c7c7c7]"
                >
                  resume
                </a>
              </Typography>
              <Box>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/khushal-khunt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6"
                >
                  <Icon>
                    <img src={LinkedinIcon} alt="linkedin" />
                  </Icon>
                </IconButton>

                <IconButton
                  component="a"
                  href="https://github.com/FTW-Khushal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6"
                >
                  <Icon>
                    <img src={GithubIcon} alt="github" />
                  </Icon>
                </IconButton>

                <IconButton
                  component="a"
                  href="https://x.com/khushal_y_khunt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6"
                >
                  <Icon>
                    <img src={TweeterIcon} alt="x formerly tweeter" />
                  </Icon>
                </IconButton>

                <IconButton
                  component="a"
                  href="https://www.instagram.com/khushal_khunt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6"
                >
                  <Icon>
                    <img src={InstagramIcon} alt="instagram" />
                  </Icon>
                </IconButton>
              </Box>

              <Box flexGrow={1} />

              <Box sx={{ display: { xs: "none", md: "initial" } }}>
                <Typography
                  color="textSecondary"
                  fontSize={"16px"}
                  lineHeight={"160%"}
                  variant="subtitle1"
                >
              Photography by{" "}
              <a
                href="https://www.linkedin.com/in/tirth-mangukiya/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Tirth Mangukiya
              </a>
                </Typography>

                <Typography
                  color="textSecondary"
                  fontSize={"16px"}
                  lineHeight={"160%"}
                  variant="subtitle1"
                >
                   
                  Design by{" "}
              <a
                href="https://www.figma.com/community/file/1311309815091555685/portfolio-for-developers"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Suman Kunwar
              </a>
                </Typography>

                <Typography
                  color="textSecondary"
                  fontSize={"16px"}
                  lineHeight={"160%"}
                  variant="subtitle1"
                >
                  Developed by Khushal Khunt
                </Typography>

                <Typography
                  color="textSecondary"
                  fontSize={"16px"}
                  lineHeight={"160%"}
                  variant="subtitle1"
                >
                  Free for All {new Date().getFullYear()}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
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
            <ContactFrom />
          </motion.div>

          <Box sx={{ display: { md: "none", marginTop: "80px" } }}>
            <Typography
              color="textSecondary"
              fontSize={"16px"}
              lineHeight={"160%"}
              variant="subtitle1"
            >
              Photography by{" "}
              <a
                href="https://www.linkedin.com/in/tirth-mangukiya/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Tirth Mangukiya
              </a>
            </Typography>

            <Typography
              color="textSecondary"
              fontSize={"16px"}
              lineHeight={"160%"}
              variant="subtitle1"
            >
              Design by Robert Garcia
            </Typography>

            <Typography
              color="textSecondary"
              fontSize={"16px"}
              lineHeight={"160%"}
              variant="subtitle1"
            >
              Developed by Khushal Khunt
            </Typography>

            <Typography
              color="textSecondary"
              fontSize={"16px"}
              lineHeight={"160%"}
              variant="subtitle1"
            >
              Free for All {new Date().getFullYear()}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactMe;
