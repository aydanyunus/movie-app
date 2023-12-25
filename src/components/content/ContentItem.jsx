import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/features/movieSlice";

const ContentItem = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movie.favorites);
  const isInFav = favorites.find((m) => m.id === movie.id);
  const date = movie.release_date || movie.first_air_date;
  let formattedDate;

  if (date) {
    formattedDate = date.split("-")[0];
  } else {
    formattedDate= 'N/A'
  }

  const handleFav = async (movie) => {
    await dispatch(toggleFavorite(movie));
  };

  return (
    <div className="item">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="img"
        className="item-img"
      />
      <div className="flex">
        <div className="details">
          <h5 className="item__title">
            {movie.original_title ? movie.original_title : movie.name}
          </h5>
          <div className="rating">
            <AiFillStar />
            <span className="imdb">{Math.floor(movie.vote_average *10)/10}</span>
          </div>
          <h6 className="item__year">
            <span>{formattedDate}</span>
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
