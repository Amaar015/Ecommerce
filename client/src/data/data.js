import appleIcon from "../assets/apple-icon.png";
import apple from "../assets/hero-slider.png";
import game from "../assets/game.png";
import keyboard from "../assets/keyboard.png";
import cupboard from "../assets/cupboard.png";
import lcd from "../assets/lcd.png";
import chair from "../assets/chair.png";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbDeviceWatchStats } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";
import { LuHeadphones, LuGamepad } from "react-icons/lu";
import { RiShirtLine } from "react-icons/ri";
import { MdOutlineSportsBaseball } from "react-icons/md";

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
    id: 1,
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
    id: 2,
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
    ],
  },
  {
    id: 3,
    name: "Electronics",
    path: "/",
  },
  {
    id: 4,
    name: "Home & Lifestyle",
    path: "/",
  },
  {
    id: 5,
    name: "Medicine",
    path: "/",
  },
  {
    id: 6,
    name: "Sports & Outdoor",
    path: "/",
  },
  {
    id: 7,
    name: "Baby’s & Toys",
    path: "/",
  },
  {
    id: 8,
    name: "Groceries & Pets",
    path: "/",
  },
  {
    id: 9,
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

export const flashSales = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    previous: "$160",
    discount: "-40%",
    rating: "88",
    stars: 4.4,
    image: game,
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    price: "$960",
    previous: "$1160",
    discount: "-35%",
    rating: "75",
    stars: 5,
    image: keyboard,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: "$370",
    previous: "$400",
    discount: "-25%",
    rating: "99",
    stars: 4.5,
    image: lcd,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    price: "$375",
    previous: "$400",
    discount: "-25%",
    rating: "88",
    stars: 3.4,
    image: chair,
  },
  {
    id: 5,
    title: "Small BookSelf",
    price: "$360",
    previous: "$440",
    discount: "-30%",
    rating: "65",
    stars: 5,
    image: cupboard,
  },
  {
    id: 6,
    title: "IPS LCD Gaming Monitor",
    price: "$370",
    previous: "$400",
    discount: "-25%",
    rating: "99",
    stars: 4.8,
    image: lcd,
  },
  {
    id: 7,
    title: "S-Series Comfort Chair",
    price: "$375",
    previous: "$400",
    discount: "-25%",
    rating: "88",
    stars: 4.3,
    image: chair,
  },
  {
    id: 8,
    title: "Small BookSelf",
    price: "$360",
    previous: "$440",
    discount: "-30%",
    rating: "65",
    stars: 4,
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

export const BestProduct = [
  {
    id: 1,
    title: "The north coat",
    price: "$260",
    previous: "$360",
    rating: "88",
    stars: 4.8,
    image: game,
  },
  {
    id: 2,
    title: "Gucci duffle bag",
    price: "$960",
    previous: "$1160",
    rating: "75",
    stars: 4.4,
    image: keyboard,
  },
  {
    id: 3,
    title: "RGB liquid CPU Cooler",
    price: "$160",
    previous: "$170",
    rating: "99",
    stars: 4.5,
    image: lcd,
  },
  {
    id: 4,
    title: "Small BookSelf",
    price: "$360",
    rating: "88",
    stars: 3.4,
    image: chair,
  },
];
