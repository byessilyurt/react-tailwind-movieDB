import "./App.css";
import useSWR from "swr";
import MovieCategories from "./components/MovieCategories";
import { GENRES_API_URL, fetcher } from "./api/index";
import { AppProvider } from "./context/provider";
function App() {
  const { data, error } = useSWR(GENRES_API_URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <AppProvider>
      <div className="App">
        <div id="container" className="min-h-screen bg-primary">
          <div className="h-60 flex flex-col justify-center items-center">
            <div className="text-black px-12 py-4 bg-slate-200 w-max border-2 border-solid border-tertiary shadow-2xl rounded-md opacity-80 hover:opacity-100 hover:scale-110 ease-in-out duration-200">
              <h1 className="text-xl font-medium mb-1 ">What To Watch?</h1>
              <h4 className="text-normal font-light">
                Choose the category fits you.
              </h4>
            </div>
          </div>
          <div>
            <MovieCategories categories={data.genres} />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
