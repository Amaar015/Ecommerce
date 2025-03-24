import { Stack } from "@mui/material";
import React from "react";
import { BeforeHeading } from "../components/Components";
import CartTable from "../components/CartTable";

const Cart = () => {
  return (
    <Stack padding={"3rem 8% 3rem 8%"} spacing={"2rem"}>
      <BeforeHeading path={"Home /"} title={"Cart"} />
      <CartTable />
    </Stack>
  );
};

export default Cart;
