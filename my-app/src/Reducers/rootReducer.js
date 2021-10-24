import {combineReducers} from 'redux';
import {userReducer} from './userReducer/userReducer';

export const rootRedcuer = combineReducers({
    users: userReducer
});

