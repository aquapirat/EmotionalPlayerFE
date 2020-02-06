const initialState = {
  playing: false,
  index: 0,
  playlist: [],
  referenceToFile: undefined,
  volume: 50
};

const soundReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLAYLIST":
      return { ...state, playlist: action.playlist };
    case "ADD_REF":
      return { ...state, referenceToFile: action.referenceToFile };
    case "PLAY":
      return { ...state, playing: true };
    case "STOP":
      return { ...state, playing: false };
    case "NEXT":
      const nextIndex = state.index + 1;
      if (nextIndex <= state.playlist.length - 1) {
        return { ...state, index: nextIndex };
      } else {
        return { ...state, index: 0 };
      }
    case "PREVIOUS":
      const previousIndex = state.index - 1;
      if (previousIndex >= 0) {
        return { ...state, index: previousIndex };
      } else {
        return { ...state, index: state.playlist.length - 1 };
      }
    case "VOLUME_UP":
      const newVolume = state.volume + 10;
      if (newVolume <= 100) {
        return { ...state, volume: newVolume };
      } else {
        return state;
      }
    case "VOLUME_DOWN":
      const lowerVolume = state.volume - 100;
      if (lowerVolume >= 0) {
        return { ...state, index: lowerVolume };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default soundReducer;
