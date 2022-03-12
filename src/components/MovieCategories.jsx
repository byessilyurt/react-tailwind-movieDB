import React from "react";
import images from "../assets/index.js";
import { useNavigate } from "react-router-dom";

function MovieCategories({ categories }) {
  const navigate = useNavigate();
  const handleClick = (categoryId, categoryName) => {
    navigate(`/movies/${categoryId}`, {
      state: { categoryName: categoryName },
    });

    console.log("clicked ");
  };
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {categories?.map((category) => (
        <div
          className="card w-96 glass cursor-pointer"
          key={category.id}
          onClick={() => handleClick(category.id, category.name)}
        >
          <figure>
            <img src={images[category.id]} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-tertiary font-light tracking-wider">
              {category.name}!
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCategories;
