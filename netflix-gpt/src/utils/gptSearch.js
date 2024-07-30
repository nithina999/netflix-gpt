import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
  name: "gpt",
  initialState: {
    showSearchPage: false,
  },
  reducers: {
    toggleSearchPage: (state) => {
      state.showSearchPage = !state.showSearchPage;
    },
  },
});

export const { toggleSearchPage } = gptSearch.actions;
export default gptSearch.reducer;
