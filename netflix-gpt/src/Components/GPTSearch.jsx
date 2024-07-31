import React, { useEffect, useRef, useState } from "react";
import { API_OPTIONS, BG_IMG } from "../utils/constants";
import languages from "../utils/languages";
import { useDispatch, useSelector } from "react-redux";
import { addSearchedMovies } from "../utils/movieSlice";
import MovieCard from "./MovieCard";
import Header from "./Header";

export const GPTSearch = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const searchedMovies = useSelector((movie) => movie.movies.searchedMovies);
  console.log("search", searchedMovies);
  const searchText = useRef();
  const langKey = useSelector((store) => store.config.lang);
  console.log(languages[langKey]);

  const handleSearchResults = async () => {
    console.log(searchText.current.value);
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchText.current.value +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSearchedMovies(json.results));
    if (json.results.length == 0) setErrorMsg("No Results found");
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_IMG})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="bg-black bg-opacity-75 p-6 rounded-lg shadow-lg max-w-4xl w-full mx-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center"
          >
            <input
              ref={searchText}
              type="text"
              placeholder={languages[langKey].searchPlaceholder}
              className="px-4 py-2 w-full md:w-9/12 mb-4 rounded-md border border-gray-600 bg-gray-800 text-white"
            />
            <button
              className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors"
              onClick={handleSearchResults}
            >
              {languages[langKey].search}
            </button>
          </form>
          <div className="mt-6">
            <MovieCard title="Your Results" movies={searchedMovies} />
          </div>
          <p className="text-white">{errorMsg}</p>
        </div>
      </div>
    </div>
  );
};
