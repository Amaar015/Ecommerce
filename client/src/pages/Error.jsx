import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { BeforeHeading, Buttons } from "../components/Components";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <Stack padding={"3rem 8% 5rem 8%"} spacing={"2rem"}>
      <BeforeHeading path={"Home /"} title={"404 Error"} />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"40px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          variant="h1"
          fontSize={"100px"}
          fontWeight={500}
          letterSpacing={"3%"}
          lineHeight={"115px"}
        >
          404 Not Found
        </Typography>
        <Typography
          variant="p"
          fontSize={"16px"}
          fontWeight={400}
          marginBlock={"2rem"}
        >
          Your visited page not found. You may go home page.
        </Typography>
        <Buttons
          title={"Back to home page"}
          padding={"1rem 2.5rem"}
          click={() => navigate("/")}
        />
      </Box>
    </Stack>
  );
};

export default Error;
