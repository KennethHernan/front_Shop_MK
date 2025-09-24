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
import Menu from "../assets/icon_menu.svg";
import Menu2 from "../assets/icon_menu_black.svg";
import Close from "../assets/close_new.svg";

function CustomLink({ to, label, ...props }) {
  AOS.init();
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <p
        {...props}
        className={`text-[11px] md:text-xs font-medium 
          ${isActive && "font-semibold"}
        `}
      >
        {label}
      </p>
    </Link>
  );
}

function Header_Movile({ navbar, onAbrirCarrito, cantidadCart, cartIconRef }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const InactiveNavbar = () => {
    if (!isHover) {
      setActive(true);
      setIsHover(true);
    }
    if (isHover) {
      setActive(false);
      setTimeout(() => {
        setIsHover(false);
      }, 500);
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
          className={`h-[60px] flex justify-between text-[#fff] relative items-center px-5 md:px-10
            ${active || isHover || !navbar  && "bg-white text-black"}
            ${isHover  && "bg-white text-black"}
          `}
        >
          <section className="flex gap-4">
            {/* Header - MENU ANDROID */}
            <div
              className="h-auto px-3 py-2 rounded-md flex overflow-hidden"
              onClick={() => InactiveNavbar()}
            >
              <div className="flex gap-2 items-center">
                {isHover ? (
                  <img
                    src={isHover && active ? Close : Menu2}
                    alt="Icono Menu"
                    className={` transition-transform duration-300
                  ${active ? "rotate-90" : " rotate-0"}
                  `}
                  />
                ) : (
                  <img
                    src={navbar && !isHover && !active ? Menu : Menu2}
                    alt="Icono Menu"
                    className={` transition-all duration-300
                  ${active ? "rotate-90" : " rotate-0"}
                  `}
                  />
                )}
                <img src={navbar && !isHover && !active ? ImagenLogo2 : ImagenLogo}alt="Logo" className="w-[30px] mt-1" />
              </div>

              <section
                className={`
                absolute w-full text-[#000] flex flex-col gap-0 overflow-hidden left-[0px] top-full transition-all duration-500 ease-in-out bg-gradient-to-br from-gray-50 to-white shadow-2xl z-50
                ${active ? "h-[350px]" : "h-0"}
                `}
              >
                <div className="container text-xs mx-auto px-8 py-6 flex gap-8 h-full">
                  {/* Columna 1: ANILLOS */}
                  <div className="flex-1 rounded-lg p-0">
                    <div className="flex items-center mb-4 pb-3 border-b border-gray-200 text-gray-400">
                      <p>ANILLOS</p>
                    </div>

                    <div className="space-y-5">
                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Anillos de Compromiso
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Anillos de Matrimonio
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Anillos de Oro
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
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
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Collares de Oro
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Collares de Plata
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Cadenas
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
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
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Pulseras de Oro
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Pulseras de Plata
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Brazaletes
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Pulseras con Dijes
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Header - JOYERIA */}
            <div
              className="hidden md:flex h-auto group px-3 py-2 rounded-md transition-all duration-1000 overflow-hidden"
              onMouseEnter={() => setActive(true)}
            >
              <CustomLink
                to=""
                label="JOYERIA"
                onMouseEnter={() => {
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
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Anillos de Compromiso
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Anillos de Matrimonio
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Anillos de Oro
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
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
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Collares de Oro
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Collares de Plata
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Cadenas
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
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
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Pulseras de Oro
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Pulseras de Plata
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Brazaletes
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
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
              className="hidden md:flex h-auto group px-3 py-2 rounded-md transition-all duration-1000"
              onMouseEnter={() => setActive(true)}
            >
              <CustomLink
                to=""
                label="SOBRE MK"
                onMouseEnter={() => setActive(true)}
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
                        className="block hover:font-medium transition-all duration-300"
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
                        className="block hover:font-medium transition-all duration-300"
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
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Facebook
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Instagram
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        WhatsApp
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
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
                        className="block hover:font-medium transition-all duration-300"
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
              className="hidden md:flex h-auto group px-3 py-2 rounded-md transition-all duration-1000"
              onMouseEnter={() => setActive(true)}
            >
              <CustomLink
                to=""
                label="LO NUEVO"
                onMouseEnter={() => setActive(true)}
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
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Primavera-Verano 2025
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Colección San Valentín
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Edición Día de la Madre
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Línea Elegancia
                      </a>
                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
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
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Joyas Vintage Revival
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Estilo Boho Chic
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Diseños Geométricos
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
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
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Nuevos Materiales
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Piedras Sintéticas
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Acabados Especiales
                      </a>

                      <a
                        href="#"
                        className="block hover:font-medium transition-all duration-300"
                      >
                        Diseño Sostenible
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>

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
              onClick={onAbrirCarrito}
              className="w-1/6 hover:w-1/5 relative"
            >
              <img
                src={navbar && !isHover && !active ? Shop2 : Shop}
                alt="Boton carrito"
                ref={cartIconRef}
              />
              {cantidadCart.length > 0 && (
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
                  {cantidadCart.length}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header_Movile;
