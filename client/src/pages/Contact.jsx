import {
  Box,
  Divider,
  FormControl,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BeforeHeading, Buttons } from "../components/Components";
import { contact } from "../data/data";

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.action.disabledBackground, // Similar to disabled input background
  // borderRadius: "8px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none", // Removes the default border
    },
    "&:hover fieldset": {
      border: "none", // No border on hover
    },
    "&.Mui-focused fieldset": {
      border: "none", // No border when focused
    },
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel1111@gmail.com",
    address: "Karachi, 5236, Pakistan",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  return (
    <Stack padding={"3rem 8% 3rem 8%"} spacing={"2rem"}>
      <BeforeHeading path={"Home /"} title={"Contact"} />
      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={"1rem"}
        flexWrap={"wrap"}
      >
        <Box
          sx={{
            flex: 1,
            height: "100%",
            padding: "1rem 0% 3rem 4%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          {contact.map((info) => (
            <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
              <Box
                marginTop={"1.5rem"}
                display={"flex"}
                alignItems={"center"}
                gap={"1rem"}
              >
                <Box
                  width={"2.5rem"}
                  height={"2.5rem"}
                  borderRadius={"50%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={"#db4444"}
                  fontSize={"1.8rem"}
                  color={"#fafafa"}
                >
                  <info.icon />
                </Box>
                <Typography fontSize={"16px"} fontWeight={600}>
                  {info.title}
                </Typography>
              </Box>
              {info.detail.map((data) => (
                <Box display={"flex"} flexDirection={"column"}>
                  {data}
                </Box>
              ))}

              {info.id === 1 && <Divider sx={{ width: "80%" }} />}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            flex: 2,
            padding: "1.9rem 3%",
            height: "100%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Box
            component={"form"}
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"}>
              <FormControl sx={{ flex: "150px" }}>
                <CustomTextField
                  id="yourName"
                  placeholder="Your Name"
                  // value={formData.firstName}
                  // onChange={(e) =>
                  //   setFormData({ ...formData, firstName: e.target.value })
                  // }
                ></CustomTextField>
              </FormControl>
              <FormControl sx={{ flex: "150px" }}>
                <CustomTextField
                  id="email"
                  placeholder="Your Email"
                  // value={formData.lastName}
                  // onChange={(e) =>
                  //   setFormData({ ...formData, lastName: e.target.value })
                  // }
                ></CustomTextField>
              </FormControl>
              <FormControl sx={{ flex: "150px" }}>
                <CustomTextField
                  id="phone"
                  placeholder="Your Phone"
                  // value={formData.email}
                  // onChange={(e) =>
                  //   setFormData({ ...formData, email: e.target.value })
                  // }
                ></CustomTextField>
              </FormControl>

              <FormControl sx={{ flex: "100%", marginTop: "1rem" }}>
                <CustomTextField
                  id="password"
                  multiline={true}
                  rows={8}
                  placeholder="Your Message"
                  // value={formData.currentPassword}
                  // onChange={(e) =>
                  //   setFormData({
                  //     ...formData,
                  //     currentPassword: e.target.value,
                  //   })
                  // }
                ></CustomTextField>
              </FormControl>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              marginTop={"0.5rem"}
              gap={"1rem"}
            >
              <Buttons title={"Send Message"} padding={"0.5rem 2rem"} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Contact;
