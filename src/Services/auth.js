import axios from "axios";
const urlBase = import.meta.env.VITE_URL_BASE;

export const postCreatePreference = async (idOrder, items, delivery, userData) => {
  const { data } = await axios.post(`${urlBase}/api/create_preference`, {idOrder, items, delivery, userData});
  return data;
};