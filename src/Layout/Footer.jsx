import icon_logo from "../assets/LogoMK.svg";
import icon_tiktok from "../assets/icon_tiktok.svg";
import icon_wsp from "../assets/icon_wsp.svg";
import icon_ig from "../assets/icon_ig.svg";
import icon_fb from "../assets/icon_fb.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = ({ navbar }) => {
  AOS.init();
  return (
    <>
      <div
        className="flex justify-between border-[0px] border-t-[0.5px] border-[#ebebeb] pt-8 mx-10 mb-[200px] font-light"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <section className="flex flex-col md:flex-row gap-7 md:gap-10 lg:gap-20">
          <div>
            <img src={icon_logo} className="w-[130px] h-[100px]" />
          </div>

          <div>
            <p className="font-normal mb-3">Conocenos</p>
            <button
              className="hover:underline"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Nosotros
            </button>
          </div>

          <div>
            <p className="font-normal mb-3">Atención al Cliente</p>
            <button
              className="hover:underline"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Política de privacidad
            </button>
          </div>

          {/* Secion de Redes Sociales */}
          <section>
            <p className="font-normal mb-3">Redes Sociales</p>
            <div
              className="grid grid-cols-4 gap-2"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <button className="w-[50px] flex justify-start items-center">
                <img
                  src={icon_fb}
                  className="w-[30px] transition-all duration-500 hover:size-8"
                />
              </button>

              <button className="w-[50px] flex justify-start items-center">
                <img
                  src={icon_ig}
                  className="w-[30px] transition-all duration-500 hover:size-8"
                />
              </button>

              <button className="w-[50px] flex justify-start items-center">
                <img
                  src={icon_wsp}
                  className="w-[30px] transition-all duration-500 hover:size-8"
                />
              </button>

              <button className="w-[50px] flex justify-start items-center">
                <img
                  src={icon_tiktok}
                  className="w-[30px] transition-all duration-500 hover:size-8"
                />
              </button>
            </div>
          </section>
        </section>
        <div className="font-normal underline mb-1 ml-4">
          <button className="hover:underline">Libro de Reclamaciones</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
