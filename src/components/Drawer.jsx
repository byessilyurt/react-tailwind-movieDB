import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/context";
import { useLocation } from "react-router-dom";

function Drawer() {
  const location = useLocation();
  const context = useContext(AppContext);
  const favourites = context.state.favourites;
  const [textColor, setTextColor] = useState("black");
  const [paddingLeft, setPaddingLeft] = useState("12");

  useEffect(() => {
    const text = location.pathname === "/" ? "white" : "black";
    setTextColor(text);
    console.log(textColor);
    const paddingLeft = location.pathname === "/" ? "0" : "12";
    setPaddingLeft(paddingLeft);
    console.log(paddingLeft);
  }, []);
  // have to use "classnames" package to create classses dynamically.
  // it is just static for now.

  return (
    <div className=" drawer absolute top-0 left-0 h-screen w-full rounded">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <label
        htmlFor="my-drawer"
        className={`btn fixed z-10 drawer-button font-thin text-sm items-center text-black border-b-primary border-l-0 border-t-0 border-r-0 border-2 w-18 h-12 bg-transparent shadow-3xl rounded-none hover:bg-tertiary hover:text-primary lg:top-[0%] lg:left-14 top-[0%] left-14 px-3 py-1`}
      >
        Favourites
      </label>
      <div className="drawer-side ">
        <label htmlFor="my-drawer" className="drawer-overlay "></label>
        <ul className="menu fixed p-4 overflow-y-auto w-80 pt-20 bg-transparent border-0 text-primary ">
          {favourites.length === 0 ? (
            <li className="menu-link text-white">
              <span>No Movies in your list</span>
            </li>
          ) : (
            favourites.map((movie) => (
              <li className="menu-item" key={movie.id}>
                <div className="menu-link flex justify-between">
                  <span>{movie.title}</span>
                  <span>
                    <button
                      onClick={() => context.removeMovie(movie.id)}
                      className="btn bg-red-400 border-0 text-primary"
                    >
                      Remove
                    </button>
                  </span>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
