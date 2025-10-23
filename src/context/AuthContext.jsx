import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  getProducts,
  getCategorys,
  createNewOrder,
} from "../Services/firebaseFunction";
import { postCreatePreference, getVerifyPayment } from "../Services/auth";
import { getAuthContext } from "./authSingleton";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
const urlBase = import.meta.env.VITE_URL_BASE;
const AuthContext = getAuthContext();

export const AuthProvider = ({ children }) => {
  const [productAll, setProductsAll] = useState([]);
  const [categoryAll, setCategoryAll] = useState([]);

  const cartIconRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const shouldScrollRef = useRef(false);

  // Estados de componentes
  const [navbar, setNavbar] = useState(true);
  const [productoModal, setProductoModal] = useState([]);
  const [productReciente, setProductReciente] = useState([]);
  const [openAddCart, setOpenAddCart] = useState(false);
  const [search, setSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [itemCarrito, setItemCarrito] = useState([]);
  const [itemSearch, setItemSearch] = useState("");
  const [userSave, setUserSave] = useState([]);
  const [session, setSession] = useState("");
  const [priceDelivery, setPriceDelivery] = useState(0);
  const [emailLogin, setEmailLogin] = useState("");
  const [autentication, setAutentication] = useState(false);
  const [loading, setLoanding] = useState(false);
  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [codeOrigin, setCodeOrigin] = useState(false);
  const [messageCode, setMessageCode] = useState("");

  const Login = (data) => {
    setCargando(true);
    enviarCodigo(data.code);
    if (data.code === codeOrigin) {
      // Codigo valido
      setAutentication(true);
      Home();
    } else {
      setMessageCode("Código inválido");
    }
  };

  const CerraSesion = () => {
    setAutentication(false);
    setEmailLogin("");
  };

  const waitAndScroll = (id, attempt = 0) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (attempt < 20) {
      setTimeout(() => waitAndScroll(id, attempt + 1), 50);
    }
  };

  const Home = () => {
    setNavbar(false);
    setSearch(false);
    setOpenAddCart(false);

    if (location.pathname !== "/") {
      shouldScrollRef.current = true;
      navigate("/");
      return;
    }
    waitAndScroll("Home");
  };

  // Actualizar Carrito
  const ActualizarCarrito = () => {
    const productosCarrito = localStorage.getItem("cart");
    if (productosCarrito) {
      const carritoParseado = JSON.parse(productosCarrito);
      setItemCarrito(carritoParseado);
    }
  };

  // Actualizar productos recientes
  const ActualizarProductoReciente = () => {
    const PRGuardado = localStorage.getItem("recently_viewed");
    if (PRGuardado) {
      const productReciente = JSON.parse(PRGuardado);
      setProductReciente(productReciente);
    } else {
      setProductReciente([]);
    }
  };

  // Validar si existe idSession y preference_id
  const VerificarSesion = () => {
    const sessionExiste = localStorage.getItem("idSession");
    if (sessionExiste) {
      setSession(sessionExiste);
    } else {
      CrearSession();
    }
  };

  // Validar si existe idSession
  const VerificarUser = () => {
    const userExiste = JSON.parse(localStorage.getItem("userSave"));

    if (userExiste) {
      setUserSave(userExiste);
    } else {
      setUserSave([]);
    }
  };

  // Crear idSession
  const CrearSession = () => {
    const idSesion = uuidv4();

    setSession(idSesion);
    localStorage.setItem("idSession", idSesion);
  };

  // Guardar usuarios - localstorage
  const GuardarUser = (user) => {
    setUserSave(user);
    localStorage.setItem("userSave", JSON.stringify(user));
  };

  // Añadir al carrito
  const añadirAlCarrito = (producto) => {
    const productoExistente = itemCarrito.find(
      (p) => p.idProduct === producto.idProduct
    );

    let nuevoCarrito;

    if (productoExistente) {
      nuevoCarrito = itemCarrito.map((p) =>
        p.idProduct === producto.idProduct
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      );
    } else {
      nuevoCarrito = [...itemCarrito, { ...producto, cantidad: 1 }];
    }

    setItemCarrito(nuevoCarrito);
    localStorage.setItem("cart", JSON.stringify(nuevoCarrito));
  };

  // Productos  Recientes Cokkie
  const ProductosRecientesCokkie = (producto) => {
    const pReciente = productReciente.find(
      (p) => p.idProduct === producto.idProduct
    );

    let newPReciente;

    if (pReciente) {
      newPReciente = productReciente.map((p) =>
        p.idProduct === producto.idProduct
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      );
    } else {
      newPReciente = [...itemCarrito, { ...producto, cantidad: 1 }];
    }

    setProductReciente(newPReciente);
    localStorage.setItem("recently_viewed", JSON.stringify(newPReciente));
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
    localStorage.setItem("cart", JSON.stringify(nuevoCarrito));
  };

  // Boton aumentar item carrito
  const Aumentar = (idProducto) => {
    const nuevoCarrito = itemCarrito.map((p) => {
      if (p.idProduct === idProducto) {
        if (p.cantidad < p.stock) {
          return { ...p, cantidad: p.cantidad + 1 };
        } else {
          //console.warn("No puedes añadir más, stock máximo alcanzado");
          return p;
        }
      }
      return p;
    });

    setItemCarrito(nuevoCarrito);
    localStorage.setItem("cart", JSON.stringify(nuevoCarrito));
  };

  // Eliminar Item de Carrito
  const eliminarDelCarrito = (idProducto) => {
    const nuevoCarrito = itemCarrito.filter((p) => p.idProduct !== idProducto);
    localStorage.setItem("cart", JSON.stringify(nuevoCarrito));
    ActualizarCarrito();
  };

  // Eliminar Prodcutos Vistos Recientes
  const eliminarProducRecientes = () => {
    localStorage.removeItem("recently_viewed");
    ActualizarProductoReciente();
  };

  // Abrir Modal Detalle Producto
  const abrirModalCart = (product) => {
    setProductoModal(product);
    ProductosRecientesCokkie(product);
    setOpenAddCart(true);
  };

  // Crear Nueva Orden
  const CreateOrder = async (data) => {
    try {
      const response = await createNewOrder(data);
      return response;
    } catch (error) {
      return console.error("Error al crear orden:", error);
    }
  };
  //Crear Preferencia - MERCADO PAGO
  const CreatePreferences = async (idOrder, items, delivery, userData) => {
    try {
      const response = await postCreatePreference(
        idOrder,
        items,
        delivery,
        session,
        userData
      );
      return response;
    } catch (error) {
      return console.error("Error al crear preferencia:", error);
    }
  };

  const VerificarPayment = async (paymentId) => {
    try {
      const response = await getVerifyPayment(paymentId);
      return response;
    } catch (error) {
      return console.error("Error al VerificarPayment:", error);
    }
  };

  async function enviarCodigo(email) {
    const resp = await fetch("https://checkoutmk.vercel.app/api/enviar-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
      mode: "cors",
    });

    const data = await resp.json();
    if (data.ok) {
      setCodigoEnviado(true);
      setCodeOrigin(data.code);
    } else {
      console.error("Error del servidor:", data.message || data);
    }
  }

  useEffect(() => {
    getProducts().then((listProduct) => {
      setProductsAll(listProduct);
    });

    getCategorys().then((listCategory) => {
      setCategoryAll(listCategory);
    });

    VerificarUser();
    VerificarSesion();
    ActualizarCarrito();
    ActualizarProductoReciente();
  }, []);

  // When location changes to home and a scroll was requested, perform the scroll
  useEffect(() => {
    if (location.pathname === "/" && shouldScrollRef.current) {
      shouldScrollRef.current = false;
      waitAndScroll("Home");
    }
  }, [location.pathname]);

  return (
    <AuthContext.Provider
      value={{
        Login,
        enviarCodigo,
        CreateOrder,
        CreatePreferences,
        GuardarUser,
        abrirModalCart,
        eliminarProducRecientes,
        eliminarDelCarrito,
        ActualizarCarrito,
        añadirAlCarrito,
        animarCarrito,
        Disminuir,
        Aumentar,
        Home,
        VerificarPayment,
        messageCode,
        codigoEnviado,
        codeOrigin,
        userSave,
        loading,
        priceDelivery,
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
        productReciente,
        session,
        autentication,
        emailLogin,
        setEmailLogin,
        setMessageCode,
        setPriceDelivery,
        setSearch,
        setOpenAddCart,
        setProductoModal,
        setOpenCart,
        setNavbar,
        setItemSearch,
        setItemCarrito,
        setAutentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
