import {GET_USERS,CREATE_USER,DELETE_USER} from '../../Actions';
export const initialState = {
    users: [],
};

export function userReducer  (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: [...action.payload],
            };
        case CREATE_USER:
            return {
                ...state,
                users:[...state.users,action.payload],
            }
        case DELETE_USER:
            console.log("DELETE");
            return state;
        default:
            return state;
    }
};