import React, { useEffect } from "react";
import ContentItem from "../components/content/ContentItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllTvShows } from "../store/features/movieSlice";

const TvShows = () => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(getAllTvShows());
  }, [dispatch]);
  return (
    <div className="page__wrapper">
      <div className="container">
        <div className="page__content">
          <div className="page__header">
            <h1 className="page__title">Tv Shows</h1>
          </div>
          <div className="item__wrapper">
            {shows && shows.map((show) => <ContentItem movie={show} key={show.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShows;
