import { useState } from "react";
import axios from "axios";

function SearchBar(params) {
  const { setBeers } = params;

  const handleSearch = (query) => {
    console.log(query)
    axios
      .get(`http://localhost:5005/api/beers/search?q=${query}`)
      .then((res) => {
        setBeers(res.data);
        console.log("searchbar", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        margin: "2rem",
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      <label htmlFor=""> SEARCH</label>
      <input
        type="text"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
