import { Box, Stack } from "@mui/material";
import React, { useRef } from "react";
import { Buttons, Heading, ProductsCard, SubHeading } from "./Components";
import { newProduct } from "../data/data";
import { useNavigate } from "react-router-dom";

const Products = ({addWishlist}) => {
  //   const swiperRef = useRef(null);
  //   const onFarwardClick = () => {
  //     swiperRef.current?.slideNext();
  //   };
  //   const onBackwardClick = () => {
  //     swiperRef.current?.slidePrev();
  //   };
  const navigate = useNavigate();
  const handleOnClick = (id) => {
    navigate(`/product-detail/${id}`);
  };
  const handleView = () => {
    navigate("/view-product");
  };
  return (
    <>
      <Stack padding={"3rem 8% 1.5rem 8%"} spacing={"2rem"}>
        <Heading title={"Our Products"} />
        <SubHeading
          title={"Explore Our Products"}
          time={false}
          action={""}
          //   next={onFarwardClick}
          //   prev={onBackwardClick}
        />
      </Stack>
      <Stack
        padding={"2rem 9% 3rem 9%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        flexDirection={"row"}
        gap={"30px"}
      >
        {newProduct.map((best) => (
          <Box sx={{ width: "270px", height: "350px" }} key={best.id}>
            <ProductsCard product={best} click={handleOnClick}  addFavourite={addWishlist}/>
          </Box>
        ))}
      </Stack>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={"3rem"}
        marginBottom={"3rem"}
      >
        <Buttons
          title={"View All Products"}
          padding={"0.8rem 2.5rem"}
          click={handleView}
        />
      </Box>
    </>
  );
};

export default Products;
