import { gameParams } from '../constants/gameParams';
import { ADD_TO_HISTORY,  UPDATE_HISTORY, DEFINE_WINNER, NEW_GAME, TURN_SIGN,LOCAL_STORAGE } from '../actions';

export const initialState = {
    isXTurn: true,
    disabled: false,
    winner: null,
    winnerHistory: [],
    history: [
        {
            squares: new Array(Math.pow(gameParams.size, 2)).fill(null),
        }
    ],
};

export const gameReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            return {
                ...state,
                disabled: true,
                history: [...state.history, action.payload],
                isXTurn: !state.isXTurn,
            };
        case UPDATE_HISTORY:
            return {
                ...state,
                winner: null,
                isXTurn: !state.isXTurn,
                history: [...state.history.slice(0, action.payload.index + 1)]
                };
        case DEFINE_WINNER:
            return {
                ...state,
                winner: action.payload,
                winnerHistory: [...state.winnerHistory, action.payload]
                };
        case NEW_GAME:
            return {
                ...state,
                winner: null,
                winnerHistory: [...state.winnerHistory],
                history: [
                    {
                        squares: new Array(Math.pow(gameParams.size, 2)).fill(null),
                    }
                ],
            };
            case TURN_SIGN:
            if (action.payload === true) {
                return {
                    ...state,
                    isXTurn: true,
                }
            } else {
                return {
                    ...state,
                    isXTurn: !state.isXTurn,
                }
            }
            case LOCAL_STORAGE:
                return {
                    ...state,
                    winnerHistory: [...action.payload]
                    };
        default:
            return state;
    }
};
