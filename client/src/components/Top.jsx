import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import Menus from "./Menus";

const Top = () => {
  return (
    <Stack
      direction={"row"}
      padding={"0.3rem 0rem"}
      bgcolor={"#000000"}
      color={"#fff"}
      sx={{
        display: "grid",
        gridTemplateColumns: "10fr 2fr",
        gap: 0,
        alignItems: "center",
      }}
    >
      <Typography
        variant="p"
        sx={{ gridColumn: "1 / 2" }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"0.8rem"}
        fontSize={"14px"}
        fontWeight={400}
        color="#fafafa"
        fontFamily={'"Poppins", sans-serif'}
        marginLeft={"8rem"}
      >
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <Link
          href="#"
          fontSize={"14px"}
          fontWeight={600}
          color="#fafafa"
          lineHeight={"24px"}
          sx={{ cursor: "pointer" }}
        >
          ShopNow
        </Link>
      </Typography>
      <Menus
        sx={{
          gridColumn: "2 / 3",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      />
    </Stack>
  );
};

export default Top;
