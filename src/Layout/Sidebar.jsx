import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ImagenLogo from "../assets/LOGO TEXTO.svg";
import ImagenLogo2 from "../assets/icon_marca_white.svg";
import Profile from "../assets/Profile.svg";
import Profile2 from "../assets/person_white.svg";
import Seach from "../assets/Seach.svg";
import Seach2 from "../assets/seach_white.svg";
import Shop from "../assets/Shop.svg";
import Shop2 from "../assets/shop_white.svg";
import { useState } from "react";
import { useAuth } from "../context/authSingleton";
import { useEffect } from "react";
import { getCategoriesWithProducts } from "../Services/firebaseFunction";

function CustomLink({ to, label, ...props }) {
  const location = useLocation();
  const isHovered = location.pathname === to;
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <p
        {...props}
        className={`text-[11px] md:text-xs hover:font-semibold 
          ${isActive ? "font-semibold" : "font-normal"}
          ${isHovered ? "font-semibold" : "font-normal"}
        `}
      >
        {label}
      </p>
    </Link>
  );
}

function Sidebar() {
  const {
    navbar,
    setOpenCart,
    setSearch,
    itemCarrito,
    cartIconRef,
    Home,
    abrirModalCart,
  } = useAuth();
  const navigate = useNavigate();
  const [isHover, setIsHovered] = useState(false);
  const [active, setActive] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  const InactiveNavbar = () => {
    if (!active) {
      setIsHovered(false);
    } else {
      setTimeout(() => {
        setActive(false);
      }, 500);
      setIsHovered(false);
    }
  };

  const Perfil = () => {
    navigate("/log-in");
  };

  useEffect(() => {
    const fetchData = async () => {
      const categoriasConProductos = await getCategoriesWithProducts();
      setAllCategories(categoriasConProductos);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="font-sans select-none">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            InactiveNavbar();
          }}
          className={`h-[60px] flex justify-between relative items-center bg-white px-5 md:px-10 transition-all duration-300
            ${navbar ? "bg-opacity-0 text-[#000]" : "bg-opacity-100 text-black"}
            ${isHover ? "md:bg-opacity-100 md:text-black" : "bg-opacity-0"} 
            ${active ? "bg-opacity-100 text-black" : "bg-opacity-0"}
          `}
        >
          <section className="flex gap-4">
            {/* Header - INICIO */}
            <div className="hidden h-auto px-3 py-2 overflow-hidden rounded-md md:flex group">
              <CustomLink to="/" label="INICIO" />
            </div>

            {/* Header - JOYERIA */}
            <div
              className="hidden h-auto px-3 py-2 overflow-hidden rounded-md md:flex group"
              onMouseEnter={() => (setIsHovered(true), setActive(true))}
            >
              <CustomLink
                to=""
                label="JOYERIA"
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
              />
              <section className="absolute w-screen flex flex-row gap-0 h-0 group-hover:h-[350px] overflow-hidden left-[0px] top-full transition-all duration-500 bg-gradient-to-br from-gray-50 to-white shadow-2xl z-50">
                <div className="container flex h-full gap-8 px-8 py-6 mx-auto text-xs">
                  {allCategories.length > 0
                    ? allCategories.map((category, indexC) => (
                        <div key={indexC} className="flex-1 p-0 rounded-lg">
                          <div className="flex items-center pb-3 mb-4 text-gray-400">
                            <a
                              href={`/categoria-producto/${category.id}`}
                              className="hover:text-gray-500"
                            >
                              {category.category}
                            </a>
                          </div>

                          <div className="space-y-5">
                            {category.products.length > 0
                              ? category.products
                                  .slice(-4)
                                  .map((product, indexP) => (
                                    <a
                                      key={indexP}
                                      onClick={() => abrirModalCart(product)}
                                      className="block hover:font-medium"
                                    >
                                      {product.nameP}
                                    </a>
                                  ))
                              : null}
                            <a href={`/categoria-producto/${category.id}`}>
                              . . .
                            </a>
                          </div>
                        </div>
                      ))
                    : null}

                  {/* // note */}
                </div>
              </section>
            </div>

            {/* Header - SOBRE MK */}
            <div
              className="hidden h-auto px-3 py-2 rounded-md md:flex group"
              onMouseEnter={() => (setIsHovered(true), setActive(true))}
            >
              <CustomLink
                to=""
                label="SOBRE MK"
                onMouseEnter={() => (setIsHovered(true), setActive(true))}
              />
              <section className="absolute w-screen flex flex-row gap-0 h-0 group-hover:h-[350px] overflow-hidden left-[0px] top-full transition-all duration-500 bg-gradient-to-br from-gray-50 to-white shadow-2xl z-50">
                <div className="container flex h-full gap-8 px-8 py-6 mx-auto text-xs">
                  {/* Columna 1: CONOCENOS */}
                  <div className="flex-1 p-0 rounded-lg">
                    <div className="flex items-center pb-3 mb-4 text-gray-400 border-b border-gray-200">
                      <p>CONOCENOS</p>
                    </div>

                    <div className="space-y-5">
                      <a
                        onClick={() => navigate("/sobre-nosotros")}
                        className="block hover:font-medium"
                      >
                        Nosotros
                      </a>
                    </div>
                  </div>

                  {/* Columna 2: ATENCIÓN AL CLIENTE */}
                  <div className="flex-1 p-0 rounded-lg">
                    <div className="flex items-center pb-3 mb-4 text-gray-400 border-b border-gray-200">
                      <p>ATENCIÓN AL CLIENTE</p>
                    </div>

                    <div className="space-y-5">
                      <a
                        onClick={() => navigate("/politica-y-privacidad")}
                        className="block hover:font-medium"
                      >
                        Política de privacidad
                      </a>
                    </div>
                  </div>

                  {/* Columna 3: REDES SOCIALES */}
                  <div className="flex-1 p-0 rounded-lg">
                    <div className="flex items-center pb-3 mb-4 text-gray-400 border-b border-gray-200">
                      <p>REDES SOCIALES</p>
                    </div>

                    <div className="space-y-5">
                      <a
                        href="https://www.instagram.com/mayikh.pe/"
                        target="_blank"
                        className="block hover:font-medium"
                      >
                        Instagram
                      </a>

                      <a
                        href="https://wa.link/hd9hwl"
                        target="_blank"
                        className="block hover:font-medium"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Columna 4: LIBRO DE RECLAMACIONES */}
                  <div className="flex-1 p-0 rounded-lg">
                    <div className="flex items-center pb-3 mb-4 text-gray-400 border-b border-gray-200">
                      <p>LIBRO DE RECLAMACIONES</p>
                    </div>

                    <div className="space-y-5">
                      <a href="#" className="block underline hover:font-medium">
                        Libro de reclamaciones
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Header - LO NUEVO */}
            <div
              // flex
              className="hidden h-auto px-3 py-2 rounded-md group"
              onMouseEnter={() => (setIsHovered(true), setActive(true))}
            >
              <CustomLink
                to=""
                label="LO NUEVO"
                onMouseEnter={() => (setIsHovered(true), setActive(true))}
              />
              <section className="absolute text-xs w-screen flex flex-row gap-0 h-0 group-hover:h-[350px] overflow-hidden left-[0px] top-full transition-all duration-500 bg-gradient-to-br from-gray-50 to-white shadow-2xl z-50">
                <div className="container flex h-full gap-8 px-8 py-6 mx-auto">
                  {/* Columna 1: COLECCIONES 2025 */}
                  <div className="flex-1 p-0 rounded-lg">
                    <div className="flex items-center pb-3 mb-4 text-gray-400 border-b border-gray-200">
                      <p>COLECCIONES 2025</p>
                    </div>

                    <div className="space-y-5">
                      <a href="#" className="block hover:font-medium">
                        Primavera-Verano 2025
                      </a>

                      <a href="#" className="block hover:font-medium">
                        Colección San Valentín
                      </a>

                      <a href="#" className="block hover:font-medium">
                        Edición Día de la Madre
                      </a>

                      <a href="#" className="block hover:font-medium">
                        Línea Elegancia
                      </a>
                      <a href="#" className="block hover:font-medium">
                        Colección Minimalista
                      </a>
                    </div>
                  </div>

                  {/* Columna 2: TENDENCIAS */}
                  <div className="flex-1 p-0 rounded-lg">
                    <div className="flex items-center pb-3 mb-4 text-gray-400 border-b border-gray-200">
                      <p>TENDENCIAS</p>
                    </div>

                    <div className="space-y-5">
                      <a href="#" className="block hover:font-medium">
                        Joyas Vintage Revival
                      </a>

                      <a href="#" className="block hover:font-medium">
                        Estilo Boho Chic
                      </a>

                      <a href="#" className="block hover:font-medium">
                        Diseños Geométricos
                      </a>

                      <a href="#" className="block hover:font-medium">
                        Acabados Mate
                      </a>
                    </div>
                  </div>

                  {/* Columna 3: INNOVACIONES */}
                  <div className="flex-1 p-0 rounded-lg">
                    <div className="flex items-center pb-3 mb-4 text-gray-400 border-b border-gray-200">
                      <p>INNOVACIONES</p>
                    </div>

                    <div className="space-y-5">
                      <a href="#" className="block hover:font-medium">
                        Nuevos Materiales
                      </a>

                      <a href="#" className="block hover:font-medium">
                        Piedras Sintéticas
                      </a>

                      <a href="#" className="block hover:font-medium">
                        Acabados Especiales
                      </a>

                      <a href="#" className="block hover:font-medium">
                        Diseño Sostenible
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <img
            onClick={() => Home()}
            src={ImagenLogo}
            className="w-[45px] block transition-opacity absolute top-4 left-[50%] duration-300"
          />

          <div className="flex justify-end">
            <button onClick={() => setSearch(true)} className="w-1/6">
              {/* src={navbar && !isHover && !active ? Seach2 : Seach} */}
              <span className="pointer-events-none">
                <img src={Seach} alt="Boton Buscar" />
              </span>
            </button>

            <button onClick={Perfil} className="w-1/6 mx-5">
              <img src={Profile} alt="Boton Perfil" />
            </button>

            <button
              onClick={() => setOpenCart(true)}
              className="relative w-1/6"
            >
              <img src={Shop} alt="Boton carrito" ref={cartIconRef} />
              {itemCarrito.length > 0 && (
                <div
                  className={`rounded-[100px] text-[10px] w-[15px] h-[15px] absolute right-0 -mt-[10px] bg-[#000000] text-white`}
                >
                  {itemCarrito.length}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
