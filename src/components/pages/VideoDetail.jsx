import React from "react";
import ReactPlayer from "react-player";
import user from "/images/user.jpg";
import max from "/images/max.jpg";
import { BsBell } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const VideoDetail = () => {
  return (
    <div className="VideoDetail flex">
      <div className="leftside">
        <ReactPlayer
          className="ReactPlayer"
          url="https://www.youtube.com/watch?v=eNirfmcZ9r4"
          // light={<img src={max} alt="Thumbnail" />}
          // width="1000px"
          // height="100%"
          autoplay
          controls
        />
        <h3>
          Build and Deploy a Modern YouTube Clone Application in React JS with
          Material UI 5 | RapidAPI
        </h3>
        <div className="detail flex">
          <img src={user} alt="" />
          <span className="flex flex-col">
            <h6>Ebuka Moses</h6>
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
            <h4>640K views</h4> &nbsp;&nbsp;
            <h4> 26 Aug 2022</h4>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            qui temporibus, ullam repudiandae nemo atque reiciendis rerum est
            minus ducimus quo perferendis tempore neque ea deleniti
            reprehenderit molestias ipsam ad architecto excepturi! Dignissimos
            molestiae dolore fugiat cum eveniet. Vitae eos, ut doloremque soluta
            debitis praesentium eveniet hic quibusdam inventore beatae.
          </p>
        </div>
      </div>
      <div className="rightside flex flex-col">
        <Link to="" className="small_video_card flex">
          <ReactPlayer
            className="ReactPlayer"
            url="https://www.youtube.com/watch?v=eNirfmcZ9r4"
            autoplay
            controls
            playIcon
          />
          <div className="details flex flex-col">
            <div className="title flex">
              <h4>5 Things I Wish Men Knew About Women</h4>
              <BiDotsVerticalRounded className="dot" />
            </div>
            <h3>Ebuka Moses</h3>
            <span>ebukamoses</span>
            <span>3 months ago</span>
          </div>
        </Link>
        <Link to="" className="small_video_card flex">
          <ReactPlayer
            className="ReactPlayer"
            url="https://www.youtube.com/watch?v=eNirfmcZ9r4"
            autoplay
            controls
          />
          <div className="details flex flex-col">
            <div className="title flex">
              <h4>5 Things I Wish Men Knew About Women</h4>
              <BiDotsVerticalRounded className="dot" />
            </div>
            <h3>Ebuka Moses</h3>
            <span>ebukamoses</span>
            <span>3 months ago</span>
          </div>
        </Link>
        <Link to="" className="small_video_card flex">
          <ReactPlayer
            className="ReactPlayer"
            url="https://www.youtube.com/watch?v=eNirfmcZ9r4"
            autoplay
            controls
          />
          <div className="details flex flex-col">
            <div className="title flex">
              <h4>5 Things I Wish Men Knew About Women</h4>
              <BiDotsVerticalRounded className="dot" />
            </div>
            <h3>Ebuka Moses</h3>
            <span>ebukamoses</span>
            <span>3 months ago</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoDetail;
