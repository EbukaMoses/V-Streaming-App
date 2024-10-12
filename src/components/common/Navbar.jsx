import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
import { MdVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import User from "/images/user.jpg";

const Navbar = () => {
  return (
    <div className="navbar flex">
      <div className="logo_hamburger flex">
        <GiHamburgerMenu className="hamburger" />
        <Link to="/" className="logo" title="Welcome to V-Streaming Platform">
          V Stream
        </Link>
      </div>
      <SearchCard />
      <div className="flex nav-icons">
        <MdVideoCall className="upload_video_icon" />
        <FaRegBell className="notification_icon" />
        <img src={User} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
