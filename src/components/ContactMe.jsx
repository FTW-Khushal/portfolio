import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ContactFrom from "./ContactForm";

const ContactMe = () => {
  return (
    <Container maxWidth="xl">
      <Grid container >
        <Grid item xs={12} md={6}>
          <Box >
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
              sx={{ fontSize: "18px", marginTop: "8px", marginBottom: "40px" }}
            >
              Here are some of the selected projects that showcase my passion
              for software development.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
            <ContactFrom/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactMe;
