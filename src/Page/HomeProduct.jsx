import React, { use, useEffect, useState } from "react";
import close from "../assets/close_new.svg";
import search_Icon from "../assets/Seach.svg";
import { useAuth } from "../context/authSingleton";
import Add from "../assets/icon-shop.svg";
import Check from "../assets/Check.svg";

function HomeProduct({ onModalCart, onAñadirCart }) {
  const { search, setSearch, itemSearch, setItemSearch, productAll } =
    useAuth();
  const [resultado, setResultado] = useState([]);
  const [añadirCart, setAñadirCart] = useState(false);

  const BorrarItemSearch = () => {
    setItemSearch("");
    setTimeout(() => {
      setResultado([]);
    }, 1500);
  };

  useEffect(() => {
    if (itemSearch.length === 0) {
      setTimeout(() => {
        setResultado([]);
      }, 300);
      return;
    }

    setTimeout(() => {
      const productosFiltrados = productAll.filter(
        (p) =>
          p.nameP.toLowerCase().includes(itemSearch.toLowerCase()) ||
          p.description.toLowerCase().includes(itemSearch.toLowerCase())
      );
      setResultado(productosFiltrados);
    }, 300);
  }, [itemSearch]);

  return (
    <div
      className={`
        fixed w-full h-[0vh] top-0 left-0 bg-[#ffffff] z-40 transition-all duration-200 ease-linear overflow-hidden
        ${search && "h-[100vh] py-2"}
        `}
    >
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
            className="text-xs font-medium mr-2"
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

      {/* Contenido resultado busqueda */}
      <section
        className={`
        w-full h-auto absolute px-5 mt-2 overflow-y-auto
        ${itemSearch.length > 0 ? "h-auto py-3" : "h-0"}`}
      >
        <section className="w-full h-screen relative">
          {/* Titulo 2 */}
          {resultado.length > 0 && (
            <p className="text-sm md:text-[30px] mb-3">
              PRODUCTOS: <b className="font-medium">"{itemSearch}"</b>
            </p>
          )}

          {/* Mensaje de no resultados */}
          {resultado.length === 0 && itemSearch.length > 0 && (
            <div className="w-full">
              <p className="text-xs text-center text-black">
                No se encontraron resultados de
                <b className="font-medium"> "{itemSearch}".</b>
              </p>
            </div>
          )}

          {/* Lista de productos */}
          <ul className="w-full h-auto grid grid-cols-2 md:grid-cols-3 gap-2 font-light">
            {resultado
              ? resultado.map((product, index) => (
                  <li
                    className="w-auto mb-3 text-sm md:text-md last:mb-36"
                    onClick={() => onModalCart(product)}
                    key={index}
                  >
                    <div className="h-[25vh] group relative">
                      {/* Imagen de Producto  */}
                      <img
                        src={product.urlP}
                        alt="producto"
                        className="absolute top-0 w-full h-full"
                        loading="lazy"
                      />
                      {/* Boton Agotado  */}
                      {product.stock <= 0 && (
                        <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-xs disabled">
                          Agotado
                        </button>
                      )}

                      {/* Boton Añadir al carrito  */}
                      {product.stock > 0 && (
                        <div className="absolute bottom-1 right-1">
                          <button
                            onClick={() => onModalCart(product)}
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
                    {/* Nombre de Producto */}
                    <p className="pt-1">{product.nameP}</p>

                    {/* Precio de Producto */}
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
              : null}
          </ul>
        </section>
      </section>
    </div>
  );
}

export default HomeProduct;
