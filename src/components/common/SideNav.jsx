import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../utils/navBar";


const SideNav = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="SideNav flex flex-col">
      {Navbar.map((item) => (
        <Link
          to="/"
          className={`SideNav__item flex ${
            item.name === selectedCategory && "active"
          }`}
          onClick={() => setSelectedCategory(item.name)}
          key={item.name}
        >
          {/* {item.icon} */}
          {item.name}
        </Link>
      ))}

      {/* <Link to="/" className="SideNav__item flex">
       
        Short
      </Link>
      <Link to="/" className="SideNav__item flex">
        <SiYoutubeshorts />
        Your Channel
      </Link>
      <Link to="/" className="SideNav__item flex">
        <SiYoutubeshorts />
        History
      </Link>
      <Link to="/" className="SideNav__item flex">
        <SiYoutubeshorts />
        Playlist
      </Link>
      <Link to="/" className="SideNav__item flex">
        <SiYoutubeshorts />
        Your Videos
      </Link>
      <Link to="/" className="SideNav__item flex">
        <SiYoutubeshorts />
        Downloads
      </Link> */}
    </div>
  );
};

export default SideNav;
