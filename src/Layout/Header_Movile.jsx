import { useNavigate } from "react-router-dom";
import ImagenLogo from "../assets/LOGO TEXTO.svg";
import ImagenLogo2 from "../assets/icon_marca_white.svg";
import Profile from "../assets/Profile.svg";
import Profile2 from "../assets/person_white.svg";
import Seach from "../assets/Seach.svg";
import Seach2 from "../assets/seach_white.svg";
import Shop from "../assets/Shop.svg";
import Shop2 from "../assets/shop_white.svg";
import { useState } from "react";
import Menu from "../assets/icon_menu.svg";
import Menu2 from "../assets/icon_menu_black.svg";
import Close from "../assets/close_new.svg";
import Arrow from "../assets/ArrowLeft.svg";
import { useAuth } from "../context/authSingleton";
import { useEffect } from "react";

function Header_Movile() {
  const navigate = useNavigate();
  const {
    search,
    setSearch,
    navbar,
    setOpenCart,
    itemCarrito,
    categoryAll,
    cartIconRef,
    Home,
  } = useAuth();
  const [active, setActive] = useState(false);
  const [activeItem1, setActiveItem1] = useState(true);
  const [activeItem2, setActiveItem2] = useState(false);
  const [activeItem3, setActiveItem3] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const ActiveMenu = () => {
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

  useEffect(() => {
    setActive(false);
    setTimeout(() => {
      setIsHover(false);
    }, 500);
  }, [Home]);

  const Perfil = () => {
    navigate("/log-in");
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
            <div className="flex h-auto overflow-hidden rounded-md">
              {/* Boton Menu */}
              <section className="flex items-center gap-2">
                <div onClick={() => ActiveMenu()}>
                  <span className="bg-black pointer-events-none">
                    {isHover ? (
                      <img
                        src={isHover && !search && active ? Close : Menu2}
                        alt="Icono Menu"
                        className={` transition-transform duration-300
                          ${active ? "rotate-90" : " rotate-0"}
                          `}
                      />
                    ) : (
                      <img
                        src={Menu2}
                        alt="Icono Menu"
                        className={` transition-all duration-300
                          ${active ? "rotate-90" : " rotate-0"}
                          `}
                      />
                    )}
                  </span>
                </div>

                <div onClick={() => Home()}>
                  <span className="pointer-events-none">
                    <img
                      src={ImagenLogo}
                      alt="Logo"
                      className="w-[30px] mt-1"
                    />
                  </span>
                </div>
              </section>

              <section
                className={`
                absolute left-0 top-14 w-full text-[#000] bg-[#ffffff] flex flex-col overflow-hidden transition-all duration-500 ease-in-out z-50
                ${active ? "h-[100vh]" : "h-0"}
                `}
              >
                <div className="container flex flex-col h-full px-8 pt-6 pb-20 gap-3 mx-auto overflow-scroll text-xs">
                  {/* Header - NUESTROS PRODUCTOS */}
                  <div className="h-auto">
                    <button
                      className="w-full px-3 py-3 hover:bg-[#ebebeb] rounded-md text-start text-[11px] pb-3 font-medium flex justify-between items-center"
                      onClick={() => setActiveItem1((prev) => !prev)}
                    >
                      <p>NUESTROS PRODUCTOS</p>
                      <span className="pointer-events-none">
                        <img
                          src={Arrow}
                          alt="Disminuir"
                          className={` transition-transform duration-300 w-[6px] ${
                            activeItem1 ? " rotate-90" : ""
                          }`}
                        />
                      </span>
                    </button>
                    <section
                      className={`
                      w-full flex flex-row transition-all duration-500 overflow-hidden px-3
                      ${activeItem1 ? "h-auto" : "h-[0vh]"}
                    `}
                    >
                      <div className="container flex flex-col gap-3 pt-6 mx-auto text-xs">
                        {/* Columna 1: JOYERIA */}
                        <div className="flex-1 h-auto p-0">
                          <div className="flex items-start pb-2 text-gray-400">
                            <p>JOYERIA</p>
                          </div>

                          <div className="w-full">
                            {categoryAll.length > 0
                              ? categoryAll.map((category, index) => (
                                  <a
                                    key={index}
                                    href={`/categoria-producto/${category.id}`}
                                    className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                                  >
                                    {category.category}
                                  </a>
                                ))
                              : null}
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* Header - SOBRE MK */}
                  <div className="h-auto">
                    <button
                      className="w-full px-3 py-3 hover:bg-[#ebebeb] rounded-md text-start text-[11px] pb-3 font-medium flex justify-between items-center"
                      onClick={() => setActiveItem2((prev) => !prev)}
                    >
                      <p>SOBRE MK</p>
                      <span className="pointer-events-none">
                        <img
                          src={Arrow}
                          alt="Disminuir"
                          className={` transition-transform duration-300 w-[6px] ${
                            activeItem2 ? " rotate-90" : ""
                          }`}
                        />
                      </span>
                    </button>
                    <section
                      className={`
                      w-full flex flex-row transition-all duration-500 overflow-hidden px-3
                      ${activeItem2 ? "h-auto" : "h-[0vh]"}
                    `}
                    >
                      <div className="container flex flex-col gap-3 py-6 mx-auto text-xs">
                        {/* Columna 1: CONOCENOS */}
                        <div className="flex-1 h-auto p-0">
                          <div className="flex items-start pb-2 text-gray-400">
                            <p>CONOCENOS</p>
                          </div>

                          <div>
                            <a
                              onClick={() => navigate("/sobre-nosotros")}
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Nosotros
                            </a>
                          </div>
                        </div>

                        {/* Columna 2: ATENCIÓN AL CLIENTE */}
                        <div className="flex-1 h-auto p-0">
                          <div className="flex items-start pb-2 text-gray-400">
                            <p>ATENCIÓN AL CLIENTE</p>
                          </div>

                          <div>
                            <a
                              onClick={() => navigate("/politica-y-privacidad")}
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Política de privacidad
                            </a>
                          </div>
                        </div>

                        {/* Columna 3: REDES SOCIALES */}
                        <div className="flex-1 h-auto p-0">
                          <div className="flex items-start pb-2 text-gray-400">
                            <p>REDES SOCIALES</p>
                          </div>

                          <div>
                            <a
                              href="https://www.instagram.com/mayikh.pe/"
                              target="_blank"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              Instagram
                            </a>

                            <a
                              href="https://wa.link/hd9hwl"
                              target="_blank"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md"
                            >
                              WhatsApp
                            </a>
                          </div>
                        </div>

                        {/* Columna 4: LIBRO DE RECLAMACIONES */}
                        <div className="flex-1 h-auto p-0">
                          <div className="flex items-start pb-2 text-gray-400">
                            <p>LIBRO DE RECLAMACIONES</p>
                          </div>

                          <div>
                            <a
                              href="#"
                              className="w-full p-3 block hover:bg-[#0000000b] rounded-md underline"
                            >
                              Libro de reclamaciones
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* Header - INICIAR SESIÓN */}
                  <div className="h-auto">
                    <button
                      className="w-full px-3 py-3 hover:bg-[#ebebeb] rounded-md text-start text-[11px] pb-3 font-medium flex justify-between items-center"
                      onClick={() => Perfil()}
                    >
                      <p>INICIAR SESIÓN</p>
                      <span className="pointer-events-none">
                        <img
                          src={Arrow}
                          alt="Disminuir"
                          className="transition-transform duration-300 w-[6px]"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <div
            className={`
            flex justify-end transition-opacity duration-300 ease-linear
             ${active ? "opacity-0" : "opacity-100"}
            `}
          >
            <button onClick={() => setSearch(true)} className="w-1/6">
              <span className="pointer-events-none">
                <img src={Seach} alt="Boton Buscar" />
              </span>
            </button>
            <button onClick={Perfil} className="w-1/6 mx-5 overflow-hidden">
              <span className="pointer-events-none">
                <img src={Profile} alt="Boton Perfil" />
              </span>
            </button>
            <button
              onClick={() => setOpenCart(true)}
              className="relative w-1/6"
            >
              <span className="pointer-events-none">
                <img src={Shop} alt="Boton carrito" ref={cartIconRef} />
              </span>
              {itemCarrito.length > 0 && (
                <div className="rounded-[100px] text-[10px] w-[15px] h-[15px] absolute right-0 -mt-[10px] bg-[#000000] text-white">
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

export default Header_Movile;
