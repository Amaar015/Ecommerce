import { Box, IconButton, Stack, Typography } from "@mui/material";
import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Product } from "../data/data";

export default function CartTable() {
  // Correcting the state initialization
  const [quantities, setQuantities] = React.useState(
    Product.filter((product) => product.isCart === true).reduce(
      (acc, product) => {
        acc[product.id] = product.quantity || 1; // Default to 1 if undefined
        return acc;
      },
      {}
    )
  );

  // Function to increase quantity
  const handleIncrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  // Function to decrease quantity (prevent going below 1)
  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : prev[id], // Ensure it doesn't go below 1
    }));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      padding="1rem 2% "
      gap={"2rem"}
      height={"300px"}
      overflow={"auto"}
    >
      {/* Fixed Table Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="95%"
        height="72px"
        padding="1rem 2%"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 8px 24px"
      >
        <Typography fontSize="16px" fontWeight={400} marginLeft={"1rem"}>
          Product
        </Typography>
        <Typography fontSize="16px" fontWeight={400} marginLeft={"4rem"}>
          Price
        </Typography>
        <Typography fontSize="16px" fontWeight={400}>
          Quantity
        </Typography>
        <Typography fontSize="16px" fontWeight={400}>
          Subtotal
        </Typography>
      </Box>

      {/* Scrollable Content */}
      <Box display="flex" flexDirection="column" gap="10px">
        {Product.filter((product) => product.isCart === ture).map((product) => (
          <Box
            key={product.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="95%"
            height="100px"
            padding="0rem 2%"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 8px 24px"
            bgcolor="white"
          >
            {/* Product Image */}
            <Box
              display="flex"
              flexDirection="row"
              gap="1rem"
              alignItems="center"
            >
              <img
                src={product.image}
                alt="Product"
                style={{ width: "54px", height: "54px", objectFit: "contain" }}
              />
              <Typography fontSize="16px" fontWeight={400}>
                {product.title}
              </Typography>
            </Box>

            {/* Price */}
            <Typography fontSize="16px" fontWeight={400}>
              ${product.price}
            </Typography>

            {/* Quantity Counter */}
            <Box
              display="flex"
              alignItems="center"
              flexDirection="row"
              gap="0.6rem"
              border="1px solid #000000"
              width="72px"
              height="44px"
              justifyContent="center"
              borderRadius="4px"
            >
              <Typography fontSize="16px" fontWeight={400}>
                {quantities[product.id]}
              </Typography>

              {/* Increase / Decrease Buttons */}
              <Stack spacing="-0.1rem">
                <IconButton
                  sx={{ width: "20px", height: "20px" }}
                  onClick={() => handleIncrease(product.id)}
                >
                  <KeyboardArrowUpIcon sx={{ color: "#000000" }} />
                </IconButton>
                <IconButton
                  sx={{ width: "20px", height: "20px" }}
                  onClick={() => handleDecrease(product.id)}
                >
                  <KeyboardArrowDownIcon sx={{ color: "#000000" }} />
                </IconButton>
              </Stack>
            </Box>

            {/* Subtotal Calculation */}
            <Typography fontSize="16px" fontWeight={400}>
              ${(product.price * quantities[product.id]).toFixed(2)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
