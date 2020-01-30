export const addSound = sound => {
  return {
    type: "ADD_SOUND",
    data: {
      sound: sound
    }
  };
};
