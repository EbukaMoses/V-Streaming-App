import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SideNav from "../common/SideNav";
import user from "/images/user.jpg";
import banner from "/images/banner.png";

import { fetchApi } from "../../utils/data";
import VideoFeedCard from "../common/VideoFeedCard";

const Profile = () => {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  // console.log(channel);
  console.log(videos);

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannel(data?.items[0])
    );
    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // Converts to "M" for millions
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k"; // Converts to "k" for thousands
    } else {
      return num; // Returns the number itself if less than 1000
    }
  }

  return (
    <div className="Profile_container flex">
      <SideNav />
      <div className="feed flex flex-col">
        <div className="Profile_banner">
          <img
            src={channel?.snippet?.thumbnails?.default?.url}
            alt={channel?.snippet?.localized?.title}
          />
        </div>
        <div className="Profile_content flex">
          <img
            src={channel?.snippet?.thumbnails?.default?.url}
            alt={channel?.snippet?.localized?.title}
          />
          <div className="Profile_details flex flex-col">
            <h3>{channel?.snippet?.localized?.title}</h3>
            <span>
              {channel?.snippet?.customUrl} •{" "}
              {formatNumber(channel?.statistics?.subscriberCount)}
              subscribers • {formatNumber(channel?.statistics?.videoCount)}
              videos
            </span>
            <span>{channel?.snippet?.description.slice(0, 150)}...</span>
            <Link to="/">youtube.com/{channel?.snippet?.customUrl}</Link>
          </div>
        </div>
        <div className="Profile_tab flex">
          <Link to="/">Home</Link>
          <Link to="/">Video</Link>
          <Link to="/">Short</Link>
          <Link to="/">Playlist</Link>
        </div>
        <div className="Profile_videos">
          <VideoFeedCard videos={videos} />
          hello
        </div>
      </div>
    </div>
  );
};

export default Profile;
