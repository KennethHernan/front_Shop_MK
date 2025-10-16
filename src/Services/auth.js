import axios from "axios";
const urlBase = import.meta.env.VITE_URL_BASE;

export const postCreatePreference = async () => {
  const { data } = await axios.post(`${urlBase}/api/create_preference`);
  return data;
};

