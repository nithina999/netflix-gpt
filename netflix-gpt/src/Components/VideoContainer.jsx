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
    <div>
      {trailerUrl && (
        <div className=" bg-gradient-to-r from-black">
          <iframe
            className="w-full h-screen "
            src={trailerUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      )}
      <div className="absolute top-0 pt-56 text-white  bg-gradient-to-r from-black w-full h-screen pl-8">
        <h1 className="text-6xl font-bold">{mainMovie.original_title}</h1>
        <p className="text-l w-3/12 py-4">{mainMovie.overview}</p>
        <div>
          <button className="py-2 px-4 bg-white text-black rounded-lg mr-2">
            ▶ Play
          </button>
          <button className="py-2 px-4 bg-gray-800 text-white rounded-lg">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
