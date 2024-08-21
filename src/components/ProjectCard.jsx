import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { ReactComponent as GithubIcon } from "../assets/imageSVG/bxl-github.svg";
import { motion } from "framer-motion";

const ProjectCard = ({ data }) => {
  return (
    <Box margin={"60px 0"}>
      <Grid container spacing={10}>
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
          >
            <Box className="bg-[#1A1A1A] rounded-[16px] relative flex items-center justify-center px-14 py-32">
              {data.tag && (
                <Box className="bg-[#0A0A0A] rounded-full absolute top-0 left-0 mx-4 my-4 px-4 py-2">
                  <Typography
                    variant="body2"
                    color={"white"}
                    fontWeight={"500"}
                    lineHeight={"150%"}
                    fontSize={"14px"}
                  >
                    {data.tag}
                  </Typography>
                </Box>
              )}

              <Box className="w-full h-80">
                {" "}
                {/* Adjust height as needed */}
                <img
                  src="https://via.placeholder.com/1200x2420"
                  alt={data.imgAlt || "Placeholder image"}
                  className="w-full h-full object-cover rounded-2xl border border-black"
                />
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
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <Box sx={{ flexGrow: 1 }} />
              <Box>
                <Typography
                  variant="subtitle1"
                  component="h3"
                  color={"textPrimary"}
                  fontSize={"32px"}
                  fontWeight={"500"}
                  lineHeight={"140%"}
                >
                  {data.title}
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
                  {data.description}
                </Typography>
              </Box>
              {data.projectInfo && (
                <Box>
                  <Typography
                    color={"textPrimary"}
                    variant="body1"
                    fontSize={"16px"}
                    paddingBottom={"16px"}
                    component={"h4"}
                  >
                    PROJECT INFO
                  </Typography>
                  <div className="h-[1px] w-full bg-[#484848]"></div>
                  {data.projectInfo.map((info) => (
                    <>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography
                            variant="body2"
                            fontSize={"16px"}
                            padding={"16px 0px"}
                            color={"textPrimary"}
                          >
                            {info[0]}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            textAlign={"right"}
                            variant="body2"
                            fontSize={"16px"}
                            padding={"16px 0px"}
                            color={"textPrimary"}
                          >
                            {info[1]}
                          </Typography>
                        </Grid>
                      </Grid>
                      <div className="h-[1px] w-full bg-[#484848]"></div>
                    </>
                  ))}

                  {data.links && (
                    <Box marginTop={"48px"}>
                      {data.links.demo && (
                        <Button
                          endIcon={<ArrowOutwardIcon />}
                          sx={{
                            borderBottom: "solid 1px #d3e97a",
                            borderRadius: 0,
                            padding: 0,
                            lineHeight: "150%",
                            marginRight: "24px",
                          }}
                        >
                          Live Demo
                        </Button>
                      )}
                      {data.links.github && (
                        <Button
                          endIcon={<GithubIcon />}
                          sx={{
                            borderBottom: "solid 1px #d3e97a",
                            borderRadius: 0,
                            padding: 0,
                            lineHeight: "150%",
                          }}
                        >
                          See on Github
                        </Button>
                      )}
                    </Box>
                  )}
                </Box>
              )}

              <Box sx={{ flexGrow: 1 }} />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectCard;
