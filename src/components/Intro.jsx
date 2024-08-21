import {
  Box,
  Container,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import CTAButton from "./CTAButton";
import GithubIcon from "../assets/imageSVG/bxl-github.svg";
import LinkedinIcon from "../assets/imageSVG/bxl-linkedin.svg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PronunciationButton from "./PronunciationButton";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: "30px", paddingBottom: "80px" }}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} alignContent={"center"}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Box>
              {/* <Box sx={{display:"flex", flexDirection:"row"}}> */}
              <Typography
                color="textPrimary"
                variant="h1"
                sx={{ fontSize: "101px", fontWeight: "400", lineHeight: "90%" }}
              >
                {"HI, I AM"}
                <br />

                {"KHUSHAL KHUNT"}
                <PronunciationButton />
              </Typography>

              {/* </Box> */}

              <Typography
                className="mt-2 mb-10"
                color="textSecondary"
                variant="subtitle1"
                sx={{
                  fontSize: "18px",
                  marginTop: "8px",
                  marginBottom: "40px",
                }}
              >
                A Vancouver based software developer passionate about building
                accessible and user friendly applications
              </Typography>
              <Box>
                <CTAButton text="CONTACT ME" icon={ArrowOutwardIcon} />
                <IconButton
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
                  size="large"
                  className="ml-2"
                  sx={{ background: "#222" }}
                >
                  <Icon>
                    <img src={LinkedinIcon} alt="linkedin" />
                  </Icon>
                </IconButton>
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
            <Box
              sx={{
                display: "flex",
                justifyContent: { sm: "center", md: "left" },
              }}
            >
              <img
                className="rounded-[16px]"
                src="https://via.placeholder.com/600x663"
                alt="khushal"
              ></img>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Intro;
