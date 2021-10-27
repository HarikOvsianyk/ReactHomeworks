import {CREATE_USER,UPDATE_USERS_ARR, DELETE_USER, SEARCH_USER, SHOW_MODAL, GET_TIMER, GET_WINNER, BACK_TO} from '../../Actions';
import {users} from '../../Data/users';
import {id,defineWinner} from '../../utils';
export const initialState = {
    users: users,
    filteredUsers: users,
    user: {},
    showModal: true,
    winner: {},
    isWinner: false,
};

export function userReducer  (state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user:{id:id(),...action.payload },
            };
        case GET_TIMER:
             return {
                   ...state,
                   user: {...state.user, time: `${action.payload[0].hour}:${action.payload[0].minute}:${action.payload[0].second}`},
               };
        case UPDATE_USERS_ARR:
            return {
                  ...state,
                  users:[...state.users,state.user],
                  filteredUsers:[...state.filteredUsers,state.user]
                };
        case DELETE_USER:
            console.log(action.payload);
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload.id ),
                filteredUsers: state.filteredUsers.filter(user => user.id !== action.payload.id ),
            };
        case SEARCH_USER:
            const search = action.payload;
            if (search) {
                return {
                    ...state,
                    filteredUsers: [...state.users.filter(user=> user.name.toLowerCase().includes(search.toLowerCase()) || user.id.toLowerCase().includes(search.toLowerCase()))]}
                
            } else {
                return {
                    ...state,
                    filteredUsers: state.users
                }
            };
        case SHOW_MODAL: 
            return {
                ...state,
                showModal: action.payload
            };
        case GET_WINNER: 
            return {
                ...state,
                isWinner: true,
                winner: defineWinner(state.users),
            }
        case BACK_TO: 
            return {
                ...state,
                isWinner: false,
                winner: {},
            }
        default:
            return state;
    }
};