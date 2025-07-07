import Close from "../assets/close-blak.svg";

const Cart = ({ isOpen, onCerrarCarrito }) => {

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
              <div className="m-3 w-auto h-auto flex justify-end">
                <img
                  onClick={onCerrarCarrito}
                  src={Close}
                  className="w-[35px] hover:scale-110"
                />
              </div>
              {/* Contenido carrito vacio */}
              <div className="h-full flex flex-col justify-center items-center text-[25px] font-light">
                <p>Tu carrito esta vacío.</p>
                <button
                  onClick={onCerrarCarrito}
                  className="mt-5 py-2 px-10 bg-black text-white text-[15px] hover:bg-[#2d2d2d]"
                >
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

export default Cart;
