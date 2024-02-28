import React from "react";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import "./index.css";
import ItemImage from "../ItemImage";
import image1 from "../images/bag1.png";
import image2 from "../images/bag2.png";
import image3 from "../images/bag3.png";
import image4 from "../images/bag4.png";
import image5 from "../images/bag5.png";
import image6 from "../images/bag6.png";
import image7 from "../images/bag7.png";
import image8 from "../images/bag8.png";
import logo1 from "../images/logoRupee.png";
import logo2 from "../images/cartLogo.png";
const ItemList = [
  {
    imageUrl: image1,
    name: "The Metro Movers Black",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoR: logo1,
    cartIcon: logo2,
  },
  {
    imageUrl: image2,
    name: "The Metro Movers Black",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoR: logo1,
    cartIcon: logo2,
  },
  {
    imageUrl: image3,
    name: "The Metro Movers Black",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoR: logo1,
    cartIcon: logo2,
  },
  {
    imageUrl: image4,
    name: "The Metro Movers Black",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoR: logo1,
    cartIcon: logo2,
  },
  {
    imageUrl: image5,
    name: "The Metro Movers Black",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoR: logo1,
    cartIcon: logo2,
  },
  {
    imageUrl: image6,
    name: "The Metro Movers Black",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoR: logo1,
    cartIcon: logo2,
  },
  {
    imageUrl: image7,
    name: "The Brown Metro Movers",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoR: logo1,
    cartIcon: logo2,
  },
  {
    imageUrl: image8,
    name: "The Brown Metro Movers",
    price: "4899",
    orgPrice: "8999",
    discount: "(50% Off)",
    logoR: logo1,
    cartIcon: logo2,
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
