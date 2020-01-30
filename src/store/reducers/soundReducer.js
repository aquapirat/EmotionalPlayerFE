const initialState = {
  isPlaying: false
};

const soundReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SOUND":
      return { ...state, sound: action.data.sound };
    case "SET_IS_PLAYING":
      return { ...state, isPlaying: true };
    case "UNSET_IS_PLAYING":
      return { ...state, isPlaying: false };
    default:
      return state;
  }
};

export default soundReducer;
