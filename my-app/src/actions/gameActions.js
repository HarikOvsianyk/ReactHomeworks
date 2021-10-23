export const ADD_TO_HISTORY = 'add to history';
export const UPDATE_HISTORY = 'UPDATE_HISTORY';
export const DEFINE_WINNER = "winner";
export const NEW_GAME = "new game";
export const TURN_SIGN = "another sign";
export const LOCAL_STORAGE = "local storage";

export const addToHistory = (squares) => ({
    type: ADD_TO_HISTORY,
    payload: { squares },
});

export const updateHistory = (index) => ({
    type: UPDATE_HISTORY,
    payload: {index},
});

export const defineWinner = (player, date) => {
    return {
      type: DEFINE_WINNER,
      payload: [player, date],
    };
};

export const newGame = () => {
  return {
    type: NEW_GAME
  }
};

export const turnSign = (bool) => {
  return {
    type: TURN_SIGN,
    payload: {bool}
  }
};

export const local = (data) => {
  return {
    type: LOCAL_STORAGE,
    payload: data
  }
};

