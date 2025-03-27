import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { heroData, sideBar } from "../data/data";
import EastIcon from "@mui/icons-material/East";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const anchorRefs = useRef({}); // Store references for each menu

  const handleClick = (event, id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const handleClose = () => {
    setActiveMenu(null);
  };

  return (
    <Stack borderRight={"1px solid #333"} width={"20%"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
        padding={"2rem 2rem 0rem 0rem"}
      >
        {sideBar.map((links) => (
          <div key={links.id} ref={(el) => (anchorRefs.current[links.id] = el)}>
            <NavLink
              href={links.path}
              className="navlinks"
              style={{ color: "#000000" }}
              {...(links.category && {
                "aria-controls":
                  activeMenu === links.id ? "basic-menu" : undefined,
                "aria-haspopup": "true",
                "aria-expanded": activeMenu === links.id ? "true" : undefined,
                onClick: (event) => handleClick(event, links.id),
              })}
            >
              {links.name}
              {links.category && activeMenu === links.id ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </NavLink>

            {links.category && (
              <Menu
                id="basic-menu"
                anchorEl={
                  activeMenu === links.id ? anchorRefs.current[links.id] : null
                }
                disableScrollLock
                open={activeMenu === links.id}
                onClose={handleClose}
                sx={{ minWidth: 300 }}
              >
                {links.category.map((data, index) => (
                  <MenuItem key={index} onClick={handleClose}>
                    <NavLink
                      style={{
                        textDecoration: "none",
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#000000",
                      }}
                      to={data.path}
                    >
                      {data.title}
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            )}
          </div>
        ))}
      </Box>
    </Stack>
  );
};

export const Slider = () => {
  return (
    <Stack width={"70%"} paddingTop={"2rem"}>
      {/* Slick Slider */}
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ width: "100%", height: "100%" }}
      >
        {heroData.map((data) => (
          <SwiperSlide
            style={{
              background: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              padding={"0rem 1rem 0rem 3rem"}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box
                width={"50%"}
                display={"flex"}
                flexDirection={"column"}
                // padding={"0rem 4rem"}
                color={"#fafafa"}
              >
                <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
                  <img
                    src={data.icon}
                    alt={data.title}
                    style={{ width: "40px", height: "48px" }}
                  />
                  <Typography variant="p" fontSize={"16px"} fontWeight={400}>
                    {data.title}
                  </Typography>
                </Box>
                <Typography
                  width={"80%"}
                  variant="h3"
                  textAlign={"start"}
                  fontSize={"40px"}
                  fontWeight={600}
                  letterSpacing={"4%"}
                  lineHeight={"60px"}
                  margin={"1rem 0rem"}
                >
                  {data.tag}
                </Typography>
                <NavLink
                  className={"navlinks"}
                  style={{ color: "#fafafa", marginLeft: "0.3rem" }}
                >
                  <Typography
                    display={"flex"}
                    alignItems={"center"}
                    gap={"1rem"}
                  >
                    <span
                      style={{
                        borderBottom: "1px solid #fafafa",
                        paddingBottom: "4px",
                      }}
                    >
                      Shop Now
                    </span>{" "}
                    <EastIcon />
                  </Typography>
                </NavLink>
              </Box>
              <Box width={"450px"} height={"350px"} marginTop={"1rem"}>
                <img
                  src={data.image}
                  alt=""
                  style={{
                    width: "80%",
                    height: "80%",
                    overflow: "hidden",
                  }}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export const Heading = ({ title, fonts, fontw, color }) => {
  return (
    <Typography
      variant="h3"
      fontSize={fonts ? "20px" : "16px"}
      fontWeight={fontw ? 400 : 600}
      color={color ? "#000000" : "#DB4444"}
      paddingTop={"0.5rem!important"}
      marginLeft={"2rem!important"}
      lineHeight={"20px"}
      sx={{
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-2rem",
          width: "20px",
          height: "40px",
          borderRadius: "4px",
          background: "#DB4444",
        },
      }}
    >
      {title}
    </Typography>
  );
};

export const SubHeading = ({ title, time, action, next, prev }) => {
  const initialTime = 3 * 24 * 60 * 60 + 23 * 60 * 60 + 19 * 60 + 56;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const navigate = useNavigate();
  useEffect(() => {
    if (timeLeft <= 0) return; // Stop timer when time reaches zero

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [timeLeft]);

  // Convert timeLeft (seconds) into days, hours, minutes, and seconds
  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    return [
      { title: "Days", time: String(days).padStart(2, "0") },
      { title: "Hours", time: String(hours).padStart(2, "0") },
      { title: "Minutes", time: String(minutes).padStart(2, "0") },
      { title: "Seconds", time: String(secs).padStart(2, "0") },
    ];
  };

  const times = formatTime(timeLeft);
  const handleView = () => {
    navigate("/view-product");
  };
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"3.5rem"}>
        <Typography fontSize={"36px"} fontWeight={600} lineHeight={"48px"}>
          {title}
        </Typography>
        {time && (
          <Box display={"flex"} alignItems={"center"}>
            {times.map((time, index) => (
              <Box
                display={"flex"}
                alignItems={"center"}
                key={index}
                flexDirection={"row"}
              >
                <Stack padding={"0rem 1rem"}>
                  <span style={{ fontSize: "12px" }}>{time.title}</span>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "36px", fontWeight: "700" }}
                  >
                    {time.time}
                  </Typography>
                </Stack>
                {index !== times.length - 1 && (
                  <Typography fontSize={"2.5rem"} color="#E07575">
                    :
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        )}
      </Box>

      {action === true ? (
        <Box>
          <IconButton onClick={() => prev()}>
            <ArrowBackIcon sx={{ color: "#000000" }} />
          </IconButton>
          <IconButton onClick={() => next()}>
            <ArrowForwardIcon sx={{ color: "#000000" }} />
          </IconButton>
        </Box>
      ) : action === false ? (
        <Buttons
          title={"View All"}
          padding={"0.4rem 2.5rem"}
          click={handleView}
        />
      ) : (
        ""
      )}
    </Stack>
  );
};

export const ProductCard = ({ product, click, addFavourite }) => {
  const navigate = useNavigate();
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
    >
      <Box
        height={"70%"}
        width={"100%"}
        sx={{
          position: "relative",
          bgcolor: "#F5F5F5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          "&:hover .hover-button": {
            bottom: 0,
          },
        }}
      >
        <img
          src={product?.image}
          alt=""
          style={{
            width: "170px",
            height: "150px",
            objectFit: "contain",
          }}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          position={"absolute"}
          top={"5%"}
          right={"2%"}
        >
          {product.main === "wishlist" ? (
            <IconButton
              sx={{
                width: "34px",
                height: "34px",
                backgroundColor: "#fff",
              }}
            >
              <IoTrashOutline style={{ fontSize: "16px" }} />
            </IconButton>
          ) : (
            <>
              <IconButton
                sx={{
                  width: "34px",
                  height: "34px",
                  backgroundColor: "#fff",
                }}
                onClick={() => addFavourite(product.id)}
              >
                <FaRegHeart style={{ fontSize: "16px" }} />
              </IconButton>
              <IconButton
                sx={{
                  width: "34px",
                  height: "34px",
                  backgroundColor: "#fff",
                }}
                onClick={() => click(product.id)}
              >
                <MdOutlineRemoveRedEye style={{ fontSize: "16px" }} />
              </IconButton>
            </>
          )}
        </Box>
        {product.discount && (
          <Typography
            variant="span"
            padding={"0.2rem 0.4rem"}
            bgcolor={"#DB4444"}
            borderRadius={"4px"}
            position={"absolute"}
            top={"5%"}
            left={"4%"}
            color="#fafafa"
            fontSize={"12px"}
          >
            {product?.discount}
          </Typography>
        )}
        {product.new && (
          <Typography
            variant="span"
            padding={"0.2rem 0.4rem"}
            bgcolor={"#00FF66"}
            borderRadius={"4px"}
            position={"absolute"}
            top={"5%"}
            left={"4%"}
            color="#fafafa"
            fontSize={"12px"}
          >
            {product?.new}
          </Typography>
        )}

        <Button
          className="hover-button"
          sx={{
            width: "100%",
            height: "40px",
            bgcolor: "#000000",
            position: "absolute",
            right: 0,
            bottom: "-20%",
            color: "#ffffff",
            fontSize: "16px",
            transition: "bottom 0.3s ease-in-out, opacity 0.3s ease-in-out",
          }}
          onClick={() => navigate("/cart")}
        >
          Add To Cart
        </Button>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={"0.5rem"}>
        <Typography
          fontSize={"16px"}
          fontWeight={500}
          sx={{ cursor: "pointer" }}
          onClick={() => click(product.id)}
        >
          {product?.title}
        </Typography>
        <Box display={"flex"} gap={"0.8rem"} fontSize={"16px"}>
          <span style={{ color: "#DB4444" }}>{product?.price}</span>
          {product.previous && (
            <span style={{ color: "#555", textDecoration: "line-through" }}>
              {product?.previous}
            </span>
          )}
        </Box>
        {product.stars && (
          <Star stars={product?.stars} reviews={product?.rating} />
        )}
      </Box>
    </Box>
  );
};

export const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <FaRegStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <Box
      display={"flex"}
      gap={"0.5rem"}
      alignItems={"center"}
      marginTop={"-0.8rem"}
    >
      {ratingStar}
      <p style={{ fontSize: "14px", fontWeight: 400, color: "#555" }}>
        ({reviews})
      </p>
    </Box>
  );
};

export const Buttons = ({ title, padding, width, type, click }) => {
  return (
    <Button
      type={`${type}`}
      onClick={click}
      sx={{
        fontWeight: "400",
        background: "#DB4444",
        color: "#fafafa",
        fontSize: "16px",
        fontFamily: '"Poppins", sans-serif',
        padding: `${padding}`,
        border: "none",
        textTransform: "none",
        borderRadius: "4px",
        transition: "opacity 0.3s ease-in-out",
        "&:hover": {
          opacity: 0.7,
        },
      }}
    >
      {title}
    </Button>
  );
};

export const CategoriesCard = ({ product }) => {
  return (
    <Box
      sx={{
        width: "170px",
        height: "140px",
        border: "1px solid #0000004D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "all 0.3s linear",
        cursor: "pointer",
        "&:hover": {
          background: "#DB4444",
          color: "#fafafa",
          border: "1px solid transparent",
        },
      }}
    >
      <product.image style={{ width: "56px", height: "56px" }} />
      <Typography variant="p" fontSize={"14px"} fontWeight={400}>
        {product.title}
      </Typography>
    </Box>
  );
};

// card design ii
export const ProductsCard = ({ product, click, addFavourite }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/cart");
  };
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
    >
      <Box
        height={"70%"}
        width={"100%"}
        sx={{
          position: "relative",
          bgcolor: "#F5F5F5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          "&:hover .hover-button": {
            bottom: 0,
          },
        }}
      >
        <img
          src={product?.image}
          alt=""
          style={{
            width: "170px",
            height: "150px",
            objectFit: "contain",
          }}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          position={"absolute"}
          top={"5%"}
          right={"2%"}
        >
          <IconButton
            sx={{
              width: "34px",
              height: "34px",
              backgroundColor: "#fff",
            }}
            onClick={() => addFavourite(product.id)}
          >
            <FaRegHeart style={{ fontSize: "16px" }} />
          </IconButton>
          <IconButton
            sx={{
              width: "34px",
              height: "34px",
              backgroundColor: "#fff",
            }}
            onClick={() => click(product.id)}
          >
            <MdOutlineRemoveRedEye style={{ fontSize: "16px" }} />
          </IconButton>
        </Box>
        {product.new && (
          <Typography
            variant="span"
            padding={"0.2rem 0.4rem"}
            bgcolor={"#00FF66"}
            borderRadius={"4px"}
            position={"absolute"}
            top={"5%"}
            left={"4%"}
            color="#fafafa"
            fontSize={"12px"}
          >
            {product?.new}
          </Typography>
        )}

        <Button
          className="hover-button"
          sx={{
            width: "100%",
            height: "40px",
            bgcolor: "#000000",
            position: "absolute",
            right: 0,
            bottom: "-20%",
            color: "#ffffff",
            fontSize: "16px",
            transition: "bottom 0.3s ease-in-out, opacity 0.3s ease-in-out",
          }}
          onClick={handleNavigate}
        >
          Add To Cart
        </Button>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={"0.5rem"}>
        <Typography
          fontSize={"16px"}
          fontWeight={500}
          sx={{ cursor: "pointer" }}
          onClick={() => click(product.id)}
        >
          {product?.title}
        </Typography>
        <Box display={"flex"} gap={"0.3rem"} fontSize={"16px"}>
          <span style={{ color: "#DB4444" }}>{product?.price}</span>
          <Star stars={product?.stars} reviews={product?.rating} />
        </Box>
      </Box>
    </Box>
  );
};

export const BeforeHeading = ({ title, path, left }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"10px"}
        fontSize={"14px"}
        fontWeight={400}
        color={"#777"}
      >
        <Typography>{path}</Typography>
        <Typography color="#000000">{title}</Typography>
      </Box>
      {left && (
        <Typography fontSize={"14px"} color="#000000" fontWeight={400}>
          Welcome! <span style={{ color: "#DB4444" }}>{left}</span>
        </Typography>
      )}
    </Box>
  );
};
