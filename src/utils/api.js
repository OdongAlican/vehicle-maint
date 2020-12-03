import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1';

const headers = { headers: { Authorization: `Bearer ${localStorage.user}` } };

export const sendUnauthenticatedRequest = async (method, path, data) => {
  const response = await axios[method](`${baseUrl}/${path}`, data);
  return response;
};