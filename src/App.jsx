import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Player from "./components/Player/Player";
import Playlist from "./components/Playlist/Playlist";
import AudioInputListener from "./components/AudioInputListener/AudioInputListener";
import sound1 from "./test.mp3";
import { addPlaylist } from "./actions/addPlaylist";
import { connect } from "react-redux";
import sound2 from "./iseefire.mp3";
import ReactHowler from "react-howler";
import { addRef } from "./actions/addRef";

const useStyles = makeStyles({
  application: {
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100vh"
  }
});

function App({ playing, index, addPlaylist, addRef, volume }) {
  const { application } = useStyles();
  const playlist = [sound1, sound2];
  addPlaylist(playlist);
  return (
    <div className={application}>
      {console.log(volume)}
      <ReactHowler
        src={playlist[index]}
        playing={playing}
        ref={ref => addRef(ref)}
        volume={volume / 100}
      />
      {/* {console.log(audio)} */}
      {/* {console.log("seek: ", audio.seek())} */}
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
    index: state.sound.index,
    volume: state.sound.volume
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPlaylist: playlist => dispatch(addPlaylist(playlist)),
    addRef: referenceToFile => dispatch(addRef(referenceToFile))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
