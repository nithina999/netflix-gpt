import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: null,
    trailerVideo: null,
    searchedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
    resetSearchedResults: (state) => {
      state.searchedMovies = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addSearchedMovies,
  resetSearchedResults,
} = movieSlice.actions;
export default movieSlice.reducer;
