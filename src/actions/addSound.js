export const addSound = playlist => {
  return {
    type: "ADD_SOUND",
    data: {
      playlist
    }
  };
};
