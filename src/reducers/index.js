import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usersReducer from './userReducer'

const rootReducer = combineReducers({
    authReducer,
    usersReducer
});

export default rootReducer;