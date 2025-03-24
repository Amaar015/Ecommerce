import {
  Avatar,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Profile } from "../data/data";

const Navbar = () => {
  const location = useLocation(); // Get the current path
  const navigate = useNavigate();
  const links = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Contact", path: "/contact" },
    { id: 3, title: "About", path: "/about" },
    { id: 4, title: "Sign Up", path: "/signup" },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        gap={"0.2rem"}
        marginLeft={"-3rem!important"}
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
        <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
          <IconButton
            onClick={() => {
              navigate("/wishlist"); // Use the navigate function
            }}
          >
            <IoMdHeartEmpty color="#000" />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("/cart"); // Use the navigate function
            }}
          >
            <RiShoppingCart2Line color="#000" />
          </IconButton>
          {true && (
            <>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="data:image/jpeg;base64,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"
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      bgcolor: "rgba(0, 0, 0)",
                      filter: blur(150),
                      borderRadius: "10px", // Optional for rounded corners
                      padding: "16px", // Optional for spacing
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                {Profile.map((data) => (
                  <MenuItem
                    onClick={handleClose}
                    key={data.id}
                    sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                  >
                    <img
                      src={data.image}
                      alt={data.title}
                      style={{
                        width: "28px",
                        height: "28px",
                        objectFit: "contain",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#fafafa",
                      }}
                    >
                      {data.title}
                    </span>
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Box>
      </Box>
    </Stack>
  );
};

export default Navbar;
