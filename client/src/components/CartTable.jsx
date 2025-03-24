import { Box, IconButton, Stack, Typography } from "@mui/material";
import * as React from "react";
import game from "../assets/game.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { projects } from "../data/data";

export default function CartTable() {
  // Correcting the state initialization
  const [quantities, setQuantities] = React.useState(
    projects.reduce((acc, project) => {
      acc[project.id] = project.quantity || 1; // Default to 1 if undefined
      return acc;
    }, {})
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
      maxHeight="400px" // Total height including header
      bgcolor="green"
      padding="1rem 2%"
    >
      {/* Fixed Table Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        height="72px"
        padding="0rem 1%"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 8px 24px"
        bgcolor="white"
        position="sticky"
        top={0}
        zIndex={2} // Ensure it stays on top of scrollable content
      >
        <Typography fontSize="16px" fontWeight={400}>
          Product
        </Typography>
        <Typography fontSize="16px" fontWeight={400}>
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
      <Box
        display="flex"
        flexDirection="column"
        gap="10px"
        overflowY="auto"
        height="calc(400px - 72px)" // Allow scrolling within remaining space
        sx={{
          "&::-webkit-scrollbar": { width: "8px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": { backgroundColor: "#555" },
        }}
      >
        {projects.map((project) => (
          <Box
            key={project.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            height="100px"
            padding="0rem 1%"
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
                src={project.image}
                alt="Product"
                style={{ width: "54px", height: "54px", objectFit: "contain" }}
              />
              <Typography fontSize="16px" fontWeight={400}>
                {project.name}
              </Typography>
            </Box>

            {/* Price */}
            <Typography fontSize="16px" fontWeight={400}>
              ${project.price}
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
                {quantities[project.id]}
              </Typography>

              {/* Increase / Decrease Buttons */}
              <Stack spacing="-0.1rem">
                <IconButton
                  sx={{ width: "20px", height: "20px" }}
                  onClick={() => handleIncrease(project.id)}
                >
                  <KeyboardArrowUpIcon sx={{ color: "#000000" }} />
                </IconButton>
                <IconButton
                  sx={{ width: "20px", height: "20px" }}
                  onClick={() => handleDecrease(project.id)}
                >
                  <KeyboardArrowDownIcon sx={{ color: "#000000" }} />
                </IconButton>
              </Stack>
            </Box>

            {/* Subtotal Calculation */}
            <Typography fontSize="16px" fontWeight={400}>
              ${(project.price * quantities[project.id]).toFixed(2)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
