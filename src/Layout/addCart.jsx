import Close from "../assets/close-blak.svg";
import img_2 from "../assets/img_2.png";
import img_1 from "../assets/img_1.png";
import Check from "../assets/check-white.svg";
import Add from "../assets/add_cart-white.svg";

import { useEffect, useState } from "react";

function CustomLink({ to, label, ...props }) {
  const location = useLocation();
  const isHovered = location.pathname === to;
  const isActive = location.pathname === to;
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

const AddCart = ({ isOpenCart, onCerrarCart }) => {
  const [añadirCart, setAñadirCart] = useState(false);
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);
  const tallas = ["7", "8", "9"];

  const AñadirCard = () => {
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
          className="fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-[#0000004f] z-50"
          onClick={onCerrarCart}
        >
          {/* Contenido carrito */}
          <section
            className="w-[100vh] h-[70vh] flex bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-[50vh] h-auto flex flex-col overflow-scroll hide-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={img_1}
                className="w-full h-[65vh] object-cover bg-cover bg-center mb-1"
              />
              <img
                src={img_2}
                className="w-full h-[65vh] object-cover bg-cover bg-center mb-1"
              />
              <img
                src={img_1}
                className="w-full h-[65vh] object-cover bg-cover bg-center"
              />
            </div>
            {/* Contenido cart */}
            <div className="w-[50vh] h-auto relative flex flex-col font-light m-10">
              <button className="absolute -top-5 -right-5 w-[25px]">
                <img
                  onClick={onCerrarCart}
                  src={Close}
                  className="w-[25px] hover:scale-110"
                />
              </button>
              <p className=" font-light text-[21px]">Nombre de Producto X</p>
              <section className="flex font-light text-[15px] my-2">
                <p>S/.</p>
                <p>100.00</p>
              </section>

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
              <button
                className="w-full mt-5 py-3 px-10 bg-black text-white text-[15px] hover:bg-[#2d2d2d] flex items-center justify-center"
                onClick={AñadirCard}
              >
                {!añadirCart ? (
                  <>
                    <img src={Add} className="w-[16px] mr-3" />
                    Agregar al carrito
                  </>
                ) : (
                  <>
                    <img src={Check} className="w-[16px] mr-3" />
                    Añadido
                  </>
                )}
              </button>

              <button className="w-full mt-3 py-3 px-10 bg-black text-white text-[15px] hover:bg-[#2d2d2d]">
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
