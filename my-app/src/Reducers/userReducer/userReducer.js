import {CREATE_USER, DELETE_USER} from '../../Actions';
import {users} from '../../Data/users';
export const initialState = {
    users: users,
};

export function userReducer  (state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                users:[...state.users,action.payload],
            };
        case DELETE_USER:
            console.log("DELETE");
            return state;
        default:
            return state;
    }
};