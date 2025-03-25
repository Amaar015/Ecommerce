import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { BeforeHeading } from "../components/Components";
import { projects } from "../data/data";

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

const Checkout = () => {
  return (
    <Stack padding={"3rem 8% 3rem 8%"} spacing={"2rem"}>
      <BeforeHeading
        path={"Account / My Account / Product / View Cart /"}
        title={"My Account"}
      />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        padding={"2rem 0% 5rem 0%"}
      >
        <Box flex={1}>
          <Typography fontSize={"36px"} fontWeight={400} marginBottom={"1rem"}>
            Billing Details
          </Typography>
          <Box
            component={"form"}
            display={"flex"}
            flexDirection={"column"}
            gap={"24px"}
          >
            <Box
              display={"flex"}
              gap={"0.5rem"}
              flexDirection={"column"}
              width={"70%"}
            >
              <Typography fontSize={"16px"} fontWeight={400} color="#888888">
                First Name
              </Typography>
              <CustomTextField size="small" type="text" />
            </Box>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              flexDirection={"column"}
              width={"70%"}
            >
              <Typography fontSize={"16px"} fontWeight={400} color="#888888">
                Company Name
              </Typography>
              <CustomTextField size="small" type="text" />
            </Box>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              flexDirection={"column"}
              width={"70%"}
            >
              <Typography fontSize={"16px"} fontWeight={400} color="#888888">
                Street Address
              </Typography>
              <CustomTextField size="small" type="text" />
            </Box>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              flexDirection={"column"}
              width={"70%"}
            >
              <Typography fontSize={"16px"} fontWeight={400} color="#888888">
                Apartment, floor, etc. (optional)
              </Typography>
              <CustomTextField size="small" type="text" />
            </Box>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              flexDirection={"column"}
              width={"70%"}
            >
              <Typography fontSize={"16px"} fontWeight={400} color="#888888">
                Town/City
              </Typography>
              <CustomTextField size="small" type="text" />
            </Box>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              flexDirection={"column"}
              width={"70%"}
            >
              <Typography fontSize={"16px"} fontWeight={400} color="#888888">
                Phone Number
              </Typography>
              <CustomTextField size="small" type="Number" />
            </Box>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              flexDirection={"column"}
              width={"70%"}
            >
              <Typography fontSize={"16px"} fontWeight={400} color="#888888">
                Email Address
              </Typography>
              <CustomTextField size="small" type="email" />
            </Box>
            <FormControlLabel
              sx={{ marginTop: "-1rem" }}
              label="Save this information for faster check-out next time"
              control={
                <Checkbox
                  sx={{
                    color: "#db4444",
                    "&.Mui-checked": {
                      color: "#db4444",
                    },
                  }}
                />
              }
            ></FormControlLabel>
          </Box>
        </Box>
        <Box
          flex={1}
          display={"flex"}
          flexDirection={"column"}
          gap={"1.5rem"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            width={"80%"}
            height={"150px"}
            overflow={"auto"}
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            {projects.map((product) => (
              <Box
                padding={"0.5rem 1rem"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack
                  direction={"row"}
                  spacing={"0.8rem"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <img
                    src={product.image}
                    alt=""
                    style={{
                      width: "54px",
                      height: "54px",
                      objectFit: "contain",
                    }}
                  />
                  <Typography fontSize={"16px"} fontWeight={400}>
                    {product.name}
                  </Typography>
                </Stack>
                <Typography fontSize={"16px"} fontWeight={400}>
                  {product.price}
                </Typography>
              </Box>
            ))}
          </Box>
          <Stack width={"75%"} spacing={"1.5rem"} marginTop={"1rem"}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              borderBottom={"2px solid #666"}
              paddingBottom={"0.5rem"}
            >
              <Typography variant="p" fontSize={"16px"} fontWeight={400}>
                Subtotal
              </Typography>
              <Typography variant="p" fontSize={"16px"} fontWeight={400}>
                $1750
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              borderBottom={"2px solid #666"}
              paddingBottom={"0.5rem"}
            >
              <Typography variant="p" fontSize={"16px"} fontWeight={400}>
                Shipping:
              </Typography>
              <Typography variant="p" fontSize={"16px"} fontWeight={400}>
                Free
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="p" fontSize={"16px"} fontWeight={400}>
                Total:
              </Typography>
              <Typography variant="p" fontSize={"16px"} fontWeight={400}>
                $1750
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default Checkout;
