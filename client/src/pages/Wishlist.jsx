import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { Product, Suggested, wishlist } from "../data/data";
import { Heading, ProductCard } from "../components/Components";

const StyledButton = styled(Button)(({ theme }) => ({
  background: "transparent",
  color: "rgba(0, 0, 0, 1)",
  border: "1px solid rgba(0, 0, 0, 0.5)",
  padding: "0.6rem 2rem",
}));

const Wishlist = () => {
  return (
    <Stack padding={"3rem 8% 3rem 8%"} spacing={"2rem"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h4" fontSize={"20px"} fontWeight={"400"}>
          Wishlist (4)
        </Typography>
        <StyledButton>Move All To Bag</StyledButton>
      </Box>
      <Stack
        padding={"2rem 0%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        flexDirection={"row"}
        gap={"30px"}
      >
        {Product.filter((product) => product.wishlist === true).map(
          (product) => (
            <Box sx={{ width: "270px", height: "350px" }} key={product.id}>
              <ProductCard product={product} />
            </Box>
          )
        )}
      </Stack>

      {/* 2nd  */}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Heading
          title={"Just For You"}
          fonts={true}
          fontw={true}
          color={true}
        ></Heading>
        <StyledButton>See All</StyledButton>
      </Box>
      <Stack
        padding={"2rem 0%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        flexDirection={"row"}
        gap={"30px"}
      >
        {Suggested.map((wish) => (
          <Box sx={{ width: "270px", height: "350px" }} key={wish.id}>
            <ProductCard product={wish} />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Wishlist;
