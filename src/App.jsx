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

const useStyles = makeStyles({
  application: {
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100vh"
  }
});

function App({ addSound }) {
  const { application } = useStyles();
  const sound = new Howl({
    src: test
  });
  addSound(sound);
  return (
    <div className={application}>
      <CssBaseline />
      <Player sound={sound} />
      <AudioInputListener sound={sound} />
      <Playlist />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addSound: sound => dispatch(addSound(sound))
  };
};

export default connect(null, mapDispatchToProps)(App);
