import React from "react";
import ContentItem from "../components/content/ContentItem";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.movie.favorites);

  return (
    <div className="page__wrapper">
      <div className="container">
        <div className="page__content">
        <div className="page__header">
            <h1 className="page__title">Favorites</h1>
          </div>
          <div className="item__wrapper">
            {favorites &&
              favorites.map((m) => <ContentItem movie={m} key={m.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
