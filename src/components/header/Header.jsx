import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div class="header__logo">
          <Link>
            <BiSolidCameraMovie />
          </Link>
        </div>
        <div class="header__search">
          <input type="search" placeholder="Search any movies or TV shows" />
        </div>
      </div>
    </header>
  );
};

export default Header;
