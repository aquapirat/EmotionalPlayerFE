import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import PlaylistHeader from './PlaylistHeader';
import image6lack from '../../mocks/albumImage.jpeg';
import MusicItem from './MusicItem';

const useStyles = makeStyles(({
  root: {
    width: '40vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  tab: {
    minWidth: 0,
  },
  personsContainer: {
    overflowY: 'auto',
    height: '60vh',
  },
}));

const musicMock = [
  {
    author: '6lack',
    title: 'Free',
    image: image6lack,
  },
  {
    author: '6lack',
    title: 'Far away',
    image: image6lack,
  },
  {
    author: '6lack',
    title: 'Love',
    image: image6lack,
  },
  {
    author: '6lack',
    title: 'Free',
    image: image6lack,
  },
  {
    author: '6lack',
    title: 'Free',
    image: image6lack,
  },
  {
    author: '6lack',
    title: 'Free',
    image: image6lack,
  },
  {
    author: '6lack',
    title: 'Free',
    image: image6lack,
  },
  {
    author: '6lack',
    title: 'Free',
    image: image6lack,
  },
  {
    author: '6lack',
    title: 'Free',
    image: image6lack,
  },

];

const Playlist = () => {
  const {
    root, tab, personsContainer,
  } = useStyles();

  const musicItems = musicMock.map((item) => <MusicItem author={item.author} image={item.image} title={item.title} />);

  return (
    <Card className={root}>
      <div>
        <PlaylistHeader />
        <div className={personsContainer}>
          {musicItems}
        </div>
      </div>
    </Card>
  );
};

export default Playlist;
