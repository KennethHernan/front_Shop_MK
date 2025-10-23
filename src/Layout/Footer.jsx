import icon_tiktok from "../assets/icon_tiktok_white.svg";
import icon_wsp from "../assets/icon_whatsapp_white.svg";
import icon_ig from "../assets/icon_instagram_white.svg";
import icon_fb from "../assets/icon_facebook_white.svg";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col text-[15px] md:flex-row justify-between border-[0px] border-t-[0.5px] bg-black text-[#ffffffa4] pt-8 px-10 font-light">
        <section className="flex flex-col md:flex-row gap-7 md:gap-10 lg:gap-20">
          <div>
            <p className="text-[#fff] font-normal mb-3">Conocenos</p>
            <button className="hover:underline"
              onClick={() => navigate("/sobre-nosotros")}>Nosotros</button>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[#fff] font-normal mb-3">Legal</p>
            <button
              className="hover:underline text-start"
              onClick={() => navigate("/politica-y-privacidad")}
            >
              Terminos de Servicios
            </button>
            <button
              className="hover:underline text-start"
              onClick={() => navigate("/politica-y-privacidad")}
            >
              Política de privacidad
            </button>
            <button className="hover:underline text-start"
              onClick={() => navigate("/politica-y-privacidad")}>
              Política de Cokkies
            </button>
            <button className="hover:underline text-start"
              onClick={() => navigate("/politica-y-privacidad")}>
              Procesamiento de Datos
            </button>
            <button className="hover:underline text-start">
              Libro de Reclamaciones
            </button>
          </div>
        </section>
        <div className="hidden mb-1 ml-4 font-normal underline md:block">
          <button className="hover:underline">Libro de Reclamaciones</button>
        </div>
      </div>
      <section className="w-full h-auto p-10 text-[#ffffffc9] bg-[#000000] ">
        <div className="w-auto flex justify-between py-10 h-auto border-t border-[#ffffff6f]">
          <div className="flex flex-row items-center w-auto gap-2">
            <p className="text-xs">© Mayikh Style, 2025.</p>
          </div>

          <section className="grid w-auto h-auto grid-cols-2 gap-2">
            {/* <button className="flex items-center justify-start w-auto">
              <img src={icon_fb} className="w-[30px]" />
            </button> */}

            <a href="https://www.instagram.com/mayikh.pe/" target="_blank" className="flex items-center justify-start w-auto">
              <img src={icon_ig} className="w-[30px]" />
            </a>

            <a href="https://wa.link/hd9hwl" target="_blank" className="flex items-center justify-start w-auto">
              <img src={icon_wsp} className="w-[30px]" />
            </a>

            {/* <button className="flex items-center justify-start w-auto">
              <img src={icon_tiktok} className="w-[30px]" />
            </button> */}
          </section>
        </div>
      </section>
    </>
  );
};

export default Footer;
