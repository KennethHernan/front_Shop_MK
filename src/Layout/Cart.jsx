import Close from "../assets/close-blak.svg";
import { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";

const Cart = ({ isOpen, onCerrarCarrito, cart, onAumentar, onDisminuir }) => {
  
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
              className="w-full h-[100vh] bg-[#0000004f]"
              onClick={onCerrarCarrito}
            ></div>
            {/* Contenido carrito */}
            <div
              className="w-[70vh] h-[100vh] bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Contenido carrito vacio */}
              {cart.length == null || cart-length == 0 ? (
                <>
                  <div className="m-3 w-auto h-auto flex justify-end">
                    <img
                      onClick={onCerrarCarrito}
                      src={Close}
                      className="w-[35px] hover:scale-110"
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
                  <section className="m-3 w-auto h-auto flex justify-between font-extralight">
                    <div className="flex items-center">
                      <p className="text-[30px]">Carrito</p>
                      <div className="bg-black text-[#fff] rounded-[100px] text-[13px] w-[25px] h-[25px] flex justify-center items-center ml-[10px]">
                        <p className="text-center">{cart.length}</p>
                      </div>
                    </div>
                    <img
                      onClick={onCerrarCarrito}
                      src={Close}
                      className="w-[35px] hover:scale-110"
                    />
                  </section>
                  <section className="h-full px-[20px] flex flex-col text-[25px] font-light mt-[15px] overflow-scroll">
                    <ul className="text-[15px]">
                      {cart.length > 0
                        ? cart.map((product, index) => (
                            <li className="flex mb-3" key={index}>
                              <div className="w-[75px] h-[75px] mr-[10px]">
                                <img
                                  src={product.img}
                                  className="w-full h-full"
                                />
                              </div>
                              <div className="w-[250px]">
                                <section className="flex justify-between">
                                  <p>{product.nombre}</p>
                                  {/* Precio Total */}
                                  <p className="font-medium">
                                    S/{product.precio * product.cantidad}
                                  </p>
                                </section>
                                {/* Precio unidad */}
                                <p className="text-[#a7a7a7]">
                                  {product.precio}
                                </p>
                                <section className="flex w-auto mt-2 items-center">
                                  <button
                                    className="w-[35px] h-[35px] border-[1px] border-[#c9c9c9]"
                                    onClick={() => onDisminuir(product._id)}
                                  >
                                    -
                                  </button>
                                  <p className="w-[40px] text-center">
                                    {product.cantidad}
                                  </p>
                                  <button
                                    className="w-[35px] h-[35px] text-[#000] border-[1px] border-[#c9c9c9]"
                                    onClick={() => onAumentar(product._id)}
                                  >
                                    +
                                  </button>
                                </section>
                              </div>
                            </li>
                          ))
                        : null}
                    </ul>
                    <button
                      onClick={onCerrarCarrito}
                      className="mt-5 py-2 px-10 bg-black text-white text-[15px] hover:bg-[#2d2d2d]"
                    >
                      Ir a comprar
                    </button>
                  </section>
                </>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Cart;
