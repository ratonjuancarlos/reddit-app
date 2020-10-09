import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { changePost } from "app/appSlice";
import { useDispatch, useSelector } from "react-redux";
import makeStyles from "./styles";

const useStyles = makeStyles();

export default function Main() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const readingPost = useSelector((state) => state.app.readingPost);
  if (readingPost === undefined) {
    return <></>;
  }

  const { title, thumbnail, id, author } = readingPost;
  const onChangePost = (direction) => dispatch(changePost({ direction, id }));

  return (
    <>
      <Card className={classes.root}>
        <CardHeader title={author} />
        <CardActionArea>
          {thumbnail !== "" && (
            <CardMedia
              onClick={() => setOpen(true)}
              className={classes.media}
              image={thumbnail}
              title={title}
            />
          )}
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Button
            variant="outlined"
            onClick={() => onChangePost("prev")}
            size="small"
          >
            Read Previous
          </Button>
          <Button
            variant="outlined"
            onClick={() => onChangePost("next")}
            size="small"
          >
            Read Next
          </Button>
        </CardActions>
      </Card>

      {thumbnail !== "" && (
        <Dialog
          onClose={() => setOpen(false)}
          aria-labelledby="simple-dialog-title"
          open={open}
        >
          <img alt="modal" className={classes.modalImage} src={thumbnail} />
        </Dialog>
      )}
    </>
  );
}
