import Header from "../Components/Header";
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
import { useAuth } from "../context/authSingleton";
import Fondo_movile from "../assets/fondo_pordata1_movile.webp";
import Fondo from "../assets/fondo_portada-1.webp";
import Fondo2 from "../assets/fondo_portada2.webp";
import Fondo3 from "../assets/Frame-38.webp";
import CategoryCard from "../Components/CategoryCard";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

function HomePage() {
  const {
    Disminuir,
    Aumentar,
    productAll,
    abrirModalCart,
    añadirAlCarrito,
    categoryAll,
    setNavbar,
  } = useAuth();

  const [MostrarBotonDerecho, setMostrarBotonDerecho] = useState(false);
  const [MostrarBotonIzquierdo, setMostrarBotonIzquierdo] = useState(false);
  const ulRef = useRef(null);

  const imgRef = useRef(null);

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
  }, [setNavbar]);

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

  const scrollDerecha = () => {
    ulRef.current.scrollBy({ left: 1000, behavior: "smooth" });
  };
  const scrollIzquierda = () => {
    ulRef.current.scrollBy({ left: -1000, behavior: "smooth" });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans select-none">
      <Cart
        onAumentar={(id) => Aumentar(id)}
        onDisminuir={(id) => Disminuir(id)}
      />
      <AddCart onAgregar={(p) => añadirAlCarrito(p)} imgRef={imgRef} />
      <Search onModalCart={(p) => abrirModalCart(p)} />
      {/* Body */}
      <div id="Home" className="w-[100wh] z-0">
        {/* Anuncion informativo */}
        <div className="bg-transparent">
          <Navbar />
        </div>

        {/* Header */}
        <Header />

        {/* Portada 1 */}
        <div className="w-full h-auto overflow-hidden -mt-[60px] bg-[#c5c5c5] flex justify-center items-center">
          {/* Portadas Descktop */}
          <Swiper
            loop={true}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000 }}
            className="hidden sm:block"
          >
            <SwiperSlide>
              <img
                src={Fondo3}
                alt="Fondo"
                width="full"
                height="60vh"
                loading="eager"
                className="object-contain w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Fondo3}
                alt="Fondo"
                width="full"
                height="60vh"
                loading="eager"
                className="object-contain w-full h-full"
              />
            </SwiperSlide>
          </Swiper>

          {/* Protada Movile */}
          <Swiper
            loop={true}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000 }}
            className="block sm:hidden"
          >
            <SwiperSlide>
              <img
                src={Fondo_movile}
                alt="Fondo"
                width="full"
                height="60vh"
                loading="eager"
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Fondo_movile}
                alt="Fondo"
                width="full"
                height="60vh"
                loading="eager"
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          </Swiper>

          <style jsx>{`
            .swiper-pagination-bullet {
              width: 4px;
              height: 4px;
              background: gray;
              opacity: 0.5;
            }
            .swiper-pagination-bullet-active {
              background: black;
              opacity: 1;
            }
          `}</style>
        </div>

        {/* Titulo */}
        <p className="mt-20 mb-5  text-[30px] md:text-[30px] text-center font-cinzel px-5 md:px-10">
          Novedades para tí
        </p>

        {/* Seccion Producto 1 */}
        <section className="w-full h-[50vh] sm:h-[100vh] flex mb-0 md:mb-10">
          {/* Productos */}
          <div className="w-full flex justify-center items-center">
            <div className="w-[30vh] md:w-[40vh] h-auto">
              <Swiper
                loop={true}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 8000 }}
                className="pb-14"
              >
                {productAll.length > 0
                  ? productAll.slice(-5).map((product, index) => (
                      <SwiperSlide
                        onClick={() => abrirModalCart(product)}
                        key={index}
                      >
                        <div className="h-[30vh] md:h-[50vh] group relative">
                          <img
                            src={product.urlP}
                            alt="producto"
                            className="w-full h-full absolute top-0 object-cover"
                          />
                          {product.stock <= 0 && (
                            <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                              Agotado
                            </button>
                          )}
                        </div>

                        {/* Nombre Producto */}
                        <p className="text-center text-md mt-3">
                          {product.nameP}
                        </p>
                        <div className="flex gap-1 justify-center text-sm text-[#6e6e6e]">
                          {product.discount <= 1 ? (
                            <p>S/ {product.price.toFixed(2)}</p>
                          ) : (
                            <>
                              <p>
                                S/{" "}
                                {(
                                  product.price -
                                  (product.discount / 100) * product.price
                                ).toFixed(2)}
                              </p>
                              <p className="line-through text-[#ababab]">
                                S/ {product.price.toFixed(2)}
                              </p>
                            </>
                          )}
                        </div>
                      </SwiperSlide>
                    ))
                  : Array.from({ length: 2 }).map((_, i) => (
                      <SwiperSlide
                        key={i}
                        className=" flex flex-col justify-center animate-pulse"
                      >
                        <div className="bg-[#e7e7e7] h-[50vh]"></div>
                        <p className="pt-1 bg-[#e7e7e7] rounded-[5px] w-auto mx-10 h-[23px] mt-3 mb-1"></p>
                        <div className="flex gap-3 justify-center">
                          <p className="bg-[#e7e7e7] rounded-[5px] w-[60px] h-[23px]"></p>
                        </div>
                      </SwiperSlide>
                    ))}
              </Swiper>
              <style jsx>{`
                .swiper-pagination-bullet {
                  width: 6px;
                  height: 6px;
                  background: gray;
                  opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                  background: black;
                  opacity: 1;
                }
              `}</style>
            </div>
          </div>
          {/* Imagen referencia */}
          <div className="w-full border-y border-l hidden sm:block">
            <img
              src={Fondo}
              alt="Fondo"
              className="w-full h-[100vh] object-cover"
            />
          </div>
        </section>

        {/* Frase */}
        <div className="w-auto text-[20px] lg:text-[30px] px-10 my-20 text-center overflow-hidden">
          <p className="font-dancing">
            Cada pieza fue creada para recordarte que eres única, valiosa y
            capaz de conquistar el mundo. No solo uses joyas, exprésate con
            ellas.
          </p>
        </div>

        {/* Titulo 2 */}
        <p className="my-5 text-[30px] text-center md:text-[30px] font-cinzel px-5 md:px-10">
          Nuestras categorías
        </p>

        {/* Lista de Categorias */}
        <section className="border-t border-l" style={{ width: "100%" }}>
          {/* Movile */}
          <ul className="w-full h-auto flex md:hidden flex-col space-y-4 justify-center font-light text-[16px]">
            {categoryAll.length > 0
              ? categoryAll.map((category, index) => (
                  <CategoryCard key={index} category={category} />
                ))
              : Array.from({ length: 2 }).map((_, i) => (
                  <CategoryCard key={i} category={false} />
                ))}
          </ul>

          {/* Desktop */}
          <ul className="w-full h-auto hidden md:grid md:grid-cols-2 lg:grid-cols-3 place-items-center font-light">
            {categoryAll.length > 0
              ? categoryAll.map((category, index) => (
                  <CategoryCard key={index} index={index} category={category} />
                ))
              : Array.from({ length: 2 }).map((_, i) => (
                  <CategoryCard key={i} index={null} category={false} />
                ))}
          </ul>
        </section>

        {/* Portada 2 */}
        <div
          className="bg-[#bebebe] h-[70vh] mt-10"
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
            <p>Acero inoxidable duradero y con estilo.</p>
          </div>
          <div className="overflow-hidden">
            <p className="font-medium ">Diseño que inspira</p>
            <p>Moderno, elegante y para todo momento.</p>
          </div>
          <div className="overflow-hidden">
            <p className="font-medium">Hecho para durar</p>
            <p>Resistente al agua y hipoalergénico.</p>
          </div>
        </section>

        {/* Titulo 2 */}
        <p className="pb-5 text-[30px] md:text-[30px] text-center font-cinzel px-5">
          Nuestras tendencia
        </p>

        {/* Lista de Productos 1 */}
        <section
          className="relative flex items-center group/button"
          style={{ width: "100%" }}
        >
          {MostrarBotonIzquierdo && (
            <button
              className="bg-[#ffffff] z-20 absolute left-[20px] w-[45px] h-[45px] rounded-[50px] justify-center items-center shadow-md hover:scale-105 transition-transform duration-300 flex"
              onClick={scrollIzquierda}
            >
              <img src={ArrowLeft} className="w-[6px] rotate-180" />
            </button>
          )}
          <ul
            ref={ulRef}
            className="flex justify-start space-x-1 overflow-x-auto font-light select-none no-scrollbar mx-10"
            style={{
              maxWidth: "100%",
              width: "100%",
              display: "flex",
            }}
          >
            {productAll.length > 0
              ? productAll.slice(-10).map((product, index) => (
                  <li
                    className="w-[300px] min-w-[350px] text-md"
                    onClick={() => abrirModalCart(product)}
                    key={index}
                  >
                    <div className="h-[50vh] group relative">
                      {/* Juego de imagenes - Max 2 img */}
                      <img
                        src={product.urlP}
                        alt="producto"
                        className="absolute top-0 object-cover w-full h-full"
                      />
                      {product.stock <= 0 && (
                        <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                          Agotado
                        </button>
                      )}
                    </div>

                    {/* Nombre Producto */}
                    <p className="pt-1">{product.nameP}</p>
                    <div className="flex gap-1">
                      {product.discount <= 1 ? (
                        <p>S/ {product.price.toFixed(2)}</p>
                      ) : (
                        <>
                          <p>
                            S/{" "}
                            {(
                              product.price -
                              (product.discount / 100) * product.price
                            ).toFixed(2)}
                          </p>
                          <p className="line-through text-[#ababab]">
                            S/ {product.price.toFixed(2)}
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

        {/* Portada 3 */}
        <div className="bg-[#F2D0BD] w-[100wh] h-[50vh] md:h-[100vh] mt-20 flex flex-col md:flex-row overflow-hidden">
          <section className="relative flex flex-col justify-between w-auto h-full p-10 font-light md:p-32">
            <div className="z-20">
              <p className="text-[28px] md:text-[50px] italic mb-8 md:mb-10">
                Cada joya tiene una historia… ¿ya elegiste la tuya?
              </p>
              <a
                href="https://www.instagram.com/mayikh.pe/"
                target="_blank"
                className="px-5 py-3 my-5 text-sm font-normal text-white transition-colors duration-500 bg-black rounded-sm md:px-8 md:text-md hover:bg-white hover:text-black"
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
                <a
                  href="https://www.instagram.com/mayikh.pe/"
                  target="_blank"
                  className="font-medium hover:underline"
                >
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
