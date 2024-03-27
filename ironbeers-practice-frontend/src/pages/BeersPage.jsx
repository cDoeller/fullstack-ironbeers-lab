import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";

function BeersPage() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/beers`)
      .then((res) => {
        setBeers(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <SearchBar setBeers={setBeers}></SearchBar>
      {beers &&
        beers.map((beer) => {
          return (
            <Link to={`/${beer._id}`} key={beer._id}>
              <div className="beer-card">
                <img src={beer.image_url} alt="" width="100px" />
                <h2>{beer.name}</h2>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default BeersPage;
