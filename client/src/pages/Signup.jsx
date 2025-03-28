import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Buttons } from "../components/Components";
import google from "../assets/g.png";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

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
    if (name === "name") {
      errorMsg = value.trim() === "" ? "Name is required" : "";
    }
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

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
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
            Create an account
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
              label="Name"
              variant="standard"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
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
            <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
              <Buttons title={"Create Account"} type={"submit"} />
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
                  alt="Google"
                  style={{ width: "24px", height: "24px" }}
                />
                <span style={{ fontSize: "16px", marginLeft: "0.5rem" }}>
                  Sign up with Google
                </span>
              </button>
            </Box>

            <Typography fontSize={"16px"} fontWeight={400} textAlign={"center"}>
              Already have an account?{" "}
              <NavLink
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "rgba(0,0,0,1)",
                  borderBottom: "1px solid rgba(0,0,0,1)",
                }}
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
