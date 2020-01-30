import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import { makeStyles } from "@material-ui/core/styles";

import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import imageMock from "../../mocks/albumImage.jpeg";

const useStyles = makeStyles(theme => ({
  player: {
    width: "30vw"
  },
  cover: {
    height: "30vw",
    width: "30vw"
  },
  audioButtons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  timeSlider: {
    width: "80%",
    padding: theme.spacing(0, 4)
  },
  timeSliderCotainer: {
    display: "flex",
    padding: 6
  }
}));

const Player = props => {
  const {
    player,
    cover,
    audioButtons,
    timeSlider,
    timeSliderCotainer
  } = useStyles();

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!isPlaying) {
      props.sound.play();
      setIsPlaying(true);
    } else {
      props.sound.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Card className={player}>
      <CardHeader subheader="6Lack" title="Free" />
      <CardMedia className={cover} image={imageMock} title="Paella dish" />
      <CardActions className={audioButtons} disableSpacing>
        <Grid container spacing={1}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider onChange={null} value={null} />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
        <IconButton>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton>
          <PlayArrowIcon onClick={handlePlay} />
        </IconButton>
        <IconButton>
          <SkipNextIcon />
        </IconButton>
      </CardActions>
      <div className={timeSliderCotainer}>
        <span>0:00</span>
        <div className={timeSlider}>
          <Slider />
        </div>
        <span>3:10</span>
      </div>
    </Card>
  );
};

export default Player;
