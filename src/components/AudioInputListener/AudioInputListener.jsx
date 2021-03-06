import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { useSpeechRecognition } from 'react-speech-kit';
import { connect, useSelector } from 'react-redux';
import { play } from '../../actions/play';
import { stopMusic } from '../../actions/stopMusic';
import { next } from '../../actions/next';
import { previous } from '../../actions/previous';
import { volumeUp } from '../../actions/volumeUp';
import { volumeDown } from '../../actions/volumeDown';

const START_RECORDING_ICON_SVG_DIRECTIONS = 'M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z';
const STOP_RECORDING_ICON_SVG_DIRECTIONS = 'M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z';

const drawSvgIcon = (svgPathDirections) => (
  <svg
    height="200"
    viewBox="0 0 24 24"
    width="150"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="9" r="4" />
    <path d={svgPathDirections} />
  </svg>
);

const DEBOUNCE_TIME = 5000;

const AudioInputListener = ({
  play,
  stopMusic,
  next,
  previous,
  volumeUp,
  volumeDown,
}) => {
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      console.log(result);
      const lowerCaseResult = result.toLowerCase();
      switch (lowerCaseResult) {
        case 'start':
        case 'play':
          play();
          break;
        case 'stop':
        case 'pause': {
          stopMusic();
          break;
        }
        case 'next': {
          next();
          break;
        }
        case 'previous': {
          previous();
          break;
        }
        case 'volume up': {
          volumeUp();
          break;
        }
        case 'volume down': {
          volumeDown();
          break;
        }
        default:
          console.log('not recognition');
      }
    },
  });

  return (
    <>
      <IconButton onClick={() => (listening ? stop() : listen())}>
        {listening
          ? drawSvgIcon(STOP_RECORDING_ICON_SVG_DIRECTIONS)
          : drawSvgIcon(START_RECORDING_ICON_SVG_DIRECTIONS)}
      </IconButton>
      {/* <InputLabel>{state.voiceCommand}</InputLabel> */}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(play()),
  stopMusic: () => dispatch(stopMusic()),
  next: () => dispatch(next()),
  previous: () => dispatch(previous()),
  volumeUp: () => dispatch(volumeUp()),
  volumeDown: () => dispatch(volumeDown()),
});

export default connect(null, mapDispatchToProps)(AudioInputListener);
