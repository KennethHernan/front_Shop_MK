import axios from "axios";

// Listar Service
export const getAllProduct = async () => {
  const { data } = await axios.get("http://localhost:5000/api/allProduct"); //Añadido
  return data;
};
