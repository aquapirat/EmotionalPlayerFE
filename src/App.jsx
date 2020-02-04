import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Player from "./components/Player/Player";
import Playlist from "./components/Playlist/Playlist";
import AudioInputListener from "./components/AudioInputListener/AudioInputListener";
import test from "./test.mp3";
import { Howl } from "howler";
import { addSound } from "./actions/addSound";
import { connect } from "react-redux";
import sound2 from "./iseefire.mp3";
import ReactHowler from "react-howler";
import { togglePlaying } from "./actions/togglePlaying";

const useStyles = makeStyles({
  application: {
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100vh"
  }
});

function App({ addSound, playing, togglePlaying }) {
  const handlePlay = () => {
    togglePlaying();
    console.log("xd");
  };
  const { application } = useStyles();
  const sound = new Howl({
    src: [test, sound2]
  });
  addSound(sound);
  console.log("playing: ", playing);
  return (
    <div className={application}>
      <ReactHowler src={[test]} playing={playing} />
      <button onClick={handlePlay}>start/stop</button>
      <CssBaseline />
      <Player sound={sound} />
      <AudioInputListener sound={sound} />
      <Playlist />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    playing: state.sound.playing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addSound: sound => dispatch(addSound(sound)),
    togglePlaying: () => dispatch(togglePlaying())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
