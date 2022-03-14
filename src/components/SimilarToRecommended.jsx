import React from "react";
import { fetcher } from "../api/index";
import useSWR from "swr";
import Slider from "react-slick";
import { IMAGE_API_URL } from "../api/index";

function SimilarToRecommended({ movieId }) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  const { data, error } = useSWR(API_URL, fetcher);

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <div className=" ml-2 mt-8 mb-8 w-fit px-4  ">
        <h2
          className="text-red text-3xl font-light tracking-wider
        "
        >
          Similar movies to the recommended.
        </h2>
      </div>
      <Slider {...settings} className="py-2">
        {data.results.map((movie) => (
          <div key={movie.id} className="group relative">
            <img
              src={`${IMAGE_API_URL}${movie.poster_path}`}
              alt={movie.title}
              className="hover:scale-105 ease-in-out duration-300 group-hover:opacity-60 px-2"
            />
            <button className="absolute opacity-0 p-4 font-semibold border-2 border-primary border-solid rounded-lg hover:bg-primary hover:text-white hover:border-primary group-hover:opacity-100 ease-in duration-300 top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-primary text-xs md:text-sm lg:text-base  ">
              Show More
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimilarToRecommended;
