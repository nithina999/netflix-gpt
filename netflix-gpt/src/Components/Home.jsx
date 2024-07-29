import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import VideoContainer from "./VideoContainer";
import MovieList from "./MovieList";

const Home = () => {
  useNowPlaying();

  return (
    <div>
      <Header />
      <VideoContainer />
      <MovieList />
    </div>
  );
};

export default Home;
