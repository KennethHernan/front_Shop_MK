import icon_logo from "../assets/LogoMK.svg";
import icon_tiktok from "../assets/icon_tiktok.svg";
import icon_wsp from "../assets/icon_wsp.svg";
import icon_ig from "../assets/icon_ig.svg";
import icon_fb from "../assets/icon_fb.svg";

const Footer = ({ navbar }) => {
  return (
    <>
      <div className=" flex justify-between border-[0px] border-t-[0.5px] border-[#a1a1a1] pt-8 mx-10 mb-[100px] font-light">
        <section className="grid grid-cols-4 gap-2">
          <div className="">
            {/* Logo de la empresa fondo: Blanco / Transparente*/}
            <img src={icon_logo} className="w-[130px] h-[100px]" />
          </div>
          <div>
            <p className="font-normal mb-1">Conocenos</p>
            <button>Nosotros</button>
          </div>
          <div>
            <p className="font-normal mb-1">Atención al Cliente</p>
            <p>Política de privacidad</p>
          </div>

          {/* Secion de Redes Sociales */}
          <section>
            <p className="font-normal mb-1">Redes Sociales</p>
            <div className="grid grid-cols-4 gap-3">
              <button>
                <img src={icon_fb} className="w-[40px]" />
              </button>
              <button>
                <img src={icon_ig} className="w-[40px]" />
              </button>
              <button>
                <img src={icon_wsp} className="w-[40px]" />
              </button>
              <button>
                <img src={icon_tiktok} className="w-[40px]" />
              </button>
            </div>
          </section>
        </section>
        <div className="font-normal underline mb-1 ml-4">
          <button>Libro de Reclamaciones</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
