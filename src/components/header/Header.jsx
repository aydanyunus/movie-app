import React, { useState } from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getMoviesByQuery, getWeeklyMovies } from "../../store/features/movieSlice";

const Header = () => {
  const dispatch = useDispatch()
  const [mobileMenu, setMobileMenu] = useState(true);
  const [text, setText] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      await dispatch(getMoviesByQuery(text));
    } else {
      await dispatch(getWeeklyMovies())
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__top">
            <div className="header__logo">
              <Link to="/" className="header__logo--link">
                <BiSolidCameraMovie />
              </Link>
            </div>
            <div className="header__search">
            <form onSubmit={handleSubmit}>
              <input
                className="header__search--input"
                type="search"
                placeholder="Search any movies or TV shows"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                onKeyDown={handleKeyDown}
              />
               <input
                className="header__search--mobile-input"
                type="search"
                placeholder="Search"
              />
                </form>
            </div>
          </div>

          <div className="header__nav">
            <nav className="nav">
              <NavLink to="/movies">Movies</NavLink>
              <NavLink to="/shows">TV Shows</NavLink>
              <NavLink to="/favorites">Favorites</NavLink>
            </nav>
            <div className="mobile__menu">
              <button
                type="button"
                className="menu__btn"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                {mobileMenu ? <HiOutlineMenuAlt3 /> : <AiOutlineClose />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {!mobileMenu ? (
        <div className="menu__wrapper">
          <div className="container">
            <ul className="menu__items">
              <li className="item">
                <NavLink to="/movies">Movies</NavLink>
              </li>
              <li className="item">
                <NavLink to="/shows">TV Shows</NavLink>
              </li>
              <li className="item">
                <NavLink to="/favorites">Favorites</NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;