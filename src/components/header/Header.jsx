import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <Link to="/" className="header__logo--link">
              <BiSolidCameraMovie />
            </Link>
          </div>
          <div className="header__search">
            <input className="header__search--input" type="search" placeholder="Search any movies or TV shows" />
          </div>
          <div className="header__nav">
            <nav className="nav">
              <Link to="/favorites">Movies</Link>
              <Link to="/favorites">Favorites</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
