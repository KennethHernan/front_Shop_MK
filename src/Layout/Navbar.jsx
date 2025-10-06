import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../context/authSingleton";
const Navbar = ({ navbar }) => {
  AOS.init();

  const BuscarCategoria = () => {
    setSearch(true);
    setItemSearch(category.category);
  };

  return (
    <>
      <section
        className={`flex flex-row bg-black font-sans justify-center items-center transition-transform duration-300 ${
          navbar ? "pointer-events-none" : ""
        }`}
      >
        <div className="text-white flex gap-1 text-xs my-3">
          {/* Text bolt */}
          <b>50%</b>
          {/* Text normal */}
          <p>de Descuentos en</p>
          {/* Text bolt */}
          <b>Brazaletes Esmaltados</b>
        </div>
      </section>
    </>
  );
};

export default Navbar;
