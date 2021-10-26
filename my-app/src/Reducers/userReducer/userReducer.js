import {CREATE_USER, DELETE_USER, SEARCH_USER, SHOW_MODAL} from '../../Actions';
import {users} from '../../Data/users';
import {id} from '../../utils';
export const initialState = {
    users: users,
    filteredUsers: users,
    showModal: true,
};

export function userReducer  (state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                users:[...state.users,{id:id(),...action.payload }],
                filteredUsers:[...state.filteredUsers,{id:id(),...action.payload }]
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
        }
        default:
            return state;
    }
};