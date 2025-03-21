import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Heading, SubHeading } from "./Components";
import play from "../assets/play.png";
import women from "../assets/women.png";
import speakers from "../assets/speakers.png";
import gucci from "../assets/gucci.png";
import { NavLink } from "react-router-dom";

const NewArrival = () => {
  return (
    <>
      <Stack padding={"3rem 8% 1.5rem 8%"} spacing={"2rem"}>
        <Heading title={"Featured"} />
        <SubHeading title={"New Arrival"} time={false} action={""} />
      </Stack>
      <Stack
        padding={"2rem 8% 3rem 8%"}
        sx={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "120px",
          gridAutoColumns: "80px",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            gridColumn: "span 2",
            gridRow: "span 4",
            bgcolor: "#000000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <img src={play} alt="" style={{ width: "100%", height: "80%" }} />
          <Box
            sx={{
              position: "absolute",
              left: "3%",
              bottom: "6%",
              color: "#fafafa",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h5" fontSize={"24px"} fontWeight={600}>
              PlayStation 5
            </Typography>
            <Typography
              variant="p"
              width={"60%"}
              fontSize={"14px"}
              fontWeight={"400"}
            >
              Black and White version of the PS5 coming out on sale.
            </Typography>
            <NavLink
              style={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                textDecoration: "none",
                color: "#fafafa",
                width: "85px",
                borderBottom: "2px solid #fafafa",
              }}
            >
              Shop Now
            </NavLink>
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: "span 2",
            gridRow: "span 2",
            bgcolor: "#000000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "end",
            position: "relative",
          }}
        >
          <img src={women} alt="" style={{ width: "80%", height: "100%" }} />
          <Box
            sx={{
              position: "absolute",
              left: "3%",
              bottom: "6%",
              color: "#fafafa",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h5" fontSize={"24px"} fontWeight={600}>
              Women’s Collections
            </Typography>
            <Typography
              variant="p"
              width={"60%"}
              fontSize={"14px"}
              fontWeight={"400"}
            >
              Featured woman collections that give you another vibe.
            </Typography>
            <NavLink
              style={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                textDecoration: "none",
                color: "#fafafa",
                width: "85px",
                borderBottom: "2px solid #fafafa",
              }}
            >
              Shop Now
            </NavLink>
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: "span 1",
            gridRow: "span 2",
            bgcolor: "#000000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img src={speakers} alt="" style={{ width: "80%", height: "80%" }} />
          <Box
            sx={{
              position: "absolute",
              left: "3%",
              bottom: "6%",
              color: "#fafafa",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h5" fontSize={"24px"} fontWeight={600}>
              Speakers
            </Typography>
            <Typography variant="p" fontSize={"14px"} fontWeight={"400"}>
              Amazon wireless speakers
            </Typography>
            <NavLink
              style={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                textDecoration: "none",
                color: "#fafafa",
                width: "85px",
                borderBottom: "2px solid #fafafa",
              }}
            >
              Shop Now
            </NavLink>
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: "span 1",
            gridRow: "span 2",
            bgcolor: "#000000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img src={gucci} alt="" style={{ width: "80%", height: "80%" }} />
          <Box
            sx={{
              position: "absolute",
              left: "3%",
              bottom: "6%",
              color: "#fafafa",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h5" fontSize={"24px"} fontWeight={600}>
              Perfume
            </Typography>
            <Typography variant="p" fontSize={"14px"} fontWeight={"400"}>
              GUCCI INTENSE OUD EDP
            </Typography>
            <NavLink
              style={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                textDecoration: "none",
                color: "#fafafa",
                width: "85px",
                borderBottom: "2px solid #fafafa",
              }}
            >
              Shop Now
            </NavLink>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default NewArrival;
