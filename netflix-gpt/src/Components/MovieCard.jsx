import React from "react";

const MovieCard = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div>
      <h1 className="text-4xl text-white py-4">{title}</h1>
      <div className="flex overflow-auto custom-scroll">
        {movies.map((movie) => {
          const posterUrl = movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : null;

          return posterUrl ? (
            <img
              key={movie.id}
              className="w-56 pr-4"
              src={posterUrl}
              alt={movie.title}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default MovieCard;
