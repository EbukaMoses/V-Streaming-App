import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { BiSolidTachometer } from "react-icons/bi";
import { SiYoutubeshorts } from "react-icons/si";

const SideNav = () => {
  return (
    <div className="SideNav flex flex-col">
      <Link to="/" className="SideNav__item flex">
        <BiSolidTachometer />
        Home
      </Link>
      <Link to="/" className="SideNav__item flex">
        <SiYoutubeshorts />
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
      </Link>
    </div>
  );
};

export default SideNav;
