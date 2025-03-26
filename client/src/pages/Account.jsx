import {
  Box,
  FormControl,
  InputLabel,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BeforeHeading, Buttons } from "../components/Components";
import { account } from "../data/data";
import { NavLink } from "react-router-dom";

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

const Account = () => {
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
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"0rem 4% 0rem 1%"}
      >
        <BeforeHeading path={"Home /"} title={"My Account"} />

        <Typography variant="p" fontSize={"14px"} fontWeight={400}>
          Welcome! <span style={{ color: "#db4444" }}> Md Rimel</span>
        </Typography>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={"1rem"}
        flexWrap={"wrap"}
      >
        <Box
          flex={1}
          height={"100%"}
          padding={"1rem 0rem 4rem 1rem"}
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
        >
          {account.map((links) => (
            <Box key={links.id}>
              <Typography fontSize={"16px"} fontWeight={600}>
                {links.title}
              </Typography>

              {links.submenu &&
                links?.submenu.map((sub) => (
                  <Box
                    marginTop={sub.id === 1 ? "1rem" : "0.5rem"}
                    marginLeft={"1rem"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"1rem"}
                    key={sub.id}
                  >
                    <NavLink to={`${sub.path}`} className={"accountsLinks"}>
                      {sub.name}
                    </NavLink>
                  </Box>
                ))}
            </Box>
          ))}
        </Box>
        <Box
          flex={2.5}
          height={"100%"}
          padding={"2rem 5%"}
          boxShadow={"rgba(17, 17, 26, 0.1) 0px 0px 16px"}
        >
          <Box
            component={"form"}
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            <Typography fontSize={"20px"} fontWeight={500} color="#db4444">
              Edit Your Profile
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} gap={"2rem"}>
              <FormControl sx={{ flex: "250px" }}>
                <label
                  htmlFor="firstName"
                  style={{ marginBottom: "0.5rem", fontSize: "16px" }}
                >
                  First Name
                </label>
                <CustomTextField
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                ></CustomTextField>
              </FormControl>
              <FormControl sx={{ flex: "250px" }}>
                <label
                  htmlFor="lastName"
                  style={{ marginBottom: "0.5rem", fontSize: "16px" }}
                >
                  Lirst Name
                </label>
                <CustomTextField
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                ></CustomTextField>
              </FormControl>
              <FormControl sx={{ flex: "250px" }}>
                <label
                  htmlFor="email"
                  style={{ marginBottom: "0.5rem", fontSize: "16px" }}
                >
                  Email
                </label>
                <CustomTextField
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                ></CustomTextField>
              </FormControl>
              <FormControl sx={{ flex: "250px" }}>
                <label
                  htmlFor="address"
                  style={{ marginBottom: "0.5rem", fontSize: "16px" }}
                >
                  Address
                </label>
                <CustomTextField
                  id="address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                ></CustomTextField>
              </FormControl>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
              <FormControl sx={{ flex: "100%" }}>
                <label
                  htmlFor="password"
                  style={{ marginBottom: "0.5rem", fontSize: "16px" }}
                >
                  Password Changes
                </label>
                <CustomTextField
                  id="password"
                  placeholder="Current Password"
                  value={formData.currentPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      currentPassword: e.target.value,
                    })
                  }
                ></CustomTextField>
              </FormControl>
              <FormControl sx={{ flex: "100%" }}>
                <CustomTextField
                  placeholder="New Password"
                  value={formData.newPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, newPassword: e.target.value })
                  }
                ></CustomTextField>
              </FormControl>
              <FormControl sx={{ flex: "100%" }}>
                <CustomTextField
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                ></CustomTextField>
              </FormControl>
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={'flex-end'} marginTop={"0.5rem"} gap={"1rem"}>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "16px",
                  fontWeight: 400,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <Buttons title={"Save Changes"} padding={"0.5rem 2rem"} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Account;
