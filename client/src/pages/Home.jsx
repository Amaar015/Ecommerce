import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";

import { SideBar, Slider } from "../components/Components";
import FlashSales from "../components/FlashSales";
import Categories from "../components/Categories";
import BestProducts from "../components/BestProducts";
import Poster from "../components/Poster";
import Products from "../components/Products";
import NewArrival from "../components/newArrival";
import Features from "../components/Features";
import { Product as productData } from "../data/data";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      try {
        setProducts(JSON.parse(storedProducts));
      } catch (error) {
        console.error("Error parsing products from localStorage:", error);
        localStorage.setItem("products", JSON.stringify(productData));
        setProducts(productData);
      }
    } else {
      localStorage.setItem("products", JSON.stringify(productData));
      setProducts(productData);
    }
  }, []);

  const toggleWishlist = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, wishlist: !product.wishlist } : product
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <>
      <Stack direction={"row"} padding={"0rem 8% 3rem 9%"} spacing={"2rem"}>
        <SideBar />
        <Slider />
      </Stack>
      <FlashSales addWishlist={toggleWishlist} />
      <Categories />
      <BestProducts addWishlist={toggleWishlist} />
      <Poster />
      <Products addWishlist={toggleWishlist} />
      <NewArrival />
      <Features />
    </>
  );
};

export default Home;
