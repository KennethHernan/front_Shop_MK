import axios from "axios";

// Listar Service
export const getAllProduct = async () => {
  const { data } = await axios.get("https://back-shop-mk.vercel.app/api/allProduct"); //Añadido
  return data;
};
