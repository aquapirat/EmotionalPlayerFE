import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Player from './components/Player/Player';

const useStyles = makeStyles({
  application: {
    width: '100vw',
    height: '100vh',
  },
});

function App() {
  const { application } = useStyles();

  return (
    <div className={application}>
      <CssBaseline />
      <Player />
    </div>
  );
}

export default App;
