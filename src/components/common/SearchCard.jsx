import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineMic } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SearchCard = () => {
  const [icon, setIcon] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    // Your search logic here
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <div className="search_card flex">
      <div className="search_input flex">
        {icon && <IoIosSearch className="search_icon1" />}
        <input
          type="text"
          value={searchTerm}
          placeholder="Search"
          className="input_field"
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIcon(true)}
          onBlur={() => setIcon(false)}
        />
        <div className="search_input_icon flex">
          <IoIosSearch className="search_icon2" onClick={handleSearch} />
        </div>
      </div>
      <MdOutlineMic className="mic_icon" />
    </div>
  );
};

export default SearchCard;
