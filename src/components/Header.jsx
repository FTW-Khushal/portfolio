import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const menuItems = [["Work", "featured-projects"], ["About", "about"], ["Contact", "contact"]];
  const menuItemStyle = {
    textTransform: "none",
    fontSize: "16px",
    fontFamily: "Inter",
  };

  return (
    <Container maxWidth="lg">
      <Box className="flex items-center py-6 ">
        <Typography
          sx={{
            width: "100%",
            fontSize: "32px",
            fontWeight: "400",
            letterSpacing: "-0.32px",
            cursor:"pointer"
          }}
          color="textSecondary"
          variant="h1"
          component="h1"
          onClick={() => {navigate("/")}}
        >
          KHUSHAL KHUNT
        </Typography>

        <ul className="hidden md:flex items-center space-x-5">
          {menuItems.map((item) => (
            <li>
              <Button color="secondary" variant="text" sx={menuItemStyle} onClick={() => window.location.hash = item[1]}>
                {item[0]}
              </Button>
            </li>
          ))}
        </ul>

        <button className="group md:hidden z-50">
          <div className="w-6 h-[2px] bg-[#C7C7C7]"></div>
          <div className="h-2"></div>
          <div className="w-6 h-[2px] bg-[#C7C7C7]"></div>

          <ul className="bg-[#1A1A1A] w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
            <button className="relative w-full flex items-center justify-end pr-4">
              <div className="relative p-4">
                <div className="w-[2px] h-8 bg-white transform absolute rotate-45"></div>
                <div className="w-[2px] h-8 bg-white transform absolute -rotate-45"></div>
              </div>
            </button>

            {menuItems.map((item) => (
              <li className="flex justify-center w-full">
                <Button color="secondary" variant="text" sx={menuItemStyle} onClick={() => window.location.hash = item[1]}>
                  {item[0]}
                </Button>
              </li>
            ))}
          </ul>
        </button>
      </Box>
    </Container>
  );
};

export default Header;
