import Sidebar from "../Layout/Sidebar";
import Header_Movile from "../Layout/Header_Movile";
import Navbar from "../Layout/Navbar";
import Cart from "../Layout/Cart";
import icon_logo from "../assets/icon_logotexto_white.svg";
import AddCart from "../Layout/addCart";
import Footer from "../Layout/Footer";
import Add from "../assets/icon-shop.svg";
import Check from "../assets/Check.svg";
import Search from "../Components/Search";
import ArrowLeft from "../assets/ArrowLeft.svg";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/authSingleton";
import Fondo from "../assets/fondo_portada-1.webp";
import Fondo2 from "../assets/fondo_portada2.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "../Components/ProductCard";
import CategoryCard from "../Components/CategoryCard";

function PoliticaPrivacidad() {
  const {
    Disminuir,
    Aumentar,
    productAll,
    abrirModalCart,
    añadirAlCarrito,
    categoryAll,
    setNavbar,
  } = useAuth();

  const [añadirCart, setAñadirCart] = useState(false);
  const [MostrarBotonDerecho, setMostrarBotonDerecho] = useState(false);
  const [MostrarBotonIzquierdo, setMostrarBotonIzquierdo] = useState(false);
  const ulRef = useRef(null);

  const imgRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
    setNavbar(false);
  }, []);

  // Boton desplazamiento lista de Productos 1
  useEffect(() => {
    const ul = ulRef.current;
    if (!ul) return;

    const checkOverflow = () => {
      const hasOverflow = ul.scrollWidth > ul.clientWidth + 1;
      setMostrarBotonDerecho(hasOverflow);
      setMostrarBotonIzquierdo(false);
    };

    const handleScroll = () => {
      const scrollLeft = ul.scrollLeft;
      const scrollRight = ul.scrollLeft + ul.clientWidth;
      const scrollWidth = ul.scrollWidth;

      const alInicio = scrollLeft <= 5;
      const alFinal = scrollRight >= scrollWidth - 5;

      setMostrarBotonIzquierdo(!alInicio);
      setMostrarBotonDerecho(!alFinal);
    };

    // Revisar al montar
    checkOverflow();
    ul.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkOverflow);

    return () => {
      ul.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [productAll]);

  const scrollDerecha = () => {
    ulRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };
  const scrollIzquierda = () => {
    ulRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

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
        {/* Frase */}
        <div className="w-auto text-[15px] font-light px-10 my-10 text-center italic overflow-hidden">
          <p>
            <span className="font-medium">"</span>En{" "}
            <span className="font-medium">MAYIKH STYLE</span> valoramos y
            respetamos la privacidad de nuestros usuarios y clientes. Esta
            Política de Privacidad y los Términos de Servicio tienen como
            objetivo informar cómo recopilamos, usamos, protegemos y compartimos
            la información proporcionada al usar nuestros servicios
            <span className="font-medium">"</span>
          </p>
        </div>

        {/* Titulo */}
        <div className="w-auto h-10 text-[30px] font-light px-5 font-sans">
          Política de Privacidad y Términos de Servicio
        </div>

        {/* Titulo 2 */}
        <p className="text-lg px-5 font-sans my-5">
          1.- Información que recopilamos
        </p>
        <section className="px-5">
          <li>
            <p>
              Datos personales que proporciones voluntariamente (
              <span className="font-medium">
                Correo electrónico, teléfono, dirección de envío, etc.
              </span>
              ).
            </p>
            <p>
              Información sobre tus compras, preferencias y navegación en
              nuestro sitio web o aplicación.
            </p>
          </li>
        </section>

        {/* Titulo 3 */}
        <p className="text-lg px-5 font-sans my-5">Uso de la información</p>
        <p className="px-5 pb-2">
          La información recopilada será utilizada para:
        </p>
        <section className="px-5">
          <li>
            <p>Procesar y gestionar tus pedidos.</p>
            <p>Mejorar la experiencia de usuario en la plataforma.</p>
            <p>
              Notificarte sobre promociones, novedades o actualizaciones (si
              aceptaste recibirlas).
            </p>
            <p>Cumplir con requisitos legales y de seguridad.</p>
          </li>
        </section>

        {/* Titulo 4 */}
        <p className="text-lg px-5 font-sans my-5">
          Cookies y tecnologías similares
        </p>
        <p className="px-5">
          Nuestro sitio utiliza cookies para recordar tus preferencias, mejorar
          la navegación y analizar el uso de la plataforma. Puedes gestionarlas
          o eliminarlas desde la configuración de tu navegador.
        </p>

        {/* Titulo 5 */}
        <p className="text-lg px-5 font-sans my-5">Protección de datos</p>
        <p className="px-5">
          Adoptamos medidas de seguridad razonables para proteger tu información
          frente a accesos no autorizados, pérdidas o alteraciones.
        </p>

        {/* Titulo 6 */}
        <p className="text-lg px-5 font-sans my-5">Compartir información</p>
        <p className="px-5 mb-2">
          No compartimos tus datos personales con terceros, salvo en los
          siguientes casos:
        </p>
        <section className="px-10">
          <li>Proveedores de servicios (pagos y envíos).</li>
          <li>Cuando lo requiera la ley o una autoridad competente.</li>
        </section>

        {/* Titulo 7 */}
        <div className="mx-5">
          <p className="text-lg font-sans my-5">Derechos del usuario</p>
          <p>Tienes derecho a:</p>
          <section className="px-5 my-2">
            <li>Acceder, rectificar o eliminar tus datos personales.</li>
            <li>Retirar tu consentimiento en cualquier momento. </li>
            <li>Solicitar la limitación o portabilidad de tus datos.</li>
          </section>
          <p className="mt-3">Para ejercer estos derechos, puedes escribirnos a: </p>
          <b className="underline">mayik2025@gmail.com</b>
        </div>

        {/* Titulo 8 */}
        <div className="mx-5">
          <p className="text-lg font-sans my-5">Términos de servicio</p>
          <section className="px-5 mb-2">
            <li>
              El uso de la plataforma implica la aceptación de estas políticas
            </li>
            <li>
              Los precios, promociones y disponibilidad de productos pueden
              cambiar sin previo aviso.
            </li>
            <li>
              Queda prohibido el uso indebido del sitio o la aplicación (fraude,
              intentos de hackeo, uso no autorizado).
            </li>
          </section>
        </div>
        {/* Titulo 8 */}
        <div className="mx-5 mb-5">
        <p className="text-lg font-sans my-5">Cambios en esta política</p>
        <p>
          Nos reservamos el derecho de actualizar esta Política y los Términos
          en cualquier momento. Los cambios serán publicados en esta misma
          sección.
        </p>
</div>
        <Footer />
      </div>
    </div>
  );
}

export default PoliticaPrivacidad;
