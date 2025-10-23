import Sidebar from "../Layout/Sidebar";
import Header_Movile from "../Layout/Header_Movile";
import Navbar from "../Layout/Navbar";
import Cart from "../Layout/Cart";
import AddCart from "../Layout/addCart";
import Footer from "../Layout/Footer";
import Search from "../Components/Search";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/authSingleton";

function Nosotros() {
  const { Disminuir, Aumentar, abrirModalCart, añadirAlCarrito, setNavbar } =
    useAuth();

  const [añadirCart, setAñadirCart] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setNavbar(false);
  }, []);

  return (
    <div className="font-sans select-none">
      <Cart
        onAumentar={(id) => Aumentar(id)}
        onDisminuir={(id) => Disminuir(id)}
      />
      <AddCart onAgregar={(p) => añadirAlCarrito(p)} imgRef={imgRef} />

      <Search
        onModalCart={(p) => abrirModalCart(p)}
        onAñadirCart={(i) => añadirCart()}
      />
      {/* Body */}
      <div className="w-[100wh] text-xs font-sans">
        {/* Anuncion informativo */}
        <div className="bg-transparent">
          <Navbar />
        </div>

        {/* Header Desktop */}
        <div className="hidden md:block sticky top-0 left-0 w-full z-40">
          <Sidebar />
        </div>

        {/* Header Movile */}
        <div className="block md:hidden sticky top-0 left-0 w-full z-30">
          <Header_Movile />
        </div>

        {/* Titulo */}
        <div className="w-auto mt-10 leading-8 text-[30px] font-light px-5 font-sans">
          Sobre Nosotros
        </div>

        {/* Titulo 2 */}

        <div className="mx-5 mt-5 mb-20">
          <section className="px-5 flex flex-col gap-3">
            <p>
              En <strong>MAYIKH STYLE</strong> creemos que cada joya tiene una
              historia que contar. Somos un emprendimiento dedicado a la importación y
              venta de accesorios modernos, para resaltar la elegancia,
              personalidad y estilo único de cada persona.
            </p>
            <p>
              Nacimos con la visión de ofrecer piezas exclusivas que combinen
              tendencia, calidad y autenticidad. Cada uno de nuestros productos
              es seleccionado con detalle, cuidando tanto los materiales como el
              acabado para garantizar una experiencia de lujo accesible.
            </p>
            <p>
              Nuestro compromiso es brindarte una atención personalizada,
              productos duraderos y un servicio en línea confiable. En{" "}
              <strong className="italic">MAYIKH STYLE, no solo vendemos joyas: creamos
              momentos y acompañamos tu estilo.</strong>
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Nosotros;
