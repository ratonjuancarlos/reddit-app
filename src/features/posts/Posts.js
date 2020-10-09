import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
// import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useDispatch } from "react-redux";
import { dismiss, read } from "app/appSlice";
import makeStyles from "./styles";
import { useDaysjsRelativeTime } from "hooks";

const useStyles = makeStyles();

export default function Post({
  id,
  visited,
  title,
  author,
  num_comments,
  thumbnail,
  created_utc,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const getRelativeTime = useDaysjsRelativeTime();
  const [show, setShow] = useState(true);

  const onDismiss = () => {
    setShow(false);
    setTimeout(function () {
      dispatch(dismiss({ id }));
    }, 1000);
  };
  const onRead = () => dispatch(read({ id }));

  return (
    <Slide direction="left" in={show} mountOnEnter unmountOnExit>
      <Card className={classes.root} variant="outlined">
        <CardHeader
          title={author}
          subheader={
            <span className={classes.subtitle}>
              {getRelativeTime(created_utc)}
              {!visited && (
                <FiberNewIcon color="secondary" style={{ fontSize: 25 }} />
              )}
            </span>
          }
          titleTypographyProps={{ variant: "h6", align: "left" }}
          subheaderTypographyProps={{ align: "left" }}
        />
        <div className={classes.rowContent} onClick={onRead}>
          <Grid container alignItems="center">
            {thumbnail !== "" && (
              <Grid item xs={3}>
                <CardMedia
                  className={classes.media}
                  image={thumbnail}
                  title={title}
                />
              </Grid>
            )}
            <Grid item xs={7}>
              <CardContent className={classes.title}>
                <Typography color="textSecondary" gutterBottom>
                  {title}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={2}>
              <IconButton aria-label="goto" onClick={onRead}>
                <ChevronRightIcon />
              </IconButton>
            </Grid>
          </Grid>
        </div>
        <CardActions className={classes.actions}>
          <Button
            onClick={onDismiss}
            variant="outlined"
            color="secondary"
            className={classes.button}
            startIcon={<HighlightOffIcon />}
          >
            Dismiss post
          </Button>
          <Chip label={`${num_comments} comments`} />
        </CardActions>
      </Card>
    </Slide>
  );
}
