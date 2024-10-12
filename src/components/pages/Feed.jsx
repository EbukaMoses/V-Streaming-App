import React from "react";
import "./pages.css";
import SideNav from "./../common/SideNav";
import VideoFeedCard from "../common/VideoFeedCard";

const Feed = () => {
  return (
    <div className="feed_container flex">
      <SideNav />
      <div className="feed grid5">
        <VideoFeedCard />
        <VideoFeedCard />
        <VideoFeedCard />
        <VideoFeedCard />
        <VideoFeedCard />
        <VideoFeedCard />
        <VideoFeedCard />
        <VideoFeedCard />
        <VideoFeedCard />
        <VideoFeedCard />
      </div>
    </div>
  );
};

export default Feed;
