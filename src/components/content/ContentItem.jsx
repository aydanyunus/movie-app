import React from "react";
import { AiFillStar } from "react-icons/ai";

const ContentItem = ({ movie }) => {
  return (
    <div className="item">
      <img src={`${movie.Poster}`} alt="img" />
      <div className="details">
        <h5 className="item__title">{movie.Title}</h5>
        <div className="rating">
          <AiFillStar />
          <span className="imdb">7.0</span>
        </div>
        <h6 className="item__year">
          <span>{movie.Year}</span>
        </h6>
      </div>
    </div>
  );
};

export default ContentItem;
