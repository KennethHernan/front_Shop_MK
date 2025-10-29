import { useAuth } from "../context/authSingleton";
const Navbar = ({ navbar }) => {

  return (
    <>
      <section
        className={`flex flex-row bg-black font-sans justify-center items-center transition-transform duration-300 ${
          navbar ? "pointer-events-none" : ""
        }`}
      >
        <a href="/categoria-producto/4377f5f1-7540-4194-96ea-6ea5782a9ecd" className="text-white flex gap-1 text-xs my-3">
          {/* Text bolt */}
          <b>50%</b>
          {/* Text normal */}
          <p>de Descuentos en</p>
          {/* Text bolt */}
          <b>Brazaletes Esmaltados</b>
        </a>
      </section>
    </>
  );
};

export default Navbar;
