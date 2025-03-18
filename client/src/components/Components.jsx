import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { heroData, sideBar } from "../data/data";
import EastIcon from "@mui/icons-material/East";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const SideBar = () => {
  return (
    <Stack borderRight={"1px solid #333"} width={"20%"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
        padding={"2rem 2rem 0rem 0rem"}
      >
        {sideBar.map((links) => (
          <NavLink
            key={links.id}
            href={links.path}
            className="navlinks"
            style={{
              color: "#000000",
            }}
          >
            {links.name}
            {links.category && <KeyboardArrowRightIcon />}
          </NavLink>
        ))}
      </Box>
    </Stack>
  );
};

export const Slider = () => {
  return (
    <Stack width={"70%"} paddingTop={"2rem"}>
      {/* Slick Slider */}
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {heroData.map((data) => (
          <SwiperSlide>
            <Box
              padding={"0rem 1rem 0rem 3rem"}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box
                width={"50%"}
                display={"flex"}
                flexDirection={"column"}
                // padding={"0rem 4rem"}
                color={"#fafafa"}
              >
                <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
                  <img
                    src={data.icon}
                    alt={data.title}
                    style={{ width: "40px", height: "48px" }}
                  />
                  <Typography variant="p" fontSize={"16px"} fontWeight={400}>
                    {data.title}
                  </Typography>
                </Box>
                <Typography
                  width={"80%"}
                  variant="h3"
                  textAlign={"start"}
                  fontSize={"40px"}
                  fontWeight={600}
                  letterSpacing={"4%"}
                  lineHeight={"60px"}
                  margin={"1rem 0rem"}
                >
                  {data.tag}
                </Typography>
                <NavLink
                  className={"navlinks"}
                  style={{ color: "#fafafa", marginLeft: "0.3rem" }}
                >
                  <Typography
                    display={"flex"}
                    alignItems={"center"}
                    gap={"1rem"}
                  >
                    <span
                      style={{
                        borderBottom: "1px solid #fafafa",
                        paddingBottom: "4px",
                      }}
                    >
                      Shop Now
                    </span>{" "}
                    <EastIcon />
                  </Typography>
                </NavLink>
              </Box>
              <Box width={"450px"} height={"350px"} marginTop={"1rem"}>
                <img
                  src={data.image}
                  alt=""
                  style={{
                    width: "80%",
                    height: "80%",
                    overflow: "hidden",
                  }}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export const Heading = ({ title }) => {
  return (
    <Typography
      variant="h3"
      fontSize={"16px"}
      fontWeight={600}
      color="#DB4444"
      paddingTop={'0.5rem!important'}
      marginLeft={"2rem!important"}
      lineHeight={"20px"}
      sx={{
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-2rem",
          width: "20px",
          height: "40px",
          borderRadius: "4px",
          background: "#DB4444",
        },
      }}
    >
      {title}
    </Typography>
  );
};
