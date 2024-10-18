import React, { useEffect, useState } from "react";
import { fetchApi } from "../../utils/data";
import VideoFeedCard from "../common/VideoFeedCard";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <div className="feed flex">
      <VideoFeedCard videos={videos} />
    </div>
  );
};

export default SearchFeed;
