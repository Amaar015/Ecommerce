import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { BeforeHeading } from "../components/Components";
import about from "../assets/about.png";

const About = () => {
  return (
    <>
      <Stack padding={"3rem 8% 3rem 8%"} spacing={"2rem"}>
        <BeforeHeading path={"Home /"} title={"My Account"} />
      </Stack>
      <Stack
        padding={"0rem 0 3rem 0"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        flexWrap={"wrap"}
        direction={"row"}
      >
        <Box
          flex={1}
          padding={"0% 6% 0% 8%"}
          display={"flex"}
          alignItems={"start"}
          flexDirection={"column"}
          // justifyContent={"center"}
          gap={"30px"}
        >
          <Typography
            variant="h3"
            fontSize={"50px"}
            fontWeight={600}
            lineHeight={"64px"}
          >
            Our Story
          </Typography>
          <Typography
            variant="p"
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"26px"}
          >
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
            <br />
            <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </Typography>
        </Box>
        <div
          style={{
            flex: 1,
            height: "550px",
            backgroundImage: `url(${about})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </Stack>
    </>
  );
};

export default About;
