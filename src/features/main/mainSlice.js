import { createSlice } from "@reduxjs/toolkit";
import set from "lodash/set";
import remove from "lodash/remove";

export const postsSlice = createSlice({
  name: "main",
  initialState: {
    readingPost: undefined,
    allPosts: undefined,
  },
  reducers: {
    dismiss(state, action) {
      state.allPosts = remove(
        state.allPosts,
        (post) => post.data.id !== action.payload.id
      );
    },
    dismissAll(state) {
      state.allPosts = [];
    },
    load(state, action) {
      state.allPosts = action.payload.allPosts;
    },
    read(state, action) {
      state.allPosts.map((post) =>
        post.data.id === action.payload.id
          ? set(post, "data.visited", true)
          : post
      );
      state.readingPost = state.allPosts.find(
        (post) => post.data.id === action.payload.id
      );
    },
  },
});

export const { read, dismiss, dismissAll, load } = postsSlice.actions;

export default postsSlice.reducer;
