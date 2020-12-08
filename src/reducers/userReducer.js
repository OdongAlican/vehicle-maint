import { FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE, 
    DELETE_USER,
    FETCH_USERS_VEHICLES_SUCCESS } from '../actions/users';

const initialState = {
    users: [],
    error: '',
    usersVehicles: []
}

const usersReducer = (state = initialState, action)=> {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                error: '',
                usersVehicles: []
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                users: [],
                error: action.payload,
                usersVehicles: []
            };
        case FETCH_USERS_VEHICLES_SUCCESS:
            return {
                ...state,
                users: [],
                error: '',
                usersVehicles: action.payload
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
                error: '',
                usersVehicles: []
            };
        default:
            return state;
    }
}

export default usersReducer;