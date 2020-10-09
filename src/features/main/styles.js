import { makeStyles } from "@material-ui/core/styles";

export default (theme) =>
  makeStyles((theme) => ({
    modalImage: {
      height: 1200,
    },
    root: {
      maxWidth: "35%",
      margin: "0 auto",
      marginTop: 100,
    },
    media: {
      height: 300,
    },
    actions: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  }));
