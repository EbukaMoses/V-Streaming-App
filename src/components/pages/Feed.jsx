import React, { useEffect, useState } from "react";
import "./pages.css";
import SideNav from "./../common/SideNav";
import VideoFeedCard from "../common/VideoFeedCard";
import { fetchApi } from "../../utils/data.js";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("new");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className="feed_container flex">
      <SideNav
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="feed flex">
        <VideoFeedCard videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
