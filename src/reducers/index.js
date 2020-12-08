import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usersReducer from './userReducer';
import vehicleReducer from './vehicleReducer'

const rootReducer = combineReducers({
    authReducer,
    usersReducer,
    vehicleReducer
});

export default rootReducer;