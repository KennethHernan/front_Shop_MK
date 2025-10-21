import axios from "axios";
const urlBase = import.meta.env.VITE_URL_BASE;

export const postCreatePreference = async (idOrder, items, delivery, idSession, userData) => {
  const { data } = await axios.post(`${urlBase}/api/create_preference`, {idOrder, items, delivery, idSession, userData});
  return data;
};
export const getVerifyPayment = async (paymentId) => {
  const { data } = await axios.post(`${urlBase}/api/verify-payment`, { paymentId });
  return data;
};
