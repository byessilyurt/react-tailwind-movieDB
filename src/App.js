import "./App.css";
import useSWR from "swr";
import MovieCategories from "./components/MovieCategories";
import { GENRES_API_URL, fetcher } from "./api/index";
import { useContext } from "react";
import Drawer from "./components/Drawer";
import HomeIcon from "./components/HomeIcon";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const { data, error } = useSWR(GENRES_API_URL, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="App">
      <div id="container" className="min-h-screen bg-black">
        <div className="h-60 flex flex-col justify-center items-center">
          <div className="text-white px-12 py-4 bg-secondary w-max  shadow-2xl rounded-md  hover:opacity-100 hover:scale-110 ease-in-out duration-200">
            <h1 className="text-xl font-medium mb-1 ">What To Watch?</h1>
            <h4 className="text-normal font-light">
              Choose the category fits you.
            </h4>
          </div>
        </div>
        <Drawer />
        <div>
          <MovieCategories categories={data.genres} />
        </div>
      </div>
    </div>
  );
}

export default App;
