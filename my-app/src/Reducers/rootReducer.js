import {combineReducers} from 'redux';
import {userReducer} from './userReducer/userReducer';
import {competitionReducer} from './competitionsReducer/competitionReducer';

export const rootRedcuer = combineReducers({
    users: userReducer,
    competitions: competitionReducer,
});

