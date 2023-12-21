import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

const ContentItem = ({ movie }) => {
  return (
    <div className="item">
      <img src={`${movie.Poster}`} alt="img" className="item-img" />
      <div className="flex">
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
        <button className="like-btn" type="button">
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
};

export default ContentItem;
