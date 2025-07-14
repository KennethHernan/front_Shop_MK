import { createContext, useContext, useState } from "react";
import { 
  getAllProduct,
  getAllCategory
} from "../Services/auth";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [productAll, setProductsAll] = useState([]);
  const [categoryAll, setCategoryAll] = useState([]);

  // Listar Prodcutos
  const listarProducto = async () => {
    try {
      const data = await getAllProduct();
      setProductsAll(data);
    } catch (error) {
      console.error("Error al cargar DNI's", error);
    }
  };
  // Listar Categoria
  const listarCategoria = async () => {
    try {
      const data = await getAllCategory();
      setCategoryAll(data);
    } catch (error) {
      console.error("Error al cargar DNI's", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        listarProducto,
        listarCategoria,
        productAll,
        categoryAll,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;