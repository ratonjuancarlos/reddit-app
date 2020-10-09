import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 350;

export default (theme) =>
  makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      ...theme.mixins.toolbar,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      top: 0,
      position: "fixed",
      backgroundColor: "white",
      padding: "1rem",
      width: drawerWidth,
      borderBottom: "1px solid grey",
      zIndex: 1,
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    dismissAll: {
      bottom: 0,
      display: "flex",
      position: "fixed",
      justifyContent: "center",
      backgroundColor: "white",
      padding: "1rem",
      width: drawerWidth,
      borderTop: "1px solid grey",
    },
    loadMore: {
      bottom: 0,
      display: "flex",
      justifyContent: "center",
      backgroundColor: "white",
      padding: "1rem",
      width: "100%",
      borderTop: "1px solid grey",
    },

    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));
