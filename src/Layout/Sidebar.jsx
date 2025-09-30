import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import { useAuth } from "../context/AuthContext";
import ImagenLogo from "../assets/LOGO TEXTO.svg";
import ImagenLogo2 from "../assets/icon_marca_white.svg";
import Profile from "../assets/Profile.svg";
import Profile2 from "../assets/person_white.svg";
import Seach from "../assets/Seach.svg";
import Seach2 from "../assets/seach_white.svg";
import Shop from "../assets/Shop.svg";
import Shop2 from "../assets/shop_white.svg";
import { useState } from "react";
import { time } from "framer-motion";
import Footer from "../Layout/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { nav } from "framer-motion/client";
import Menu from "../assets/icon_menu.svg"
import Menu2 from "../assets/icon_menu_black.svg"
import Close from "../assets/close_new.svg"
import { useAuth } from "../context/AuthContext";

function CustomLink({ to, label, ...props }) {
  AOS.init();
  const location = useLocation();
  const isHovered = location.pathname === to;
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <p
        {...props}
        className={`text-[11px] md:text-xs hover:font-semibold 
          ${isActive ? "font-semibold" : "font-medium"}
          ${isHovered ? "font-semibold" : "font-medium"}
        `}
      >
        {label}
      </p>
    </Link>
  );
}

function Sidebar({ cartIconRef }) {
  const { navbar, openCart, setOpenCart, itemCarrito } = useAuth();
  const navigate = useNavigate();
  const [isHover, setIsHovered] = useState(false);
  const [active, setActive] = useState(false);

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

  const Home = () => {
    console.log("Click");
    navigate("/");
  };

  return (
    <>
      <div className="font-sans select-none">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => InactiveNavbar(true)}
          className={`h-[60px] flex justify-between relative items-center px-5 md:px-10 transition-colors duration-300
            ${navbar ? "bg-[#ffffff00] text-[#fff]" : "bg-[#ffffff] text-black"}
            ${isHover ? "md:bg-white md:text-black" : ""} 
            ${active ? "bg-white text-black" : ""}
          `}
        >
          <section className="flex gap-4">
            {/* Header - JOYERIA */}
            <div
              className="hidden md:flex h-auto group px-3 py-2 rounded-md overflow-hidden"
              onMouseEnter={() => (setIsHovered(true), setActive(true))}
            >
              <CustomLink
                to="/"
                label="JOYERIA"
                onMouseEnter={() => {
                  setIsHovered(true);
                  setActive(true);
                }}
              />
              <section className="absolute w-screen flex flex-row gap-0 h-0 group-hover:h-[350px] overflow-hidden left-[0px] top-full transition-all duration-500 bg-gradient-to-br from-gray-50 to-white shadow-2xl z-50">
                <div className="container text-xs mx-auto px-8 py-6 flex gap-8 h-full">
                  {/* Columna 1: ANILLOS */}
                  <div className="flex-1 rounded-lg p-0">
                    <div className="flex items-center mb-4 pb-3 border-b border-gray-200 text-gray-400">
                      <p>ANILLOS</p>
                    </div>

                    <div className="space-y-5">
                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Anillos de Compromiso
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Anillos de Matrimonio
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Anillos de Oro
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Anillos de Plata
                      </a>
                    </div>
                  </div>

                  {/* Columna 2: COLLARES */}
                  <div className="flex-1 rounded-lg p-0">
                    <div className="flex items-center mb-4 pb-3 border-b border-gray-200 text-gray-400">
                      <p>COLLARES</p>
                    </div>

                    <div className="space-y-5">
                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Collares de Oro
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Collares de Plata
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Cadenas
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Dijes
                      </a>
                    </div>
                  </div>

                  {/* Columna 3: PULSERAS */}
                  <div className="flex-1 rounded-lg p-0">
                    <div className="flex items-center mb-4 pb-3 border-b border-gray-200 text-gray-400">
                      <p>PULSERAS</p>
                    </div>

                    <div className="space-y-5">
                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Pulseras de Oro
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Pulseras de Plata
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Brazaletes
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Pulseras con Dijes
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Header - SOBRE MK */}
            <div
              className="hidden md:flex h-auto group px-3 py-2 rounded-md"
              onMouseEnter={() => (setIsHovered(true), setActive(true))}
            >
              <CustomLink
                to=""
                label="SOBRE MK"
                onMouseEnter={() => (setIsHovered(true), setActive(true))}
              />
              <section className="absolute w-screen flex flex-row gap-0 h-0 group-hover:h-[350px] overflow-hidden left-[0px] top-full transition-all duration-500 bg-gradient-to-br from-gray-50 to-white shadow-2xl z-50">
                <div className="container text-xs mx-auto px-8 py-6 flex gap-8 h-full">
                  {/* Columna 1: CONOCENOS */}
                  <div className="flex-1 rounded-lg p-0">
                    <div className="flex items-center mb-4 pb-3 border-b border-gray-200 text-gray-400">
                      <p>CONOCENOS</p>
                    </div>

                    <div className="space-y-5">
                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Nosotros
                      </a>
                    </div>
                  </div>

                  {/* Columna 2: ATENCIÓN AL CLIENTE */}
                  <div className="flex-1 rounded-lg p-0">
                    <div className="flex items-center mb-4 pb-3 border-b border-gray-200 text-gray-400">
                      <p>ATENCIÓN AL CLIENTE</p>
                    </div>

                    <div className="space-y-5">
                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Política de privacidad
                      </a>
                    </div>
                  </div>

                  {/* Columna 3: REDES SOCIALES */}
                  <div className="flex-1 rounded-lg p-0">
                    <div className="flex items-center mb-4 pb-3 border-b border-gray-200 text-gray-400">
                      <p>REDES SOCIALES</p>
                    </div>

                    <div className="space-y-5">
                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Facebook
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Instagram
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        WhatsApp
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Tiktok
                      </a>
                    </div>
                  </div>

                  {/* Columna 4: LIBRO DE RECLAMACIONES */}
                  <div className="flex-1 rounded-lg p-0">
                    <div className="flex items-center mb-4 pb-3 border-b border-gray-200 text-gray-400">
                      <p>LIBRO DE RECLAMACIONES</p>
                    </div>

                    <div className="space-y-5">
                      <a
                        href="#"
                        className="block hover:font-medium underline"
                      >
                        Libro de reclamaciones
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Header - LO NUEVO */}
            <div
              className="hidden md:flex h-auto group px-3 py-2 rounded-md"
              onMouseEnter={() => (setIsHovered(true), setActive(true))}
            >
              <CustomLink
                to=""
                label="LO NUEVO"
                onMouseEnter={() => (setIsHovered(true), setActive(true))}
              />
              <section className="absolute text-xs w-screen flex flex-row gap-0 h-0 group-hover:h-[350px] overflow-hidden left-[0px] top-full transition-all duration-500 bg-gradient-to-br from-gray-50 to-white shadow-2xl z-50">
                <div className="container mx-auto px-8 py-6 flex gap-8 h-full">
                  {/* Columna 1: COLECCIONES 2025 */}
                  <div className="flex-1 rounded-lg p-0">
                    <div className="flex items-center mb-4 pb-3 border-b border-gray-200 text-gray-400">
                      <p>COLECCIONES 2025</p>
                    </div>

                    <div className="space-y-5">
                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Primavera-Verano 2025
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Colección San Valentín
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Edición Día de la Madre
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Línea Elegancia
                      </a>
                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Colección Minimalista
                      </a>
                    </div>
                  </div>

                  {/* Columna 2: TENDENCIAS */}
                  <div className="flex-1 rounded-lg p-0">
                    <div className="flex items-center mb-4 pb-3 border-b border-gray-200 text-gray-400">
                      <p>TENDENCIAS</p>
                    </div>

                    <div className="space-y-5">
                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Joyas Vintage Revival
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Estilo Boho Chic
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Diseños Geométricos
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Acabados Mate
                      </a>
                    </div>
                  </div>

                  {/* Columna 3: INNOVACIONES */}
                  <div className="flex-1 rounded-lg p-0">
                    <div className="flex items-center mb-4 pb-3 border-b border-gray-200 text-gray-400">
                      <p>INNOVACIONES</p>
                    </div>

                    <div className="space-y-5">
                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Nuevos Materiales
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Piedras Sintéticas
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Acabados Especiales
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium"
                      >
                        Diseño Sostenible
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>

          {navbar && (
            <img
              src={ImagenLogo2}
              className="w-[45px] block transition-opacity absolute top-7 left-[50%] duration-300"
            />
          )}

          <div className="flex justify-end">
            <button onClick={Home} className="w-1/6 hover:w-1/5">
              <img
                src={navbar && !isHover && !active ? Seach2 : Seach}
                alt="Boton Buscar"
              />
            </button>
            <button onClick={Home} className="w-1/6 mx-5 hover:w-1/5">
              <img
                src={navbar && !isHover && !active ? Profile2 : Profile}
                alt="Boton Perfil"
              />
            </button>
            <button
              onClick={() => setOpenCart(true)}
              className="w-1/6 hover:w-1/5 relative"
            >
              <img
                src={navbar && !isHover && !active ? Shop2 : Shop}
                alt="Boton carrito"
                ref={cartIconRef}
              />
              {itemCarrito.length > 0 && (
                <div
                  className={`
                    rounded-[100px] text-[10px] w-[15px] h-[15px] absolute right-0 -mt-[10px]
                  ${
                    navbar && !isHover && !active
                      ? "bg-[#fff] text-black"
                      : "bg-[#000000] text-white"
                  } 
                  `}
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
