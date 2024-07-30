import React, { useEffect, useRef } from "react";
import { API_OPTIONS, BG_IMG } from "../utils/constants";
import languages from "../utils/languages";
import { useDispatch, useSelector } from "react-redux";
import { addSearchedMovies } from "../utils/movieSlice";
import MovieCard from "./MovieCard";

export const GPTSearch = () => {
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
  };

  return (
    <div>
      <img src={BG_IMG} alt="bg" />
      <div className="absolute bottom-[70%] left-[25%] bg-black p-4 w-6/12">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            ref={searchText}
            type="text"
            placeholder={languages[langKey].searchPlaceholder}
            className="px-4 py-4 w-9/12"
          />
          <button
            className="bg-red-700 text-white px-4 py-4 w-3/12"
            onClick={handleSearchResults}
          >
            {languages[langKey].search}
          </button>
        </form>
        <div className="absolute bg-black opacity-80 p-4">
          <MovieCard title={"Your Results"} movies={searchedMovies} />
        </div>
      </div>
    </div>
  );
};
