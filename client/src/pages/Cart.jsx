import {
  Box,
  Button,
  Divider,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { BeforeHeading, Buttons } from "../components/Components";
import CartTable from "../components/CartTable";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({
  background: "transparent",
  color: "rgba(0, 0, 0, 1)",
  border: "1px solid rgba(0, 0, 0, 0.5)",
  padding: "0.6rem 2rem",
}));
const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate(
      "/checkout"
      // , { state: { product: id } }
    );
  };
  return (
    <Stack padding={"3rem 8% 5rem 8%"} spacing={"2rem"}>
      <BeforeHeading path={"Home /"} title={"Cart"} />
      <CartTable />
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"0rem 0% 0rem 2%"}
      >
        <StyledButton>Return To Shop</StyledButton>
        <StyledButton>Update Cart</StyledButton>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"start"}
        padding={"0rem 0% 0rem 2%"}
      >
        <Box display={"flex"} flexDirection={"row"} gap={"1rem"}>
          <TextField
            id="outlined-basic"
            label="Coupon Code"
            variant="outlined"
            size="small"
          />
          <Buttons title={"Apply Coupon"} padding={"0rem 1rem"} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"1.5rem"}
          height={"280px"}
          width={"450px"}
          border={"2px solid #000000"}
          padding={"2rem 1.5rem 1.5rem 1.5rem"}
        >
          <Typography fontSize={"20px"} fontWeight={500} marginBottom={"0rem"}>
            Cart Total
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderBottom={"2px solid #666"}
            paddingBottom={"0.5rem"}
          >
            <Typography variant="p" fontSize={"16px"} fontWeight={400}>
              Subtotal
            </Typography>
            <Typography variant="p" fontSize={"16px"} fontWeight={400}>
              $1750
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderBottom={"2px solid #666"}
            paddingBottom={"0.5rem"}
          >
            <Typography variant="p" fontSize={"16px"} fontWeight={400}>
              Shipping:
            </Typography>
            <Typography variant="p" fontSize={"16px"} fontWeight={400}>
              Free
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="p" fontSize={"16px"} fontWeight={400}>
              Total:
            </Typography>
            <Typography variant="p" fontSize={"16px"} fontWeight={400}>
              $1750
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Buttons
              title={"Process to checkout"}
              padding={"0.5rem 2rem"}
              click={handleCheckout}
            />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Cart;
