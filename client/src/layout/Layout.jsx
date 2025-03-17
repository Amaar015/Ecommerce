import React from "react";
import Top from "../components/Top";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stack from "@mui/material/Stack";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Stack direction={"column"}>
      <Top />
      <Navbar />
      <Outlet />
      <Footer />
    </Stack>
  );
};

export default Layout;
