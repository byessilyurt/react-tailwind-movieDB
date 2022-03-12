import React from "react";
import HomeIcon from "../assets/home-icon.png";

function RecommendedMovie({ movie }) {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <div className="relative">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie?.backdrop_path})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{movie?.original_title}</h1>
            <p className="mb-5">{movie?.overview} </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div>
        <button
          className="fixed z-20 w-14 h-14 bg-slate-200 shadow-3xl rounded-sm lg:top-[0%] lg:left-0 top-[0%] left-0 p-4 "
          onClick={handleBackClick}
        >
          <img src={HomeIcon} alt="Home" />
        </button>
      </div>
      <div className="rating absolute flex flex-col items-center bg-primary p-1 border-4 border-slate-600 border-solid shadow-2xl opacity-80 rounded-lg lg:top-[15%] lg:left-[15%] top-[10%] left-[10%] ">
        <h3 className="font-bold tracking-wider text-white">TOP RATED</h3>
        <div className="pointer-events-none">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
            readOnly
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
            readOnly
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
            readOnly
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
            readOnly
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default RecommendedMovie;
