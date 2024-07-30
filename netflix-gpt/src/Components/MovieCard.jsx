import React from "react";

const MovieCard = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div>
      <h1 className="text-4xl text-white py-4">{title}</h1>
      <div className="flex overflow-auto custom-scroll">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="w-56 pr-4"
            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
