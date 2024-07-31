import React from "react";

const MovieCard = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="p-4">
      <h1 className="text-4xl text-white font-bold mb-4">{title}</h1>
      <div className="flex overflow-x-auto space-x-4 py-4 custom-scroll">
        {movies.map((movie) => {
          const posterUrl = movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : null;

          return posterUrl ? (
            <img
              key={movie.id}
              className="w-36 h-52 object-cover rounded-lg shadow-lg"
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
