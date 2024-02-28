import React from "react";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import "./index.css";
import img1 from "./bag1.png";
import img2 from "./bag2.png";
import img3 from "./bag3.png";
import img4 from "./bag4.png";
import img5 from "./bag5.png";
import img6 from "./bag6.png";
import img7 from "./bag7.png";
import img8 from "./bag8.png";
import logo1 from "./Bookmark.png";
import rupeLogo from "./logorupe.png";
import cartLogo from "./cartLogo.png";
import ItemImage from "../ItemImage";
const ItemList = [
  {
    imageUrl: img1,
    name: "The Metro Movers Black",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoUrl: logo1,
    logoR: rupeLogo,
    cartIcon: cartLogo,
  },
  {
    imageUrl: img2,
    name: "The Metro Movers Black",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoUrl: logo1,
    logoR: rupeLogo,
    cartIcon: cartLogo,
  },
  {
    imageUrl: img3,
    name: "The Metro Movers Black",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoUrl: logo1,
    logoR: rupeLogo,
    cartIcon: cartLogo,
  },
  {
    imageUrl: img4,
    name: "The Metro Movers Black",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoUrl: logo1,
    logoR: rupeLogo,
    cartIcon: cartLogo,
  },
  {
    imageUrl: img5,
    name: "The Metro Movers Black",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoUrl: logo1,
    logoR: rupeLogo,
    cartIcon: cartLogo,
  },
  {
    imageUrl: img6,
    name: "The Metro Movers Black",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoUrl: logo1,
    logoR: rupeLogo,
    cartIcon: cartLogo,
  },
  {
    imageUrl: img7,
    name: "The Brown Metro Movers",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoUrl: logo1,
    logoR: rupeLogo,
    cartIcon: cartLogo,
  },
  {
    imageUrl: img8,
    name: "The Brown Metro Movers",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoUrl: logo1,
    logoR: rupeLogo,
    cartIcon: cartLogo,
  },
];

const ItemCard = () => (
  <div>
    <div className="product-container">
      <div className="backpacks-bar">
        <h1>
          Bags <span>*</span> Backpacks
        </h1>
      </div>
      <div className="logo-responsive ">
        <h1 className="no-products">13products</h1>
        <FaArrowUpFromBracket className="product-logo" />
      </div>
    </div>
    <div className="responsive-layout">
      {ItemList.map((item) => (
        <ItemImage key={item.id} itemDetails={item} />
      ))}
    </div>
  </div>
);
export default ItemCard;
