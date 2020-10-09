import React, { useState, useEffect } from "react";
import clsx from "clsx";
import makeStyles from "./styles";
import { cleanState } from "app/localStorage";
import { useDispatch } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AllPosts from "./features/allPosts/AllPosts.js";
import { dismissAll } from "./app/appSlice";
import Button from "@material-ui/core/Button";
import Main from "./features/main/Main.js";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles();

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(min-width:1280px)");
  const landscape = useMediaQuery("(orientation: landscape)");
  const dispatch = useDispatch();

  useEffect(() => {
    setOpen(landscape || matches);
  }, [landscape, matches]);

  const onDismissAll = () => {
    dispatch(dismissAll());
  };

  const onCleanState = () => {
    cleanState();
    window.location.reload();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Deviget
          </Typography>
          <Button color="secondary" onClick={onCleanState} variant="contained">
            Clean App state-preservation
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography component="h5" variant="h5">
            Reddit Posts
          </Typography>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <AllPosts />
        <div className={classes.dismissAll}>
          <Button color="secondary" onClick={onDismissAll}>
            Dismiss All
          </Button>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Main />
      </main>
    </div>
  );
}
