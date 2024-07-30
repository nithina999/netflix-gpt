import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import VideoContainer from "./VideoContainer";
import MovieList from "./MovieList";
import { GPTSearch } from "./GPTSearch";
import { useSelector } from "react-redux";

const Home = () => {
  const searchState = useSelector((store) => store.gpt.showSearchPage);
  useNowPlaying();

  return (
    <div>
      <Header />
      {searchState ? (
        <GPTSearch />
      ) : (
        <>
          <VideoContainer />
          <MovieList />
        </>
      )}
    </div>
  );
};

export default Home;
