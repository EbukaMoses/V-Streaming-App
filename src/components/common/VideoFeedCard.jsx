import React from "react";
import "./style.css";
import UserFeed from "/images/user1.png";
import Thumbnail from "/images/thumbnail.jpg";
import Video from "/images/video.mp4"
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const VideoFeedCard = () => {
  return (
    <div className="VideoFeedCard flex flex-col">
      <div className="VideoFeedCard__Thumbnail flex flex-col">
        <img src={Thumbnail} alt="" />
        <video src={Video}></video>
      </div>
      <div className="VideoFeedCard_details flex">
        <Link to="/">
          
          <img src={UserFeed} alt="" />
        </Link>
        <div className="title">
          <h3>Title</h3>
          <Link to="/" className="flex channel_name">
            Channel Name
            <RiVerifiedBadgeFill />
          </Link>
          <span className="views_date">7.8k views • 2 years ago</span>
        </div>
        <HiOutlineDotsVertical className="dots" />
      </div>
    </div>
  );
};

export default VideoFeedCard;
