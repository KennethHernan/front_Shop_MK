import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/Navbar";
import Cart from "../Layout/Cart";
import Footer from "../Layout/Footer";
import Add from "../assets/icon-shop.svg";
import img_2 from "../assets/img_2.png";
import img_1 from "../assets/img_1.png";
import Close from "../assets/close-blak.svg";
import arrow_derecha from "../assets/Arrorw-Derecha.svg";
import { useEffect, useState } from "react";

function HomePage() {
  const [navbar, setNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const [modalCarrito, setModalCarrito] = useState(false);

  const abrirCarrito = () => {
    setIsOpen(true);
  };
  const closeCarrito = () => {
    setIsOpen(false);
  };
  const abrirProduct = () => {
    setIsOpenProduct(true);
  };
  const closeProduct = () => {
    setIsOpenProduct(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavbar(true);
      }
      if (window.scrollY > 0) {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Cart isOpen={isOpen} onCerrarCarrito={closeCarrito} />
      <Product isOpen={isOpenProduct} onCerrarCarrito={closeProduct} />
      <div className="bg-transparent sticky top-0 z-40">
        <Navbar navbar={navbar} />
        <Sidebar navbar={navbar} onAbrirCarrito={abrirCarrito} />
      </div>

      {/* Body */}
      <div className="w-[100wh] -mt-[80px]">
        <div className="w-full h-[500px] bg-[#dcdcdc] flex justify-center items-center">
          <img src="" alt="" srcset="" />
          <p>Imagen fondo</p>
        </div>
        <p className="py-10 text-[40px] font-light ml-10">NOVEDADES</p>
        <section className="w-full">
          <ul className="h-[75vh] grid grid-cols-5 gap-1 mx-10 justify-between font-light text-[16px] select-none">
            <li className="hover:-mt-[3px]">
              <div className="bg-[#a1a1a1] h-[70vh] group relative group/foto">
                {/* Juego de imagenes - Max 2 img */}
                <img
                  src={img_1}
                  className="absolute top-0 h-full w-full object-cover group-hover/foto:hidden"
                />
                <img
                  src={img_2}
                  className="absolute hidden top-0 h-full w-full object-cover group-hover/foto:block"
                />
                <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                  Agotado
                </button>
                <div className="absolute bottom-1 right-1">
                  <button
                    onClick={abrirProduct}
                    className="shadow-md hidden group-hover:flex group/sub relative h-[30px] bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]"
                  >
                    <img src={Add} className="w-[13px] h-[13px]" />
                    <p className="ml-2 hidden group-hover/sub:block">AÑADIR</p>
                  </button>
                </div>
              </div>

              <p className="pt-1">Lorem ipsum dolor, sit </p>
              <div className="flex gap-3">
                <p className="line-through">S/.500</p>
                {/* Descuento - Tachar texto: line-through */}
                <p>S/.400</p>
              </div>
            </li>

            <li className="hover:-mt-[3px]">
              <div className="bg-[#a1a1a1] h-[70vh] group relative group/foto">
                {/* Juego de imagenes - Max 2 img */}
                <img
                  src={img_1}
                  className="absolute top-0 h-full w-full object-cover group-hover/foto:hidden"
                />
                <img
                  src={img_2}
                  className="absolute hidden top-0 h-full w-full object-cover group-hover/foto:block"
                />
                <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                  Agotado
                </button>
                <div className="absolute bottom-1 right-1">
                  <button className="shadow-md hidden group-hover:flex group/sub relative h-[30px] bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]">
                    <img src={Add} className="w-[13px] h-[13px]" />
                    <p className="ml-2 hidden group-hover/sub:block">AÑADIR</p>
                  </button>
                </div>
              </div>

              <p className="pt-1">Lorem ipsum dolor, sit </p>
              <div className="flex gap-3">
                <p className="line-through">S/.500</p>
                {/* Descuento - Tachar texto: line-through */}
                <p>S/.400</p>
              </div>
            </li>

            <li className="hover:-mt-[3px]">
              <div className="bg-[#a1a1a1] h-[70vh] group relative group/foto">
                {/* Juego de imagenes - Max 2 img */}
                <img
                  src={img_1}
                  className="absolute top-0 h-full w-full object-cover group-hover/foto:hidden"
                />
                <img
                  src={img_2}
                  className="absolute hidden top-0 h-full w-full object-cover group-hover/foto:block"
                />
                <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                  Agotado
                </button>
                <div className="absolute bottom-1 right-1">
                  <button className="shadow-md hidden group-hover:flex group/sub relative h-[30px] bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]">
                    <img src={Add} className="w-[13px] h-[13px]" />
                    <p className="ml-2 hidden group-hover/sub:block">AÑADIR</p>
                  </button>
                </div>
              </div>

              <p className="pt-1">Lorem ipsum dolor, sit </p>
              <div className="flex gap-3">
                <p className="line-through">S/.500</p>
                {/* Descuento - Tachar texto: line-through */}
                <p>S/.400</p>
              </div>
            </li>

            <li className="hover:-mt-[3px]">
              <div className="bg-[#a1a1a1] h-[70vh] group relative group/foto">
                {/* Juego de imagenes - Max 2 img */}
                <img
                  src={img_1}
                  className="absolute top-0 h-full w-full object-cover group-hover/foto:hidden"
                />
                <img
                  src={img_2}
                  className="absolute hidden top-0 h-full w-full object-cover group-hover/foto:block"
                />
                <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                  Agotado
                </button>
                <div className="absolute bottom-1 right-1">
                  <button className="shadow-md hidden group-hover:flex group/sub relative h-[30px] bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]">
                    <img src={Add} className="w-[13px] h-[13px]" />
                    <p className="ml-2 hidden group-hover/sub:block">AÑADIR</p>
                  </button>
                </div>
              </div>

              <p className="pt-1">Lorem ipsum dolor, sit </p>
              <div className="flex gap-3">
                <p className="line-through">S/.500</p>
                {/* Descuento - Tachar texto: line-through */}
                <p>S/.400</p>
              </div>
            </li>

            <li className="hover:-mt-[3px]">
              <div className="bg-[#a1a1a1] h-[70vh] group relative group/foto">
                {/* Juego de imagenes - Max 2 img */}
                <img
                  src={img_1}
                  className="absolute top-0 h-full w-full object-cover group-hover/foto:hidden"
                />
                <img
                  src={img_2}
                  className="absolute hidden top-0 h-full w-full object-cover group-hover/foto:block"
                />
                <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                  Agotado
                </button>
                <div className="absolute bottom-1 right-1">
                  <button className="shadow-md hidden group-hover:flex group/sub relative h-[30px] bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]">
                    <img src={Add} className="w-[13px] h-[13px]" />
                    <p className="ml-2 hidden group-hover/sub:block">AÑADIR</p>
                  </button>
                </div>
              </div>

              <p className="pt-1">Lorem ipsum dolor, sit </p>
              <div className="flex gap-3">
                <p className="line-through">S/.500</p>
                {/* Descuento - Tachar texto: line-through */}
                <p>S/.400</p>
              </div>
            </li>
          </ul>
        </section>

        <p className="py-[10vh] text-[40px] font-light mx-10 text-center">
          Frase iconica - texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto.
        </p>

        <section className="w-full z-0 ">
          <ul className="h-[90vh] flex gap-1 mx-10 justify-center font-light text-[16px] select-none">
            <li className="w-[45vh] hover:-mt-[3px]">
              <div
                className="bg-[#a1a1a1] h-[80vh] relative"
                style={{
                  backgroundImage: `url(${img_1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <button className="flex gap-3">
                <p className="pt-1">Categoria 1</p>
                <img src={arrow_derecha} alt="" />
              </button>
            </li>

            <li className="w-[45vh] hover:-mt-[3px]">
              <div
                className="bg-[#a1a1a1] h-[80vh] relative"
                style={{
                  backgroundImage: `url(${img_1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <button className="flex gap-3">
                <p className="pt-1">Categoria 2</p>
                <img src={arrow_derecha} alt="" />
              </button>
            </li>

            <li className="w-[45vh] hover:-mt-[3px]">
              <div
                className="bg-[#a1a1a1] h-[80vh] relative"
                style={{
                  backgroundImage: `url(${img_1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <button className="flex gap-3">
                <p className="pt-1">Categoria 3</p>
                <img src={arrow_derecha} alt="" />
              </button>
            </li>
          </ul>
        </section>

        {/* Portada 2 */}
        <div
          className="bg-[#bebebe] h-[100vh] mt-10"
          style={{
            backgroundImage: `url(${img_1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Baner 3 mensajes */}
        <section className="px-10 py-[10vh] flex justify-between text-[18px] font-light mx-10 text-center">
          <div>
            <p className=" font-medium">Subtitulo</p>
            <p>Describe tus productos la calidad etc.</p>
          </div>
          <div>
            <p className=" font-medium">Subtitulo 2</p>
            <p>Describe tus productos la calidad etc.</p>
          </div>
          <div>
            <p className=" font-medium">Subtitulo 3</p>
            <p>Describe tus productos la calidad etc.</p>
          </div>
        </section>

        {/* Seccion de producto 2 */}
        <section className="w-full">
          <ul className="h-[75vh] grid grid-cols-5 gap-1 mx-10 justify-between font-light text-[16px] select-none">
            <li className="hover:-mt-[3px]">
              <div className="bg-[#a1a1a1] h-[70vh] group relative group/foto">
                {/* Juego de imagenes - Max 2 img */}
                <img
                  src={img_1}
                  className="absolute top-0 h-full w-full object-cover group-hover/foto:hidden"
                />
                <img
                  src={img_2}
                  className="absolute hidden top-0 h-full w-full object-cover group-hover/foto:block"
                />
                <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                  Agotado
                </button>
                <div className="absolute bottom-1 right-1">
                  <button className="shadow-md hidden group-hover:flex group/sub relative h-[30px] bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]">
                    <img src={Add} className="w-[13px] h-[13px]" />
                    <p className="ml-2 hidden group-hover/sub:block">AÑADIR</p>
                  </button>
                </div>
              </div>

              <p className="pt-1">Lorem ipsum dolor, sit </p>
              <div className="flex gap-3">
                <p className="line-through">S/.500</p>
                {/* Descuento - Tachar texto: line-through */}
                <p>S/.400</p>
              </div>
            </li>

            <li className="hover:-mt-[3px]">
              <div className="bg-[#a1a1a1] h-[70vh] group relative group/foto">
                {/* Juego de imagenes - Max 2 img */}
                <img
                  src={img_1}
                  className="absolute top-0 h-full w-full object-cover group-hover/foto:hidden"
                />
                <img
                  src={img_2}
                  className="absolute hidden top-0 h-full w-full object-cover group-hover/foto:block"
                />
                <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                  Agotado
                </button>
                <div className="absolute bottom-1 right-1">
                  <button className="shadow-md hidden group-hover:flex group/sub relative h-[30px] bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]">
                    <img src={Add} className="w-[13px] h-[13px]" />
                    <p className="ml-2 hidden group-hover/sub:block">AÑADIR</p>
                  </button>
                </div>
              </div>

              <p className="pt-1">Lorem ipsum dolor, sit </p>
              <div className="flex gap-3">
                <p className="line-through">S/.500</p>
                {/* Descuento - Tachar texto: line-through */}
                <p>S/.400</p>
              </div>
            </li>

            <li className="hover:-mt-[3px]">
              <div className="bg-[#a1a1a1] h-[70vh] group relative group/foto">
                {/* Juego de imagenes - Max 2 img */}
                <img
                  src={img_1}
                  className="absolute top-0 h-full w-full object-cover group-hover/foto:hidden"
                />
                <img
                  src={img_2}
                  className="absolute hidden top-0 h-full w-full object-cover group-hover/foto:block"
                />
                <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                  Agotado
                </button>
                <div className="absolute bottom-1 right-1">
                  <button className="shadow-md hidden group-hover:flex group/sub relative h-[30px] bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]">
                    <img src={Add} className="w-[13px] h-[13px]" />
                    <p className="ml-2 hidden group-hover/sub:block">AÑADIR</p>
                  </button>
                </div>
              </div>

              <p className="pt-1">Lorem ipsum dolor, sit </p>
              <div className="flex gap-3">
                <p className="line-through">S/.500</p>
                {/* Descuento - Tachar texto: line-through */}
                <p>S/.400</p>
              </div>
            </li>

            <li className="hover:-mt-[3px]">
              <div className="bg-[#a1a1a1] h-[70vh] group relative group/foto">
                {/* Juego de imagenes - Max 2 img */}
                <img
                  src={img_1}
                  className="absolute top-0 h-full w-full object-cover group-hover/foto:hidden"
                />
                <img
                  src={img_2}
                  className="absolute hidden top-0 h-full w-full object-cover group-hover/foto:block"
                />
                <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                  Agotado
                </button>
                <div className="absolute bottom-1 right-1">
                  <button className="shadow-md hidden group-hover:flex group/sub relative h-[30px] bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]">
                    <img src={Add} className="w-[13px] h-[13px]" />
                    <p className="ml-2 hidden group-hover/sub:block">AÑADIR</p>
                  </button>
                </div>
              </div>

              <p className="pt-1">Lorem ipsum dolor, sit </p>
              <div className="flex gap-3">
                <p className="line-through">S/.500</p>
                {/* Descuento - Tachar texto: line-through */}
                <p>S/.400</p>
              </div>
            </li>

            <li className="hover:-mt-[3px]">
              <div className="bg-[#a1a1a1] h-[70vh] group relative group/foto">
                {/* Juego de imagenes - Max 2 img */}
                <img
                  src={img_1}
                  className="absolute top-0 h-full w-full object-cover group-hover/foto:hidden"
                />
                <img
                  src={img_2}
                  className="absolute hidden top-0 h-full w-full object-cover group-hover/foto:block"
                />
                <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                  Agotado
                </button>
                <div className="absolute bottom-1 right-1">
                  <button className="shadow-md hidden group-hover:flex group/sub relative h-[30px] bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]">
                    <img src={Add} className="w-[13px] h-[13px]" />
                    <p className="ml-2 hidden group-hover/sub:block">AÑADIR</p>
                  </button>
                </div>
              </div>

              <p className="pt-1">Lorem ipsum dolor, sit </p>
              <div className="flex gap-3">
                <p className="line-through">S/.500</p>
                {/* Descuento - Tachar texto: line-through */}
                <p>S/.400</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Portada 3 */}
        <div className="bg-[#D9D9D9] w-[100wh] h-[100vh] my-20 flex overflow-hidden">
          <section className="w-auto font-light p-32 flex flex-col justify-between">
            <p className="text-[50px]">
              Cada joya tiene una historia… ¿ya elegiste la tuya?
            </p>
            <div>
              <button className="bg-black px-5 py-2 my-5 text-white hover:bg-[#2d2d2d]">
                Visitanos
              </button>
              <p className="text-[28px]">
                Descubre lo nuevo en nuestra tienda, nos encontramos en [Colocar
                Dirección]
              </p>
            </div>
          </section>
          <div
            className="w-[690px] flex flex-col justify-center items-center bg-[#C3BBA7] text-white font-light"
            style={{
              backgroundImage: `url(${img_1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <b className="w-[250px] text-center">
              Foto referencial de su tienda Tamaño:
            </b>
            <p>Alto: 974 px</p>
            <p> Ancho: 690 px</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
