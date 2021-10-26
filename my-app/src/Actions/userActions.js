export const CREATE_USER = '[user] - create user';
export const DELETE_USER = '[user] - delete user';
export const SEARCH_USER = '[user] - search user';
export const UPDATE_USERS_ARR = '[user] - update user';
export const SHOW_MODAL = '[timer] - show modal'
export const GET_TIMER = '[timer] - get time';

export const createUser = (data) => ({
    type: CREATE_USER,
    payload: data,
});

export const updateUsers = () => ({
    type: UPDATE_USERS_ARR,
});

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: {id},
});


export const searchUser = (data) => ({
    type: SEARCH_USER,
    payload: data,
});

export const showModal = (data) => ({
    type: SHOW_MODAL,
    payload: data,
});

export const getTimer = (time) => ({
    type: GET_TIMER,
    payload: time,
})