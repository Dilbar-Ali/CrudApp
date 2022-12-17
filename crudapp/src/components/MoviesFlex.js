import React from "react";
import "./moviesFlex.css";
import { Link } from "react-router-dom";
const MoviesFlex = () => {
  return (
    <div className="main">
      <div className="main1">
        <h1>
          Rate Your Favourite <span>Movie</span>
        </h1>
        <div className="left">
          <p>
         
            Each color can be represented in many different ways. For example
            blue can also be represented as. It doesn't matter which one you
            choose as long as it's a valid color.
          </p>
          <div className="Button portion">
            <button><Link to="/add" style={{color:"white", textDecoration:"none"}}>Get Started</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesFlex;
