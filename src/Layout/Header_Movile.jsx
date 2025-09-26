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
  const [activeItem1, setActiveItem1] = useState(false);
  const [activeItem2, setActiveItem2] = useState(false);
  const [activeItem3, setActiveItem3] = useState(false);
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
            ${active || isHover || (!navbar && "bg-white text-black")}
            ${isHover && "bg-white text-black"}
          `}
        >
          <section className="flex gap-4 overflow-hidden">
            {/* Header - MENU ANDROID */}
            <div className="h-auto px-3 py-2 rounded-md flex overflow-hidden">
              {/* Boton Menu */}
              <div
                className="flex gap-2 items-center"
                onClick={() => InactiveNavbar()}
              >
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
                <img
                  src={navbar && !isHover && !active ? ImagenLogo2 : ImagenLogo}
                  alt="Logo"
                  className="w-[30px] mt-1"
                />
              </div>

              <section
                className={`
                absolute left-0 top-14 w-full text-[#000] bg-[#ffffff] flex flex-col overflow-hidden transition-all duration-500 ease-in-out z-50
                ${active ? "h-[100vh]" : "h-0"}
                `}
              >
                <div className="container text-xs mx-auto px-8 py-6 flex flex-col gap-8 h-full overflow-scroll">
                  {/* Header - JOYERIA */}
                  <div className="h-auto px-3 py-2">
                    <button
                      className="w-full text-start text-[11px] pb-3 font-medium border-b flex justify-between items-center"
                      onClick={() => setActiveItem1((prev) => !prev)}
                    >
                      <p>JOYERIA</p>
                      <img src={Close} alt="Disminuir" className={` transition-transform duration-300 w-[20px] ${activeItem1 ? " rotate-90" : "rotate-45"}`} />
                    </button>
                    <section
                      className={`
                      w-full flex flex-row bg-white transition-all duration-500 overflow-hidden
                      ${activeItem1 ? "h-auto" : "h-[0vh]"}
                    `}
                    >
                      <div className="container text-xs mx-auto py-6 flex flex-col gap-3">
                        {/* Columna 1: ANILLOS */}
                        <div className="h-auto flex-1 p-0">
                          <div className="flex items-start pb-2 text-gray-400">
                            <p>ANILLOS</p>
                          </div>

                          <div className="w-full">
                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Anillos de Compromiso
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Anillos de Matrimonio
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Anillos de Oro
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Anillos de Plata
                            </a>
                          </div>
                        </div>

                        {/* Columna 2: COLLARES */}
                        <div className="h-auto flex-1 p-0">
                          <div className="flex items-start pb-2 text-gray-400">
                            <p>COLLARES</p>
                          </div>

                          <div className="W-full">
                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Collares de Oro
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Collares de Plata
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Cadenas
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Dijes
                            </a>
                          </div>
                        </div>

                        {/* Columna 3: PULSERAS */}
                        <div className="h-auto flex-1 p-0">
                          <div className="flex items-start pb-2 text-gray-400">
                            <p>PULSERAS</p>
                          </div>

                          <div className="w-full">
                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Pulseras de Oro
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Pulseras de Plata
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Brazaletes
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Pulseras con Dijes
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  
                  {/* Header - SOBRE MK */}
                  <div className="h-auto px-3 py-2">
                    <button
                      className="w-full text-start text-[11px] pb-3 font-medium border-b flex justify-between items-center"
                      onClick={() => setActiveItem2((prev) => !prev)}
                    >
                      <p>JOYERIA</p>
                      <img src={Close} alt="Disminuir" className={` transition-transform duration-300 w-[20px] ${activeItem1 ? " rotate-90" : "rotate-45"}`} />
                    </button>
                    <section
                      className={`
                      w-full flex flex-row bg-white transition-all duration-500 overflow-hidden
                      ${activeItem2 ? "h-auto" : "h-[0vh]"}
                    `}
                    >
                      <div className="container text-xs mx-auto py-6 flex flex-col gap-3">
                        {/* Columna 1: ANILLOS */}
                        <div className="h-auto flex-1 p-0">
                          <div className="flex items-start pb-2 text-gray-400">
                            <p>ANILLOS</p>
                          </div>

                          <div className="w-full">
                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Anillos de Compromiso
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Anillos de Matrimonio
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Anillos de Oro
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Anillos de Plata
                            </a>
                          </div>
                        </div>

                        {/* Columna 2: COLLARES */}
                        <div className="h-auto flex-1 p-0">
                          <div className="flex items-start pb-2 text-gray-400">
                            <p>COLLARES</p>
                          </div>

                          <div className="W-full">
                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Collares de Oro
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Collares de Plata
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Cadenas
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Dijes
                            </a>
                          </div>
                        </div>

                        {/* Columna 3: PULSERAS */}
                        <div className="h-auto flex-1 p-0">
                          <div className="flex items-start pb-2 text-gray-400">
                            <p>PULSERAS</p>
                          </div>

                          <div className="w-full">
                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Pulseras de Oro
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Pulseras de Plata
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Brazaletes
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Pulseras con Dijes
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  
                  {/* Header - JOYERIA */}
                  <div className="h-auto px-3 py-2">
                    <button
                      className="w-full text-start text-[11px] pb-3 font-medium border-b flex justify-between items-center"
                      onClick={() => setActiveItem3((prev) => !prev)}
                    >
                      <p>JOYERIA</p>
                      <img src={Close} alt="Disminuir" className={` transition-transform duration-300 w-[20px] ${activeItem1 ? " rotate-90" : "rotate-45"}`} />
                    </button>
                    <section
                      className={`
                      w-full flex flex-row bg-white transition-all duration-500 overflow-hidden
                      ${activeItem3 ? "h-auto" : "h-[0vh]"}
                    `}
                    >
                      <div className="container text-xs mx-auto py-6 flex flex-col gap-3">
                        {/* Columna 1: ANILLOS */}
                        <div className="h-auto flex-1 p-0">
                          <div className="flex items-start pb-2 text-gray-400">
                            <p>ANILLOS</p>
                          </div>

                          <div className="w-full">
                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Anillos de Compromiso
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Anillos de Matrimonio
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Anillos de Oro
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Anillos de Plata
                            </a>
                          </div>
                        </div>

                        {/* Columna 2: COLLARES */}
                        <div className="h-auto flex-1 p-0">
                          <div className="flex items-start pb-2 text-gray-400">
                            <p>COLLARES</p>
                          </div>

                          <div className="W-full">
                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Collares de Oro
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Collares de Plata
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Cadenas
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Dijes
                            </a>
                          </div>
                        </div>

                        {/* Columna 3: PULSERAS */}
                        <div className="h-auto flex-1 p-0">
                          <div className="flex items-start pb-2 text-gray-400">
                            <p>PULSERAS</p>
                          </div>

                          <div className="w-full">
                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Pulseras de Oro
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Pulseras de Plata
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Brazaletes
                            </a>

                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Pulseras con Dijes
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
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
