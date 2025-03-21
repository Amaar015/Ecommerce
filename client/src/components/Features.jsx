import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { feature } from "../data/data";

const Features = () => {
  return (
    <Stack padding={"3rem 8% 5rem 8%"} spacing={"2rem"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"2rem"}
        flexWrap={"wrap"}
      >
        {feature.map((data) => (
          <Box
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"24px"}
            padding={"1rem 0"}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "20px solid rgb(203, 199, 207)",
              }}
            >
              <img
                src={data.image}
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                }}
              />
            </div>
             <div style={{display:"flex", flexDirection:"column",gap:"10px"}}>
            <Typography variant="h4" fontSize={'20px'} fontWeight={600}>{data.title}</Typography>
            <Typography variant="p" fontSize={'14px'} fontWeight={400}>{data.description}</Typography>
            </div>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default Features;
