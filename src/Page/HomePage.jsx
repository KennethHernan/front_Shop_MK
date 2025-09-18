import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/Navbar";
import Cart from "../Layout/Cart";
import AddCart from "../Layout/addCart";
import Footer from "../Layout/Footer";
import Add from "../assets/icon-shop.svg";
import img_2 from "../assets/img_2.png";
import img_1 from "../assets/img_1.png";
import Check from "../assets/Check.svg";
import arrow_derecha from "../assets/Arrorw-Derecha.svg";
import ArrowLeft from "../assets/ArrowLeft.svg";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import Cookies from "js-cookie";
import Fondo from "../assets/fondo1.jpg";
import Fondo2 from "../assets/fondo2.jpg";
import { motion, useScroll } from "framer-motion";
import PruebaMotion from "../Components/pruebaMOTION";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  AOS.init();
  const { listarProducto, productAll, listarCategoria, categoryAll } =
    useAuth();
  const [navbar, setNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [añadirCart, setAñadirCart] = useState(false); // false
  const [MostrarBotonDerecho, setMostrarBotonDerecho] = useState(false);
  const [MostrarBotonIzquierdo, setMostrarBotonIzquierdo] = useState(false);
  const [MostrarBotonDerecho2, setMostrarBotonDerecho2] = useState(false);
  const [MostrarBotonIzquierdo2, setMostrarBotonIzquierdo2] = useState(false);
  const ulRef = useRef(null);
  const ulRef2 = useRef(null);

  const [carrito, setCarrito] = useState(false);
  const [productoModal, setProductoModal] = useState([]);

  const cartIconRef = useRef(null);
  const imgRef = useRef(null);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    listarProducto();
    listarCategoria();
    ActualizarCarrito();
  }, []);

  useEffect(() => {
    const ul = ulRef.current;
    if (!ul) return;

    const checkOverflow = () => {
      const hasOverflow = ul.scrollWidth > ul.clientWidth + 1;
      setMostrarBotonDerecho(hasOverflow);
      setMostrarBotonIzquierdo(false);
    };

    const handleScroll = () => {
      const scrollLeft = ul.scrollLeft;
      const scrollRight = ul.scrollLeft + ul.clientWidth;
      const scrollWidth = ul.scrollWidth;

      const alInicio = scrollLeft <= 5;
      const alFinal = scrollRight >= scrollWidth - 5;

      setMostrarBotonIzquierdo(!alInicio);
      setMostrarBotonDerecho(!alFinal);
    };

    // Revisar al montar
    checkOverflow();
    ul.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkOverflow);

    return () => {
      ul.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [productAll]);

  useEffect(() => {
    const ul2 = ulRef2.current;
    if (!ul2) return;

    const checkOverflow = () => {
      const hasOverflow = ul2.scrollWidth > ul2.clientWidth + 1;
      setMostrarBotonDerecho2(hasOverflow);
      setMostrarBotonIzquierdo2(false);
    };

    const handleScroll = () => {
      const scrollLeft = ul2.scrollLeft;
      const scrollRight = ul2.scrollLeft + ul2.clientWidth;
      const scrollWidth = ul2.scrollWidth;

      const alInicio = scrollLeft <= 5;
      const alFinal = scrollRight >= scrollWidth - 5;

      setMostrarBotonIzquierdo2(!alInicio);
      setMostrarBotonDerecho2(!alFinal);
    };

    // Revisar al montar
    checkOverflow();
    ul2.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkOverflow);

    return () => {
      ul2.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [productAll]);

  const scrollDerecha = () => {
    ulRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  const scrollIzquierda = () => {
    ulRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };
  const scrollDerecha2 = () => {
    ulRef2.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  const scrollIzquierda2 = () => {
    ulRef2.current.scrollBy({ left: -600, behavior: "smooth" });
  };
  const abrirCarrito = () => {
    setIsOpen(true);
  };
  const closeCarrito = () => {
    setIsOpen(false);
  };
  const abrirModalCart = (product) => {
    setProductoModal(product);
    setIsOpenCart(true);
  };
  const closeModalCart = () => {
    setIsOpenCart(false);
  };

  useEffect(() => {
    if (isOpen || isOpenCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isOpenCart]);

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

  const ActualizarCarrito = () => {
    const carritoGuardado = Cookies.get("cart");
    if (carritoGuardado) {
      const productosCarrito = JSON.parse(carritoGuardado);
      setCarrito(productosCarrito);
    }
  };

  const Aumentar = (idProducto) => {
    let carrito = JSON.parse(Cookies.get("cart") || "[]");

    carrito = carrito.map((p) =>
      p._id === idProducto ? { ...p, cantidad: p.cantidad + 1 } : p
    );

    carrito = carrito.map((p) => {
      if (p._id === idProducto) {
        // Evitar que sobrepase el stock
        if (p.cantidad < p.stock) {
          return { ...p, cantidad: p.cantidad + 1 };
        } else {
          console.warn("❌ No puedes añadir más, stock máximo alcanzado");
          return p;
        }
      }
      return p;
    });

    Cookies.set("cart", JSON.stringify(carrito), { expires: 14 });
    ActualizarCarrito();
  };

  const Disminuir = (idProducto) => {
    let carrito = JSON.parse(Cookies.get("cart") || "[]");

    carrito = carrito
      .map((p) =>
        p._id === idProducto ? { ...p, cantidad: p.cantidad - 1 } : p
      )
      .filter((p) => p.cantidad > 0);

    Cookies.set("cart", JSON.stringify(carrito), { expires: 14 });
    ActualizarCarrito();
  };

  const añadirAlCarrito = (producto) => {
    let carrito = JSON.parse(Cookies.get("cart") || "[]");

    const productoExistente = carrito.find((p) => p._id === producto._id);

    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      producto.cantidad = 1;
      carrito.push(producto);
    }

    Cookies.set("cart", JSON.stringify(carrito), { expires: 14 });
    ActualizarCarrito();
  };
  const eliminarDelCarrito = (idProducto) => {
    const carritoExistente = Cookies.get("cart");
    let carrito = carritoExistente ? JSON.parse(carritoExistente) : [];

    carrito = carrito.filter((p) => p.id !== idProducto);
    Cookies.set("cart", JSON.stringify(carrito), { expires: 14 });
  };

  const animarCarrito = (imgRef) => {
    const carrito = cartIconRef.current;
    const img = imgRef.current;

    if (!carrito || !img) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = carrito.getBoundingClientRect();
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

  return (
    <div className="font-sans">
      <Cart
        isOpen={isOpen}
        onCerrarCarrito={closeCarrito}
        cart={carrito}
        onAumentar={(id) => Aumentar(id)}
        onDisminuir={(id) => Disminuir(id)}
      />
      <AddCart
        isOpenCart={isOpenCart}
        onCerrarCart={closeModalCart}
        onProducto={productoModal}
        onAgregar={(p) => añadirAlCarrito(p)}
        onAnimarCarrito={(i) => animarCarrito(i)}
        imgRef={imgRef}
      />

      {/* Body */}
      <div className="w-[100wh]">
        <div className="bg-transparent">
          <Navbar navbar={navbar} />
        </div>

        <div className="sticky top-0 left-0 w-full z-40">
          <Sidebar
            navbar={navbar}
            onAbrirCarrito={abrirCarrito}
            cantidadCart={carrito}
            cartIconRef={cartIconRef}
          />
        </div>
        <div className="w-full h-[60vh] overflow-hidden -mt-[80px] bg-[#c5c5c5] flex justify-center items-center">
          <img src={Fondo} alt="Fondo" />
        </div>

        <p className="py-10 text-[35px] font-light ml-10 font-sans"
          data-aos="fade-right"
          data-aos-duration="3000">NOVEDADES</p>

        {/* Lista de Productos */}
        <section
          className="relative flex items-center p-1 group/button"
          style={{ width: "100%" }}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {MostrarBotonIzquierdo && (
            <button
              className="bg-[#ffffff] z-20 absolute left-[20px] w-[45px] h-[45px] rounded-[50px] justify-center items-center shadow-md hover:scale-105 transition-all duration-300 hidden group-hover/button:flex"
              onClick={scrollIzquierda}
            >
              <img src={ArrowLeft} className="w-[6px] rotate-180" />
            </button>
          )}
          <ul
            ref={ulRef}
            className="flex justify-start font-light select-none space-x-1 overflow-x-auto no-scrollbar"
            style={{
              maxWidth: "100%",
              width: "100%",
              display: "flex",
            }}
          >
            {productAll.length > 0
              ? productAll.map((product, index) => (
                  <li
                    className="hover:mt-[10px] w-[300px] min-w-[350px] text-md transition-all duration-700"
                    key={index}
                  >
                    <div className="bg-[#a1a1a1] h-[70vh] group relative group/foto">
                      {/* Juego de imagenes - Max 2 img */}
                      <img
                        src={product.img}
                        className="absolute top-0 opacity-100 w-full h-full object-cover transition-all duration-700"
                      />
                      <img
                        src={Fondo}
                        className="absolute top-0 opacity-0 w-full h-full object-cover group-hover/foto:opacity-100 transition-all duration-700"
                      />
                      {product.stock <= 0 && (
                        <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                          Agotado
                        </button>
                      )}
                      <div className="absolute bottom-1 right-1">
                        <button
                          onClick={() => abrirModalCart(product)}
                          className="shadow-md hidden group-hover:flex group/sub relative h-[30px] overflow-hidden items-center bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]"
                        >
                          {añadirCart ? (
                            <>
                              <img src={Check} className="w-[13px] h-[13px]" />
                              <p className="ml-2 hidden w-0 group-hover/sub:w-5 transition-all duration-700">
                                AÑADIDO
                              </p>
                            </>
                          ) : (
                            <>
                              <img src={Add} className="w-[13px] h-[13px]" />
                              <p className="w-0 text-white group-hover/sub:w-10 group-hover/sub:ml-2 group-hover/sub:text-black transition-all duration-700">
                                AÑADIR
                              </p>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <p className="pt-1">{product.nombre}</p>
                    <div className="flex gap-3">
                      {product.oferta <= 1 ? (
                        <p>S/{product.precio.toFixed(2)}</p>
                      ) : (
                        <>
                          <p>
                            S/
                            {(
                              product.precio -
                              (product.oferta / 100) * product.precio
                            ).toFixed(2)}
                          </p>
                          <p className="line-through text-[#ababab]">
                            S/{product.precio.toFixed(2)}
                          </p>
                        </>
                      )}
                    </div>
                  </li>
                ))
              : Array.from({ length: 5 }).map((_, i) => (
                  <li
                    className="hover:-mt-[3px] w-[300px] min-w-[300px] animate-pulse"
                    key={i}
                  >
                    <div className="bg-[#e7e7e7] h-[70vh] group relative group/foto"></div>
                    <p className="pt-1 bg-[#e7e7e7] rounded-[10px] w-[160px] h-[23px] my-[2px]"></p>
                    <div className="flex gap-3">
                      <p className="bg-[#e7e7e7] rounded-[10px] w-[60px] h-[23px]"></p>
                    </div>
                  </li>
                ))}
          </ul>
          {MostrarBotonDerecho && (
            <button
              className="bg-[#ffffff] z-20 absolute  right-[20px] w-[45px] h-[45px] rounded-[50px] justify-center items-center shadow-md hover:scale-105 transition-all duration-300 hidden group-hover/button:flex"
              onClick={scrollDerecha}
            >
              <img src={ArrowLeft} className="w-[6px]" />
            </button>
          )}
        </section>

        {/* Frase */}
        <p
          className="py-[10vh] text-[40px] font-light mx-10 text-center italic"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          "Cada pieza fue creada para recordarte que eres única, valiosa y capaz
          de conquistar el mundo. No solo uses joyas, exprésate con ellas"
        </p>

        {/* Lista de Categorias */}
        <section
          className="w-full z-0"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <ul className="h-[90vh] flex gap-1 mx-10 justify-center font-light text-[16px] select-none">
            {categoryAll.length > 0
              ? categoryAll.map((category, index) => (
                  <li className="w-[45vh] hover:-mt-[3px]" key={index}>
                    <div className="h-[80vh] bg-white relative overflow-hidden flex justify-center items-center">
                      <img
                        src={category.img}
                        className="object-cover hover:scale-105"
                      />
                    </div>
                    <button
                      className="flex gap-3"
                      onClick={() => handleCategoria(category)}
                    >
                      <p className="pt-1">{category.nombre}</p>
                      <img src={arrow_derecha} alt="" />
                    </button>
                  </li>
                ))
              : Array.from({ length: 3 }).map((_, i) => (
                  <li
                    className="w-[45vh] hover:-mt-[3px] animate-pulse"
                    key={i}
                  >
                    <div className="bg-[#e7e7e7] h-[80vh] relative"></div>
                    <p className="pt-1 bg-[#e7e7e7] rounded-[10px] w-[160px] h-[23px] mt-[3px]"></p>
                  </li>
                ))}
          </ul>
        </section>

        {/* Portada 2 */}
        <div
          className="bg-[#bebebe] h-[100vh] mt-10"
          style={{
            backgroundImage: `url(${Fondo2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-aos="fade-up"
          data-aos-duration="3000"
        ></div>
        {/* Baner 3 mensajes */}
        <section className="px-10 py-[10vh] flex justify-between font-light mx-10 text-center">
          <div data-aos="fade-up" data-aos-duration="2000">
            <p className=" font-medium">Calidad que brilla</p>
            <p>Acero inoxidable duradero y con estilo.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2500">
            <p className=" font-medium">Diseño que inspira</p>
            <p>Moderno, elegante y para todo momento.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <p className=" font-medium">Hecho para durar</p>
            <p>Resistente al agua y hipoalergénico.</p>
          </div>
        </section>

        {/* Seccion de producto 2 */}
        <section
          className="relative flex items-center overflow-hidden p-1 group/button"
          data-aos="fade-up"
          data-aos-duration="3000"
          style={{ width: "100%" }}
        >
          {MostrarBotonIzquierdo2 && (
            <button
              className="bg-[#ffffff] z-20 absolute left-[20px] w-[45px] h-[45px] rounded-[50px] justify-center items-center shadow-md hover:scale-105 transition-all duration-300 hidden group-hover/button:flex"
              onClick={scrollIzquierda2}
            >
              <img src={ArrowLeft} className="w-[6px] rotate-180" />
            </button>
          )}
          <ul
            ref={ulRef2}
            className="flex justify-start font-light text-[16px] select-none space-x-1 overflow-x-auto no-scrollbar ml-10"
            style={{
              maxWidth: "100%",
              width: "100%",
              display: "flex",
            }}
          >
            {productAll.length > 0
              ? productAll.map((product, index) => (
                  <li
                    className="hover:mt-[10px] w-[300px] min-w-[350px] text-md transition-all duration-700"
                    key={index}
                  >
                    <div className="bg-[#ffffff] h-[70vh] group relative group/foto">
                      {/* Juego de imagenes - Max 2 img */}
                      <img
                        src={product.img}
                        className="absolute top-0 opacity-100 w-full h-full object-cover transition-all duration-700"
                      />
                      <img
                        src={Fondo}
                        className="absolute top-0 opacity-0 w-full h-full object-cover group-hover/foto:opacity-100 transition-all duration-700"
                      />
                      {product.stock <= 0 && (
                        <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-xs disabled">
                          Agotado
                        </button>
                      )}
                      <div className="absolute bottom-1 right-1">
                        <button
                          onClick={() => abrirModalCart(product)}
                          className="shadow-md hidden group-hover:flex group/sub relative h-[30px] overflow-hidden items-center bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]"
                        >
                          {añadirCart ? (
                            <>
                              <img src={Check} className="w-[13px] h-[13px]" />
                              <p className="ml-2 hidden w-0 group-hover/sub:w-5 transition-all duration-700">
                                AÑADIDO
                              </p>
                            </>
                          ) : (
                            <>
                              <img src={Add} className="w-[13px] h-[13px]" />
                              <p className="w-0 text-white group-hover/sub:w-10 group-hover/sub:ml-2 group-hover/sub:text-black transition-all duration-700">
                                AÑADIR
                              </p>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <p className="pt-1">{product.nombre}</p>
                    <div className="flex gap-3">
                      {product.oferta <= 1 ? (
                        <p>S/{product.precio.toFixed(2)}</p>
                      ) : (
                        <>
                          <p>
                            S/
                            {(
                              product.precio -
                              (product.oferta / 100) * product.precio
                            ).toFixed(2)}
                          </p>
                          <p className="line-through text-[#ababab]">
                            S/{product.precio.toFixed(2)}
                          </p>
                        </>
                      )}
                    </div>
                  </li>
                ))
              : Array.from({ length: 5 }).map((_, i) => (
                  <li
                    className="hover:-mt-[3px] w-[300px] min-w-[300px] animate-pulse"
                    key={i}
                  >
                    <div className="bg-[#e7e7e7] h-[70vh] group relative group/foto"></div>
                    <p className="pt-1 bg-[#e7e7e7] rounded-[10px] w-[160px] h-[23px] my-[2px]"></p>
                    <div className="flex gap-3">
                      <p className="bg-[#e7e7e7] rounded-[10px] w-[60px] h-[23px]"></p>
                    </div>
                  </li>
                ))}
          </ul>
          {MostrarBotonDerecho2 && (
            <button
              className="bg-[#ffffff] z-20 absolute  right-[20px] w-[45px] h-[45px] rounded-[50px] justify-center items-center shadow-md hover:scale-105 transition-all duration-300 hidden group-hover/button:flex"
              onClick={scrollDerecha2}
            >
              <img src={ArrowLeft} className="w-[6px]" />
            </button>
          )}
        </section>

        {/* Portada 3 */}
        <div
          className="bg-[#F2D0BD] w-[100wh] h-[100vh] my-20 flex overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <section className="w-auto font-light p-32 flex flex-col justify-between">
            <div data-aos="fade-right" data-aos-duration="3000">
              <p className="text-[50px] italic mb-10">
                Cada joya tiene una historia… ¿ya elegiste la tuya?
              </p>
              <a
                href="#"
                className="bg-black px-8 py-3 my-5 rounded-sm font-normal text-white text-md transition-all duration-500 hover:bg-white hover:text-black"
              >
                Visitanos
              </a>
            </div>
            <div>
              <p
                className="text-[28px]"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Descubre lo nuevo en nuestra tienda virtual, nos encontramos en{" "}
                <a href="#" className="font-medium hover:underline">
                  @mayikh.pe
                </a>
              </p>
            </div>
          </section>
          <div
            className="bg-[#fff] border-t-2 border-b-2 w-[690px] flex flex-col justify-center items-center font-light"
            style={{
              backgroundImage: `url(${""})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <b className="w-[250px] text-center">
              Foto referencial de su tienda Tamaño:
            </b>
            <p>Alto: 974 px</p>
            <p> Ancho: 690 px</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
