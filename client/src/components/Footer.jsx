import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { BiSend } from "react-icons/bi";
import { footer } from "../data/data";
import { NavLink } from "react-router-dom";
import qr from "../assets/qr.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram, FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <Stack direction={"column"} padding={"1rem"} bgcolor={"#000000"}>
      <Stack
        display={"flex"}
        // alignItems={"center"}
        justifyContent={"center"}
        gap={"2rem"}
        direction={"row"}
        sx={{ pt: "3rem", pb: "4rem" }}
      >
        <Box>
          <Typography
            variant="h4"
            color="#fafafa"
            fontSize={"20px"}
            fontWeight={500}
            marginBottom={"24px"}
          >
            Exclusive
          </Typography>
          <Typography
            variant="h5"
            fontSize={"20px"}
            fontFamily={`"Poppins", sans-serif`}
            fontWeight={"500"}
            marginBottom={"1rem"}
            color="#fff"
          >
            Subscribe
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={"0.6rem"}>
            <Typography
              variant="p"
              fontSize={"16px"}
              fontWeight={400}
              color="#fff"
              fontFamily={`"Poppins", sans-serif`}
            >
              Get 10% off your first order
            </Typography>
            <TextField
              required
              id="outlined-basic"
              placeholder="Enter your email"
              type="text"
              size="small"
              variant="outlined"
              name="password"
              InputProps={{
                endAdornment: (
                  <BiSend style={{ color: "#fafafa", fontSize: "24px" }} />
                ),
                style: {
                  fontSize: "16px",
                  color: "#fff", // Text color
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "1.5px solid #fafafa",
                  },
                  "&:hover fieldset": {
                    border: "1.5px solid #fafafa",
                  },
                  "&.Mui-focused fieldset": {
                    border: "1.5px solid #fafafa",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#999999",
                  opacity: 1,
                  fontSize: "16px",
                },
              }}
            />
          </Box>
        </Box>

        {footer.map((footers) => (
          <Box key={footers.id}>
            <Typography
              variant="h4"
              color="#fafafa"
              fontSize={"20px"}
              fontWeight={500}
              marginBottom={"24px"}
            >
              {footers.title}
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
              {footers.links.map((data) => (
                <>
                  {footers.id === 1 ? (
                    <Typography
                      variant="p"
                      color="#fafafa"
                      fontSize={"14px"}
                      fontWeight={400}
                    >
                      {data}
                    </Typography>
                  ) : (
                    <NavLink
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        textDecoration: "none",
                        color: "#fafafa",
                      }}
                    >
                      {data}
                    </NavLink>
                  )}
                </>
              ))}
            </Box>
          </Box>
        ))}

        <Box width={"250px"}>
          <Typography
            variant="h4"
            color="#fafafa"
            fontSize={"20px"}
            fontWeight={500}
            marginBottom={"24px"}
          >
            Download App
          </Typography>
          <Typography
            variant="p"
            fontSize={"12px"}
            fontWeight={500}
            color="#fafafa"
          >
            Save $3 with App New User Only
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              marginTop: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80px",
                width: "80px",
              }}
            >
              <img
                src={qr}
                alt="QR Code"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>

            {/* Inner Box containing Google & Apple Images */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <img
                src={google}
                alt="Google"
                style={{ width: "100px", height: "40px" }}
              />
              <img
                src={apple}
                alt="Apple"
                style={{ width: "100px", height: "40px" }}
              />
            </Box>
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            padding={"2px"}
            gap={"24px"}
            marginTop={"0.5rem"}
          >
            <NavLink
              style={{
                textDecoration: "none",
                color: "#fafafa",
                fontSize: "20px",
              }}
            >
              <RiFacebookLine />
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                color: "#fafafa",
                fontSize: "20px",
              }}
            >
              <CiTwitter />
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                color: "#fafafa",
                fontSize: "20px",
              }}
            >
              <FaInstagram />
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                color: "#fafafa",
                fontSize: "20px",
              }}
            >
              <RiLinkedinLine />
            </NavLink>
          </Box>
        </Box>
      </Stack>
      <Typography
        variant="p"
        color="#ffffff"
        fontSize={"16px"}
        fontWeight={400}
        textAlign={"center"}
      >
        <span style={{ fontSize: "16px" }}>&copy;</span> Copyright Rimel 2022.
        All right reserved
      </Typography>
    </Stack>
  );
};

export default Footer;
