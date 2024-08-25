import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Collapsible from "react-collapsible";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const AboutMeSection = () => {
  const [isRandomQuestionOpen, setIsRandomQuestionOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ paddingTop: { md: "122px" } }}>
      <Grid container spacing={10}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", md: "initial" } }}
        >
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
              opportunities. Has experience in building scalable applications. Likes to focus on
              accessibility when developing. Passionate and curious about
              solving problems. Currently, I’m exploring AI and Real time web
              rendering While I am not programming, I enjoy going on camping and
              plying video games. Learning more to improve skill.
            </Typography>

            <Button
              sx={{
                borderBottom: "solid 1px #d3e97a",
                borderRadius: 0,
                padding: 0,
                lineHeight: "150%",
                marginRight: "24px",
              }}
              onClick={() => {
                navigate("/about",  { state: { scrollToTop: true } });
              }}
            >
              More About Me
            </Button>

            <Box className="border-t border-b-[1px] border-[#484848] border-t-[1px] my-20">
              <Collapsible
                open={isRandomQuestionOpen}
                onOpening={() => {
                  setIsRandomQuestionOpen(true);
                }}
                onClosing={() => {
                  setIsRandomQuestionOpen(false);
                }}
                trigger={
                  <Box className="flex items-center justify-between w-full py-4">
                    <Typography
                      color={"#d3e97a"}
                      variant="body1"
                      fontSize={"16px"}
                      component={"h4"}
                    >
                      Now it's time for something completely random
                    </Typography>

                    <div
                      className={`text-white transition-transform duration-500 ease-in-out transform ${
                        isRandomQuestionOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <KeyboardArrowDownRoundedIcon />
                    </div>
                  </Box>
                }
              >
                <Typography
                  variant="subtitle1"
                  component="h3"
                  color={"textPrimary"}
                  fontSize={"32px"}
                  fontWeight={"500"}
                  lineHeight={"140%"}
                >
                  What does it mean to live a finite, fragile life in an
                  infinite, eternal universe?
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
                  {`And I think the answer is that... So, paradoxically, whilst we
                are definitely physically insignificant, I've just said, you
                know, that the Earth is one planet around one star amongst 400
                billion stars in one galaxy, amongst two trillion galaxies in a
                small patch of the universe, right?`}
                  <br /> <br />
                  <b color="white">{`So we're definitely small,`}</b>
                  <br />
                  <Collapsible trigger={"..."}>
                    {` and you can't argue with that; we're
                just specks of dust. But if you think about what we are, so
                everybody, me and you, everybody, we're just collections of
                atoms, right? Some of them are as old as time, pretty much, and
                some of them, the other ones, everything else other than the
                hydrogen in our bodies, was made in stars, right? So we all
                cooked over billions of years. And we're in this pattern that
                can think.`}
                    <br /> <br />
                    <b>{` So suddenly, as the great Carl Sagan said, "You have
                a means by which the universe understands and explores itself,"`}</b>
                    <br /> <br />{" "}
                  </Collapsible>
                  {`
                which is us. And that sounds unlikely when you put it like that,
                that you can have a few things that were cooked in the hearts of
                stars. You stick 'em together in a pattern and suddenly it has
                some ideas and starts writing music and arts and things.
                `}
                  <br />{" "}
                  <Collapsible trigger={"..."}>
                    {`
                That's
                quite difficult to comprehend, right? But that happened here, we
                know that, 'cause we're sat here having a conversation. And so
                the question then becomes, well, on how many other worlds did
                that happen? And that's where I think the value can come in
                because it's a reasonable guess and it is just a guess, right?
                But it's reasonable. You can make the argument that there aren't
                any other worlds where this happened, certainly in our galaxy.
                So it could be that`}
                    <br />
                    <br />
                  </Collapsible>
                  <b>
                    {`
                this planet, not withstanding its physical
                insignificance, is the only place where anything thinks, right?
                For millions of light years in every direction.`}
                  </b>
                  <br />
                </Typography>

                <Box display={"flex"} alignItems={"end"}>
                  <Typography
                    color={"textSecondary"}
                    component="a"
                    href="https://youtu.be/aPOCP4GHJvI?t=328"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      fontSize: "18px",
                      marginBottom: "40px",
                      textAlign: "end",
                      width: "100%",
                    }}
                    className="hover:text-white"
                  >
                    - In an Interview with Professor Brian Cox By LADbible TV
                  </Typography>
                </Box>
              </Collapsible>
            </Box>

            <Box
              sx={{
                display: { md: "none" },
                marginTop: "64px",
                marginBottom: "16px",
              }}
            >
              <img
                src="https://via.placeholder.com/343x400"
                alt={"a man wearing a shirt"}
                className="w-full h-full rounded-2xl"
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMeSection;
