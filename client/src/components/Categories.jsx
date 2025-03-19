import { Box, Divider, Stack } from "@mui/material";
import React, { useRef } from "react";
import { CategoriesCard, Heading, SubHeading } from "./Components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { categories } from "../data/data";

const Categories = () => {
  const swiperRef = useRef(null);
  const onFarwardClick = () => {
    swiperRef.current?.slideNext();
  };
  const onBackwardClick = () => {
    swiperRef.current?.slidePrev();
  };
  return (
    <>
      <Stack padding={"3rem 8% 1.5rem 9%"} spacing={"2rem"}>
        <Heading title={"Categories"} />
        <SubHeading
          title={"Browse By Category"}
          time={false}
          action={true}
          next={onFarwardClick}
          prev={onBackwardClick}
        />
      </Stack>
      {/* card slider */}
      <Stack padding={"2rem 9% 2rem 9%"} className="cards">
        <Swiper
          slidesPerView={6} // Show 4 slides at a time
          spaceBetween={10} // Space between slides
          //   className="mySwiper"
          centerInsufficientSlides={true} // Center slides if fewer than needed
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          style={{ width: "100%", height: "100%" }} // Set Swiper container height
        >
          {categories.map((category) => (
            <SwiperSlide
              key={category.id}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <CategoriesCard product={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        
        margin={"3rem 0rem"}
      >
        <Divider sx={{ width: "80%", bgcolor: "#000" }} />
      </Box>
    </>
  );
};

export default Categories;
