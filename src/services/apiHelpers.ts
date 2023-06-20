import axios from "axios";

// This is the base url of the server
const baseUrl = "http://localhost:5000/api";

// To get all the data of a collection
export const getAllData = (urlPrefix: string = "") =>
  axios.get(`${baseUrl}/${urlPrefix}`);

// Add a data to collection
export const addData = (urlPrefix: string = "", newObject: any) =>
  axios.post(`${baseUrl}/${urlPrefix}`, newObject);

// Update a data in collection
export const updateData = (
  urlPrefix: string = "",
  newObject: any,
  id: string
) => {
  return axios.put(`${baseUrl}/${urlPrefix}/${id}`, newObject);
};

// Delete a data from a collection
export const deleteData = (urlPrefix: string = "", id: string) => {
  return axios.delete(`${baseUrl}/${urlPrefix}/${id}`);
};

// Get single data from the collection
export const getSingleData = (urlPrefix: string = "", id: string) => {
  return axios.get(`${baseUrl}/${urlPrefix}/${id}`);
};
