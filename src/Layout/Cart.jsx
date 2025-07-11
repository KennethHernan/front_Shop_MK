import Close from "../assets/close-blak.svg";

const Cart = ({ isOpen, onCerrarCarrito, cart }) => {
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
              {cart.length <= 0 ? (
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
                      <p className="text-[30px]">Carrito </p>
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
                  <section className="h-full px-[20px] flex flex-col text-[25px] font-light mt-[15px]">
                    <ul className="text-[18px]">
                      <li className="flex">
                        <div className="w-[75px] h-[75px] bg-[#c72323]">
                          <img src="" alt="" />
                        </div>
                        <div>
                          <section className="flex justify-between">
                            <div className="flex">
                              <p className="ml-[10px]">Producto 1</p>
                            </div>
                            <p>S/45</p>
                          </section>

                          <section className="flex bg-[#9c2d2d] w-[105px]">
                            <button className="w-[35px] h-[35px] bg-[#1cc127]">-</button>
                            <p className="w-[35px] h-[35px] bg-black">1</p>
                            <button className="w-[35px] h-[35px] text-[#000] bg-[#1cc127]">+</button>
                          </section>
                        </div>
                      </li>
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
