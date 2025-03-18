import { Stack } from "@mui/material";
import React from "react";
import { Heading } from "./Components";

const FlashSales = () => {
  return (
    <Stack direction={"row"} padding={"5rem 8% 3rem 9%"} spacing={"2rem"}>
      <Heading title={"Today's"} />
    </Stack>
  );
};

export default FlashSales;
