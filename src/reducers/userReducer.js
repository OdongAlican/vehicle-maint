import { FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE, 
    DELETE_USER,
    FETCH_USERS_VEHICLES_SUCCESS,
    FETCH_SINGLE_USER } from '../actions/users';

const initialState = {
    users: [],
    error: '',
    usersVehicles: [],
    userInfos: {}
}

const usersReducer = (state = initialState, action)=> {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                error: '',
                usersVehicles: [],
                userInfos: {}
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                users: [],
                error: action.payload,
                usersVehicles: [],
                userInfos: {}
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
                usersVehicles: [],
                userInfos: {}
            };
        case FETCH_SINGLE_USER:
            return {
                ...state,
                users: [],
                error: '',
                userInfos: action.payload
            };
        default:
            return state;
    }
}

export default usersReducer;