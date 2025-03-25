import { Box, Divider, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import { Buttons, Heading, ProductCard, SubHeading } from "./Components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { flashSales } from "../data/data";
import { useNavigate } from "react-router-dom";

const FlashSales = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const onFarwardClick = () => {
    swiperRef.current?.slideNext();
  };
  const onBackwardClick = () => {
    swiperRef.current?.slidePrev();
  };
  const handleOnClick = () => {
    navigate("/product-detail");
  };
  return (
    <>
      <Stack padding={"5rem 8% 1.5rem 8%"} spacing={"2rem"}>
        <Heading title={"Today's"} />
        <SubHeading
          title={"Flash Sales"}
          time={true}
          action={true}
          next={onFarwardClick}
          prev={onBackwardClick}
        />
      </Stack>

      {/* SLider  */}
      <Stack padding={"0rem 0% 2rem 0%"} className="cards">
        <Swiper
          slidesPerView={"auto"} // Show 4 slides at a time
          spaceBetween={30} // Space between slides
          className="mySwiper"
          slidesOffsetBefore={window.innerWidth * 0.09} // 8% left padding for the first slide
          centerInsufficientSlides={true} // Center slides if fewer than needed
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          style={{ width: "100%", height: "100%" }} // Set Swiper container height
        >
          {flashSales.map((product) => (
            <SwiperSlide
              style={{
                width: "250px",
                height: "350px",
              }}
            >
              <ProductCard
                product={product}
                click={() => navigate("/product-detail")}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={"3rem"}
        marginBottom={"3rem"}
      >
        <Buttons title={"View All Products"} padding={"0.8rem 2.5rem"} />

        <Divider sx={{ width: "80%", bgcolor: "#000" }} />
      </Box>
    </>
  );
};

export default FlashSales;
