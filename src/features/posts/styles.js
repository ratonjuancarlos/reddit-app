import { makeStyles } from "@material-ui/core/styles";

export default (theme) =>
  makeStyles((theme) => ({
    root: {
      minWidth: 275,
      margin: 10,
    },
    subtitle: {
      display: "flex",
      flexDirection: "row",
    },
    title: {
      flexGrow: 1,
    },
    rowContent: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      cursor: "pointer",
      marginLeft: 16,
    },
    media: {
      height: "6rem",
    },
    actions: {
      justifyContent: "space-between",
    },
    skeleton: {
      margin: 10,
    },
  }));
