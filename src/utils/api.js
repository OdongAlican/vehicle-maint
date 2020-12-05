import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1';

const headers = { headers: { 'Authorization': `bearer${localStorage.user}` } };

export const sendUnauthenticatedRequest = async (method, path, data) => {
  const response = await axios[method](`${baseUrl}/${path}`, data);
  return response;
};

export const FetchUserRequest = async method => {
  const response = await axios[method](`${baseUrl}/users`, headers);
  return response;
};

export const DeleteUserRequest = async (method, id) => {
  const response = await axios[method](`${baseUrl}/users/${id}`);
  return response;
}

export const UpdateUserRequest = async (method, data) => {
  const response = await axios[method](`${baseUrl}/users/${1}`, data);
  return response;
}