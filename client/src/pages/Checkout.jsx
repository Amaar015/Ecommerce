import { Stack } from "@mui/material";
import React from "react";
import { BeforeHeading } from "../components/Components";

const Checkout = () => {
  return (
    <Stack padding={"3rem 8% 3rem 8%"} spacing={"2rem"}>
      <BeforeHeading path={"Home /"} title={"My Account"} />
    </Stack>
  );
};

export default Checkout;
