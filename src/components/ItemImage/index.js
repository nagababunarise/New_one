import React from "react";
import "./index.css";

const ItemImage = (props) => {
  const { itemDetails } = props;
  const { imageUrl, name, price, orgPrice, discount, logoR, cartIcon } =
    itemDetails;
  return (
    <div className="main-card">
      <img src={imageUrl} alt="product" className="main-image" />
      <div>
        <h1 className="product-name">{name}</h1>
        <div className="responsive-card">
          <div className="price-card">
            <img src={logoR} alt="rup" className="rupee-logo" />
            <p className="price">{price}</p>
            <p className="org-price">{orgPrice}</p>
            <p className="discount">{discount}</p>
          </div>
          <img src={cartIcon} alt="cart" className="cart-icon" />
        </div>
      </div>
    </div>
  );
};
export default ItemImage;
