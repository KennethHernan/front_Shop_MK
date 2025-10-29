import Sidebar from "../Layout/Sidebar";
import Header_Movile from "../Layout/Header_Movile";
import Navbar from "../Layout/Navbar";
import Cart from "../Layout/Cart";
import AddCart from "../Layout/addCart";
import Footer from "../Layout/Footer";
import Search from "../Components/Search";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/authSingleton";

function PoliticaPrivacidad() {
  const { Disminuir, Aumentar, abrirModalCart, añadirAlCarrito, setNavbar } =
    useAuth();

  const [añadirCart, setAñadirCart] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setNavbar(false);
    window.scrollTo(0, 0);
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
        {/* Frase */}
        <div className="w-auto text-[15px] font-light px-10 my-10 text-center italic overflow-hidden">
          <p id="politica">
            <span className="font-medium">"</span>En{" "}
            <span className="font-medium">mayikh.pe</span> valoramos y
            respetamos la privacidad de nuestros usuarios y clientes. Esta
            Política de Privacidad y los Términos de Servicio tienen como
            objetivo informar cómo recopilamos, usamos, protegemos y compartimos
            la información proporcionada al usar nuestros servicios
            <span className="font-medium">"</span>
          </p>
        </div>

        {/* Titulo */}
        <div className="w-auto leading-8 text-[30px] font-light px-5 font-sans">
          Política de Privacidad y Términos de Servicio
        </div>

        {/* Titulo 2 */}

        <div className="mx-5">
          <p className="text-lg font-sans my-5">Información que recopilamos</p>
          <section className="px-5">
            <li id="cokkies">
              Datos personales que proporciones voluntariamente (
              <span className="font-medium">
                Correo electrónico, teléfono, dirección de envío, etc.
              </span>
              ).
            </li>
            <li>
              Información sobre tus compras, preferencias y navegación en
              nuestro sitio web o aplicación.
            </li>
          </section>
        </div>

        {/* Titulo 4 */}
        <div className="mx-5">
          <p className="text-lg font-sans my-5">
            Cookies y tecnologías similares
          </p>
          <p id="procesamiento">
            Nuestro sitio utiliza cookies para recordar tus preferencias,
            mejorar la navegación y analizar el uso de la plataforma. Puedes
            gestionarlas o eliminarlas desde la configuración de tu navegador.
          </p>
        </div>

        {/* Titulo 5 */}
        <div className="mx-5">
          <p className="text-lg font-sans my-5">Protección de datos</p>
          <p>
            Adoptamos medidas de seguridad razonables para proteger tu
            información frente a accesos no autorizados, pérdidas o
            alteraciones.
          </p>
        </div>
        
        {/* Titulo 3 */}
        <div className="mx-5">
          <p className="text-lg font-sans my-5">Uso de la información</p>
          <p className="pb-2">La información recopilada será utilizada para:</p>
          <section className="px-5">
            <li>Procesar y gestionar tus pedidos.</li>
            <li>Mejorar la experiencia de usuario en la plataforma.</li>
            <li>
              Notificarte sobre promociones, novedades o actualizaciones (si
              aceptaste recibirlas).
            </li>
            <li>Cumplir con requisitos legales y de seguridad.</li>
          </section>
        </div>

        {/* Titulo 6 */}
        <div className="mx-5">
          <p className="text-lg font-sans mt-5 mb-3">Compartir información</p>
          <p className="mb-2">
            No compartimos tus datos personales con terceros, salvo en los
            siguientes casos:
          </p>
          <section className="px-5">
            <li>Proveedores de servicios (pagos y envíos).</li>
            <li>Cuando lo requiera la ley o una autoridad competente.</li>
          </section>
        </div>

        {/* Titulo 7 */}
        <div className="mx-5">
          <p className="text-lg font-sans my-5">Derechos del usuario</p>
          <p>Tienes derecho a:</p>
          <section className="px-5 my-2">
            <li>Acceder, rectificar o eliminar tus datos personales.</li>
            <li>Retirar tu consentimiento en cualquier momento. </li>
            <li>Solicitar la limitación o portabilidad de tus datos.</li>
          </section>
          <div className="mt-3 flex items-center gap-1">
            <p>Para ejercer estos derechos, puedes escribirnos a: </p>
            <b className="underline">mayikh2025@gmail.com</b>
          </div>
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
        <div className="mx-5 mb-20">
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
