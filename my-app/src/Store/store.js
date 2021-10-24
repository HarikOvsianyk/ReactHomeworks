import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootRedcuer} from '../Reducers/rootReducer';
export const store = createStore(rootRedcuer,composeWithDevTools());