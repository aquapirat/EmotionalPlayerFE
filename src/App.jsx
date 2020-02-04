import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Player from "./components/Player/Player";
import Playlist from "./components/Playlist/Playlist";
import AudioInputListener from "./components/AudioInputListener/AudioInputListener";
import sound1 from "./test.mp3";
import { addSound } from "./actions/addSound";
import { connect } from "react-redux";
import sound2 from "./iseefire.mp3";
import ReactHowler from "react-howler";

const useStyles = makeStyles({
  application: {
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100vh"
  }
});

function App({ playing, index }) {
  const { application } = useStyles();
  const playlist = [sound1, sound2];
  return (
    <div className={application}>
      <ReactHowler src={playlist[index]} playing={playing} />
      <CssBaseline />
      <Player />
      <AudioInputListener />
      <Playlist />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    playing: state.sound.playing,
    index: state.sound.index
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addSound: sound => dispatch(addSound(sound))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
