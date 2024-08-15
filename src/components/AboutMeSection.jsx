import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const AboutMeSection = () => {
  return (
    <Container maxWidth="xl" sx={{height:{md:"100vh"}, paddingTop:{md:"122px"}}}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} sx={{display:{sm:"none", md:"initial"}}} >
          <Typography
            color="textPrimary"
            variant="h1"
            component="h2"
            sx={{  fontSize: "101px", fontWeight: "400", lineHeight: "90%" }}
          >
            About Me
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
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
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring AI ane Real time web
            rendering While I am not programming, I enjoy going on camping and plying
            video games. Learning more to improve skill.
          </Typography>

          <Button
            sx={{
              borderBottom: "solid 1px #d3e97a",
              borderRadius: 0,
              padding: 0,
              lineHeight: "150%",
              marginRight: "24px",
            }}
          >
            More About Me
          </Button>

          <Box sx={{display:{md:"none"}, marginTop:"64px", marginBottom:"16px"}}>
              <img
                src="https://via.placeholder.com/343x400"
                alt={"a man wearing a shirt"}
                className="w-full h-full rounded-2xl"
              />
            </Box>
            
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMeSection;
