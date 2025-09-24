import Close from "../assets/close_new.svg";
import img_2 from "../assets/img_2.png";
import img_1 from "../assets/img_1.png";
import Check from "../assets/check-white.svg";
import Add from "../assets/add_cart-white.svg";
import Cookies from "js-cookie";

import { useEffect, useState } from "react";

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

const AddCart = ({
  isOpenCart,
  onCerrarCart,
  onProducto,
  onAgregar,
  onAnimarCarrito,
  imgRef,
}) => {
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
      {isOpenCart && (
        <div
          className="fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-[#000000b2] z-50"
          onClick={onCerrarCart}
        >
          {/* Contenido carrito */}
          <section
            className="w-[40vh] md:w-[100vh] h-[70vh] flex flex-col md:flex-row bg-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full md:w-[50vh] h-[50vh] md:h-auto flex gap-1 flex-row md:flex-col overflow-scroll hide-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={onProducto.img}
                className="w-[38vh] md:w-full h-full md:h-[65vh] object-cover bg-cover bg-center flex"
                ref={imgRef}
              />
              <img
                src={onProducto.img}
                className="w-[38vh] md:w-full h-full md:h-[65vh] object-cover bg-cover bg-center flex"
              />
              <img
                src={onProducto.img}
                className="w-[38vh] md:w-full h-full md:h-[65vh] object-cover bg-cover bg-center flex"
              />
            </div>
            {/* Contenido cart */}
            <div className="w-auto md:w-[50vh] h-auto relative flex flex-col font-light m-10 md:m-10">
              <button className="absolute -top-5 -right-5 w-[25px]">
                <img
                  onClick={onCerrarCart}
                  src={Close}
                  className="scale-110 md:scale-100 md:w-[25px] hover:scale-110"
                />
              </button>
              <p className="font-black text-lg md:text-[30px]">
                {onProducto.nombre}
              </p>
              <section className="flex font-sans text-lg md:text-[20px] mb-2 text-[#a1a1a1]">
                <p>S/.</p>
                <p>{onProducto.precio}</p>
              </section>

              {onProducto.talla != null && (
                <>
                  <p className="my-3 text-[13px] font-medium">Talla</p>
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
              <button
                className="w-full mt-5 py-3 px-10 bg-black text-white text-xs rounded-sm hover:bg-[#2d2d2d] flex items-center justify-center transition-all duration-300"
                onClick={() => (
                  onAgregar(onProducto), Agregar(), onAnimarCarrito(imgRef)
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
          </section>
        </div>
      )}
    </>
  );
};

export default AddCart;
