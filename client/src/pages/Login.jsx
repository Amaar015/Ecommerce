import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Buttons } from "../components/Components";
import google from "../assets/g.png";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleNavigation = () => {
    navigate("/");
  };
  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Password validation regex (8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate input while typing
    let errorMsg = "";
    if (name === "email") {
      errorMsg = !emailRegex.test(value) ? "Invalid email format" : "";
    }
    if (name === "password") {
      errorMsg = !passwordRegex.test(value)
        ? "Password must be at least 8 characters, with 1 uppercase, 1 lowercase, 1 number, and 1 special character"
        : "";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      validationErrors.password =
        "Password must be at least 8 characters, with 1 uppercase, 1 lowercase, 1 number, and 1 special character";
    }

    setErrors(validationErrors);

    // If no errors, submit form
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted:", formData);
      // Navigate or send data to API
    }
  };

  return (
    <Stack
      padding={"3rem 0"}
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
          <Typography variant="h4" fontSize={"36px"} fontWeight={500}>
            Log in to Exclusive
          </Typography>
          <Typography variant="body1" fontSize={"16px"} fontWeight={400}>
            Enter your details below
          </Typography>
          <Box
            component={"form"}
            onSubmit={handleSubmit}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            width={"350px"}
          >
            <TextField
              label="Email or Phone Number"
              variant="standard"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Password"
              variant="standard"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              gap={"16px"}
              marginTop={"1rem"}
            >
              <Buttons
                title={"Login"}
                type={"submit"}
                padding={"0.3rem 1.5rem"}
                click={handleNavigation}
              />
              <NavLink
                href=""
                style={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "rgba(219, 68, 68, 1)",
                }}
              >
                Forget Password?
              </NavLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Login;
