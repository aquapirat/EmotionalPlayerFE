import React from "react";
import CardActionsArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setSound } from "../../actions/setSound";

const useStyles = makeStyles({
  item: {
    // background: "linear-gradient(45deg, #3333cc 30%, #9933ff 90%)"
  },
  highlited: {
    // background: "linear-gradient(45deg, #ffaabb 30%, #9933ff 90%)"
    background: "linear-gradient(45deg, #9933ff 30%, #3333cc 90%)"
  }
});

const MusicItem = ({ active, image, author, title, fileIndex, setSound }) => {
  const { item, highlited } = useStyles();

  console.log(fileIndex);

  return (
    <CardActionsArea>
      {active ? (
        <CardHeader
          onClick={() => setSound(fileIndex)}
          className={highlited}
          avatar={<Avatar src={image} />}
          subheader={author}
          title={title}
        />
      ) : (
        <CardHeader
          onClick={() => setSound(fileIndex)}
          className={item}
          avatar={<Avatar src={image} />}
          subheader={author}
          title={title}
        />
      )}
    </CardActionsArea>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setSound: index => dispatch(setSound(index))
  };
};

export default connect(null, mapDispatchToProps)(MusicItem);
