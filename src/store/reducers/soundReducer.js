const initialState = {
  playing: false
};

const soundReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SOUND":
      return { ...state, sound: action.data.sound };
    case "PLAY":
      return { ...state, playing: true };
    case "STOP":
      return { ...state, playing: false };
    default:
      return state;
  }
};

export default soundReducer;
