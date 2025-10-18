import { useAuth } from "../context/authSingleton";
import "aos/dist/aos.css";
import departamentos from "../../public/departamentos.json";
import { useNavigate } from "react-router-dom";
import icon_visa from "../assets/visa.svg";
import icon_mercadopago from "../assets/mercadopago.svg";
import icon_mastercard from "../assets/mastercard.svg";
import icon_dinerclub from "../assets/dinerclub.svg";
import icon_americanexpress from "../assets/americaexpres.svg";
import icon_alertFailure from "../assets/alert_failure.svg"
import Shop from "../assets/Shop.svg";
import icon_yape from "../assets/yape.svg";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function Checkout() {
  const {
    itemCarrito,
    CreatePreferences,
    CreateOrder,
    GuardarUser,
    userSave,
    setOpenCart,
    priceDelivery,
    setPriceDelivery,
    preferenceId,
  } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [aceptaGuardar, setAceptaGuardar] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [totalPrecio, setTotalPrecio] = useState(0);
  const location = useLocation();
  const [failure, setFailure] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    
    const status = params.get("status");
    const collectionStatus = params.get("collection_status"); 
    const preference_id = params.get("preference_id");
    console.log("preference_id:"+preference_id);
    console.log("preferenceId:"+preferenceId);
    
    
    if (location.pathname.includes("failure") && status === "null" && collectionStatus !== "approved" && preference_id && preference_id.trim() === preferenceId.trim()) {
      setFailure(true);
    }
  }, [location, preferenceId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formRef = useRef();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setCargando(true);

    if (aceptaGuardar) {
      GuardarUser(data);
    }

    /*================= CREACION DE NUEVA ORDEN ======================= */

    const nuevaOrden = {
      email: data.email,
      nombre: data.nombre,
      apellido: data.apellido,
      dni: data.dni,
      departamento: data.departamento,
      distrito: data.distrito,
      direccion: data.direccion,
      phone: data.phone,
      items: itemCarrito,
      total: totalPrecio,
      status: "pendiente",
      idPayment: "null",
    };
    const orderId = await CreateOrder(nuevaOrden);
    if (!orderId) return console.error("Error create OrderId");

    /*================= CREACION DE PREFERENCIA ======================= */
    // Precio de Delivery = 0
    setPriceDelivery(0);
    const idOrder = orderId;
    const items = itemCarrito;
    const delivery = priceDelivery;

    const response = await CreatePreferences(idOrder, items, delivery);
    if (response) {
      const { init_point } = response;
      window.location.href = init_point;
    } else {
      console.error(response);
      setCargando(false);
    }
  };
  
  const handleSubmitDev = () => {
    formRef.current.requestSubmit();
  };
  const Regresar = () => {
    navigate(-1);
    setOpenCart(true);
  };

  useEffect(() => {
    const totalCarrito = itemCarrito.reduce((total, product) => {
      const precioUnitario =
        product.discount >= 1
          ? product.price - (product.price * product.discount) / 100
          : product.price;

      return total + precioUnitario * product.cantidad;
    }, 0);

    setCargando(false);

    setTotalPrecio(totalCarrito);
  }, [itemCarrito]);

  // Autocompletar Usurario
  useEffect(() => {
    if (userSave) {
      setValue("email", userSave.email);
      setValue("nombre", userSave.nombre);
      setValue("apellido", userSave.apellido);
      setValue("dni", userSave.dni);
      setValue("departamento", userSave.departamento);
      setValue("distrito", userSave.distrito);
      setValue("direccion", userSave.direccion);
      setValue("phone", userSave.phone);
      setAceptaGuardar(true);
    }
  }, [userSave, setValue]);

  return (
    <section className="font-sans lg:bg-[#0000000d] select-none flex flex-col justify-center z-50">

      {failure && (
        <section className=" absolute top-0 h-[100vh] w-screen bg-[#00000084] z-50 flex justify-center items-center" onClick={() => setFailure(false)}>
          <div className="flex flex-col items-center justify-center w-auto h-auto px-20 py-5 bg-white"
            onClick={(e) => e.stopPropagation()}>
            <span className="pointer-events-none">
              <img src={icon_alertFailure} alt="Icono Pago Failured" />
            </span>
            <p className="mt-3 text-sm font-normal">Algo salió mal...</p>
            <p className="font-medium">Tu transacción no pudo completarse.</p>
            <p className="mt-3 text-sm font-normal text-[#3e3e3e] underline" onClick={() => setFailure(false)}>Intentar nuevamente</p>
          </div>
        </section>
      )}
      {/* Titulo */}
      <section className="w-full h-[65px] bg-white border-b grid grid-cols-1 lg:grid-cols-2 font-light font-sans lg:justify-end">
        <div className="flex justify-center w-auto h-auto px-5 bg-white lg:justify-end">
          <div className="w-[65vh] md:w-[80vh] lg:w-[75vh] h-full text-[25px] flex items-center text-start">
            MAYIKH STYLE
          </div>

          <button className="w-[30px] lg:hidden block" onClick={Regresar}>
            <span className="pointer-events-none">
              <img src={Shop} alt="Icono Carrrito" />
            </span>
          </button>
        </div>
        <div className="justify-center hidden w-full h-full lg:justify-start lg:flex">
          <div className="w-[65vh] px-5 h-full text-[25px] flex items-center justify-end text-start">
            <button className="w-[30px]" onClick={Regresar}>
              <span className="pointer-events-none">
                <img src={Shop} alt="Icono Carrrito" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="flex flex-col justify-center h-auto font-sans text-xs lg:flex-row">
        {/* Seccion información */}
        <div className="flex justify-center w-full h-auto bg-white md:h-full lg:justify-end">
          <div className="w-[65vh] md:w-[80vh] lg:w-[75vh] h-auto md:h-full p-5">
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="w-full h-full"
            >
              <div className="flex justify-between w-full mb-2 text-lg">
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
                  className={`
                    peer w-full text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-[2px] focus:border-blue-500 transition-transform duration-300
                    ${errors.email
                      ? "border-red-600 border-2"
                      : "border-[1px] border-gray-300"
                    }
                    `}
                  placeholder="Correo Electrónico"
                  {...register("email", {
                    required: "Introduce un correo electrónico",
                  })}
                />
                <label
                  htmlFor="email"
                  className="absolute text-gray-500 text-sm transform opacity-0 -translate-y-1/2 top-7 left-3 transition-transform duration-300
               bg-[#39333300] px-1 pointer-events-none 
               peer-[&:not(:placeholder-shown)]:top-5 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Correo Electrónico
                </label>
                {errors.email && (
                  <p className="text-[14px] text-red-500 my-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between w-full mt-5 text-lg font-medium">
                <p>Entrega</p>
              </div>
              <section className="grid grid-cols-2 gap-2 my-2">
                {/* Input Nombre Completo */}
                <div className="relative w-full">
                  <input
                    type="text"
                    id="nombre"
                    className={`
                      peer w-full text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-[2px] focus:border-blue-500 transition-transform duration-300
                      ${errors.nombre
                        ? "border-red-600 border-2"
                        : "border-[1px] border-gray-300"
                      }
                    `}
                    placeholder="Nombre Completo"
                    {...register("nombre", { required: "Introduce un nombre" })}
                  />
                  <label
                    htmlFor="nombre"
                    className="absolute text-gray-500 text-sm transform opacity-0 -translate-y-1/2 top-7 left-3 transition-transform duration-300
               bg-[#39333300] px-1 pointer-events-none 
               peer-[&:not(:placeholder-shown)]:top-5 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:text-xs"
                  >
                    Nombre Completo
                  </label>
                  {errors.nombre && (
                    <p className="text-[14px] text-red-500 my-2">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                {/* Input Apellido Completo */}
                <div className="relative w-full">
                  <input
                    type="text"
                    id="apellido"
                    className={`
                      peer w-full text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-[2px] focus:border-blue-500 transition-transform duration-300
                      ${errors.apellido
                        ? "border-red-600 border-2"
                        : "border-[1px] border-gray-300"
                      }
                    `}
                    placeholder="Apellido Completo"
                    {...register("apellido", {
                      required: "Introduce un apellido",
                    })}
                  />
                  <label
                    htmlFor="apellido"
                    className="absolute text-gray-500 text-sm transform opacity-0 -translate-y-1/2 top-7 left-3 transition-transform duration-300
               bg-[#39333300] px-1 pointer-events-none 
               peer-[&:not(:placeholder-shown)]:top-5 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:text-xs"
                  >
                    Apellido Completo
                  </label>
                  {errors.apellido && (
                    <p className="text-[14px] text-red-500 my-2">
                      {errors.apellido.message}
                    </p>
                  )}
                </div>
              </section>

              {/* Input DNI */}
              <div className="relative w-full">
                <input
                  type="text"
                  id="dni"
                  className={`
                    peer w-full text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 focus:border-[2px] [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-blue-500 transition-transform duration-300
                    ${errors.dni
                      ? "border-red-600 border-2"
                      : "border-[1px] border-gray-300"
                    }
                    `}
                  placeholder="Dni"
                  {...register("dni", { required: "Introduce un dni" })}
                />
                <label
                  htmlFor="dni"
                  className="absolute text-gray-500 text-sm transform opacity-0 -translate-y-1/2 top-7 left-3 transition-transform duration-300
               bg-[#39333300] px-1 pointer-events-none 
               peer-[&:not(:placeholder-shown)]:top-5 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Dni
                </label>
                {errors.dni && (
                  <p className="text-[14px] text-red-500 my-2">
                    {errors.dni.message}
                  </p>
                )}
              </div>

              {/* Input Departametos */}
              <div className="relative w-full my-2">
                <section>
                  <select
                    id="departamento"
                    className={`
                      peer w-full text-sm text-gray-900 rounded-lg pl-3 pt-6 pb-2 focus:border-[2px] focus:outline-none focus:border-blue-500 transition-transform duration-300 appearance-none
                      ${errors.departamento
                        ? "border-red-600 border-2"
                        : "border-[1px] border-gray-300"
                      }
                    `}
                    {...register("departamento", {
                      required: "Introduce un departamento",
                    })}
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
                    className="absolute w-5 h-5 text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2"
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
                {errors.departamento && (
                  <p className="text-[14px] text-red-500 my-2">
                    {errors.departamento.message}
                  </p>
                )}
              </div>

              {/* Input Distrito */}
              <div className="relative w-full">
                <input
                  type="text"
                  id="distrito"
                  className={`
                    peer w-full text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 focus:border-[2px] [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-blue-500 transition-transform duration-300
                    ${errors.distrito
                      ? "border-red-600 border-2"
                      : "border-[1px] border-gray-300"
                    }
                    `}
                  placeholder="Distrito"
                  {...register("distrito", {
                    required: "Introduce un distrito",
                  })}
                />
                <label
                  htmlFor="distrito"
                  className="absolute text-gray-500 text-sm transform opacity-0 -translate-y-1/2 top-7 left-3 transition-transform duration-300
               bg-[#39333300] px-1 pointer-events-none 
               peer-[&:not(:placeholder-shown)]:top-5 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Distrito
                </label>
                {errors.distrito && (
                  <p className="text-[14px] text-red-500 my-2">
                    {errors.distrito.message}
                  </p>
                )}
              </div>

              {/* Input Dirección */}
              <div className="relative w-full mt-2">
                <input
                  type="text"
                  id="direccion"
                  className={`
                    peer w-full text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 focus:border-[2px] [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-blue-500 transition-transform duration-300
                    ${errors.distrito
                      ? "border-red-600 border-2"
                      : "border-[1px] border-gray-300"
                    }
                    `}
                  placeholder="Dirección"
                  {...register("direccion", {
                    required: "Introduce una dirección",
                  })}
                />
                <label
                  htmlFor="direccion"
                  className="absolute text-gray-500 text-sm transform opacity-0 -translate-y-1/2 top-7 left-3 transition-transform duration-300
               bg-[#39333300] px-1 pointer-events-none 
               peer-[&:not(:placeholder-shown)]:top-5 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Dirección (Donde se enviará el pedido)
                </label>
                {errors.direccion && (
                  <p className="text-[14px] text-red-500 my-2">
                    {errors.direccion.message}
                  </p>
                )}
              </div>

              {/* Input Telefono */}
              <div className="relative w-full mt-2">
                <input
                  type="text"
                  id="phone"
                  className={`
                    peer w-full text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 focus:border-[2px] [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-blue-500 transition-transform duration-300
                    ${errors.email
                      ? "border-red-600 border-2"
                      : "border-[1px] border-gray-300"
                    }
                    `}
                  placeholder="Número Telefonico"
                  {...register("phone", { required: "Introduce un teléfono" })}
                />
                <label
                  htmlFor="phone"
                  className="absolute text-gray-500 text-sm transform opacity-0 -translate-y-1/2 top-7 left-3 transition-transform duration-300
               bg-[#39333300] px-1 pointer-events-none 
               peer-[&:not(:placeholder-shown)]:top-5 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Número Telefonico
                </label>
                {errors.phone && (
                  <p className="text-[14px] text-red-500 my-2">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Check Guardar datos */}
              <label className="text-[14px] my-2 flex justify-start gap-2 mt-5 mb-8 font-normal items-center">
                <input
                  type="checkbox"
                  checked={aceptaGuardar}
                  onChange={(e) => setAceptaGuardar(e.target.checked)}
                />
                Deseas guardar la información para autocompletar las proximas
                compras.
              </label>

              {/* METODO DE ENVIO */}
              <p className="text-[16px] mt-5 font-medium">Método de envío</p>
              <section className="w-full border-blue-500 border-[1px] bg-slate-50 rounded-lg p-4 text-[14px] my-3">
                <div className="flex items-center justify-between">
                  <p>ENVIO ECOAMIGABLE</p>
                  <p className="font-medium">S/ {priceDelivery.toFixed(2)}</p>
                </div>
                <p className="mt-1 text-gray-500">
                  Precio de envio a todo Perú
                </p>
              </section>

              {/* PAGO */}
              <div className="justify-between w-full mt-5">
                <p className="text-lg font-medium">Pago</p>
                <p className="text-[14px] mt-1 text-gray-500">
                  Todas las transacciones son seguras y están encriptadas.
                </p>
              </div>
              <section className="w-full flex justify-between text-[14px] items-center mt-5 border-blue-600 border-[1px] bg-slate-50 px-4 py-3 rounded-md rounded-b-none">
                <p>Mercado Pago</p>
                <section className="flex gap-1">
                  <div className="w-[40px] h-[25px] bg-white rounded-md border-[1px] border-gray-200 overflow-hidden px-1 flex justify-center items-center">
                    <span className="pointer-events-none">
                      <img src={icon_visa} alt="Visa" />
                    </span>
                  </div>
                  <div className="w-[40px] h-[25px] bg-white rounded-md border-[1px] border-gray-200 overflow-hidden px-2 flex justify-center items-center">
                    <span className="pointer-events-none">
                      <img src={icon_mercadopago} alt="Visa" />
                    </span>
                  </div>
                  <div className="w-[40px] h-[25px] bg-white rounded-[3px] border-[1px] border-gray-200 overflow-hidden px-2 flex justify-center items-center">
                    <span className="pointer-events-none">
                      <img src={icon_yape} alt="Visa" />
                    </span>
                  </div>

                  <div className="w-[40px] h-[25px] bg-white rounded-[3px] border-[1px] border-gray-200 px-2 flex justify-center items-center relative group">
                    <span className="pointer-events-none">
                      <p className="text-blue-700 text-[13px] font-medium">
                        +3
                      </p>
                    </span>

                    <section className="flex gap-1 opacity-0 bg-black px-3 py-2 rounded-md absolute -top-[53px]  -right-4 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="w-[40px] h-[25px] bg-white rounded-[3px] border-[1px] border-gray-200 overflow-hidden px-2 flex justify-center items-center">
                        <span className="pointer-events-none">
                          <img src={icon_dinerclub} loading="lazy" alt="Visa" />
                        </span>
                      </div>
                      <div className="w-[40px] h-[25px] bg-[#006FCF] rounded-[3px] overflow-hidden pl-4 flex justify-center items-center">
                        <span className="pointer-events-none">
                          <img
                            src={icon_americanexpress}
                            loading="lazy"
                            alt="Visa"
                          />
                        </span>
                      </div>
                      <div className="w-[40px] h-[25px] bg-white rounded-[3px] border-[1px] border-gray-200 overflow-hidden px-1 flex justify-center items-center">
                        <span className="pointer-events-none">
                          <img
                            src={icon_mastercard}
                            loading="lazy"
                            alt="Visa"
                          />
                        </span>
                      </div>
                      <div
                        className="w-0 h-0 absolute -bottom-2 right-7
            border-l-[10px] border-l-transparent 
            border-r-[10px] border-r-transparent 
            border-b-[10px] border-b-[#000000] rotate-180"
                      ></div>
                    </section>
                  </div>
                </section>
              </section>
              <section className="w-full flex flex-col text-[14px] items-center mb-2 border-gray-300 border-[1px] border-t-0 bg-gray-50 p-5 rounded-b-md">
                <div className="w-[100px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-270.8 371 102 52"
                    className="zjrzY"
                  >
                    <path
                      fill="none"
                      stroke="hsl(0, 0%, 44%)"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="M-182 404v16.8c0 .7-.4 1.2-1 1.2h-75.7c-.7 0-1.2-.6-1.2-1.2v-47.6c0-.7.6-1.2 1.2-1.2h75.7c.7 0 1 .6 1 1.2V395m-78-14h78m-17 18h27m-3.9-4.6 4.5 4.6-4.5 4.6"
                    ></path>
                    <circle
                      cx="-255.5"
                      cy="376.5"
                      r="1.5"
                      fill="hsl(0, 0%, 44%)"
                    ></circle>
                    <circle
                      cx="-250.5"
                      cy="376.5"
                      r="1.5"
                      fill="hsl(0, 0%, 44%)"
                    ></circle>
                    <circle
                      cx="-245.5"
                      cy="376.5"
                      r="1.5"
                      fill="hsl(0, 0%, 44%)"
                    ></circle>
                  </svg>
                </div>
                <p className="mx-3 my-3 text-center text-gray-700">
                  Después de hacer clic en “Pagar ahora”, serás redirigido a
                  Mercado Pago para completar tu compra de forma segura.
                </p>
              </section>

              {/* BOTON PAGAR AHORA */}
              <button
                type="submit"
                disabled={cargando}
                className={`
                  lg:block hidden w-full text-[15px] my-4 font-medium text-white rounded-lg py-4 bg-blue-700 hover:bg-blue-800 transition-colors duration-300
                  ${cargando && "animate-pulse"}
                  `}
              >
                {!cargando ? "Pagar Ahora" : "Procesando..."}
              </button>

              {/* POLITICA Y PRIVACIDAD */}
              <section className="items-center hidden pt-2 my-3 text-blue-700 border-t pb-14 text-md lg:flex">
                <a
                  onClick={() => navigate("/politica-y-privacidad")}
                  className="w-auto px-3 underline rounded-md"
                >
                  Política de privacidad
                </a>
                <a
                  onClick={() => navigate("/politica-y-privacidad")}
                  className="block w-auto px-3 underline"
                >
                  Términos del Servicio
                </a>
              </section>
            </form>
          </div>
        </div>
        {/* Seccion precio total */}
        <div className="sticky top-0 flex justify-center w-full border-l md:h-full lg:justify-start">
          <div className="w-[65vh] h-full md:py-5 px-5 py-0 overflow-auto">
            <section className="flex flex-col h-full font-normal">
              <div className="flex justify-between w-full mb-3 text-lg font-medium md:hidden">
                <p>Resumen del pedido</p>
              </div>
              <ul className="w-full px-[10px] h-auto flex flex-col justify-start overflow-scroll">
                {itemCarrito.length > 0
                  ? itemCarrito.map((product, index) => (
                    <li
                      className="w-auto p-2 grid grid-cols-[auto,auto] justify-between"
                      key={index}
                    >
                      <section className="flex items-center">
                        {/* Imagen Producto */}
                        <section className="relative flex mr-[15px]">
                          <div className="w-[63px] h-[60px] overflow-hidden border-[1px] shadow-md border-[#ffffff] rounded-md">
                            <img
                              src={product.urlP}
                              className="w-full h-full object-cover bg-cover bg-center border-[2px] border-[#fff] flex rounded-md"
                            />
                          </div>
                          <div className="absolute -top-2 -right-2 bg-black rounded-md border-2 border-white text-[#fff] px-[7px] py-[1px]">
                            <p>{product.cantidad}</p>
                          </div>
                        </section>

                        <div>
                          {/* Nombre Producto */}
                          <p className="text-[14px]">{product.nameP}</p>
                        </div>
                      </section>
                      {/* Precio Total*/}
                      <div className="h-auto w-auto flex flex-col items-end justify-center text-[14px]">
                        {product.discount >= 1 ? (
                          <>
                            <p className="w-full text-end">
                              S/{" "}
                              {(
                                (product.price -
                                  (product.price * product.discount) / 100) *
                                product.cantidad
                              ).toFixed(2)}
                            </p>
                          </>
                        ) : (
                          <input
                            className="w-full bg-transparent text-end"
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

              <section className="grid w-full h-auto p-5 mt-5 text-sm border-t">
                <div className="flex items-center justify-between">
                  <p>Subtotal</p>
                  <p>S/ {totalPrecio.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between my-3">
                  <p>Envío</p>
                  {/* <p>S/ 10.00</p> */}
                  <p>Gratis</p>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-lg font-semibold">Total</p>
                  </div>
                  <div className="flex items-end gap-2">
                    <p className="text-xs text-gray-400">PEN</p>
                    <p className="text-lg font-semibold">
                      S/ {(totalPrecio + priceDelivery).toFixed(2)}
                    </p>
                  </div>
                </div>
                <p className="w-[150px] text-gray-400 hidden">
                  Incluye más el 18% de impuestos
                </p>
              </section>

              {/* BOTON PAGAR AHORA */}
              <button
                type="submit"
                disabled={cargando}
                onClick={handleSubmitDev}
                className={`
                  lg:hidden block w-full text-[15px] my-4 font-medium text-white rounded-lg py-4 bg-blue-700 hover:bg-blue-800 transition-colors duration-300
                  ${cargando && "animate-pulse"}
                  `}
              >
                {!cargando ? "Pagar Ahora" : "Procesando..."}
              </button>

              {/* POLITICA Y PRIVACIDAD */}
              <section className="flex items-center pt-2 my-3 text-blue-700 border-t pb-14 text-md lg:hidden">
                <a
                  onClick={() => navigate("/politica-y-privacidad")}
                  className="w-auto px-3 underline rounded-md"
                >
                  Política de privacidad
                </a>
                <a
                  onClick={() => navigate("/politica-y-privacidad")}
                  className="block w-auto px-3 underline"
                >
                  Términos del Servicio
                </a>
              </section>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Checkout;
