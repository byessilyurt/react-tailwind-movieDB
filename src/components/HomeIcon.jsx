import React from "react";
import Home from "../assets/home-icon.png";

function HomeIcon() {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <div>
      <button
        className="btn fixed z-20 w-14  h-12 bg-transparent border-b-primary border-l-0 border-t-0 border-r-0 border-2 hover:bg-tertiary shadow-3xl rounded-none lg:top-[0%] lg:left-0 top-[0%] left-0 px-3 py-1 "
        onClick={handleBackClick}
      >
        <img src={Home} alt="Home" />
      </button>
    </div>
  );
}

export default HomeIcon;
