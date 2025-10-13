import Close from "../assets/close_new.svg";
import { useEffect, useState } from "react";
import { useAuth } from "../context/authSingleton";
import icon_eliminar from "../assets/icon_delete.svg";
import { useNavigate } from "react-router-dom";

const Cart = ({ onAumentar, onDisminuir }) => {
  const navigate = useNavigate();
  const {
    openCart,
    setOpenCart,
    itemCarrito,
    eliminarDelCarrito,
    abrirModalCart,
    session
  } = useAuth();
  const [totalprice, setTotalPrice] = useState("");

  useEffect(() => {
    if (
      !itemCarrito ||
      !Array.isArray(itemCarrito) ||
      itemCarrito.length === 0
    ) {
      setTotalPrice(0);
      return;
    }

    const total = itemCarrito.reduce((acc, product) => {
      if (!product || !product.price || !product.cantidad) {
        return acc;
      }

      let precioFinal;

      if (product.discount && product.discount > 1) {
        precioFinal = product.price - (product.price * product.discount) / 100;
      } else {
        precioFinal = product.price;
      }

      return acc + precioFinal * product.cantidad;
    }, 0);

    setTotalPrice(total.toFixed(2));
  }, [itemCarrito]);

  return (
    <div
      className={`
      fixed top-0 right-0 h-[100vh] z-50 transition-all duration-500 ease-in-out overflow-hidden
      ${openCart ? "w-full opacity-100" : "w-[0vh] opacity-100"}`}
    >
      <section className="w-full flex">
        {/* Cerrar carrito */}
        <div
          className="hidden md:block w-full md:w-full h-[100vh] bg-[#00000000]"
          onClick={() => setOpenCart(false)}
        ></div>

        {/* Contenido carrito */}
        <div
          className="w-[200vh] md:w-[70vh] h-[100vh] flex flex-col justify-between relative pb-16 overflow-hidden bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Contenido carrito vacio */}
          {itemCarrito.length == null || itemCarrito.length == 0 ? (
            <>
              <div className="m-3 w-auto h-auto flex justify-end">
                <img
                  onClick={() => setOpenCart(false)}
                  src={Close}
                  className="w-[30px] hover:scale-110"
                />
              </div>
              <div className="h-full flex flex-col justify-center items-center text-[25px] font-light">
                <p>Tu carrito esta vacío.</p>
                <button
                  onClick={() => setOpenCart(false)}
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
                    ({itemCarrito.length} Productos)
                  </p>
                </div>

                {/* Cerrar carrito */}
                <img
                  onClick={() => setOpenCart(false)}
                  src={Close}
                  className="w-[25px] hover:rotate-45 transition-transform duration-300 md:hover:scale-110"
                />
              </section>
              <section className="bg-black h-full relative flex flex-col text-[25px] font-light overflow-scroll">
                <ul className="bg-white w-full px-[10px] h-full text-sm flex flex-col absolute bottom-0 justify-start overflow-scroll">
                  {itemCarrito.length > 0
                    ? itemCarrito.map((product, index) => (
                        <li
                          className="w-auto mb-3 p-2 grid grid-cols-[auto,auto] justify-between"
                          key={index}
                        >
                          <section className="flex items-center">
                            {/* Imagen Producto */}
                            <div
                              className="w-[80px] h-[80px] mr-[10px] overflow-hidden"
                              onClick={() => abrirModalCart(product)}
                            >
                              <img
                                src={product.urlP}
                                className="w-full h-full object-cover bg-cover bg-center flex"
                              />
                            </div>

                            <div>
                              {/* Nombre Producto */}
                              <p>{product.nameP}</p>
                              {/* Precio unidad */}
                              <div className="text-[#000000] flex gap-1 items-center">
                                {product.discount <= 1 ? (
                                  <p>S/ {product.price.toFixed(2)}</p>
                                ) : (
                                  <>
                                    <p>
                                      S/
                                      {product.price -
                                        (product.discount / 100) *
                                          product.price}
                                    </p>
                                    <p className="line-through text-xs text-[#8d8d8d]">
                                      S/ {product.price}
                                    </p>
                                  </>
                                )}
                              </div>

                              {/* Botones cantidad */}
                              <section className="flex w-auto mt-2 items-center">
                                <button
                                  className="w-[35px] h-[35px] border-[1px] border-[#c9c9c9] hover:bg-[#ececec] hover:border-0 transition-colors duration-300"
                                  onClick={() => onDisminuir(product.idProduct)}
                                >
                                  -
                                </button>
                                <p className="w-[40px] text-center">
                                  {product.cantidad}
                                </p>
                                <button
                                  className="w-[35px] h-[35px] border-[1px] border-[#c9c9c9] hover:bg-[#ececec] hover:border-0 transition-colors duration-300"
                                  onClick={() => onAumentar(product.idProduct)}
                                >
                                  +
                                </button>
                              </section>
                            </div>
                          </section>
                          {/* Precio Total  - poer 3 price*/}
                          <div className="h-auto w-auto flex flex-col items-end justify-between">
                            {product.discount >= 1 ? (
                              <>
                                <p className="w-full font-medium text-end">
                                  S/
                                  {(
                                    (product.price -
                                      (product.price * product.discount) /
                                        100) *
                                    product.cantidad
                                  ).toFixed(2)}
                                </p>
                                <p className="line-through text-xs -[#8d8d8d] text-end">
                                  S/
                                  {(product.price * product.cantidad).toFixed(
                                    2
                                  )}
                                </p>
                              </>
                            ) : (
                              <input
                                className="w-full font-medium text-end bg-white"
                                disabled
                                value={`S/ ${(
                                  product.price * product.cantidad
                                ).toFixed(2)}`}
                              />
                            )}
                            <button
                              onClick={() =>
                                eliminarDelCarrito(product.idProduct)
                              }
                            >
                              <img
                                src={icon_eliminar}
                                className="w-[23px] hover:scale-110"
                                alt="Eliminar Producto"
                              />
                            </button>
                          </div>
                        </li>
                      ))
                    : null}
                </ul>
              </section>
            </>
          )}
          {itemCarrito.length == null || itemCarrito.length == 0 ? null : (
            <div className="absolute flex justify-center items-center bottom-0  w-full p-5 bg-white">
              <button
                onClick={() => (
                  setOpenCart(false),
                  navigate(`/checkout/${session}/${session.slice(0,2)}`)
                )}
                className="w-full py-[15px] px-10 flex font-medium justify-center gap-2 rounded-none bg-black text-white text-xs hover:bg-[#2d2d2d] transition-colors duration-300"
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
