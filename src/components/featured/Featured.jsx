import React from "react";
import "./Featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Elevate Your Vision, I Create Your Mission: Freelance Excellence
            Unleashed!
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="" alt="" />
              <input type="text" placeholder="Search for any service..." />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
          <span>Popular:</span>
          <button>Web Design</button>
          <button>Wordpress</button>
          <button>Logo Design</button>
          <button>Web Design</button>

          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Featured;
