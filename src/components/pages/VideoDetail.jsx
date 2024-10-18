import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import user from "/images/user.jpg";
import max from "/images/max.jpg";
import { BsBell } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { fetchApi } from "../../utils/data";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  console.log(video);
  
  function formatDate(dateString) {
    const date = new Date(dateString);

    const options = { day: "numeric", month: "long", year: "numeric" };

    return date.toLocaleDateString("en-GB", options);
  }
  
  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // Converts to "M" for millions
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k"; // Converts to "k" for thousands
    } else {
      return num; // Returns the number itself if less than 1000
    }
  }

  useEffect(() => {
    fetchApi(`videos?part=snippet,contentDetails,statistics&id=${id}`).then(
      (data) => setVideoDetail(data.items[0])
    );
    
    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=> setVideo(data.items))
  }, [id]);

  return (
    <div className="VideoDetail flex">
      <div className="leftside">
        <ReactPlayer
          className="ReactPlayer"
          url={`https://www.youtube.com/watch?v=${id}`}
          // light={<img src={max} alt="Thumbnail" />}
          // width="1000px"
          // height="100%"
          autoplay
          controls
        />
        <h3>{videoDetail?.snippet?.title}</h3>
        <div className="detail flex">
          <img src={videoDetail?.snippet?.thumbnails?.default?.url} alt="" />
          <span className="flex flex-col">
            <h6>{videoDetail?.snippet?.channelTitle}</h6>
            <span>203K</span>
          </span>
          <div className="buttons flex">
            <button className="btn"> Join</button>
            <button className="btn flex">
              <BsBell /> Subscribe
            </button>
            <button className="btn">Share</button>
          </div>
        </div>
        <div className="video_desc">
          <div className="view_date flex">
            <h4>{formatNumber(videoDetail?.statistics?.viewCount)} views</h4>
            &nbsp;&nbsp;
            <h4> {formatDate(videoDetail?.snippet?.publishedAt)}</h4>
          </div>
          <p>{videoDetail?.snippet?.description}</p>
        </div>
      </div>
      <div className="rightside flex flex-col">
        <h3> Related Videos</h3>
        {video
          .map((item) => (
            <Link
              to={`/video/${item?.id?.videoId}`}
              className="small_video_card flex"
              key={item?.id}
            >
              {/* <ReactPlayer
              className="ReactPlayer"
              url={`https://www.youtube.com/watch?v=${item?.id?.videoId}`}
              autoplay
              controls
            /> */}
              <img
                src={item.snippet.thumbnails.default.url}
                className="ReactPlayer"
                alt=""
              />
              <div className="details flex flex-col">
                <div className="title flex">
                  <h4>5 Things I Wish Men Knew About Women</h4>
                  <BiDotsVerticalRounded className="dot" />
                </div>
                <h3>{item?.snippet?.channelTitle}</h3>
                {/* <span>ebukamoses</span> */}
                <span>{formatDate(item?.snippet?.publishedAt)}</span>
              </div>
            </Link>
          ))
          .slice(0, 7)}
      </div>
    </div>
  );
};

export default VideoDetail;
