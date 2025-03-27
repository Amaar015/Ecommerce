import { Box, Stack } from "@mui/material";
import React from "react";
import { Heading, ProductCard, SubHeading } from "./Components";
import { Product } from "../data/data";
import { useNavigate } from "react-router-dom";

const BestProducts = ({ addWishlist }) => {
  const navigate = useNavigate();
  const handleOnClick = (id) => {
    navigate(`/product-detail/${id}`);
  };

  return (
    <>
      <Stack padding={"3rem 8% 1.5rem 8%"} spacing={"2rem"}>
        <Heading title={"This Month"} />
        <SubHeading
          title={"Best Selling Products"}
          time={false}
          action={false}
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
        {Product.filter((product) => product.category === "best").map(
          (best) => (
            <Box sx={{ width: "270px", height: "350px" }}>
              <ProductCard
                product={best}
                click={handleOnClick}
                addFavourite={addWishlist}
              />
            </Box>
          )
        )}
      </Stack>
    </>
  );
};

export default BestProducts;
