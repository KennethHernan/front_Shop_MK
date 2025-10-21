import { useForm } from "react-hook-form";
import { useAuth } from "../context/authSingleton";
import { useState } from "react";

function Login() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [cargando, setCargando] = useState(false);

  const onSubmit = async (data) => {
    setCargando(true);
    enviarCodigo(data.email);

    console.log("sesion iniciada");
  };

  async function enviarCodigo(email) {
    try {
      const res = await fetch("/api/enviarCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.ok) {
        console.log("Código enviado:", data.code);
      } else {
        console.error("Error al enviar código:", data.message);
      }
    } catch (error) {
      console.error("Error en fetch:", error);
    }
  }

  return (
    <div className="bg-[#F2D0BD] text-[#000] h-[100vh] w-full flex justify-center items-center">
      <section className="bg-white p-5 rounded-sm">
        <p>hola</p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
          <div className="flex justify-between w-full mb-2 text-lg">
            <p className="font-medium">Iniciar sesión</p>
          </div>

          {/* Input Correo Electronico */}
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              className={`
                    peer w-full text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-[2px] focus:border-blue-500 transition-transform duration-300
                    ${
                      errors.email
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

          {/* BOTON Iniciar sesion */}
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
        </form>
      </section>
    </div>
  );
}

export default Login;
