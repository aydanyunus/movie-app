import React, { useEffect } from "react";
import ContentItem from "./ContentItem";
import { useDispatch, useSelector } from "react-redux";
import { getWeeklyMovies } from "../../store/features/movieSlice";

const ContentList = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movie.loading);
  const movies = useSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(getWeeklyMovies());
  }, [dispatch]);

  return (
    <div className="item__wrapper">
      {loading ? (
        <p>Loading...</p>
      ) : (
        movies &&
        movies.map((movie) => <ContentItem movie={movie} key={movie.id} />)
      )}
    </div>
  );
};

export default ContentList;
