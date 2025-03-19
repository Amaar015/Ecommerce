import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Heading, SubHeading } from "./Components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { flashSales } from "../data/data";

const FlashSales = () => {
  const swiperRef = useRef(null);
  const onFarwardClick = () => {
    swiperRef.current?.slideNext();
  };
  const onBackwardClick = () => {
    swiperRef.current?.slidePrev();
  };
  return (
    <>
      <Stack padding={"5rem 8% 1.5rem 9%"} spacing={"2rem"}>
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
      <Stack padding={"0rem 0% 4rem 0%"} className="cards">
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
              <Box
                width={"100%"}
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                gap={"1rem"}
              >
                <Box
                  height={"70%"}
                  width={"100%"}
                  sx={{
                    position: "relative",
                    bgcolor: "#F5F5F5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={product.image}
                    alt=""
                    style={{
                      width: "170px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"10px"}
                    position={"absolute"}
                    top={"5%"}
                    right={"2%"}
                  >
                    <IconButton
                      sx={{
                        width: "34px",
                        height: "34px",
                        backgroundColor: "#fff",
                      }}
                    >
                      <FaRegHeart style={{ fontSize: "16px" }} />
                    </IconButton>
                    <IconButton
                      sx={{
                        width: "34px",
                        height: "34px",
                        backgroundColor: "#fff",
                      }}
                    >
                      <MdOutlineRemoveRedEye style={{ fontSize: "16px" }} />
                    </IconButton>
                  </Box>
                  <Typography
                    variant="span"
                    padding={"0.2rem 0.4rem"}
                    bgcolor={"#DB4444"}
                    borderRadius={"4px"}
                    position={"absolute"}
                    top={"5%"}
                    left={"4%"}
                    color="#fafafa"
                    fontSize={"12px"}
                  >
                    {product.discount}
                  </Typography>
                </Box>
                <Box display={"flex"} flexDirection={"column"} gap={"0.5rem"}>
                  <Typography fontSize={"16px"} fontWeight={500}>
                    {product.title}
                  </Typography>
                  <Box display={"flex"} gap={"0.8rem"} fontSize={"16px"}>
                    <span>{product.price}</span>
                    <span>{product.previous}</span>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </>
  );
};

export default FlashSales;
