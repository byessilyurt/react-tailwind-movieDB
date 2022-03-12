import React from "react";
import { IMAGE_API_URL } from "../api";
import { AppContext } from "../context/context";
import { useContext } from "react";
function OtherMoviesInCategory({ categoryName, movies }) {
  const [otherMovies, setOtherMovies] = React.useState(movies);
  const [message, setMessage] = useContext(AppContext);

  const handleSearch = (search) => {
    setOtherMovies(
      movies?.filter((movie) =>
        movie.original_title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  return (
    <div>
      <div className="flex justify-between mx-6 mt-8">
        <h3 className="text-red text-3xl font-light tracking-wider">
          Other Movies in {categoryName} category
        </h3>
        <input
          type="text"
          name="searc"
          id="search"
          placeholder="Search"
          className="mr-24 border-solid border-2 border-gray-200 rounded-xl px-6 py-1 text-base "
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap gap-8 justify-center pt-8">
        {otherMovies.map((movie) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={movie.id}>
            <figure>
              <img src={IMAGE_API_URL + movie.poster_path} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {movie.original_title}
                <div
                  className={`badge badge-secondary border-none ${
                    movie.vote_average > 7
                      ? "bg-green-600"
                      : movie.vote_average < 7 && movie.vote_average > 6
                      ? "bg-yellow-600"
                      : "bg-red-600"
                  }`}
                >
                  {movie.vote_average}
                </div>
              </h2>
              <p>{movie.overview}</p>
              <div className="card-actions justify-end">
                <div
                  className="badge badge-outline cursor-pointer"
                  onClick={() => {
                    setMessage(movie.original_title);
                    console.log(message);
                    console.log("addWatched fired");
                  }}
                >
                  Add to watchlist
                </div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherMoviesInCategory;
