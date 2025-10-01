import Sidebar from "../Layout/Sidebar";
import Header_Movile from "../Layout/Header_Movile";
import Navbar from "../Layout/Navbar";
import Cart from "../Layout/Cart";
import icon_logo from "../assets/icon_logotexto_white.svg";
import AddCart from "../Layout/addCart";
import Footer from "../Layout/Footer";
import Add from "../assets/icon-shop.svg";
import Check from "../assets/Check.svg";
import Search from "../Components/Search";
import ArrowLeft from "../assets/ArrowLeft.svg";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import Cookies from "js-cookie";
import Fondo from "../assets/fondo_portada-1.webp";
import Fondo2 from "../assets/fondo_portada2.webp";
import { motion, useScroll } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  const {
    productAll,
    ActualizarCarrito,
    categoryAll,
    productoModal,
    setProductoModal,
    setOpenAddCart,
    openCart,
    setOpenCart,
    setNavbar,
    itemCarrito,
    setItemCarrito,
  } = useAuth();

  const [añadirCart, setAñadirCart] = useState(false);
  const [MostrarBotonDerecho, setMostrarBotonDerecho] = useState(false);
  const [MostrarBotonIzquierdo, setMostrarBotonIzquierdo] = useState(false);
  const [MostrarBotonDerecho2, setMostrarBotonDerecho2] = useState(false);
  const [MostrarBotonIzquierdo2, setMostrarBotonIzquierdo2] = useState(false);
  const [MostrarBotonDerecho3, setMostrarBotonDerecho3] = useState(false);
  const [MostrarBotonIzquierdo3, setMostrarBotonIzquierdo3] = useState(false);
  const ulRef = useRef(null);
  const ulRef2 = useRef(null);
  const ulRef3 = useRef(null);

  const cartIconRef = useRef(null);
  const imgRef = useRef(null);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    ActualizarCarrito();

    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  // Boton desplazamiento lista de Productos 1
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

  // Boton desplazamiento lista de Productos 2
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

  // Boton desplazamiento lista de Categoria 1
  useEffect(() => {
    const ul3 = ulRef3.current;
    if (!ul3) return;

    const checkOverflow = () => {
      const hasOverflow = ul3.scrollWidth > ul3.clientWidth + 1;
      setMostrarBotonDerecho3(hasOverflow);
      setMostrarBotonIzquierdo3(false);
    };

    const handleScroll = () => {
      const scrollLeft = ul3.scrollLeft;
      const scrollRight = ul3.scrollLeft + ul3.clientWidth;
      const scrollWidth = ul3.scrollWidth;

      const alInicio = scrollLeft <= 5;
      const alFinal = scrollRight >= scrollWidth - 5;

      setMostrarBotonIzquierdo3(!alInicio);
      setMostrarBotonDerecho3(!alFinal);
    };

    // Revisar al montar
    checkOverflow();
    ul3.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkOverflow);

    return () => {
      ul3.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [categoryAll]);

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
  const scrollDerecha3 = () => {
    ulRef3.current.scrollBy({ left: 600, behavior: "smooth" });
  };
  const scrollIzquierda3 = () => {
    ulRef3.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const abrirModalCart = (product) => {
    setProductoModal(product);
    setOpenAddCart(true);
  };

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

  return (
    <div className="font-sans select-none">
      <Cart
        onAumentar={(id) => Aumentar(id)}
        onDisminuir={(id) => Disminuir(id)}
      />
      <AddCart
        onAgregar={(p) => añadirAlCarrito(p)}
        onAnimarCarrito={(i) => animarCarrito(i)}
        imgRef={imgRef}
      />

      {/* Body */}
      <div className="w-[100wh]">
        <Search
          onModalCart={(p) => abrirModalCart(p)}
          onAñadirCart={(i) => añadirCart()}
        />
        <div className="bg-transparent">
          <Navbar />
        </div>

        {/* Header Desktop */}
        <div className="hidden md:block sticky top-0 left-0 w-full z-40">
          <Sidebar cartIconRef={cartIconRef} />
        </div>
        {/* Header Movile */}
        <div className="block md:hidden sticky top-0 left-0 w-full z-40">
          <Header_Movile cartIconRef={cartIconRef} />
        </div>
        <div className="w-full h-[60vh] overflow-hidden -mt-[60px] bg-[#c5c5c5] flex justify-center items-center">
          <img
            src={Fondo}
            alt="Fondo"
            loading="eager"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Titulo */}
        <p
          className="mt-10 mb-5 text-[30px] md:text-[35px] font-light px-5 font-sans overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          NOVEDADES
        </p>

        {/* Lista de Productos */}
        <section
          className="relative flex items-center group/button"
          style={{ width: "100%" }}
        >
          {MostrarBotonIzquierdo && (
            <button
              className="bg-[#ffffff] z-20 absolute left-[20px] w-[45px] h-[45px] rounded-[50px] justify-center items-center shadow-md hover:scale-105 transition-transform duration-300 hidden group-hover/button:flex"
              onClick={scrollIzquierda}
            >
              <img
                src={ArrowLeft}
                loading="eager"
                className="w-[6px] rotate-180"
              />
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
                    className="hover:mt-[10px] w-[300px] min-w-[350px] text-md transition-transform duration-300 first:pl-5 last:pr-5"
                    onClick={() => abrirModalCart(product)}
                    key={index}
                  >
                    <div className="bg-[#a1a1a1] h-[50vh] group relative group/foto">
                      {/* Juego de imagenes - Max 2 img */}
                      <img
                        src={product.urlP}
                        alt="producto"
                        className="absolute top-0 opacity-100 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <img
                        src={product.urlP}
                        alt="producto"
                        className="absolute top-0 opacity-0 w-full h-full object-cover group-hover/foto:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                      />
                      {product.stock <= 0 && (
                        <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                          Agotado
                        </button>
                      )}

                      {product.stock > 0 && (
                        <div className="absolute bottom-1 right-1">
                          <button
                            onClick={() => abrirModalCart(product)}
                            className="shadow-md hidden group-hover:flex group/sub relative h-[30px] overflow-hidden items-center bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]"
                          >
                            {añadirCart ? (
                              <>
                                <img
                                  src={Check}
                                  alt="Boton Añadir al carrito"
                                  className="w-[13px] h-[13px]"
                                  loading="eager"
                                />
                                <p className="ml-2 hidden w-0 group-hover/sub:w-5 transition-transform duration-300">
                                  AÑADIDO
                                </p>
                              </>
                            ) : (
                              <>
                                <img
                                  src={Add}
                                  alt="Boton Añadir al carrito"
                                  className="w-[13px] h-[13px]"
                                  loading="eager"
                                />
                                <p className="w-0 text-white group-hover/sub:w-10 group-hover/sub:ml-2 group-hover/sub:text-black transition-all duration-300">
                                  AÑADIR
                                </p>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="pt-1">{product.nameP}</p>
                    <div className="flex gap-3">
                      {product.discount <= 1 ? (
                        <p>S/{product.price.toFixed(2)}</p>
                      ) : (
                        <>
                          <p>
                            S/
                            {(
                              product.price -
                              (product.discount / 100) * product.price
                            ).toFixed(2)}
                          </p>
                          <p className="line-through text-[#ababab]">
                            S/{product.price.toFixed(2)}
                          </p>
                        </>
                      )}
                    </div>
                  </li>
                ))
              : Array.from({ length: 5 }).map((_, i) => (
                  <li
                    className="w-[300px] min-w-[350px] text-md animate-pulse first:pl-5 last:pr-5"
                    key={i}
                  >
                    <div className="bg-[#e7e7e7] h-[50vh] group relative group/foto"></div>
                    <p className="pt-1 bg-[#e7e7e7] rounded-[5px] w-[160px] h-[23px] my-[2px]"></p>
                    <div className="flex gap-3">
                      <p className="bg-[#e7e7e7] rounded-[5px] w-[60px] h-[23px]"></p>
                    </div>
                  </li>
                ))}
          </ul>
          {MostrarBotonDerecho && productAll.length > 0 && (
            <button
              className="bg-[#ffffff] z-20 absolute  right-[20px] w-[45px] h-[45px] rounded-[50px] justify-center items-center shadow-md hover:scale-105 transition-transform duration-300 flex"
              onClick={scrollDerecha}
            >
              <img src={ArrowLeft} className="w-[6px]" />
            </button>
          )}
        </section>

        {/* Frase */}
        <div className="w-auto text-[20px] font-light px-10 my-20 text-center italic overflow-hidden">
          <p className="" data-aos="fade-up" data-aos-duration="1000">
            "Cada pieza fue creada para recordarte que eres única, valiosa y
            capaz de conquistar el mundo. No solo uses joyas, exprésate con
            ellas"
          </p>
        </div>

        {/* Lista de Categorias */}
        <section
          className="relative flex items-center overflow-hidden group/button"
          style={{ width: "100%" }}
        >
          <ul
            ref={ulRef3}
            className="w-full h-auto flex flex-col space-y-4 justify-start font-light text-[16px]"
          >
            {categoryAll.length > 0
              ? categoryAll.map((category, index) => (
                  <li
                    className="w-full h-[40vh] bg-[#f0f0f0] overflow-hidden relative"
                    key={index}
                  >
                    <img
                      src={category.url}
                      alt="producto"
                      className="h-[40vh] absolute z-0 -bottom-10 -rotate-12 right-0 object-cover drop-shadow-custom"
                      loading="lazy"
                    />
                    <div className="absolute top-1 px-3 py-2 m-5 text-[25px] text-[#000000] font-sans disabled">
                      <button className="text-xs text-white bg-black py-1 px-2 rounded-[3px] hover:text-black transition-colors duration-300">
                        Categoría N° {index + 1}
                      </button>
                      <p className="w-[150px] mt-2">{category.category}</p>
                    </div>

                    <div className="absolute hidden bg-black -rotate-90 bottom-10 px-3 py-2 m-5 text-[25px] text-[#000000] font-sans disabled">
                      <p>{category.category}</p>
                      <button className="text-xs hidden text-white bg-black py-1 px-2 rounded-[3px] hover:text-black transition-colors duration-300">
                        Ver más
                      </button>
                    </div>
                  </li>
                ))
              : Array.from({ length: 5 }).map((_, i) => (
                  <li
                    className="w-[80vh] min-w-[350px] text-md animate-pulse first:pl-5 last:pr-5"
                    key={i}
                  >
                    <div className="bg-[#e7e7e7] h-[70vh] group relative group/foto"></div>
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
          loading="eager"
        ></div>
        {/* Baner 3 mensajes */}
        <section className="md:px-10 my-[10vh] text-[12px] flex gap-2 justify-between font-light mx-5 md:mx-10 text-center">
          <div className="overflow-hidden">
            <p className="font-medium">Calidad que brilla</p>
            <p data-aos="fade-up" data-aos-duration="500">
              Acero inoxidable duradero y con estilo.
            </p>
          </div>
          <div className="overflow-hidden">
            <p className=" font-medium">Diseño que inspira</p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Moderno, elegante y para todo momento.
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="font-medium">Hecho para durar</p>
            <p data-aos="fade-up" data-aos-duration="1500">
              Resistente al agua y hipoalergénico.
            </p>
          </div>
        </section>

        {/* Titulo 2 */}
        <p
          className="pb-5 text-[30px] md:text-[35px] font-light px-5 font-sans"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          EN TENDENCIA
        </p>

        {/* Seccion de producto 2 */}
        <section className="w-full h-auto relative flex items-center overflow-hidden">
          <ul
            ref={ulRef2}
            className="w-full px-5 h-auto grid grid-cols-2 md:grid-cols-3 gap-2 font-light"
          >
            {productAll.length > 0
              ? productAll.map((product, index) => (
                  <li
                    className="w-auto mb-3 text-sm md:text-md"
                    onClick={() => abrirModalCart(product)}
                    key={index}
                  >
                    <div className="h-[25vh] group relative">
                      {/* Juego de imagenes - Max 2 img */}
                      <img
                        src={product.urlP}
                        alt="producto"
                        className="absolute top-0 w-full h-full"
                        loading="lazy"
                      />
                      {product.stock <= 0 && (
                        <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-xs disabled">
                          Agotado
                        </button>
                      )}
                      {product.stock > 0 && (
                        <div className="absolute bottom-1 right-1">
                          <button
                            onClick={() => abrirModalCart(product)}
                            className="shadow-md hidden group-hover:flex group/sub relative h-[30px] overflow-hidden items-center bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]"
                          >
                            {añadirCart ? (
                              <>
                                <img
                                  src={Check}
                                  className="w-[13px] h-[13px]"
                                />
                                <p className="ml-2 hidden w-0 group-hover/sub:w-5 transition-transform duration-300">
                                  AÑADIDO
                                </p>
                              </>
                            ) : (
                              <>
                                <img src={Add} className="w-[13px] h-[13px]" />
                                <p className="w-0 text-white group-hover/sub:w-10 group-hover/sub:ml-2 group-hover/sub:text-black transition-all duration-300">
                                  AÑADIR
                                </p>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="pt-1">{product.nameP}</p>
                    <div className="flex gap-3">
                      {product.discount <= 1 ? (
                        <p>S/{product.price.toFixed(2)}</p>
                      ) : (
                        <>
                          <p>
                            S/
                            {(
                              product.price -
                              (product.discount / 100) * product.price
                            ).toFixed(2)}
                          </p>
                          <p className="line-through text-[#ababab]">
                            S/{product.price.toFixed(2)}
                          </p>
                        </>
                      )}
                    </div>
                  </li>
                ))
              : Array.from({ length: 5 }).map((_, i) => (
                  <li
                    className="w-[300px] min-w-[350px] text-md animate-pulse first:pl-5 last:pr-5"
                    key={i}
                  >
                    <div className="bg-[#e7e7e7] h-[50vh] group relative group/foto"></div>
                    <p className="pt-1 bg-[#e7e7e7] rounded-[5px] w-[160px] h-[23px] my-[2px]"></p>
                    <div className="flex gap-3">
                      <p className="bg-[#e7e7e7] rounded-[5px] w-[60px] h-[23px]"></p>
                    </div>
                  </li>
                ))}
          </ul>
        </section>

        {/* Portada 3 */}
        <div className="bg-[#F2D0BD] w-[100wh] h-[50vh] md:h-[100vh] my-20 flex flex-col md:flex-row overflow-hidden">
          <section className="w-auto h-full font-light p-10 relative md:p-32 flex flex-col justify-between">
            <div className="z-20">
              <p className="text-[28px] md:text-[50px] italic mb-8 md:mb-10">
                Cada joya tiene una historia… ¿ya elegiste la tuya?
              </p>
              <a
                href="#"
                className="bg-black px-5 md:px-8 py-3 my-5 rounded-sm font-normal text-white text-sm md:text-md transition-colors duration-500 hover:bg-white hover:text-black"
              >
                Visitanos
              </a>
            </div>
            <div className="z-20">
              <p
                className="text-[16px] md:text-[28px]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Descubre lo nuevo en nuestra tienda virtual, nos encontramos en
                <a href="#" className="font-medium hover:underline">
                  @mayikh.pe
                </a>
              </p>
            </div>
            <img
              src={icon_logo}
              alt="Imagen Logo"
              className="absolute -right-0 rotate-0 z-10 top-40 w-[250px] opacity-55"
              loading="eager"
            />
          </section>
          <div
            className="hidden bg-[#fff] border-t-2 border-b-2 w-[690px] md:flex flex-col justify-center items-center font-light"
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
