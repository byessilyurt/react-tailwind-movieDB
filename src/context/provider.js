import AppContext from "./context";
import { useState } from "react";
const { Provider } = AppContext;

// context provider
const AppProvider = ({ children }) => {
  const [state, setState] = useState({ favourites: [] });

  const addMovie = (movie) => {
    setState({
      favourites: [...state.favourites, movie],
    });
  };

  const removeMovie = (movieId) => {
    const newfavourites = state.favourites.filter(
      (movie) => movie.id !== movieId
    );
    setState({ favourites: newfavourites });
  };

  return (
    <Provider value={{ state, removeMovie, addMovie }}>{children}</Provider>
  );
};

export default AppProvider;
