import { makeStyles } from "@material-ui/core/styles";

export default (theme) =>
  makeStyles((theme) => ({
    list: {
      paddingTop: 80,
    },
    progress: {
      marginTop: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  }));
