import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import set from "lodash/set";
import remove from "lodash/remove";
import { loadState } from "./localStorage";
import axios from "axios";

export const fetchTop = createAsyncThunk(
  "app/fetchTop",
  async (after = undefined) => {
    const { data } = await axios.get(
      `https://www.reddit.com/top.json?limit=25&after=${after}`
    );
    return data;
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState: loadState()
    ? { ...loadState() }
    : {
        readingPost: undefined,
        allPosts: undefined,
        pagination: { limit: 25, after: undefined },
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
    read(state, action) {
      state.allPosts.map((post) =>
        post.data.id === action.payload.id
          ? set(post, "data.visited", true)
          : post
      );
      state.readingPost = state.allPosts.find(
        (post) => post.data.id === action.payload.id
      ).data;
    },
    changePost(state, action) {
      const direction = action.payload.direction === "next" ? 1 : -1;
      state.allPosts.forEach((post, index) => {
        if (post.data.id === action.payload.id) {
          const newIndex = state.allPosts[index + direction];

          const readingPost = newIndex ? newIndex.data : post.data;
          state.readingPost = readingPost;
          state.allPosts.map((post) =>
            post.data.id === readingPost.id
              ? set(post, "data.visited", true)
              : post
          );
        }
      });
    },
  },
  extraReducers: {
    [fetchTop.fulfilled]: (state, action) => {
      state.allPosts = action.payload.data.children;
    },
  },
});

export const {
  read,
  dismiss,
  dismissAll,
  load,
  changePost,
  loadMore,
} = appSlice.actions;

export default appSlice.reducer;
