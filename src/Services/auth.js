import axios from "axios";
const urlBase = import.meta.env.VITE_URL_BASE;

export const postCreatePreference = async (idOrder, items, delivery, idSession) => {
  const { data } = await axios.post(`${urlBase}/api/create_preference`, {idOrder, items, delivery, idSession});
  return data;
};