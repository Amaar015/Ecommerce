import React from "react";
import { Stack } from "@mui/material";

import { SideBar, Slider } from "../components/Components";
import FlashSales from "../components/FlashSales";
import Categories from "../components/Categories";
import BestProducts from "../components/BestProducts";
import Poster from "../components/Poster";

const Home = () => {
  return (
    <>
      <Stack direction={"row"} padding={"0rem 8% 3rem 9%"} spacing={"2rem"}>
        {/* sidebar  */}
        <SideBar />
        {/* Slider */}
        <Slider />
      </Stack>
      <FlashSales />
      <Categories />
      <BestProducts />
      <Poster />
    </>
  );
};

export default Home;
