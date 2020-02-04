const initialState = {
  playing: false,
  index: 0
};

const soundReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SOUND":
      return { ...state, sound: action.data.sound };
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
