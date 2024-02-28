import React from "react";
import image1 from "./allBags.png";
import image2 from "./vanitypouch.png";
import image3 from "./toteBag.png";
import image4 from "./duffle.png";
import image5 from "./laptopsleeves.png";
import image6 from "./messengerBag.png";
import image7 from "./slings.png";
import image8 from "./handBags.png";

import "./index.css";

const MenuNav = () => (
  <div className="menu-nav-container">
    <div className="logo-card">
      <img src={image1} alt="all-bags" className="image" />
      <p className="image-name">All Bags</p>
    </div>
    <div className="logo-card">
      <img src={image2} alt="vanity-Pouch" className="image" />
      <p className="image-name">Vanity Pouch</p>
    </div>
    <div className="logo-card">
      <img src={image3} alt="tote" className="image" />
      <p className="image-name">Tote Bag</p>
    </div>
    <div className="logo-card">
      <img src={image4} alt="duffle" className="image" />
      <p className="image-name">Duffle Bag</p>
    </div>
    <div className="logo-card">
      <img src={image5} alt="laptop" className="image" />
      <p className="image-name">Laptop Sleeves</p>
    </div>
    <div className="logo-card">
      <img src={image6} alt="messenger" className="image" />
      <p className="image-name">Messenger Bags</p>
    </div>
    <div className="logo-card">
      <img src={image7} alt="slings" className="image" />
      <p className="image-name">Slings Bag</p>
    </div>
    <div className="logo-card">
      <img src={image8} alt="handbag" className="image" />
      <p className="image-name">Handbags</p>
    </div>
  </div>
);
export default MenuNav;
