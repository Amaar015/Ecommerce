import { Box, IconButton, InputBase, Stack, Typography } from "@mui/material";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current path

  const links = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Contact", path: "/contact" },
    { id: 3, title: "About", path: "/about" },
    { id: 4, title: "Sign Up", path: "/signup" },
  ];

  return (
    <Stack
      direction={"row"}
      padding={"2rem 8% 0.5rem 8%"}
      bgcolor={"#fafafa"}
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1.5fr",
        gap: "1rem",
        alignItems: "center",
        borderBottom: "0.5px solid #000000",
      }}
    >
      <Typography
        marginLeft={"1rem"}
        variant="h4"
        color="#000000"
        fontSize={"24px"}
        fontWeight={700}
      >
        Exclusive
      </Typography>
      <Box display={"flex"} alignItems={"center"} gap={"48px"}>
        {links.map((link) => (
          <NavLink
            to={link.path}
            key={link.id}
            style={{
              textDecoration: "none",
              color: "#000",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "24px",
              paddingBottom: "4px",
              borderBottom:
                location.pathname === link.path
                  ? "2px solid #000"
                  : "2px solid transparent",
            }}
          >
            {link.title}
          </NavLink>
        ))}
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"1rem"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"0.5rem"}
          width={220}
          bgcolor={"#f0f0f0"}
          padding={"0rem 0.4rem"}
        >
          <InputBase
            sx={{ flex: 1, padding: "4px 0px" }}
            placeholder="What are you looking for?"
            inputProps={{ style: { fontSize: "14px", fontWeight: 400 } }}
          />
          <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
            <FiSearch style={{ fontSize: "18px" }} color="#000" />
          </IconButton>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <IconButton>
            <IoMdHeartEmpty color="#000" />
          </IconButton>
          <IconButton>
            <RiShoppingCart2Line color="#000" />
          </IconButton>
        </Box>
      </Box>
    </Stack>
  );
};

export default Navbar;
