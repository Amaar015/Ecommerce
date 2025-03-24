import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { BeforeHeading } from "../components/Components";
import about from "../assets/about.png";
import { abouts, team } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { CiTwitter, CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import Features from "../components/Features";
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
      <Stack
        padding={"4rem 8% 4rem 8%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"row"}
        gap={"2rem"}
      >
        {abouts.map((data) => (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="1rem"
            height="230px"
            width="270px"
            border="1px solid rgba(0, 0, 0, 0.3)"
            sx={{
              transition: "0.3s ease-in-out",
              "&:hover": {
                background: "#DB4444",
                "& h4, & p": {
                  color: "#fafafa",
                },
                "& .icon-container": {
                  background: "#fafafa",
                },
                "& .icon-button": {
                  color: "#000000",
                },
              },
            }}
          >
            <Box
              className="icon-container"
              sx={{
                width: "70px",
                height: "70px",
                background: "rgba(0, 0, 0, 1)", // Default background
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                border: "15px solid rgb(203, 199, 207)",
                transition: "0.3s ease-in-out",
              }}
            >
              <IconButton
                className="icon-button"
                sx={{
                  color: "#fafafa", // Default icon color
                  transition: "0.3s ease-in-out",
                }}
              >
                <data.icons
                  className="i"
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                />
              </IconButton>
            </Box>

            {/* Box for Typography */}
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="h4"
                fontSize="32px"
                fontWeight={700}
                letterSpacing="4%"
              >
                {data.number}
              </Typography>
              <Typography variant="body1" fontSize="16px" fontWeight={400}>
                {data.detail}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
      <Stack padding={"4rem 8% 4rem 8%"} className="team">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{
            height: "100%",
            width: "100%",
            paddingBottom: "3rem",
          }}
        >
          {team.map((member) => (
            <SwiperSlide
              key={member.id}
              style={{
                width: "340px",
                height: "560px",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}
            >
              <img
                src={member.image}
                alt=""
                style={{
                  width: "100%",
                  height: "70%",
                  objectFit: "fill",
                }}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
                <Typography variant="h4" fontSize={"32px"} fontWeight={500}>
                  {member.name}
                </Typography>
                <Typography variant="p" fontSize={"16px"} fontWeight={400}>
                  {member.profession}
                </Typography>
                <Box display={"flex"} flexDirection={"row"} gap={"1rem"}>
                  <NavLink href={member.twitter} style={{ color: "#000000" }}>
                    <CiTwitter style={{ width: "24px", height: "24px" }} />
                  </NavLink>
                  <NavLink href={member.instagram} style={{ color: "#000000" }}>
                    <CiInstagram style={{ width: "24px", height: "24px" }} />
                  </NavLink>
                  <NavLink href={member.linkedIn} style={{ color: "#000000" }}>
                    <FaLinkedinIn style={{ width: "24px", height: "24px" }} />
                  </NavLink>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
      <Features />
    </>
  );
};

export default About;
