import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineMic } from "react-icons/md";

const SearchCard = () => {
  const [icon, setIcon] = useState(false);
  return (
    <div className="search_card flex">
      <div className="search_input flex">
        {icon && <IoIosSearch className="search_icon1" />}
        <input
          type="text"
          placeholder="Search"
          className="input_field"
          onFocus={() => setIcon(true)}
          onBlur={() => setIcon(false)}
        />
        <div className="search_input_icon flex">
          <IoIosSearch className="search_icon2" />
        </div>
      </div>
      <MdOutlineMic className="mic_icon" />
    </div>
  );
};

export default SearchCard;
