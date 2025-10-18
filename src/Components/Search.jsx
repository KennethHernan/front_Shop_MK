import React, { useEffect, useState } from "react";
import close from "../assets/close_new.svg";
import search_Icon from "../assets/Seach.svg";
import { useAuth } from "../context/authSingleton";
import Add from "../assets/icon-shop.svg";
import Check from "../assets/Check.svg";
import ProductCard from "./ProductCard";
function Search() {
  const {
    search,
    setSearch,
    itemSearch,
    abrirModalCart,
    setItemSearch,
    productAll,
    productReciente,
    eliminarProducRecientes,
  } = useAuth();
  const [resultado, setResultado] = useState([]);
  const [mounted, setMounted] = useState(false);

  const BorrarItemSearch = () => {
    setItemSearch("");
    setTimeout(() => {
      setResultado([]);
    }, 1500);
  };


  useEffect(() => {
      setMounted(true);      
  }, []);

  useEffect(() => {
    if (itemSearch.length === 0) {
      setTimeout(() => {
        setResultado([]);
      }, 300);
      return;
    }

    setTimeout(() => {
      // Filtro de productos que coinciden con la búsqueda
      const productosFiltrados = productAll.filter(
        (p) =>
          p.nameP.toLowerCase().includes(itemSearch.toLowerCase()) ||
          p.category.toLowerCase().includes(itemSearch.toLowerCase()) ||
          p.description.toLowerCase().includes(itemSearch.toLowerCase())
      );
      setResultado(productosFiltrados);
    }, 300);
  }, [itemSearch, productAll]);

  return (
    <div
      className={`
        fixed w-full top-0 left-0 md:flex justify-center items-center z-40 bg-[#ffffff] md:bg-[#00000091] md:transition-transform md:duration-200 md:ease-linear overflow-hidden
        ${mounted && search ? "h-[100vh] py-2" : "h-[0vh]"}
        `}
    >
      <section className="md:w-[100vh] md:h-[80vh] md:overflow-hidden md:m-5 bg-white md:relative">
        <section className="w-full h-[60px] py-2 flex px-5 items-center justify-between overflow-hidden border-b">
          {/* Icono lupa */}
          <span className="px-2 pointer-events-none">
            <img src={search_Icon} className="w-[30px]" alt="Buscar Producto" />
          </span>

          {/* Input de busqueda */}
          <input
            type="text"
            placeholder="Buscar productos"
            value={itemSearch}
            onChange={(e) => setItemSearch(e.target.value)}
            className="bg-[#fff] w-full mr-10 outline-none text-sm px-2 py-1"
          />

          {/* Boton borrar texto */}
          {itemSearch.length > 0 && (
            <button
              onClick={() => BorrarItemSearch()}
              className="mr-2 text-xs font-medium"
            >
              <span>Borrar</span>
            </button>
          )}

          {/* Boton cerrar busqueda */}
          <div
            className={`
        h-full flex items-center justify-end
        ${itemSearch.length > 0 && "border-l pl-2 ml-2"}
          `}
          >
            <button
              onClick={() => (
                setSearch(false), setItemSearch(""), setResultado([])
              )}
              className="w-[30px] h-[23px] hover:rotate-45 transition-transform duration-300 ease-linear"
            >
              <span className="pointer-events-none">
                <img
                  src={close}
                  className="w-full h-full"
                  alt="Boton Cerrar Busqueda"
                />
              </span>
            </button>
          </div>
        </section>

        {/* Contenido busqueda */}
        <section
          className={`
        w-full h-screen absolute px-5 py-3 bg-white overflow-auto
        ${itemSearch.length > 0 ? "hidden" : "block"}
        `}
        >
          <section className="relative w-full h-screen">
            {productReciente.length > 0 && (
              <>
                {/* Titulo 1 */}
                <div className="flex items-center justify-between w-full h-auto pb-2 my-2">
                  <p className="text-sm">VISTOS RECIENTES</p>
                  <button
                    onClick={() => eliminarProducRecientes()}
                    className="text-xs font-medium hover:scale-105"
                  >
                    Borrar
                  </button>
                </div>

                {/* Lista de productos vistos Reciente */}
                {/* Movile */}
                <ul className="grid w-full h-auto grid-cols-2 gap-2 font-light md:hidden md:grid-cols-3">
                  {productReciente
                    ? productReciente
                      .slice(-4)
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
                {/* Desktop */}
                <ul className="hidden w-full h-auto grid-cols-2 gap-2 font-light md:grid md:grid-cols-3">
                  {productReciente
                    ? productReciente
                      .slice(-3)
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
              </>
            )}
            {/* LOS MÁS BUSCADOS */}
            {productAll.length > 0 && (
              <>
                {/* Titulo 2 */}
                <div className="flex items-center justify-between w-full h-auto pb-2 my-2">
                  <p className="text-sm">LOS MÁS BUSCADOS</p>
                  <button className="text-xs font-medium hover:scale-105">
                    Ver más
                  </button>
                </div>

                {/* Lista de productos populares */}
                {/* Movile */}
                <ul className="grid w-full h-auto grid-cols-2 gap-2 pb-24 font-light md:hidden">
                  {productAll
                    ? productAll
                      .slice(-4)
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
                {/* Descktop */}
                <ul className="hidden w-full h-auto grid-cols-3 gap-2 font-light md:grid pb-52">
                  {productAll
                    ? productAll
                      .slice(-6)
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
              </>
            )}
          </section>
        </section>

        {/* Contenido "RESULTADO" busqueda */}
        <section
          className={`
        w-full h-auto absolute px-5 overflow-auto
        ${itemSearch.length > 0 ? "block py-3 mt-2" : "hidden"}`}
        >
          <section className="relative w-full h-screen">
            {/* Titulo 1 */}
            {resultado.length > 0 && (
              <p className="text-sm md:text-[20px] mb-3 md:mb-7 md:my-3">
                PRODUCTOS: <b className="font-medium">"{itemSearch}"</b>
              </p>
            )}

            {/* Mensaje de no resultados */}
            {resultado.length === 0 && itemSearch.length > 0 && (
              <div className="w-full">
                <p className="text-xs text-center text-black">
                  No se encontraron resultados de
                  <b className="font-medium"> "{itemSearch}", </b>
                  intente con otra busqueda.
                </p>
              </div>
            )}

            {/* Lista de productos */}
            <ul className="grid w-full h-auto grid-cols-2 gap-2 pb-24 font-light md:pb-64 md:grid-cols-3">
              {resultado
                ? resultado.map((product, index) => (
                  <ProductCard
                    key={index}
                    product={product}
                    abrirModalCart={abrirModalCart}
                  />
                ))
                : null}
            </ul>
          </section>
        </section>


      </section>
    </div>
  );
}

export default Search;
