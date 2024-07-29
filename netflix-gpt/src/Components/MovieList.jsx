import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);
  console.log(movies);
  return (
    <div className="pl-8 bg-black z-50 relative">
      <div className="-mt-56">
        <MovieCard title="Now Playing" movies={movies} />
      </div>
      <MovieCard title="Trending" movies={movies} />
      <MovieCard title="Popular" movies={movies} />
      <MovieCard title="Award Winning" movies={movies} />
    </div>
  );
};

export default MovieList;
