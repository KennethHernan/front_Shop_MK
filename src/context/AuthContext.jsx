import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getProducts, getCategorys } from "../Services/firebaseFunction";

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

  // Estados de componentes
  const [navbar, setNavbar] = useState(true);
  const [search, setSearch] = useState(false);
  const [productoModal, setProductoModal] = useState([]);
  const [openAddCart, setOpenAddCart] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [itemCarrito, setItemCarrito] = useState(false);

  // Listar Prodcutos
  // const listarProducto = async () => {
  //   try {
  //     const data = await getAllProduct();
  //     setProductsAll(data);
  //   } catch (error) {
  //     console.error("Error al cargar DNI's", error);
  //   }
  // };
  // Listar Categoria
  // const listarCategoria = async () => {
  //   try {
  //     const data = await getAllCategory();
  //     setCategoryAll(data);
  //   } catch (error) {
  //     console.error("Error al cargar DNI's", error);
  //   }
  // };

  // Actualizar Carrito
  const ActualizarCarrito = () => {
    const carritoGuardado = Cookies.get("cart");
    if (carritoGuardado) {
      const productosCarrito = JSON.parse(carritoGuardado);
      setItemCarrito(productosCarrito);
    }
  };

 useEffect(() => {
    getProducts().then((listProduct) => {
      setProductsAll(listProduct);
    });
    getCategorys().then((listCategory) => {
      setCategoryAll(listCategory);
    });
    
    ActualizarCarrito();
  }, []);


  return (
    <AuthContext.Provider
      value={{
        ActualizarCarrito,
        productAll,
        categoryAll,
        search,
        openAddCart,
        productoModal,
        openCart,
        navbar,
        itemCarrito,
        setSearch,
        setOpenAddCart,
        setProductoModal,
        setOpenCart,
        setNavbar,
        setItemCarrito,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
