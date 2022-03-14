import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useSWR from "swr";
import { MOVIES_BY_GENRES_API_URL, fetcher, IMAGE_API_URL } from "../api/index";
import { createRecommendation } from "../helpers/index";
import RecommendedMovie from "./RecommendedMovie";
import SimilarToRecommended from "./SimilarToRecommended";
import OtherMoviesInCategory from "./OtherMoviesInCategory";
import HomeIcon from "./HomeIcon";
import Drawer from "./Drawer";

function MoviesByCategory(props) {
  const [movies, setMovies] = useState([]);
  const { categoryId } = useParams();
  const { categoryName } = useLocation().state;
  const { data, error } = useSWR(
    MOVIES_BY_GENRES_API_URL + categoryId,
    fetcher
  );
  useEffect(() => {
    if (data) {
      setMovies(data.results);
    }
  }, []);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const recommendendMovieIndex = createRecommendation(data.results);
  const recommendedMovie = data.results[recommendendMovieIndex];
  return (
    <div>
      <HomeIcon />
      <Drawer />
      <RecommendedMovie movie={recommendedMovie} />
      <SimilarToRecommended movieId={recommendedMovie.id} />
      <OtherMoviesInCategory
        categoryName={categoryName}
        movies={data.results}
      />
    </div>
  );
}

export default MoviesByCategory;
