import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ReactHowler from 'react-howler';
import Player from './components/Player/Player';
import Playlist from './components/Playlist/Playlist';
import AudioInputListener from './components/AudioInputListener/AudioInputListener';
import sound1 from './mocks/test.mp3';
import { addPlaylist } from './actions/addPlaylist';
import sound2 from './mocks/iseefire.mp3';
import { addRef } from './actions/addRef';
import image6lack from './mocks/albumImage.jpeg';
import cover from './mocks/eddsheerancover.jpeg';

const useStyles = makeStyles({
  application: {
    background: 'linear-gradient(45deg, #3333cc 30%, #9933ff 90%)',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100vh',
  },
});

const playlist = [
  {
    file: sound1,
    author: 'Anonymous',
    title: 'CreativeTitle',
    image: image6lack,
  },
  {
    file: sound2,
    author: 'Ed Sheraan',
    title: 'I see fire',
    image: cover,
  },
];

function App({
  playing, index, addPlaylist, addRef, volume,
}) {
  const { application } = useStyles();

  useEffect(() => addPlaylist(playlist), []);

  return (
    <div className={application}>
      <ReactHowler
        playing={playing}
        ref={(ref) => addRef(ref)}
        src={playlist[index].file}
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

const mapStateToProps = (state) => ({
  playing: state.sound.playing,
  index: state.sound.index,
  volume: state.sound.volume,
});

const mapDispatchToProps = (dispatch) => ({
  addPlaylist: (playlist) => dispatch(addPlaylist(playlist)),
  addRef: (referenceToFile) => dispatch(addRef(referenceToFile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
