import React from "react";
import ReactHowler from "react-howler";
import test from "../test.mp3";

class OnlyPlayPauseButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay() {
    this.setState({
      playing: true
    });
  }

  handlePause() {
    this.setState({
      playing: false
    });
  }

  render() {
    return (
      <div>
        <ReactHowler src={[test]} playing={this.state.playing} />
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handlePause}>Pause</button>
      </div>
    );
  }
}

export default OnlyPlayPauseButton;
