const initialState = {
  playing: false,
  index: 0,
  playlist: [],
  referenceToFile: undefined,
  volume: 50,
  lastChangedTime: 0,
  lastCommand: '',
};

const DEBOUNCE_TIME = 1300;

const soundReducer = (state = initialState, action) => {
  // CHECK STATMENT TO MAKE SURE THAT COMMAND WILL BE TRIGGERED ONLY ONCE
  if (state.lastCommand === action.type && ((new Date()).getTime() < state.lastChangedTime + DEBOUNCE_TIME)) {
    return state;
  }
  switch (action.type) {
    case 'ADD_PLAYLIST':
      return { ...state, playlist: action.playlist };
    case 'ADD_REF':
      return { ...state, referenceToFile: action.referenceToFile };
    case 'PLAY':
      return {
        ...state, playing: true, lastChangedTime: (new Date()).getTime(), lastCommand: 'PLAY',
      };
    case 'STOP':
      return {
        ...state, playing: false, lastChangedTime: (new Date()).getTime(), lastCommand: 'STOP',
      };
    case 'NEXT': {
      console.log('[next] runiing');
      const nextIndex = state.index + 1;
      if (nextIndex <= state.playlist.length - 1) {
        return {
          ...state, index: nextIndex, lastChangedTime: (new Date()).getTime(), lastCommand: 'NEXT',
        };
      }

      return {
        ...state, index: 0, lastChangedTime: (new Date()).getTime(), lastCommand: 'NEXT',
      };
    }
    case 'PREVIOUS': {
      const previousIndex = state.index - 1;
      if (previousIndex >= 0) {
        return {
          ...state, index: previousIndex, lastChangedTime: (new Date()).getTime(), lastCommand: 'PREVIOUS',
        };
      }

      return {
        ...state, index: state.playlist.length - 1, lastChangedTime: (new Date()).getTime(), lastCommand: 'PREVIOUS',
      };
    }
    case 'VOLUME_UP': {
      const newVolume = state.volume + 10;
      if (newVolume <= 100) {
        return {
          ...state, volume: newVolume, lastChangedTime: (new Date()).getTime(), lastCommand: 'VOLUME_UP',
        };
      }

      return state;
    }
    case 'VOLUME_DOWN': {
      const lowerVolume = state.volume - 10;
      if (lowerVolume >= 0) {
        return {
          ...state, volume: lowerVolume, lastChangedTime: (new Date()).getTime(), lastCommand: 'VOLUME_DOWN',
        };
      }

      return state;
    }
    case 'SET_SOUND':
      return {
        ...state, index: action.index, lastChangedTime: (new Date()).getTime(), lastCommand: 'SET_SOUND',
      };
    default:
      return state;
  }
};

export default soundReducer;
