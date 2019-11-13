import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Player from './components/Player/Player';
import Playlist from './components/Playlist/Playlist';

const useStyles = makeStyles({
  application: {
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100vh',
  },
});

function App() {
  const { application } = useStyles();

  return (
    <div className={application}>
      <CssBaseline />
      <Player />
      Na brode merlina
      <Playlist />
    </div>
  );
}

export default App;
