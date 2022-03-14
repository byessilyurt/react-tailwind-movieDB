import React from "react";
import HomeIcon from "./HomeIcon";
import Drawer from "./Drawer";
function RecommendedMovie({ movie }) {
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
            <button className="btn bg-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="rating absolute flex flex-col items-center bg-primary p-1 border-2 border-white border-solid shadow-3xl opacity-80 rounded-lg lg:top-[15%] lg:left-[15%] top-[10%] left-[10%] ">
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
