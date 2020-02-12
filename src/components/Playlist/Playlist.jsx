import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PlaylistHeader from './PlaylistHeader';
import MusicItem from './MusicItem';

const useStyles = makeStyles({
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
});

const Playlist = ({ playlist, index }) => {
  // const {
  //   root, tab, personsContainer,
  // } = useStyles();
  const { root, personsContainer } = useStyles();

  const musicItems = playlist.map((item, iterator) => (
    <MusicItem
      active={iterator === index}
      author={item.author}
      fileIndex={iterator}
      image={item.image}
      key={item.title}
      title={item.title}
    />
  ));

  return (
    <Card className={root}>
      <div>
        <PlaylistHeader />
        <div className={personsContainer}>{musicItems}</div>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  playlist: state.sound.playlist,
  index: state.sound.index,
});

export default connect(mapStateToProps)(Playlist);
