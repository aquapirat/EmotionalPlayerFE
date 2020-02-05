const initialState = {
  playing: false,
  index: 0,
  playlist: [],
  referenceToFile: undefined
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
      return { ...state, index: 1 };
    case "PREVIOUS":
      return { ...state, index: 0 };
    default:
      return state;
  }
};

export default soundReducer;
