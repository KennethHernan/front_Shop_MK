import Header from "../Components/Header";
import Navbar from "../Layout/Navbar";
import Cart from "../Layout/Cart";
import icon_logo from "../assets/icon_logotexto_white.svg";
import AddCart from "../Layout/addCart";
import Footer from "../Layout/Footer";
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
import ProductCard from "../Components/ProductCard";
import icon_Progress from "../assets/progress.svg";
import {
  getProductsByCategory,
  getCategoryNameById,
} from "../Services/firebaseFunction";
import { useParams } from "react-router-dom";

function HomeProduct() {
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
  const [categoriasConProductos, setCategoriasConProductos] = useState([]);
  const [nameCategory, setNameCategory] = useState("");
  const ulRef = useRef(null);
  const imgRef = useRef(null);

  const params = useParams();
  const idCategoria = params?.idCategoria;

  useEffect(() => {
    if (!idCategoria) {
      return;
    }
    async function checkCategory() {
      try {
        const response = await getProductsByCategory(idCategoria);
        const nameCategory = await getCategoryNameById(idCategoria);
        setNameCategory(nameCategory);
        setCategoriasConProductos(response);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    }
    checkCategory();
  }, [idCategoria]);

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

        {/* Titulo */}
        <div className="flex flex-col items-center">
          <p className="mt-5 text-[30px] sm:text-[30px] text-center font-dancing px-5 sm:px-10">
            Categoria
          </p>
          {nameCategory ? (
            <p className="mb-5 -mt-5 text-[30px] sm:text-[30px] text-center font-cinzel px-5 sm:px-10">
              {nameCategory}
            </p>
          ) : (
            <div className=" w-[200px] h-8 bg-[#e7e7e770] animate-pulse mb-5 -mt-3 rounded-md"></div>
          )}
        </div>

        {!categoriasConProductos.length > 0 && (
          <div className="w-full h-[100vh] bg-[#ffffff] flex justify-center items-center">
            <img
              src={icon_Progress}
              alt="icono cargando"
              className="animate-spin"
            />
          </div>
        )}
        {/* Lista de todos los productos - MOVILE */}
        <ul className="w-full px-5 h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {categoriasConProductos.length > 0
            ? categoriasConProductos
                .reverse()
                .map((product, index) => (
                  <ProductCard
                    key={index}
                    product={product}
                    abrirModalCart={abrirModalCart}
                  />
                ))
            : null}
        </ul>

        {/* Titulo 2 */}
        <p className="mb-5 mt-20 text-[30px] text-center sm:text-[30px] font-cinzel px-5 sm:px-10">
          Nuestras Categorias
        </p>

        {/* Lista deCategorias */}
        <section
          className="relative flex items-center group/button"
          style={{ width: "100%" }}
        >
          {MostrarBotonIzquierdo && (
            <button
              className="bg-[#ffffff] border border-black z-20 absolute left-[20px] w-[35px] h-[35px] rounded-[50px] justify-center items-center shadow-md hover:scale-105 transition-transform duration-300 flex"
              onClick={scrollIzquierda}
            >
              <img src={ArrowLeft} className="w-[6px] rotate-180" />
            </button>
          )}
          <ul
            ref={ulRef}
            className="flex justify-start space-x-1 overflow-x-auto select-none no-scrollbar mx-5"
            style={{
              maxWidth: "100%",
              width: "100%",
              display: "flex",
            }}
          >
            {categoryAll.length > 0
              ? categoryAll.map((category, index) => (
                  <li className="min-w-[250px]" key={index}>
                    <a
                      className="w-full h-[40vh] overflow-hidden border-r border-b flex flex-col justify-center items-center text-sm group"
                      href={`/categoria-producto/${category.id}`}
                    >
                      <img
                        src={category.url}
                        alt="Imagen de Categoria"
                        className="h-[25vh] object-cover object-top"
                      />
                      <div className="text-[#6e6e6e] text-center font-sans uppercase group-hover:border-b pb-2 mt-5 transition-all duration-300">
                        {category.category}
                      </div>
                    </a>
                  </li>
                ))
              : Array.from({ length: 5 }).map((_, i) => (
                  <li
                    className="w-[250px] min-w-[250px] text-md animate-pulse flex flex-col items-center"
                    key={i}
                  >
                    <div className="bg-[#e7e7e770] w-[250px] h-[40vh] group relative group/foto"></div>
                    <p className="pt-1 bg-[#e7e7e770] rounded-[5px] w-[160px] h-[23px] my-[2px]"></p>
                    <div className="flex gap-3">
                      <p className="bg-[#e7e7e770] rounded-[5px] w-[60px] h-[23px]"></p>
                    </div>
                  </li>
                ))}
          </ul>
          {MostrarBotonDerecho && productAll.length > 0 && (
            <button
              className="bg-[#ffffff] border border-black z-20 absolute right-[20px] w-[35px] h-[35px] rounded-[50px] justify-center items-center shadow-md hover:scale-105 transition-transform duration-300 flex"
              onClick={scrollDerecha}
            >
              <img src={ArrowLeft} className="w-[6px]" />
            </button>
          )}
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default HomeProduct;
