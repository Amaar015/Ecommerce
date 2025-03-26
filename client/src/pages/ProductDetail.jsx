import {
  Box,
  Divider,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  FormControlLabel,
  IconButton,
  Checkbox,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

import React, { useState } from "react";
import {
  BeforeHeading,
  Buttons,
  Heading,
  ProductCard,
  Star,
} from "../components/Components";
import detail1 from "../assets/detail-1.png";
import detail2 from "../assets/detail-2.png";
import detail3 from "../assets/detail-3.png";
import detail4 from "../assets/detail-4.png";
import detail5 from "../assets/detail-5.png";
import delivery from "../assets/return-1.png";
import returns from "../assets/return.png";
import { Suggested } from "../data/data";
const ProductDetail = () => {
  const [selectedValue, setSelectedValue] = useState("white"); // Default selection

  return (
    <Stack padding={"3rem 8% 5rem 8%"} spacing={"2rem"}>
      <BeforeHeading
        path={"Account / Gamming /"}
        title={"Havic HV G-92 Gamepad"}
      />
      <Box display={"flex"} gap={"2rem"} flexWrap={"wrap"}>
        <Box
          flex={1.5}
          display={"grid"}
          gridTemplateColumns={"repeat(4,1fr)"}
          gridAutoColumns={"230px"}
          gridAutoRows={"100px"}
          gridAutoFlow={"row"}
          gap={"20px"}
        >
          <Box
            sx={{
              gridColumn: "span 1",
              gridRow: "span 6",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            <img
              src={detail2}
              alt=""
              style={{ width: "100%", height: "20%", objectFit: "contain" }}
            />
            <img
              src={detail3}
              alt=""
              style={{ width: "100%", height: "20%", objectFit: "contain" }}
            />
            <img
              src={detail4}
              alt=""
              style={{ width: "100%", height: "20%", objectFit: "contain" }}
            />
            <img
              src={detail5}
              alt=""
              style={{ width: "100%", height: "20%", objectFit: "contain" }}
            />
          </Box>

          <Box
            sx={{ gridColumn: "span 3", gridRow: "span 5", bgcolor: "pink" }}
          >
            <img
              src={detail1}
              alt=""
              width={"100%"}
              height={"100%"}
              objectFit={"contain"}
            />
          </Box>
        </Box>
        <Box
          flex={1}
          padding={"0rem 4%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"0.5rem"}
        >
          <Typography fontSize={"24px"} fontWeight={600}>
            Havic HV G-92 Gamepad
          </Typography>
          <Box
            width={"75%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Star stars={4.6} reviews={"150 Reviews"} />
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography fontSize={"14px"} color="#00FF66" fontWeight={400}>
              In Stock
            </Typography>
          </Box>
          <Typography
            variant="h4"
            marginTop={"-0.5rem"}
            fontSize={"24px"}
            fontWeight={400}
          >
            $192.00
          </Typography>
          <Typography
            variant="p"
            fontSize={"14px"}
            fontWeight={400}
            marginTop={"0.5rem"}
          >
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </Typography>
          <Divider
            sx={{
              width: "100%",
              height: "1px",
              bgcolor: "#555555",
              marginTop: "0.5rem",
            }}
          />
          <Box display={"flex"} alignItems={"center"} gap={"15px"}>
            <Typography>Colours:</Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              <FormControlLabel
                value="white"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#A0BCE0", // Keeps the inner dot black
                      },
                      "&.Mui-checked::before": {
                        content: '""',
                        width: 18,
                        height: 18,
                        position: "absolute",
                        border: "2px solid #A0BCE0", // Border appears around dot
                        borderRadius: "50%",
                      },
                      "&::before": {
                        content: '""',
                        width: 18,
                        height: 18,
                        position: "absolute",
                        backgroundColor:
                          selectedValue === "white" ? "transparent" : "#A0BCE0", // Green bg if unselected
                        borderRadius: "50%",
                      },
                    }}
                  />
                }
              />
              <FormControlLabel
                value="pink"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#E07575",
                      },
                      "&.Mui-checked::before": {
                        content: '""',
                        width: 18,
                        height: 18,
                        position: "absolute",
                        border: "2px solid #E07575",
                        borderRadius: "50%",
                      },
                      "&::before": {
                        content: '""',
                        width: 18,
                        height: 18,
                        position: "absolute",
                        backgroundColor:
                          selectedValue === "pink" ? "transparent" : "#E07575",
                        borderRadius: "50%",
                      },
                    }}
                  />
                }
              />
            </RadioGroup>
          </Box>

          <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
            <Box display={"flex"} alignItems={"center"} padding={"1.5rem 0rem"}>
              <IconButton
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  border: "1px solid #666",
                  borderRadius: "4px 0px 0px 4px",
                  "&:hover": {
                    background: "#DB4444",
                    color: "#fafafa",
                  },
                }}
              >
                <RemoveIcon />
              </IconButton>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  border: "1px solid #666",
                  width: "4rem",
                  height: "2.4rem",
                  textAlign: "center",
                }}
              >
                2
              </div>
              <IconButton
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  border: "1px solid #666",
                  borderRadius: "0px 4px 4px 0px",
                  "&:hover": {
                    background: "#DB4444",
                    color: "#fafafa",
                  },
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Buttons title={"Buy Now"} padding={"0.4rem 3rem"} />
            <Box
              width={"2.4rem"}
              height={"2.4rem"}
              border={"1px solid #666"}
              borderRadius={"8px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                sx={{
                  color: "#666",
                  "&.Mui-checked": {
                    color: "#DB4444",
                  },
                }}
              />
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            height={"20%"}
            border={"1px solid #666"}
          >
            <Box
              width={"96%"}
              display={"flex"}
              alignItems={"center"}
              gap={"1rem"}
              height={"50%"}
              padding={"0.5rem 0.6rem"}
              borderBottom={"1px solid #666"}
            >
              <img
                src={delivery}
                alt=""
                style={{ width: "40px", height: "40px", objectFit: "contain" }}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"0.2rem"}>
                <Typography fontSize={"16px"} fontWeight={600}>
                  Free Delivery
                </Typography>
                <Typography fontSize={"12px"} fontWeight={400}>
                  Enter your postal code for Delivery Availability
                </Typography>
              </Box>
            </Box>
            <Box
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              gap={"1rem"}
              height={"50%"}
              padding={"0.5rem 0.6rem"}
            >
              <img
                src={returns}
                alt=""
                style={{ width: "40px", height: "40px", objectFit: "contain" }}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"0.2rem"}>
                <Typography fontSize={"16px"} fontWeight={600}>
                  Return Delivery
                </Typography>
                <Typography fontSize={"12px"} fontWeight={400}>
                  Free 30 Days Delivery Returns. Details
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Heading
          title={"Related Item"}
          fonts={true}
          fontw={true}
          color={true}
        ></Heading>
      </Box>
      <Stack
        padding={"2rem 0%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        flexDirection={"row"}
        gap={"30px"}
      >
        {Suggested.map((wish) => (
          <Box sx={{ width: "270px", height: "350px" }} key={wish.id}>
            <ProductCard product={wish} />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default ProductDetail;
