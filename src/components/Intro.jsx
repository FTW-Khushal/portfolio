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

const Intro = () => {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: "30px", paddingBottom: "80px" }}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} alignContent={"center"}>
          <Box>
            <Typography
              color="textPrimary"
              variant="h1"
              sx={{ fontSize: "101px", fontWeight: "400", lineHeight: "90%" }}
            >
              {"HI, I AM"}
              <br />
              {"KHUSHAL KHUNT"}
            </Typography>
            <Typography
              className="mt-2 mb-10"
              color="textSecondary"
              variant="subtitle1"
              sx={{ fontSize: "18px", marginTop: "8px", marginBottom: "40px" }}
            >
              A Vancouver based software developer passionate about building
              accessible and user friendly applications
            </Typography>
            <Box>
              <CTAButton />
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
        </Grid>

        <Grid item xs={12} md={6}>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default Intro;
