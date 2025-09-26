import Close from "../assets/close_new.svg";
import { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";

const Cart = ({ isOpen, onCerrarCarrito, cart, onAumentar, onDisminuir }) => {
  const [totalprice, setTotalPrice] = useState("");
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      setTotalPrice(0);
      return;
    }

    const total = cart.reduce((acc, product) => {
      if (!product || !product.precio || !product.cantidad) {
        return acc;
      }

      let precioFinal;

      if (product.oferta && product.oferta > 1) {
        precioFinal = product.precio - (product.precio * product.oferta) / 100;
      } else {
        precioFinal = product.precio;
      }

      return acc + precioFinal * product.cantidad;
    }, 0);

    setTotalPrice(total.toFixed(2));
  }, [cart]);

  const eliminarDelCarrito = (idProducto) => {
    const carritoExistente = Cookies.get("cart");
    let carrito = carritoExistente ? JSON.parse(carritoExistente) : [];

    carrito = carrito.filter((p) => p.id !== idProducto);
    Cookies.set("cart", JSON.stringify(carrito), { expires: 14 });
  };

  useEffect(() => {
    console.log("isOpen:" + isOpen);
  }, [isOpen]);

  return (
    <div
      className={`
      fixed top-0 right-0 h-[100vh] z-50 transition-all duration-500 ease-in-out overflow-hidden
      ${
        isOpen
          ? "w-full opacity-100"
          : "w-[0vh] opacity-100"
      }`}
    >
      <section className="w-full flex">
        <div
          className="hidden md:block w-full md:w-full h-[100vh] bg-[#00000000]"
          onClick={() => onCerrarCarrito}
        ></div>

        {/* Contenido carrito */}
        <div
          className="w-[200vh] md:w-[70vh] h-[100vh] flex flex-col justify-between relative pb-16 overflow-hidden bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Contenido carrito vacio */}
          {cart.length == null || cart - length == 0 ? (
            <>
              <div className="m-3 w-auto h-auto flex justify-end">
                <img
                  onClick={onCerrarCarrito}
                  src={Close}
                  className="w-[30px] hover:scale-110"
                />
              </div>
              <div className="h-full flex flex-col justify-center items-center text-[25px] font-light">
                <p>Tu carrito esta vacío.</p>
                <button
                  onClick={onCerrarCarrito}
                  className="mt-5 py-2 px-10 bg-black text-white text-[15px] hover:bg-[#2d2d2d]"
                >
                  Ir a comprar
                </button>
              </div>
            </>
          ) : (
            <>
              <section className="px-[20px] my-[7px] py-[7px] w-auto h-auto border-b border-[#cecece]  flex justify-between font-extralight">
                <div className="flex items-center">
                  <p className="text-[25px] md:text-[30px] font-medium">
                    Carrito
                  </p>
                  <p className="text-[12px] ml-2 text-center font-medium">
                    ({cart.length} Productos)
                  </p>
                </div>
                <img
                  onClick={() => onCerrarCarrito()}
                  src={Close}
                  className="w-[25px] hover:rotate-45 transition-transform duration-300 md:hover:scale-110"
                />
              </section>
              <section className="bg-black h-full relative flex flex-col text-[25px] font-light overflow-scroll">
                <ul className="bg-white w-full px-[10px] h-full text-sm flex flex-col absolute bottom-0 justify-start overflow-scroll">
                  {cart.length > 0
                    ? cart.map((product, index) => (
                        <li
                          className="w-auto mb-3 p-2 grid grid-cols-[auto,auto] justify-between"
                          key={index}
                        >
                          <section className="flex">
                            <div className="w-[75px] h-auto mr-[10px] overflow-hidden">
                              <img
                                src={product.img}
                                className="w-full h-full object-cover scale-150"
                              />
                            </div>

                            <div>
                              <p>{product.nombre}</p>
                              {/* Precio unidad */}
                              <div className="text-[#000000] flex gap-1 items-center">
                                {product.oferta <= 1 ? (
                                  <p>S/{product.precio}</p>
                                ) : (
                                  <>
                                    <p>
                                      S/
                                      {product.precio -
                                        (product.oferta / 100) * product.precio}
                                    </p>
                                    <p className="line-through text-xs text-[#8d8d8d]">
                                      S/{product.precio}
                                    </p>
                                  </>
                                )}
                              </div>

                              {/* botones cantidad */}
                              <section className="flex w-auto mt-2 items-center">
                                <button
                                  className="w-[35px] h-[35px] border-[1px] border-[#c9c9c9] hover:bg-[#ececec] hover:border-0 transition-colors duration-300"
                                  onClick={() => onDisminuir(product._id)}
                                >
                                  -
                                </button>
                                <p className="w-[40px] text-center">
                                  {product.cantidad}
                                </p>
                                <button
                                  className="w-[35px] h-[35px] border-[1px] border-[#c9c9c9] hover:bg-[#ececec] hover:border-0 transition-colors duration-300"
                                  onClick={() => onAumentar(product._id)}
                                >
                                  +
                                </button>
                              </section>
                            </div>
                          </section>
                          {/* Precio Total  - poer 3 price*/}
                          <div className="h-auto w-auto">
                            {product.oferta >= 1 ? (
                              <>
                                <p className="w-full font-medium text-end">
                                  S/
                                  {(
                                    (product.precio -
                                      (product.precio * product.oferta) / 100) *
                                    product.cantidad
                                  ).toFixed(2)}
                                </p>
                                <p className="line-through text-xs -[#8d8d8d] text-end">
                                  S/
                                  {(product.precio * product.cantidad).toFixed(
                                    2
                                  )}
                                </p>
                              </>
                            ) : (
                              <input
                                className="w-full font-medium text-end"
                                disabled
                                value={`S/ ${
                                  product.precio * product.cantidad
                                }`}
                              />
                            )}
                          </div>
                        </li>
                      ))
                    : null}
                </ul>
              </section>
            </>
          )}
          {cart.length == null || cart - length == 0 ? null : (
            <div className="absolute flex justify-center items-center bottom-0  w-full p-5 bg-white">
              <button
                onClick={onCerrarCarrito}
                className="w-full py-[11px] px-10 flex font-medium justify-center gap-2 rounded-none bg-black text-white text-xs hover:bg-[#2d2d2d] transition-colors duration-300"
              >
                <p>IR A COMPRAR</p>
                <p>•</p>
                <p>S/ {totalprice}</p>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
