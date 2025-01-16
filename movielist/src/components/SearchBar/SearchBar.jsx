import React from "react";
import SearchIcon from "../../assets/images/Search.svg";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  searchMovie,
  handleClearSearch,
}) => {
  return (
    <div className="search">
      <input
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm && (
        <IoMdClose
          size={50}
          color="#f9d3b4"
          onClick={handleClearSearch}
          style={{ cursor: "pointer" }}
        />
      )}
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
