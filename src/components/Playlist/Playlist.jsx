import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import PlaylistHeader from "./PlaylistHeader";
import MusicItem from "./MusicItem";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    width: "40vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  tab: {
    minWidth: 0
  },
  personsContainer: {
    overflowY: "auto",
    height: "60vh"
  }
});

const Playlist = ({ playlist, index }) => {
  // const {
  //   root, tab, personsContainer,
  // } = useStyles();
  const { root, personsContainer } = useStyles();

  const musicItems = playlist.map((item, iterator) =>
    iterator === index ? (
      <MusicItem
        fileIndex={iterator}
        active={true}
        author={item.author}
        image={item.image}
        title={item.title}
      />
    ) : (
      <MusicItem
        fileIndex={iterator}
        author={item.author}
        image={item.image}
        title={item.title}
      />
    )
  );

  return (
    <Card className={root}>
      <div>
        <PlaylistHeader />
        <div className={personsContainer}>{musicItems}</div>
      </div>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    playlist: state.sound.playlist,
    index: state.sound.index
  };
};

export default connect(mapStateToProps)(Playlist);
