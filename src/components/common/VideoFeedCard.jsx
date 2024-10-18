import React from "react";
import "./style.css";
import ReactPlayer from "react-player";
// import UserFeed from "/images/user1.png";
// import Thumbnail from "/images/thumbnail.jpg";
import Video from "/images/video.mp4";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
const VideoFeedCard = ({ videos }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {videos.map((item, idx) => (
        <div key={idx}>
          {item?.id?.videoId && (
            <div className="VideoFeedCard flex flex-col">
              <div
                className="VideoFeedCard__Thumbnail flex flex-col"
                onClick={() => navigate(`/video/${item?.id?.videoId}`)}
              >
                {location.pathname !== "/video/:id" ? (
                  <img src={item.snippet.thumbnails.default.url} alt="" />
                ) : (
                  <ReactPlayer
                    className="ReactPlayer"
                    url={`https://www.youtube.com/watch?v=${item?.id?.videoId}`}
                    autoPlay
                    controls
                  />
                )}

                {/* <video src={Video}></video> */}
              </div>
              <div className="VideoFeedCard_details flex">
                <Link to={`/channel/${item?.snippet?.channelId}`}>
                  <img src={item?.snippet?.thumbnails?.default?.url} alt="" />
                </Link>
                <div className="title">
                  <h3 onClick={() => navigate(`/video/${item?.id?.videoId}`)}>
                    {item?.snippet?.title?.slice(0, 35)}
                  </h3>
                  <Link to="/" className="flex channel_name">
                    {item?.snippet?.channelTitle}
                    <RiVerifiedBadgeFill />
                  </Link>
                  {/* <span className="views_date">7.8k views • 2 years ago</span> */}
                </div>
                <HiOutlineDotsVertical className="dots" />
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default VideoFeedCard;
