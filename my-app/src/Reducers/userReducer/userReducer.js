import {CREATE_USER,UPDATE_USERS_ARR, DELETE_USER, SEARCH_USER, SHOW_MODAL, GET_TIMER} from '../../Actions';
import {users} from '../../Data/users';
import {id} from '../../utils';
export const initialState = {
    users: users,
    filteredUsers: users,
    user: {
        id: '',
        name: '',
        second:'',
        time: '',
    },
    showModal: true,
};

export function userReducer  (state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user:{
                    ...state.user,
                    id:id(),
                    name: action.payload.name,
                    second: action.payload.second,
                    time: '',
                },
            };
        case GET_TIMER:
             /* return state; */
   /*             return {
                   ...state.user,
                   user: {...state.user, time: `${action.payload[0].hour}:${action.payload[0].minute}:${action.payload[0].second}`},
               } */
             return {
                   ...state,
                   user: {
                       ...state.user,
                        time: `${action.payload[0].hour}:${action.payload[0].minute}:${action.payload[0].second}`},
               };
        case UPDATE_USERS_ARR:
            return {
                  ...state,
                  users:[...state.users,{...state.user}],
                  filteredUsers:[...state.filteredUsers,{...state.user}]
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
        default:
            return state;
    }
};