import React from "react";
import SearchIcon from "../../assets/images/Search.svg";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ searchTerm, setSearchTerm, searchMovie }) => {
  return (
    <div className="search">
      <input
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <img
        src={SearchIcon}
        alt="Search Icon"
        onClick={() => searchMovie(searchTerm)}
      /> */}
      <IoIosSearch
        size={50}
        color="#f9d3b4"
        onClick={() => searchMovie(searchTerm)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default SearchBar;
