import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slide from "@material-ui/core/Slide";
import makeStyles from "./styles";
import List from "@material-ui/core/List";
import CircularProgress from "@material-ui/core/CircularProgress";
import Post from "features/posts/Posts.js";
import { fetchTop } from "app/appSlice";

const useStyles = makeStyles();

function AllPosts() {
  const classes = useStyles();
  const allPosts = useSelector((state) => state.app.allPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTop());
  }, [dispatch]);

  return (
    <>
      {!allPosts && (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      )}
      {allPosts && (
        <Slide direction="right" in={true}>
          <List className={classes.list}>
            {allPosts &&
              allPosts.map((post) => (
                <Post key={post.data.id} {...post.data} />
              ))}
          </List>
        </Slide>
      )}
    </>
  );
}

export default AllPosts;
