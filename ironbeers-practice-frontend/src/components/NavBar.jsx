import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{display:"flex",gap:"2rem",justifyContent:"center"}}>
      <Link to="/">
        <button>All Beers</button>
      </Link>
      <Link to="/random">
        <button>Random Beer</button>
      </Link>
      <Link to="/create">
        <button>Create Beer</button>
      </Link>
    </nav>
  );
}

export default NavBar;
