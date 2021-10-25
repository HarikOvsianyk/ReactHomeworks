export const GET_USERS = '[user] - get user';
export const CREATE_USER = '[user] - create user';
export const DELETE_USER = '[user] - delete user';

export const getUsers = (users) => ({
    type: GET_USERS,
    payload: [users],
});

export const createUser = (data) => ({
    type: CREATE_USER,
    payload: data,
})

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: {id},
});