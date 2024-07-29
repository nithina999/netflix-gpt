import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import VideoContainer from "./VideoContainer";

const Home = () => {
  useNowPlaying();

  return (
    <div>
      <Header />
      <VideoContainer />
    </div>
  );
};

export default Home;
