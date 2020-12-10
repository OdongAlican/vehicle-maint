import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1';

const headers = { headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.user}` }};

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

export const UpdateUserRequest = async (method, data, id) => {
  const response = await axios[method](`${baseUrl}/users/${id}`, data);
  return response;
}

export const FetchVehicleRequest = async (method, path) => {
  const response = await axios[method](`${baseUrl}/${path}`, headers);
  return response;
}

export const CreateVehicleRequest = async (method, data) => {
  const response = await axios[method](`${baseUrl}/vehicles`, data)
  return response
}

export const DeleteVehicleRequest = async (method, id) => {
  const response = await axios[method](`${baseUrl}/vehicles/${id}`)
  return response
}

export const UpdateVehicleRequest = async (method,vehicleID, data) => {
  const response = await axios[method](`${baseUrl}/vehicles/${vehicleID}`, data)
  return response;
}

export const FetchVehicleByUserRequest = async (method, id) => {
  const response = await axios[method](`${baseUrl}/show_vehicle_by_user?user_id=${id}`)
  return response;
}

export const FetchOneVehicleRequest = async (method,id) => {
  const response = await axios[method](`${baseUrl}/vehicles/${id}`)
  return response;
}

export const FetchOneUserRequest = async (method,id) => {
  const response = await axios[method](`${baseUrl}/users/${id}`)
  return response;
}