import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Buttons } from "../components/Components";
import google from "../assets/g.png";
import { NavLink } from "react-router-dom";
const Signup = () => {
   
  return (
    <Stack
      padding={"3rem 0%  3rem 0%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      flexWrap={"wrap"}
      direction={"row"}
    >
      <div className="login"></div>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={"14px"}
        flex={1}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"14px"}>
          <Typography variant="h4" fontSize={"36px"} fontWeight={500} lineHeight={'30px'}>
            Create an account
          </Typography>
          <Typography variant="p" fontSize={"16px"} fontWeight={400} lineHeight={'24px'}>Enter your details below</Typography>
          <Box
            variant={"form"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            width={"350px"}
          >
            <TextField id="standard-basic" label="Name" variant="standard" />
            <TextField
              id="standard-basic"
              label="Email or Phone Number"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
            />
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"16px"}
              margin={"1rem 0rem"}
            >
              <Buttons title={"Create Account"} />
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "40px",
                  background: "#fff",
                  border: "1px solid rgba(0, 0, 0, 0.4)",
                  cursor: "pointer",
                }}
              >
                <img
                  src={google}
                  alt=""
                  style={{ width: "24px", height: "24px" }}
                />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    marginLeft: "0.5rem",
                  }}
                >
                  sign up with Google
                </span>
              </button>
            </Box>

            <Typography
              variant="p"
              fontSize={"16px"}
              fontWeight={400}
              color="rgba(0,0,0,1)"
              textAlign={"center"}
            >
              Already have account?{" "}
              <NavLink
                href="#"
                style={{ textDecoration: "none", color: "rgba(0,0,0,1)" }}
              >
                Log in
              </NavLink>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Signup;
