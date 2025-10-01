import Close from "../assets/close_new.svg";
import Check from "../assets/check-white.svg";
import Add from "../assets/add_cart-white.svg";

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function CustomLink({ to, label, ...props }) {
  return (
    <button>
      <p
        {...props}
        className={`font-light mr-5 text-[14px] hover:font-normal ${
          isActive ? "font-normal" : isHovered ? "" : ""
        }`}
      >
        {label}
      </p>
    </button>
  );
}

const AddCart = ({ onAgregar, imgRef }) => {
  const { productoModal, openAddCart, setOpenAddCart, animarCarrito } = useAuth();
  const [añadirCart, setAñadirCart] = useState(false);
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);
  const tallas = ["7", "8", "9"];

  const Agregar = () => {
    setAñadirCart(true);
    setTimeout(() => {
      setAñadirCart(false);
    }, 2000);
  };

  return (
    <>
      {/* Carrito */}
      {openAddCart && (
        <div
          className="fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-[#000000b2] z-50"
          onClick={() => setOpenAddCart(false)}
        >
          {/* Contenido carrito */}
          <section
            className="w-[100vh] h-[100vh] md:h-[70vh] flex flex-col md:flex-row bg-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full md:w-[50vh] h-[50vh] md:h-auto flex gap-1 flex-row md:flex-col overflow-scroll hide-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={productoModal.urlP}
                className="w-full h-full md:h-[65vh] object-cover bg-cover bg-center flex"
                ref={imgRef}
              />
              <img
                src={productoModal.urlP}
                className="w-full h-full md:h-[65vh] object-cover bg-cover bg-center flex"
              />
              <img
                src={productoModal.urlP}
                className="w-full h-full md:h-[65vh] object-cover bg-cover bg-center flex"
              />
            </div>
            {/* Contenido cart */}
            <div className="w-auto md:w-[50vh] h-auto relative flex flex-col font-light m-10 md:m-10">
              <button className="absolute -top-5 -right-5 w-[25px]">
                <img
                  onClick={() => setOpenAddCart(false)}
                  src={Close}
                  className="scale-110 md:scale-100 md:w-[25px] hover:rotate-45 transition-transform duration-300 ease-in-out"
                />
              </button>
              <p className="font-black text-lg md:text-[30px]">
                {productoModal.nameP}
              </p>
              <section className="flex font-sans gap-2 text-md md:text-lg md:text-[20px] mb-2 text-[#a1a1a1]">
                {productoModal.discount <= 1 ? (
                  <p>S/{productoModal.price.toFixed(2)}</p>
                ) : (
                  <>
                    <p className="line-through text-[#ababab]">
                      S/{productoModal.price.toFixed(2)}
                    </p>
                    <p className="text-black">
                      S/
                      {(
                        productoModal.price -
                        (productoModal.discount / 100) * productoModal.price
                      ).toFixed(2)}
                    </p>
                  </>
                )}
              </section>

              {/* Seccion talla */}
              {productoModal.talla != null && (
                <>
                  <p className="font-medium border-t text-sm py-2 my-2">
                    Talla
                  </p>
                  <section className="flex text-white text-[15px] gap-2 mb-4">
                    {tallas.map((talla) => (
                      <button
                        key={talla}
                        onClick={() => setTallaSeleccionada(talla)}
                        className={`w-[40px] h-[40px] bg-black border-[1px] ${
                          tallaSeleccionada === talla
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {talla}
                      </button>
                    ))}
                  </section>
                </>
              )}

              {/* Descripcion */}
              <p className="font-medium border-t text-sm py-2 mt-2">
                Descripción
              </p>
              <p className="text-black text-sm mb-3 mt-2">
                {productoModal.description}
              </p>

              {/*Botones*/}
              <div className="w-full py-5 border-t border-b">
                <button
                  className="w-full py-3 px-10 bg-black text-white text-xs rounded-sm hover:bg-[#2d2d2d] flex items-center justify-center transition-all duration-300"
                  onClick={() => (
                    onAgregar(productoModal), Agregar(), animarCarrito(imgRef)
                  )}
                >
                  {!añadirCart ? (
                    <>
                      <img src={Add} className="w-[14px] mr-3" />
                      Agregar al carrito
                    </>
                  ) : (
                    <>
                      <img src={Check} className="w-[14px] mr-3" />
                      Añadido
                    </>
                  )}
                </button>

                <button className="w-full mt-3 py-3 px-10 bg-black rounded-sm text-white text-xs hover:bg-[#2d2d2d] transition-all duration-300">
                  Ir a comprar
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default AddCart;
