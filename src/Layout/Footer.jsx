import icon_logo from "../assets/LogoMK.svg";
import icon_tiktok from "../assets/icon_tiktok_white.svg";
import icon_wsp from "../assets/icon_whatsapp_white.svg";
import icon_ig from "../assets/icon_instagram_white.svg";
import icon_fb from "../assets/icon_facebook_white.svg";
import ImagenLogo2 from "../assets/icon_marca_white.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = ({ navbar }) => {
  AOS.init();
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-between border-[0px] border-t-[0.5px] bg-black text-[#ffffffa4] pt-8 px-10 font-light"
      >
        <section className="flex flex-col md:flex-row gap-7 md:gap-10 lg:gap-20">
          <div>
            <p className="text-[#fff] font-normal mb-3">Conocenos</p>
            <button
              className="hover:underline"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Nosotros
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[#fff] font-normal mb-3">Legal</p>
            <button
              className="hover:underline text-start"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Terminos de Servicios
            </button>
            <button
              className="hover:underline text-start"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Política de privacidad
            </button>
            <button
              className="hover:underline text-start"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Política de Cokkies
            </button>
            <button
              className="hover:underline text-start"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Procesamiento de Datos
            </button>
            <button
              className="hover:underline text-start"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Libro de Reclamaciones
            </button>
          </div>

        </section>
        <div className="hidden md:block font-normal underline mb-1 ml-4">
          <button className="hover:underline">Libro de Reclamaciones</button>
        </div>
      </div>
      <section className="w-full h-auto p-10 text-[#ffffffc9] bg-[#000000] ">
        <div className="w-auto flex justify-between py-10 h-auto border-t border-[#ffffff6f]">
          <div className="w-auto flex flex-row items-center gap-2">
            <p className="text-sm">© Mayihk Style, 2025</p>
          </div>

          <section
            className="w-auto h-auto grid grid-cols-4 gap-2"
          >
            <button className="w-auto flex justify-start items-center">
              <img
                src={icon_fb}
                className="w-[30px] transition-all duration-500 hover:size-8"
              />
            </button>

            <button className="w-auto flex justify-start items-center">
              <img
                src={icon_ig}
                className="w-[30px] transition-all duration-500 hover:size-8"
              />
            </button>

            <button className="w-auto flex justify-start items-center">
              <img
                src={icon_wsp}
                className="w-[30px] transition-all duration-500 hover:size-8"
              />
            </button>

            <button className="w-auto flex justify-start items-center">
              <img
                src={icon_tiktok}
                className="w-[30px] transition-all duration-500 hover:size-8"
              />
            </button>
          </section>
        </div>
      </section>
    </>
  );
};

export default Footer;
