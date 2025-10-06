import { useAuth } from "../context/authSingleton";
import "aos/dist/aos.css";
import departamentos from "../../public/departamentos.json";

function Checkout() {
  const { itemCarrito } = useAuth();

  return (
    <section className="font-sans select-none flex flex-col justify-center z-50">
      {/* Titulo */}
      <section className="w-full h-[65px] border-b flex justify-center font-light font-sans">
        <div className="w-[65vh] h-full text-[25px] flex items-center">
          MAYIKH STYLE
        </div>
        <div className="invisible w-[65vh] h-full"></div>
      </section>

      {/* Body */}
      <section className="flex justify-center text-xs font-sans">
        <div className="w-full h-[100vh] flex justify-end">
          <div className="w-[65vh] h-[100vh] p-5">
            <div className="w-full flex text-lg mb-2 justify-between">
              <p className="font-medium">Contacto</p>
              <button className="text-xs hover:underline font-medium text-[#2d5bd0]">
                Iniciar sesión
              </button>
            </div>

            {/* Input Correo Electronico */}
            <div className="relative w-full">
              <input
                type="email"
                id="email"
                className="peer w-full border-[1px] border-gray-300 text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-[2px] focus:border-blue-500 transition-transform duration-300"
                placeholder="Correo Electrónico"
              />
              <label
                htmlFor="email"
                className="absolute text-gray-500 text-sm transform opacity-0 -translate-y-1/2 top-7 left-3 transition-transform duration-300
               bg-[#39333300] px-1 pointer-events-none 
               peer-[&:not(:placeholder-shown)]:top-5 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:text-xs"
              >
                Correo Electrónico
              </label>
            </div>

            <div className="w-full flex text-lg mt-5 justify-between font-medium">
              <p>Entrega</p>
            </div>
            <section className="grid grid-cols-2 gap-2 my-2">
              {/* Input Nombre Completo */}
              <div className="relative w-full">
                <input
                  type="text"
                  id="nombre"
                  className="peer w-full border-[1px] border-gray-300 text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-[2px] focus:border-blue-500 transition-transform duration-300"
                  placeholder="Nombre Completo"
                />
                <label
                  htmlFor="nombre"
                  className="absolute text-gray-500 text-sm transform opacity-0 -translate-y-1/2 top-7 left-3 transition-transform duration-300
               bg-[#39333300] px-1 pointer-events-none 
               peer-[&:not(:placeholder-shown)]:top-5 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Apellido Completo
                </label>
              </div>

              {/* Input Apellido Completo */}
              <div className="relative w-full">
                <input
                  type="text"
                  id="apellido"
                  className="peer w-full border-[1px] border-gray-300 text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-[2px] focus:border-blue-500 transition-transform duration-300"
                  placeholder="Apellido Completo"
                />
                <label
                  htmlFor="apellido"
                  className="absolute text-gray-500 text-sm transform opacity-0 -translate-y-1/2 top-7 left-3 transition-transform duration-300
               bg-[#39333300] px-1 pointer-events-none 
               peer-[&:not(:placeholder-shown)]:top-5 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Apellido Completo
                </label>
              </div>
            </section>

            {/* Input DNI */}
            <div className="relative w-full">
              <input
                type="text"
                id="dni"
                className="peer w-full border-[1px] border-gray-300 text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 focus:border-[2px] [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-blue-500 transition-transform duration-300"
                placeholder="Dni"
              />
              <label
                htmlFor="dni"
                className="absolute text-gray-500 text-sm transform opacity-0 -translate-y-1/2 top-7 left-3 transition-transform duration-300
               bg-[#39333300] px-1 pointer-events-none 
               peer-[&:not(:placeholder-shown)]:top-5 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:text-xs"
              >
                Dni
              </label>
            </div>

            {/* Input Departametos */}
            <div className="relative w-full my-2">
              <section>
                <select
                  id="departamento"
                  className="peer w-full border-[1px] border-gray-300 text-sm text-gray-900 rounded-lg pl-3 pr-48 pt-6 pb-2 focus:border-[2px] focus:outline-none focus:border-blue-500 transition-transform duration-300 appearance-none"
                >
                  <option value="">Seleccionar departamento</option>
                  {departamentos.map((d) => (
                    <option key={d.id} value={d.nombre}>
                      {d.nombre}
                    </option>
                  ))}
                </select>
                {/* Icono personalizado */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                  fill="none"
                  viewBox="0 0 30 20"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </section>

              <label
                htmlFor="departamento"
                className="absolute text-gray-500 text-xs transform -translate-y-1/2 top-4 left-3
               bg-[#39333300] px-1 pointer-events-none"
              >
                Departamento
              </label>
            </div>

            {/* Input Distrito */}
            <div className="relative w-full">
              <input
                type="text"
                id="distrito"
                className="peer w-full border-[1px] border-gray-300 text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 focus:border-[2px] [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-blue-500 transition-transform duration-300"
                placeholder="Distrito"
              />
              <label
                htmlFor="distrito"
                className="absolute text-gray-500 text-sm transform opacity-0 -translate-y-1/2 top-7 left-3 transition-transform duration-300
               bg-[#39333300] px-1 pointer-events-none 
               peer-[&:not(:placeholder-shown)]:top-5 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:text-xs"
              >
                Distrito
              </label>
            </div>

            {/* Input Telefono */}
            <div className="relative w-full mt-2">
              <input
                type="text"
                id="phone"
                className="peer w-full border-[1px] border-gray-300 text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 focus:border-[2px] [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-blue-500 transition-transform duration-300"
                placeholder="Número Telefonico"
              />
              <label
                htmlFor="phone"
                className="absolute text-gray-500 text-sm transform opacity-0 -translate-y-1/2 top-7 left-3 transition-transform duration-300
               bg-[#39333300] px-1 pointer-events-none 
               peer-[&:not(:placeholder-shown)]:top-5 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:text-xs"
              >
                Número Telefonico
              </label>
            </div>

            {/* METODO DE ENVIO */}
            <p className="text-[16px] mt-5 font-medium">Método de envío</p>
            <section className="w-full border-blue-500 border-[1px] bg-blue-50 rounded-lg p-4 text-[14px] my-3">
              <div className="flex items-center justify-between">
                <p>ENVIO ECOAMIGABLE</p>
                <p className="font-medium">S/ 10.00</p>
              </div>
              <p className="text-gray-500 mt-1">Precio de envio a todo Perú</p>
            </section>

            <div className="w-full flex text-lg mt-5 justify-between font-medium">
              <p>Pago</p>
            </div>
            <section className="grid grid-cols-2 gap-2 my-2">
              <p>hola</p>
            </section>
          </div>
        </div>
        <div className="w-full h-[100vh] border-l bg-[#0000000f] flex justify-start">
          <div className="w-[65vh] h-full">
            <section className="h-full relative flex flex-col text-[25px] font-light overflow-scroll">
              <ul className="w-full px-[10px] h-full text-sm flex flex-col absolute bottom-0 justify-start overflow-scroll">
                {itemCarrito.length > 0
                  ? itemCarrito.map((product, index) => (
                      <li
                        className="w-auto mb-3 p-2 grid grid-cols-[auto,auto] justify-between"
                        key={index}
                      >
                        <section className="flex items-center">
                          {/* Imagen Producto */}
                          <section className="relative flex mr-[15px]">
                            <div className="w-[60px] h-[60px] overflow-hidden border-[2px] border-[#0000000f] rounded-md">
                              <img
                                src={product.urlP}
                                className="w-full h-full object-cover bg-cover bg-center border-[2px] border-[#fff] flex rounded-md"
                              />
                            </div>
                            <div className="absolute -top-0 right-0 bg-black rounded-md text-[#fff] text-xs px-2 py-1">
                                <p>4</p>
                            </div>
                          </section>

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
                                      (product.discount / 100) * product.price}
                                  </p>
                                  <p className="line-through text-xs text-[#8d8d8d]">
                                    S/ {product.price}
                                  </p>
                                </>
                              )}
                            </div>
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
                                    (product.price * product.discount) / 100) *
                                  product.cantidad
                                ).toFixed(2)}
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
                        </div>
                      </li>
                    ))
                  : null}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Checkout;
