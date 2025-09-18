import Close from "../assets/close_new.svg";
import { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";

const Cart = ({ isOpen, onCerrarCarrito, cart, onAumentar, onDisminuir }) => {
  const [totalprice, setTotalPrice] = useState("");

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

  return (
    <>
      {/* Carrito */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50">
          <section className="w-full flex">
            <div
              className="w-full h-[100vh] bg-[#00000000]"
              onClick={onCerrarCarrito}
            ></div>
            {/* Contenido carrito */}
            <div
              className="w-[70vh] h-[100vh] bg-white flex flex-col justify-between relative pb-16"
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
                  <section className="px-[20px] my-[25px] w-auto h-auto flex justify-between font-extralight">
                    <div className="flex items-center">
                      <p className="text-[30px]">Carrito</p>
                      <div className="bg-black text-[#fff] rounded-[100px] text-xs px-2 py-1 w-auto h-auto flex justify-center items-center ml-[10px]">
                        <p className="text-center">{cart.length}</p>
                      </div>
                    </div>
                    <img
                      onClick={onCerrarCarrito}
                      src={Close}
                      className="w-[30px] hover:scale-110"
                    />
                  </section>
                  <section className="w-full h-full px-[20px] relative flex flex-col text-[25px] font-light overflow-scroll">
                    <ul className="h-full text-sm flex flex-col absolute bottom-0 justify-start transition-all duration-700 overflow-scroll">
                      {cart.length > 0
                        ? cart.map((product, index) => (
                            <li
                              className="mb-3 p-2 border-t border-[#cecece] transition-all duration-700 grid grid-cols-[auto,180px,60px] justify-between"
                              key={index}
                            >
                              <div className="w-[75px] h-[75px] mr-[10px]">
                                <img
                                  src={product.img}
                                  className="w-full h-full"
                                />
                              </div>

                              <div className="">
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
                                          (product.oferta / 100) *
                                            product.precio}
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
                              {/* Precio Total  - poer 3 price*/}
                              <div className="h-auto w-auto">
                                {product.oferta >= 1 ? (
                                  <>
                                    <p className="line-through text-xs -[#8d8d8d] text-end">
                                      S/
                                      {(
                                        product.precio * product.cantidad
                                      ).toFixed(2)}
                                    </p>
                                    <p className="w-full font-medium text-end">
                                      S/
                                      {(
                                        (product.precio -
                                          (product.precio * product.oferta) /
                                            100) *
                                        product.cantidad
                                      ).toFixed(2)}
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
                <div className="absolute flex justify-center items-center bottom-0  w-full p-5 bg-gradient-to-b from-white/40 to-[#ffffff]">
                  <button
                    onClick={onCerrarCarrito}
                    className="w-full py-3 px-10 flex justify-between rounded-md bg-black text-white text-sm hover:bg-[#2d2d2d] transition-all duration-300"
                  >
                    <p>Ir a comprar</p>
                    <p className="font-bold">S/ {totalprice}</p>
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Cart;
