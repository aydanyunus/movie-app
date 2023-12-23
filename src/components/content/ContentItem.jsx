import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/features/movieSlice";

const ContentItem = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movie.favorites);
  const isInFav = favorites.find((m) => m.imdbID === movie.imdbID);

  const handleFav = async (movie) => {
    await dispatch(toggleFavorite(movie));
  };

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
        <button
          className="like-btn"
          type="button"
          onClick={() => handleFav(movie)}
        >
          {isInFav ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

export default ContentItem;
