import React, { useEffect } from "react";
import ContentItem from "../components/content/ContentItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../store/features/movieSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);
  return (
    <div className="page__wrapper">
      <div className="container">
        <div className="page__content">
          <div className="page__header">
            <h1 className="page__title">Movies</h1>
          </div>
          <div className="item__wrapper">
            {movies && movies.map((m) => <ContentItem movie={m} key={m.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
