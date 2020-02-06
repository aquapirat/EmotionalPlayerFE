import React from "react";
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
import StopIcon from "@material-ui/icons/Stop";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import imageMock from "../../mocks/albumImage.jpeg";
import { play } from "../../actions/play";
import { stopMusic } from "../../actions/stopMusic";
import { next } from "../../actions/next";
import { previous } from "../../actions/previous";
import { connect } from "react-redux";

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

const Player = ({
  play,
  stopMusic,
  next,
  previous,
  playing,
  playlist,
  index,
  referenceToFile
}) => {
  const {
    player,
    cover,
    audioButtons,
    timeSlider,
    timeSliderCotainer
  } = useStyles();

  const handlePlay = () => {
    play();
  };

  const handleStop = () => {
    stopMusic();
  };

  const handleNext = () => {
    next();
  };

  const handlePrevious = () => {
    previous();
  };

  const handleVolumeDown = () => {};

  return (
    <Card className={player}>
      <CardHeader subheader="6Lack" title="Free" />
      <CardMedia className={cover} image={imageMock} title="Paella dish" />
      <CardActions className={audioButtons} disableSpacing>
        <Grid container spacing={1}>
          <Grid item>
            <VolumeDown
              onClick={() => {
                console.log("xd");
              }}
            />
          </Grid>
          <Grid item xs>
            <Slider onChange={null} value={null} />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
        <IconButton>
          <SkipPreviousIcon onClick={handlePrevious} />
        </IconButton>
        <IconButton>
          {!playing ? (
            <PlayArrowIcon onClick={handlePlay} />
          ) : (
            <StopIcon onClick={handleStop} />
          )}
        </IconButton>
        <IconButton>
          <SkipNextIcon onClick={handleNext} />
        </IconButton>
      </CardActions>
      <div className={timeSliderCotainer}>
        <span>
          {/* {referenceToFile !== undefined
            ? referenceToFile.seek().toFixed(2)
            : "0:00"} */}
          0:00
        </span>
        <div className={timeSlider}>
          <Slider />
        </div>
        <span>
          {referenceToFile !== undefined
            ? referenceToFile.duration().toFixed(2)
            : "0:00"}
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    playing: state.sound.playing,
    playlist: state.sound.playlist,
    index: state.sound.index,
    referenceToFile: state.sound.referenceToFile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    play: () => dispatch(play()),
    stopMusic: () => dispatch(stopMusic()),
    next: () => dispatch(next()),
    previous: () => dispatch(previous())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
