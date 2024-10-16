import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SideNav from "../common/SideNav";
import user from "/images/user.jpg";
import banner from "/images/banner.png";

import { fetchApi } from "../../utils/data";

const Profile = () => {
  const [channel, setChannel] = useState(null);
  const [video, setVideo] = useState([])

  const { id } = useParams();

  console.log(channel);

  useEffect(() => {
    fetchApi(`channels?part="snippet&id=${id}`).then((data) =>
      setChannel(data?.items[0])
    );
    fetchApi(`search?channelId=${id}&part="snippet&order=date`).then((data) =>
      setVideo(data?.items)
    );
  }, [id]);

  return (
    <div className="Profile_container flex">
      <SideNav />
      <div className="feed flex flex-col">
        <div className="Profile_banner">
          <img src={banner} alt="" />
        </div>
        <div className="Profile_content flex">
          <img src={user} alt="" />
          <div className="Profile_details flex flex-col">
            <h3>Ebuka Moses</h3>
            <span>@ebukamoses • 10.7K subscribers • 474 videos</span>
            <span>
              Welcome to Ebuka Moses Channel. Here you will find a variety of
              videos on Lifestyle
            </span>
            <Link to="/">youtube.com/@ebukamoses</Link>
          </div>
        </div>
        <div className="Profile_tab flex">
          <Link to="/">Home</Link>
          <Link to="/">Video</Link>
          <Link to="/">Short</Link>
          <Link to="/">Playlist</Link>
        </div>
        <div className="Profile_videos">videos</div>
      </div>
    </div>
  );
};

export default Profile;
