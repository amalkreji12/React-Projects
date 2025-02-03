import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <IoIosSearch style={{fontSize: "2rem"}} className="text-white"/>
        <input
          type="type"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
