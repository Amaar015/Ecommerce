import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import music from "../assets/music.png";
import { times } from "../data/data";

const Poster = () => {
  return (
    <>
      <Stack padding={"3rem 8% 1.5rem 8%"}>
        <Box
          bgcolor={"#000000"}
          height={"500px"}
          width={"100%"}
          display={"flex"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"1rem"}
        >
          <Stack
            flex={1}
            sx={{ padding: "1rem 2rem 1rem 3rem" }}
            spacing={"1rem"}
          >
            <span
              style={{ color: "#00FF66", fontSize: "16px", fontWeight: "600" }}
            >
              Categories
            </span>
            <Typography
              sx={{
                fontSize: "48px",
                fontWeight: 600,
                color: "#fafafa",
                lineHeight: "60px",
                width: "80%",
              }}
            >
              Enhance Your Music Experience
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"24px"}
              paddingBottom={"1rem"}
            >
              {times.map((time, index) => (
                <Box
                  key={index}
                  height={"62px"}
                  width={"62px"}
                  borderRadius={"50%"}
                  bgcolor={"#ffffff"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: 600,
                    }}
                  >
                    {time.time}
                  </span>
                  <span style={{ fontSize: "11px", lineHeight: "18px" }}>
                    {time.title}
                  </span>
                </Box>
              ))}
            </Box>
            <Button
              sx={{
                background: "#00FF66",
                color: "#fafafa",
                fontSize: "16px",
                fontFamily: '"Poppins", sans-serif',
                padding: "1rem 2rem",
                width: "170px",
                border: "none",
                borderRadius: "4px",
                transition: "opacity 0.3s ease-in-out",
                "&:hover": {
                  background: "#DB4444",
                },
              }}
            >
              Buy Now!
            </Button>
          </Stack>
          <Box flex={1} sx={{ padding: "1rem 3rem 1rem 0rem" }}>
            <img
              src={music}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Poster;
