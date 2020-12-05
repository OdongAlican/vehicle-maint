import { FetchUserRequest, DeleteUserRequest, UpdateUserRequest } from '../utils/api'

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'
export const DELETE_USER = 'DELETE_USER';

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

export const fetchUsers = () => async dispatch => {
    const method = 'get';
    try {
        const response = await FetchUserRequest(method);
        const result = response.data;
        dispatch(fetchUsersSuccess(result.users));
    } catch (error) {
        dispatch(fetchUsersFailure(error));
    }
};

export const deleteUser = id => async dispatch => {
    const method = 'delete';
    try {
        await DeleteUserRequest(method, id);
        dispatch(deleteRequest(id))
    } catch (error) {
        dispatch(fetchUsersFailure(error));
    }
}

export const editUser = ({ first_name, 
                        last_name, 
                        user_name, 
                        phone_number,
                        password, 
                        email }) => async dispatch => {
    const data = { user: {first_name, last_name, user_name,phone_number,password, email }};
    const method = "put";
    try {
        await UpdateUserRequest(method,data);
        // dispatch(updateRequest(id))
    } catch (error) {
        
    }
}