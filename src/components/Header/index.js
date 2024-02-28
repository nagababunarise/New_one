import React from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoBag } from "react-icons/io5";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./index.css";
const Header = () => (
  <div className="header-container">
    <h1>TANN TRIM </h1>
    <div className="logo-container">
      <CiSearch className="search-logo" />
      <CgProfile className="search-logo" />
      <BookmarkBorderIcon className="search-logo" />
      <IoBag className="search-logo" />
    </div>
  </div>
);
export default Header;
