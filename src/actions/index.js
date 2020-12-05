import { sendUnauthenticatedRequest } from '../utils/api';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export function signInAction({ email, password }, history) {
  return async dispatch => {
    const path = 'users/sign_in';
    const method = 'post';
    const data = { user: { email, password }};
    try {
      const response = await sendUnauthenticatedRequest(method, path, data);
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', response.data.user_details.authentication_token);
      history.push('/home');
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid username or Password',
      });
    }
  };
}

export function signUpAction({ first_name, 
                                last_name, 
                                user_name, 
                                phone_number,
                                password, 
                                email }, history) {
  return async dispatch => {
    const method = 'post';
    const path = 'users'
    const data = { user: {first_name, last_name, user_name,phone_number,password, email }};
    try {
      const response = await sendUnauthenticatedRequest(method, path, data);
      dispatch({ type: AUTHENTICATED });
      console.log(response.data.user.authentication_token)
      localStorage.setItem('user', response.data.user.authentication_token);
      history.push('/home');
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid User credentials',
      });
    }
  };
}

export function signOut() {
  localStorage.clear('user');
  window.location.href = '/';
}