import useSWR from "swr";
import { fetcher } from "../api/index";
const createRecommendation = (movieList) => {
  // get movie list and create recommendation
  // based on Movies popularity/vote_average
  // creates top rated 3 movies and randomly select one and returns its id as recommendation
  let first, second, third;
  first = second = third = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].vote_average === 0) continue;
    if (movieList[i].backdrop_path === null) continue;
    let movieRate = Math.ceil(
      movieList[i].popularity / movieList[i].vote_average
    );
    if (movieRate > first) {
      third = second;
      second = first;
      first = i;
    }
    if (movieRate > second && movieRate < first) {
      third = second;
      second = i;
    }
    if (movieRate > third && movieRate < second) {
      third = i;
    }
  }
  let moviesWithHighestRating = [first, second, third];
  const recommendedMovieIndex =
    moviesWithHighestRating[
      Math.floor(Math.random() * moviesWithHighestRating.length)
    ];
  return recommendedMovieIndex;
};

export { createRecommendation };
