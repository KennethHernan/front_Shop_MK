import { createContext, useContext, useEffect, useRef, useState } from "react";
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

  const cartIconRef = useRef(null);

  // Estados de componentes
  const [navbar, setNavbar] = useState(true);
  const [search, setSearch] = useState(false);
  const [productoModal, setProductoModal] = useState([]);
  const [productReciente, setProductReciente] = useState([]);
  const [openAddCart, setOpenAddCart] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [itemCarrito, setItemCarrito] = useState(false);
  const [itemSearch, setItemSearch] = useState("");

  // Actualizar Carrito
  const ActualizarCarrito = () => {
    const carritoGuardado = Cookies.get("cart");
    if (carritoGuardado) {
      const productosCarrito = JSON.parse(carritoGuardado);
      setItemCarrito(productosCarrito);
    }
  };
  const ActualizarProductoReciente = () => {
    const PRGuardado = Cookies.get("recently_viewed");
    if (PRGuardado) {
      const productosReciente = JSON.parse(PRGuardado);
      setProductReciente(productosReciente);
    }
  };

  // Añadir al carrito
  const añadirAlCarrito = (producto) => {
    const productoExistente = itemCarrito.find(
      (p) => p.idProduct === producto.idProduct
    );

    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      producto.cantidad = 1;
      itemCarrito.push(producto);
    }

    Cookies.set("cart", JSON.stringify(itemCarrito), { expires: 14 });
    ActualizarCarrito();
  };

  // Productos  Recientes Cokkie
  const ProductosRecientesCokkie = (producto) => {
    const pReciente = itemCarrito.find(
      (p) => p.idProduct === producto.idProduct
    );

    if (!pReciente) {
      itemCarrito.push(producto);
      console.log("recently viewed");
    }

    Cookies.set("recently_viewed", JSON.stringify(itemCarrito), {
      expires: 14,
    });
    ActualizarProductoReciente();
  };

  // Animacion carrito
  const animarCarrito = (imgRef) => {
    const cartIconRefe = cartIconRef.current;
    const img = imgRef.current;

    if (!cartIconRefe || !img) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = cartIconRefe.getBoundingClientRect();
    const clone = img.cloneNode();

    clone.style.position = "fixed";
    clone.style.top = `${imgRect.top}px`;
    clone.style.left = `${imgRect.left}px`;
    clone.style.width = `${imgRect.width}px`;
    clone.style.height = `${imgRect.height}px`;
    clone.style.transition = "all 0.8s ease-in-out";
    clone.style.zIndex = 9999;
    clone.style.borderRadius = "1000px";

    document.body.appendChild(clone);

    requestAnimationFrame(() => {
      clone.style.transform = `translate(${cartRect.left - imgRect.left}px, ${
        cartRect.top - imgRect.top
      }px) scale(0.1)`;
      clone.style.opacity = "0";
    });

    setTimeout(() => document.body.removeChild(clone), 900);
  };

  // Boton disminuir item carrito
  const Disminuir = (idProducto) => {
    const nuevoCarrito = itemCarrito
      .map((p) =>
        p.idProduct === idProducto ? { ...p, cantidad: p.cantidad - 1 } : p
      )
      .filter((p) => p.cantidad > 0);

    setItemCarrito(nuevoCarrito);
    Cookies.set("cart", JSON.stringify(nuevoCarrito), { expires: 14 });
    ActualizarCarrito();
  };

  // Boton aumentar item carrito
  const Aumentar = (idProducto) => {
    const nuevoCarrito = itemCarrito.map((p) => {
      if (p.idProduct === idProducto) {
        if (p.cantidad < p.stock) {
          return { ...p, cantidad: p.cantidad + 1 };
        } else {
          console.warn("❌ No puedes añadir más, stock máximo alcanzado");
          return p;
        }
      }
      return p;
    });

    setItemCarrito(nuevoCarrito);
    Cookies.set("cart", JSON.stringify(nuevoCarrito), { expires: 14 });
    ActualizarCarrito();
  };

  // Abrir Modal Detalle Producto
  const abrirModalCart = (product) => {
    setProductoModal(product);
    setOpenAddCart(true);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavbar(true);
      }
      if (window.scrollY > 0) {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        abrirModalCart,
        ProductosRecientesCokkie,
        ActualizarCarrito,
        añadirAlCarrito,
        animarCarrito,
        Disminuir,
        Aumentar,
        productAll,
        categoryAll,
        search,
        openAddCart,
        productoModal,
        openCart,
        navbar,
        itemCarrito,
        itemSearch,
        cartIconRef,
        setSearch,
        setOpenAddCart,
        setProductoModal,
        setOpenCart,
        setNavbar,
        setItemSearch,
        setItemCarrito,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
