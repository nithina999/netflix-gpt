import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movies && movies.length > 0) {
      getMovieTrailer(movies[0].id);
    }
  }, [movies]);

  const getMovieTrailer = async (movieId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    const filteredTrailer = data.results.filter(
      (result) => result.type === "Trailer"
    );
    const mainTrailer = filteredTrailer[0];
    dispatch(addTrailerVideo(mainTrailer));
  };

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  const trailerUrl = trailer
    ? `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`
    : null;

  return (
    <div className="relative w-full h-screen">
      {trailerUrl && (
        <iframe
          className="absolute inset-0 w-full h-full object-cover"
          src={trailerUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black p-8 flex flex-col justify-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          {mainMovie.original_title}
        </h1>
        <p className="text-lg text-white mb-6 w-4/5 lg:w-1/2">
          {mainMovie.overview}
        </p>
        <div className="flex space-x-4">
          <button className="py-2 px-4 bg-white text-black rounded-lg hover:bg-gray-200 transition">
            ▶ Play
          </button>
          <button className="py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
