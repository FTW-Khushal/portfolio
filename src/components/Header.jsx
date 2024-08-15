import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  const menuItems = ["Work", "About", "Contact"];
  const menuItemStyle = {
    textTransform: "none",
    fontSize: "16px",
    fontFamily: "Inter",
  };

  return (
    <Box className="flex items-center py-6 px-4">
      <Typography
        sx={{
          width: "100%",
          fontSize: "32px",
          fontWeight: "400",
          letterSpacing: "-0.32px",
        }}
        color="textSecondary"
        variant="h1"
        component="h1"
      >
        KHUSHAL KHUNT
      </Typography>
{/* set in medium md:flex */}
      <ul className="hidden items-center space-x-5">
        {menuItems.map((item) => (
          <li>
            <Button color="secondary" variant="text" sx={menuItemStyle}>
              {item}
            </Button>
          </li>
        ))}
      </ul>
      {/* md:hidden */}
      <button className="group ">
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
              <Button color="secondary" variant="text" sx={menuItemStyle}>
                {item}
              </Button>
            </li>
          ))}
        </ul>
      </button>
    </Box>
  );
};

export default Header;
