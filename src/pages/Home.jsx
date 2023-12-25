import React from "react";
import ContentList from "../components/content/ContentList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="page__wrapper">
        <div className="container">
          <div className="page__content">
            <div className="page__header">
              <h1 className="page__title">Weekly Top Rated Movies</h1>
              <button type="button" className="seemore__btn">
                <Link to="/movies">see more</Link>
              </button>
            </div>

            <ContentList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
