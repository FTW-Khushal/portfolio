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
                  href="https://firebasestorage.googleapis.com/v0/b/portfolio-2c12f.appspot.com/o/Resume.pdf?alt=media&token=ef577e6c-c8f2-4dda-878e-abefd06b1239"
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
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    delay: 0.5,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    color="textSecondary"
                    fontSize={"16px"}
                    lineHeight={"160%"}
                    variant="subtitle1"
                  >
                    Photography by Tirth Mangukiya
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    delay: 0.6,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    color="textSecondary"
                    fontSize={"16px"}
                    lineHeight={"160%"}
                    variant="subtitle1"
                  >
                    Design by Robert Garcia
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    delay: 0.7,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    color="textSecondary"
                    fontSize={"16px"}
                    lineHeight={"160%"}
                    variant="subtitle1"
                  >
                    Developed by Khushal Khunt
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    delay: 0.8,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    color="textSecondary"
                    fontSize={"16px"}
                    lineHeight={"160%"}
                    variant="subtitle1"
                  >
                    Free for All {new Date().getFullYear()}
                  </Typography>
                </motion.div>
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
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Typography
                color="textSecondary"
                fontSize={"16px"}
                lineHeight={"160%"}
                variant="subtitle1"
              >
                Photography by Tirth Mangukiya
              </Typography>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Typography
                color="textSecondary"
                fontSize={"16px"}
                lineHeight={"160%"}
                variant="subtitle1"
              >
                Design by Robert Garcia
              </Typography>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 0.7,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Typography
                color="textSecondary"
                fontSize={"16px"}
                lineHeight={"160%"}
                variant="subtitle1"
              >
                Developed by Khushal Khunt
              </Typography>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 0.8,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Typography
                color="textSecondary"
                fontSize={"16px"}
                lineHeight={"160%"}
                variant="subtitle1"
              >
                Free for All {new Date().getFullYear()}
              </Typography>
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactMe;
