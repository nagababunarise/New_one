import React from "react";
import "./index.css";
import img1 from "../images/allBags.png";
import img2 from "../images/vanityPouch.png";
import img3 from "../images/toteBag.png";
import img4 from "../images/duffle.png";
import img5 from "../images/handBags.png";
import img6 from "../images/messengerBag.png";
import img7 from "../images/slings.png";
import img8 from "../images/laptopSleeves.png";

const MenuNav = () => {
  return (
    <>
      <div className="menu-nav-container">
        <div className="logo-card">
          <img src={img1} alt="all-bags" className="image" />
          <p className="image-name">All Bags</p>
        </div>
        <div className="logo-card">
          <img src={img2} alt="vanity-Pouch" className="image" />
          <p className="image-name">Vanity Pouch</p>
        </div>
        <div className="logo-card">
          <img src={img3} alt="tote" className="image" />
          <p className="image-name">Tote Bag</p>
        </div>
        <div className="logo-card">
          <img src={img4} alt="duffle" className="image" />
          <p className="image-name">Duffle Bag</p>
        </div>
        <div className="logo-card">
          <img src={img5} alt="laptop" className="image" />
          <p className="image-name">Laptop Sleeves</p>
        </div>
        <div className="logo-card">
          <img src={img6} alt="messenger" className="image" />
          <p className="image-name">Messenger Bags</p>
        </div>
        <div className="logo-card">
          <img src={img7} alt="slings" className="image" />
          <p className="image-name">Slings Bag</p>
        </div>
        <div className="logo-card">
          <img src={img8} alt="handbag" className="image" />
          <p className="image-name">Handbags</p>
        </div>
      </div>
    </>
  );
};
export default MenuNav;
