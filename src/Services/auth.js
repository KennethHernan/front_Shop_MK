import axios from "axios";
const urlBase = import.meta.env.VITE_URL_BASE;

export const getAllProduct = async () => {
  const { data } = await axios.get(`${urlBase}/api/allProduct`);
  return data;
};
export const getAllCategory = async () => {
  const { data } = await axios.get(`${urlBase}/api/category/allCategory`);
  return data;
};
