import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, DELETE_USER } from '../actions/users';

const initialState = {
    users: [],
    error: ''
}

const usersReducer = (state = initialState, action)=> {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                error: '',
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                users: [],
                error: action.payload,
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
                error: '',
            };
        default:
            return state;
    }
}

export default usersReducer;