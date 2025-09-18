import axios from "axios";

export const getAllProduct = async () => {
  //const { data } = await axios.get("https://backend-mayikh.vercel.app/api/allProduct");
  const { data } = await axios.get("http://localhost:5000/api/allProduct");
  return data;
};
export const getAllCategory = async () => {
  //const { data } = await axios.get("https://backend-mayikh.vercel.app/api/allCategory");
  const { data } = await axios.get("http://localhost:5000/api/category/allCategory");
  return data;
};
