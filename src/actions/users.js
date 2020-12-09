import { FetchUserRequest, 
    DeleteUserRequest, 
    UpdateUserRequest,
    FetchVehicleByUserRequest,
    FetchOneUserRequest } from '../utils/api'

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'
export const DELETE_USER = 'DELETE_USER';
export const FETCH_USERS_VEHICLES_SUCCESS = 'FETCH_USERS_VEHICLES_SUCCESS'
export const FETCH_USERS_VEHICLES_FAILURE = 'FETCH_USERS_VEHICLES_FAILURE'
export const FETCH_SINGLE_USER = 'FETCH_SINGLE_USER'

export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
});

export const fetchUsersFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: error,
});

export const deleteRequest = id => ({
    type: DELETE_USER,
    payload: id,
});

export const fetchUsersVehiclesSuccesss = vehicles => ({
    type: FETCH_USERS_VEHICLES_SUCCESS,
    payload: vehicles
});

export const fetchUsersVehiclesFailure = error => ({
    type: FETCH_USERS_VEHICLES_FAILURE,
    payload: error
});

export const fetchSingleUser = user => ({
    type: FETCH_SINGLE_USER,
    payload: user
});

export const fetchUsers = () => async dispatch => {
    const method = 'get';
    try {
        const response = await FetchUserRequest(method);
        const result = response.data;
        dispatch(fetchUsersSuccess(result.users));
    } catch (error) {
        dispatch(fetchUsersFailure(error.message));
    }
};

export const fetchOneUser = id => async dispatch => {
    const method = "get"
    try {
        const response = await FetchOneUserRequest(method,id);
        dispatch(fetchSingleUser(response.data.user))
    } catch (error) {
        dispatch(fetchUsersFailure(error.message))
    }
}

export const deleteUser = id => async dispatch => {
    const method = 'delete';
    try {
        await DeleteUserRequest(method, id);
        dispatch(deleteRequest(id))
    } catch (error) {
        dispatch(fetchUsersFailure(error.message));
    }
}

export const editUser = ({ first_name, last_name, user_name, phone_number, password, email }, 
            userId, history) => async dispatch => {
    const data = { user: {first_name, last_name, user_name,phone_number,password, email }};
    const method = "put";
    try {
        await UpdateUserRequest(method, data, userId);
        history.push('/users')
    } catch (error) {
        dispatch(fetchUsersVehiclesFailure(error.message))
    }
}

export const showVehicleByUser = (id) => async dispatch => {
    const method = "get"
    try {
        const response = await FetchVehicleByUserRequest(method,id);
        dispatch(fetchUsersVehiclesSuccesss(response.data.vehicle))
    } catch (error) {
        dispatch(fetchUsersVehiclesFailure(error.message))
    }
}