import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { makeStyles } from '@material-ui/core/styles';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import StopIcon from '@material-ui/icons/Stop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { connect } from 'react-redux';
import { play } from '../../actions/play';
import { stopMusic } from '../../actions/stopMusic';
import { next } from '../../actions/next';
import { previous } from '../../actions/previous';
import { volumeUp } from '../../actions/volumeUp';
import { volumeDown } from '../../actions/volumeDown';

const useStyles = makeStyles((theme) => ({
  player: {
    width: '30vw',
  },
  cover: {
    height: '30vw',
    width: '30vw',
  },
  audioButtons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeSlider: {
    width: '80%',
    padding: theme.spacing(0, 4),
  },
  timeSliderCotainer: {
    display: 'flex',
    padding: 6,
  },
}));

const Player = ({
  play,
  stopMusic,
  next,
  previous,
  playing,
  referenceToFile,
  volumeUp,
  volumeDown,
  volume,
  playlist,
  index,
}) => {
  const {
    player,
    cover,
    audioButtons,
    timeSlider,
    timeSliderCotainer,
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

  const handleVolumeDown = () => {
    volumeDown();
  };

  const handleVolumeUp = () => {
    volumeUp();
  };

  return (
    <Card className={player}>
      <CardHeader
        subheader={playlist[index] ? playlist[index].author : ''}
        title={playlist[index] ? playlist[index].title : ''}
      />
      <CardMedia
        className={cover}
        image={playlist[index] ? playlist[index].image : null}
        title={playlist[index] ? playlist[index].title : null}
      />
      <CardActions className={audioButtons} disableSpacing>
        <Grid container spacing={1}>
          <Grid item>
            <VolumeDown onClick={handleVolumeDown} />
          </Grid>
          <Grid item xs>
            <Slider onChange={null} value={volume} />
          </Grid>
          <Grid item>
            <VolumeUp onClick={handleVolumeUp} />
          </Grid>
        </Grid>
        <IconButton>
          <SkipPreviousIcon onClick={handlePrevious} />
        </IconButton>
        <IconButton>
          {!playing
            ? <PlayArrowIcon onClick={handlePlay} />
            : <StopIcon onClick={handleStop} />}
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
          {/* seek function doesn`t work :( */}
          0:00
        </span>
        <div className={timeSlider}>
          <Slider />
        </div>
        <span>
          {referenceToFile !== undefined
            ? referenceToFile.duration().toFixed(2)
            : '0:00'}
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  playing: state.sound.playing,
  playlist: state.sound.playlist,
  index: state.sound.index,
  referenceToFile: state.sound.referenceToFile,
  volume: state.sound.volume,
});

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(play()),
  stopMusic: () => dispatch(stopMusic()),
  next: () => dispatch(next()),
  previous: () => dispatch(previous()),
  volumeUp: () => dispatch(volumeUp()),
  volumeDown: () => dispatch(volumeDown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
