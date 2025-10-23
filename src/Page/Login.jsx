import { useForm } from "react-hook-form";
import { useAuth } from "../context/authSingleton";
import { useState } from "react";
import icon_Progress from "../assets/progress.svg";

function Login() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { setEmailLogin, enviarCodigo, codigoEnviado, messageCode, setMessageCode } = useAuth();
  const [cargando, setCargando] = useState(false);

  const onSubmit = async (data) => {
    setMessageCode("");
    setCargando(true);
    enviarCodigo(data.email);
    setEmailLogin(data.email);
  };

  const onSubmitValidarCode = async (data) => {
    Login(data);
  };

  return (
    <div className="bg-[#e0e0e060] text-[#000] h-[100vh] w-full flex justify-center items-center select-none">
      <section className="bg-white p-5 rounded-sm m-5">
        <p className="w-full text-center text-[25px] my-7 font-light">
          MAYIKH SYTYLE
        </p>
        {!codigoEnviado ? (
          <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
            <div className="flex justify-between w-full mb-1 text-lg">
              <p className="font-medium">Iniciar sesión</p>
            </div>
            <p className="text-[#9d9d9d] text-sm sm:w-[50vh] font-light">
              Introduce tu correo electrónico y te enviaremos un codigo de
              verificación.
            </p>

            {/* Input Correo Electronico */}
            <div className="relative w-full my-4">
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
                placeholder="Correo electrónico"
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
                Correo electrónico
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
                  w-full text-[15px] my-5 flex justify-center items-center font-medium text-white rounded-lg py-3 bg-blue-700 bg-opacity-80 transition-colors duration-300
                  ${!cargando && "hover:bg-blue-800"}
                  `}
            >
              {!cargando ? (
                "Continuar"
              ) : (
                <img
                  src={icon_Progress}
                  alt="Icono cargando"
                  className="animate-spin"
                />
              )}
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmitValidarCode)}
            className="w-full h-full"
          >
            <div className="flex justify-between w-full mb-1 text-lg">
              <p className="font-medium">Verifica tu código</p>
            </div>
            <p className="text-[#9d9d9d] text-sm sm:w-[50vh] font-light">
              Introduce el código de verificación que te hemos enviado a{" "}
              {emailUser}
            </p>

            {/* Input Code */}
            <div className="relative w-full my-4">
              <input
                type="text"
                id="code"
                maxLength={6}
                minLength={6}
                className={`
                    peer w-full text-sm text-gray-900 rounded-lg px-4 pt-4 pb-4 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 focus:outline-none focus:border-[2px] focus:border-blue-500 transition-transform duration-300
                    ${
                      errors.code
                        ? "border-red-600 border-2"
                        : "border-[1px] border-gray-300"
                    }
                    `}
                placeholder="Código de verificación"
                {...register("code", {
                  required: "Introduce el código de verificación",
                })}
              />
              <label
                htmlFor="code"
                className="absolute text-gray-500 text-sm transform opacity-0 -translate-y-1/2 top-7 left-3 transition-transform duration-300
               bg-[#39333300] px-1 pointer-events-none 
               peer-[&:not(:placeholder-shown)]:top-5 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:text-xs"
              >
                Código de verificación
              </label>
              {errors.code && (
                <p className="text-[14px] text-red-500 my-2">
                  {errors.code.message}
                </p>
              )}
              {messageCode.length > 0 && (
                <p className="text-[14px] text-red-500 my-2">{messageCode}</p>
              )}
            </div>

            {/* BOTON Iniciar sesion */}
            <button
              type="submit"
              disabled={cargando}
              className={`
                  w-full text-[15px] my-5 font-medium text-white rounded-lg py-3 bg-blue-700 bg-opacity-80 hover:bg-blue-800 transition-colors duration-300
                  ${cargando && "animate-pulse"}
                  `}
            >
              {!cargando ? "Verificar" : "Validando..."}
            </button>
          </form>
        )}
        <div className="mt-6 text-xs text-center text-gray-500">
          <a href="#" className="hover:underline">
            Privacidad
          </a>{" "}
          ·{" "}
          <a href="#" className="hover:underline">
            Términos
          </a>
        </div>
      </section>
    </div>
  );
}

export default Login;
