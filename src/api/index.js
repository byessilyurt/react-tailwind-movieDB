const API_KEY = process.env.REACT_APP_API_KEY;
const IMAGE_API_URL = "https://image.tmdb.org/t/p/w500";
const GENRES_API_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=us-US`;
const MOVIES_BY_GENRES_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=`;
const fetcher = (url) => fetch(url).then((res) => res.json());

export { GENRES_API_URL, fetcher, MOVIES_BY_GENRES_API_URL, IMAGE_API_URL };
