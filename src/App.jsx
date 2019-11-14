import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import Player from "./components/Player/Player";
import Playlist from "./components/Playlist/Playlist";
import useAudio from "./hooks/useAudio";
import AudioInputListener from "./components/AudioInputListener/AudioInputListener";

const useStyles = makeStyles({
  application: {
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100vh"
  }
});

const audioUrl = "http://www.ne.jp/asahi/music/myuu/wave/hana.mp3";

const AudioPlayer = () => {
  const [playing, currentTime, play, pause, jump] = useAudio(audioUrl);

  return (
    <>
      <p>currenttime: {currentTime}</p>

      <button onClick={playing ? pause : play}>
        {playing ? "Pause" : "Play"}
      </button>

      <button onClick={() => jump(30)}>30sec ▶︎</button>
    </>
  );
};

function App() {
  const { application } = useStyles();

  return (
    <div className={application}>
      <CssBaseline />
      <Player />
      {/* <AudioPlayer/> */}
      <AudioInputListener />
      <Playlist />
    </div>
  );
}

export default App;
