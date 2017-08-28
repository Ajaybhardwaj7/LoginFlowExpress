import {combineReducers} from 'redux';
import actionsReducer from './actionsReducer';

export default combineReducers({
    app: actionsReducer
})