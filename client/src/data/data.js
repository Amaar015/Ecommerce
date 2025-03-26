import appleIcon from "../assets/apple-icon.png";
import apple from "../assets/hero-slider.png";
import game from "../assets/game.png";
import keyboard from "../assets/keyboard.png";
import cupboard from "../assets/cupboard.png";
import lcd from "../assets/lcd.png";
import chair from "../assets/chair.png";
import shirt from "../assets/shirt.png";
import perse from "../assets/perse.png";
import loud from "../assets/loud.png";
import cesar from "../assets/cesar.png";
import camera from "../assets/camera.png";
import laptop from "../assets/laptop.png";
import curology from "../assets/curology.png";
import car from "../assets/car.png";
import shoes from "../assets/shoes.png";
import game1 from "../assets/game-1.png";
import jacket from "../assets/jacket.png";
import delivery from "../assets/delivery.png";
import head from "../assets/head.png";
import tick from "../assets/tick.png";
import user from "../assets/user.png";
import order from "../assets/order.png";
import cancel from "../assets/cancel.png";
import star from "../assets/start.png";
import logout from "../assets/logout.png";
import team_1 from "../assets/team-1.png";
import team_2 from "../assets/team-2.png";
import team_3 from "../assets/team-3.png";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbDeviceWatchStats } from "react-icons/tb";
import { CiCamera, CiDollar, CiMobile4 } from "react-icons/ci";
import { LuHeadphones, LuGamepad } from "react-icons/lu";
import { RiShirtLine } from "react-icons/ri";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
export const footer = [
  {
    id: 1,
    title: "Support",
    links: [
      "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
      "exclusive@gmail.com",
      "+88015-88888-9999",
    ],
  },
  {
    id: 2,
    title: "Account",
    links: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
  },
  {
    id: 3,
    title: "Quick Link",
    links: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
  },
];

export const sideBar = [
  {
    id: 1.1,
    name: "Woman's Fashion",
    path: "/",
    category: [
      {
        title: "Retro Fashion",
        path: "/category",
      },
      {
        title: "Streetwear",
        path: "/category",
      },
      {
        title: "Elegant",
        path: "/category",
      },
    ],
  },
  {
    id: 2.1,
    name: "Men's Fashion",
    path: "/mens",
    category: [
      {
        title: "Business Casual",
        path: "/category",
      },
      {
        title: "Shirt",
        path: "/category",
      },
      {
        title: "Athleisure",
        path: "/category",
      },
      {
        title: "Business Casual",
        path: "/category",
      },
      {
        title: "Shirt",
        path: "/category",
      },
      {
        title: "Athleisure",
        path: "/category",
      },
    ],
  },
  {
    id: 3.1,
    name: "Electronics",
    path: "/",
  },
  {
    id: 4.1,
    name: "Home & Lifestyle",
    path: "/",
  },
  {
    id: 5.1,
    name: "Medicine",
    path: "/",
  },
  {
    id: 6.1,
    name: "Sports & Outdoor",
    path: "/",
  },
  {
    id: 7.1,
    name: "Baby’s & Toys",
    path: "/",
  },
  {
    id: 8.1,
    name: "Groceries & Pets",
    path: "/",
  },
  {
    id: 9.1,
    name: "Health & Beauty",
    path: "/",
  },
];

export const heroData = [
  {
    id: 1,
    title: "iPhone 14 Series",
    tag: "Up to 10% off Voucher",
    icon: appleIcon,
    image: apple,
  },
  {
    id: 2,
    title: "Summer Collection",
    tag: "Up to 40% off Sale",
    icon: appleIcon,
    image: apple,
  },
  {
    id: 3,
    title: "Black Friday",
    tag: "Enjoy the Offers!",
    icon: appleIcon,
    image: apple,
  },
];

export const times = [
  {
    title: "Days",
    time: "03",
  },
  {
    title: "Hours",
    time: "23",
  },
  {
    title: "Minutes",
    time: "19",
  },
  {
    title: "Seconds",
    time: "56",
  },
];

export const Product = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    price: "120",
    previous: "160",
    discount: "-40%",
    rating: "88",
    stars: 4.4,
    image: game,
    category: "flasSales",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: true,
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    price: "960",
    previous: "1160",
    discount: "-35%",
    rating: "75",
    stars: 5,
    image: keyboard,
    category: "flasSales",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: "370",
    previous: "400",
    discount: "-25%",
    rating: "99",
    stars: 4.5,
    image: lcd,
    category: "flasSales",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    price: "375",
    previous: "400",
    discount: "-25%",
    rating: "88",
    stars: 3.4,
    image: chair,
    category: "flasSales",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 5,
    title: "Small BookSelf",
    price: "360",
    previous: "440",
    discount: "-30%",
    rating: "65",
    stars: 5,
    image: cupboard,
    category: "flasSales",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 6,
    title: "IPS LCD Gaming Monitor",
    price: "370",
    previous: "400",
    discount: "-25%",
    rating: "99",
    stars: 4.8,
    image: lcd,
    category: "flasSales",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
    isCart: true,
  },
  {
    id: 7,
    title: "S-Series Comfort Chair",
    price: "375",
    previous: "400",
    discount: "-25%",
    rating: "88",
    stars: 4.3,
    image: chair,
    category: "flasSales",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 8,
    title: "Small BookSelf",
    price: "360",
    previous: "440",
    discount: "-30%",
    rating: "65",
    stars: 4,
    image: cupboard,
    category: "flasSales",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: true,
  },
  // 9
  {
    id: 9,
    title: "The north coat",
    price: "260",
    previous: "360",
    rating: "88",
    stars: 4.8,
    image: shirt,
    category: "best",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 10,
    title: "Gucci duffle bag",
    price: "960",
    previous: "1160",
    rating: "75",
    stars: 4.4,
    image: perse,
    category: "best",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
    isCart: true,
  },
  {
    id: 11,
    title: "RGB liquid CPU Cooler",
    price: "160",
    previous: "170",
    rating: "99",
    stars: 4.5,
    image: loud,
    category: "best",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 12,
    title: "Small BookSelf",
    price: "360",
    rating: "88",
    stars: 3.4,
    image: cupboard,
    category: "best",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 13,
    title: "Breed Dry Dog Food",
    price: "100",
    rating: "35",
    stars: 3,
    image: cesar,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: true,
  },
  {
    id: 14,
    title: "CANON EOS DSLR Camera",
    price: "360",
    rating: "95",
    stars: 4,
    image: camera,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 15,
    title: "ASUS FHD Gaming Laptop",
    price: "700",
    rating: "375",
    stars: 4.5,
    image: laptop,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 16,
    title: "Curology Product Set",
    price: "300",
    rating: "145",
    stars: 4,
    image: curology,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 17,
    title: "Breed Dry Dog Food",
    price: "100",
    rating: "35",
    stars: 3,
    image: car,
    new: "new",
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
    isCart: true,
  },
  {
    id: 18,
    title: "CANON EOS DSLR Camera",
    price: "360",
    rating: "95",
    stars: 4,
    image: shoes,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 19,
    title: "ASUS FHD Gaming Laptop",
    price: "700",
    rating: "375",
    stars: 4.5,
    image: game1,
    new: "new",
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 20,
    title: "Curology Product Set",
    price: "300",
    rating: "145",
    stars: 4,
    image: jacket,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: true,
  },
];

export const BestProduct = [
  {
    id: 1,
    title: "The north coat",
    price: "$260",
    previous: "$360",
    rating: "88",
    stars: 4.8,
    image: shirt,
    category: "best",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 2,
    title: "Gucci duffle bag",
    price: "$960",
    previous: "$1160",
    rating: "75",
    stars: 4.4,
    image: perse,
    category: "best",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 3,
    title: "RGB liquid CPU Cooler",
    price: "$160",
    previous: "$170",
    rating: "99",
    stars: 4.5,
    image: loud,
    category: "best",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 4,
    title: "Small BookSelf",
    price: "$360",
    rating: "88",
    stars: 3.4,
    image: cupboard,
    category: "best",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 1,
    title: "Breed Dry Dog Food",
    price: "$100",
    rating: "35",
    stars: 3,
    image: cesar,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 2,
    title: "CANON EOS DSLR Camera",
    price: "$360",
    rating: "95",
    stars: 4,
    image: camera,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 3,
    title: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: "375",
    stars: 4.5,
    image: laptop,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 4,
    title: "Curology Product Set",
    price: "$300",
    rating: "145",
    stars: 4,
    image: curology,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 5,
    title: "Breed Dry Dog Food",
    price: "$100",
    rating: "35",
    stars: 3,
    image: car,
    new: "new",
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 6,
    title: "CANON EOS DSLR Camera",
    price: "$360",
    rating: "95",
    stars: 4,
    image: shoes,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 7,
    title: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: "375",
    stars: 4.5,
    image: game1,
    new: "new",
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 8,
    title: "Curology Product Set",
    price: "$300",
    rating: "145",
    stars: 4,
    image: jacket,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
];

export const newProduct = [
  {
    id: 1,
    title: "Breed Dry Dog Food",
    price: "$100",
    rating: "35",
    stars: 3,
    image: cesar,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 2,
    title: "CANON EOS DSLR Camera",
    price: "$360",
    rating: "95",
    stars: 4,
    image: camera,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 3,
    title: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: "375",
    stars: 4.5,
    image: laptop,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 4,
    title: "Curology Product Set",
    price: "$300",
    rating: "145",
    stars: 4,
    image: curology,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 5,
    title: "Breed Dry Dog Food",
    price: "$100",
    rating: "35",
    stars: 3,
    image: car,
    new: "new",
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 6,
    title: "CANON EOS DSLR Camera",
    price: "$360",
    rating: "95",
    stars: 4,
    image: shoes,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 7,
    title: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: "375",
    stars: 4.5,
    image: game1,
    new: "new",
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
  {
    id: 8,
    title: "Curology Product Set",
    price: "$300",
    rating: "145",
    stars: 4,
    image: jacket,
    category: "newProduct",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        id: 1,
        color: "red",
        image:
          "https://i5.walmartimages.com/asr/2d2bd232-6111-4449-aa17-d8d6543ad3f2.39201db00f2e464ee8afdae355aa532c.jpeg",
      },
      {
        id: 2,
        color: "red",
        image:
          "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/02/62ba0fce-f61a-4835-851a-f7966dd5e7df.png",
      },
      {
        id: 3,
        color: "red",
        image:
          "https://m.media-amazon.com/images/I/61x-IJeNrqL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        color: "red",
        image:
          "https://assets.mydeal.com.au/45514/controllers-attachments-wireless-gamepad-controller-for-pc-ps4-remote-with-gyro-sensor-vibr-13467442_02.jpg?v=sSHcY1736142758&imgclass=dealpageimage",
      },
      {
        id: 5,
        color: "red",
        image: game,
      },
    ],
    stock: 4,
    wishlist: false,
  },
];

export const wishlist = [
  {
    id: 1,
    main: "wishlist",
    title: "Gucci duffle bag",
    price: "$960",
    previous: "$1160",
    discount: "-35%",
    image: perse,
  },
  {
    id: 2,
    main: "wishlist",
    title: "RGB liquid CPU Cooler",
    price: "$1960",
    image: loud,
  },
  {
    id: 3,
    main: "wishlist",
    title: "GP11 Shooter USB Gamepad",
    price: "$550",
    image: game,
  },
  {
    id: 4,
    main: "wishlist",
    title: "Quilted Satin Jacket",
    price: "$750",
    image: jacket,
  },
];

export const Suggested = [
  {
    id: 1,
    main: "wishlist",
    title: "ASUS FHD Gaming Laptop",
    price: "$960",
    previous: "$1160",
    discount: "-35%",
    rating: "88",
    stars: 4.4,
    image: laptop,
  },
  {
    id: 2,
    main: "wishlist",
    title: "AK-900 Wired Keyboard",
    price: "$1960",
    image: keyboard,
    rating: "65",
    stars: 3.4,
  },
  {
    id: 3,
    main: "wishlist",
    title: "IPS LCD Gaming Monitor",
    price: "$550",
    image: lcd,
    rating: "75",
    stars: 5,
  },
  {
    id: 4,
    main: "wishlist",
    title: "HAVIT HV-G92 Gamepad",
    price: "$750",
    image: game1,
    rating: "75",
    stars: 5,
  },
];
export const projects = [
  {
    id: 1,
    name: "LCD Monitor",
    price: "650",
    quantity: "1",
    subtotal: "650",
    image: laptop,
  },
  {
    id: 2,
    name: "H1 Gamepad",
    price: "1150",
    quantity: "2",
    subtotal: "22100",
    image: jacket,
  },

  {
    id: 3,
    name: "H1 Gamepad",
    price: "1150",
    quantity: "2",
    subtotal: "22100",
    image: game,
  },
  {
    id: 4,
    name: "H1 Gamepad",
    price: "1150",
    quantity: "2",
    subtotal: "22100",
    image: camera,
  },

  {
    id: 5,
    name: "H1 Gamepad",
    price: "1150",
    quantity: "2",
    subtotal: "22100",
    image: car,
  },
  {
    id: 6,
    name: "H1 Gamepad",
    price: "1150",
    quantity: "2",
    subtotal: "22100",
    image: shirt,
  },

  {
    id: 7,
    name: "H1 Gamepad",
    price: "1150",
    quantity: "2",
    subtotal: "22100",
    image: cupboard,
  },
];

export const categories = [
  {
    id: 1,
    title: "Phones",
    image: CiMobile4,
  },
  {
    id: 2,
    title: "Computers",
    image: HiOutlineDesktopComputer,
  },
  {
    id: 3,
    title: "SmartWatch",
    image: TbDeviceWatchStats,
  },
  {
    id: 4,
    title: "Camera",
    image: CiCamera,
  },
  {
    id: 5,
    title: "HeadPhones",
    image: LuHeadphones,
  },
  {
    id: 6,
    title: "Gaming",
    image: LuGamepad,
  },
  {
    id: 7,
    title: "Shirt",
    image: RiShirtLine,
  },
  {
    id: 8,
    title: "Sport",
    image: MdOutlineSportsBaseball,
  },
];

export const feature = [
  {
    id: 1,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    image: delivery,
  },
  {
    id: 2,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    image: head,
  },
  {
    id: 3,
    title: "MONEY BACK GUARANTEE",
    description: "We reurn money within 30 days",
    image: tick,
  },
];

export const Profile = [
  {
    id: 1,
    title: "Manage My Account",
    image: user,
    path: "/account",
  },
  {
    id: 2,
    title: "My Order",
    image: order,
    path: "/account",
  },
  {
    id: 3,
    title: "My Cancellations",
    image: cancel,
    path: "/account",
  },
  {
    id: 4,
    title: "My Reviews",
    image: star,
    path: "/account",
  },
  {
    id: 5,
    title: "Logout",
    image: logout,
    path: "/account",
  },
];

export const abouts = [
  {
    id: 1,
    number: "10.5K",
    detail: "Sallers active our site",
    icons: AiOutlineShop,
  },
  {
    id: 2,
    number: "33K",
    detail: "Mopnthly Produduct Sale",
    icons: CiDollar,
  },
  {
    id: 3,
    number: "45.5K",
    detail: "Customer active in our site",
    icons: IoBagHandleOutline,
  },
  {
    id: 4,
    number: "25K",
    detail: "Anual gross sale in our site",
    icons: TbMoneybag,
  },
];

export const team = [
  {
    id: 1,
    name: "Tom Cruise",
    profession: "Founder & Chairman",
    twitter: "www.tiwtter.com",
    linkedIn: "www.linkedin.com",
    instagram: "www.instagram.com",
    image: team_1,
  },
  {
    id: 2,
    name: "Emma Watson",
    profession: "Managing Director",
    twitter: "www.tiwtter.com",
    linkedIn: "www.linkedin.com",
    instagram: "www.instagram.com",
    image: team_2,
  },
  {
    id: 3,
    name: "Will Smith",
    profession: "Product Designer",
    twitter: "www.tiwtter.com",
    linkedIn: "www.linkedin.com",
    instagram: "www.instagram.com",
    image: team_3,
  },
  {
    id: 4,
    name: "Travis Head",
    profession: "Graphic Designer",
    twitter: "www.tiwtter.com",
    linkedIn: "www.linkedin.com",
    instagram: "www.instagram.com",
    image: team_1,
  },
  {
    id: 5,
    name: "Kawiya",
    profession: "Ui/Ux Designer",
    twitter: "www.tiwtter.com",
    linkedIn: "www.linkedin.com",
    instagram: "www.instagram.com",
    image: team_2,
  },
  {
    id: 6,
    name: "Steve Smith",
    profession: "Sales Manager",
    twitter: "www.tiwtter.com",
    linkedIn: "www.linkedin.com",
    instagram: "www.instagram.com",
    image: team_3,
  },
];

export const account = [
  {
    id: 1,
    title: "Manage My Account",
    submenu: [
      {
        id: 1,
        name: "My Profile",
        path: "/account",
      },
      {
        id: 2,
        name: "Address Book",
        path: "/account/address-book",
      },
      {
        id: 3,
        name: "My Payment Options",
        path: "/account/payment-options",
      },
    ],
  },
  {
    id: 2,
    title: "My Orders",
    submenu: [
      {
        id: 1,
        name: "My Returns",
        path: "/order/return",
      },
      {
        id: 2,
        name: "My Cancelations",
        path: "/order/cancelation",
      },
    ],
  },
  {
    id: 3,
    title: "My Wishlist",
  },
];

export const contact = [
  {
    id: 1,
    icon: FiPhone,
    title: "Call To Us",
    detail: ["We are available 24/7, 7 days a week.", "Phone: +8801611112222"],
  },
  {
    id: 2,
    icon: CgMail,
    title: "write To Us",
    detail: [
      "Fill out our form and we will contact you within 24 hours.",
      "Emails: customer@exclusive.com",
      "Emails: support@exclusive.com",
    ],
  },
];
