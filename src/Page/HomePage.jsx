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

function HomePage() {
  const {
    Disminuir,
    Aumentar,
    productAll,
    abrirModalCart,
    añadirAlCarrito,
    categoryAll,
    setNavbar,
  } = useAuth();

  const [MostrarBotonDerecho, setMostrarBotonDerecho] = useState(false);
  const [MostrarBotonIzquierdo, setMostrarBotonIzquierdo] = useState(false);
  const ulRef = useRef(null);

  const imgRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });

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
      />
      {/* Body */}
      <div className="w-[100wh] z-0">
        {/* Anuncion informativo */}
        <div className="bg-transparent">
          <Navbar />
        </div>

        {/* Header Desktop */}
        <div className="sticky top-0 left-0 z-30 hidden w-full md:block">
          <Sidebar />
        </div>

        {/* Header Movile */}
        <div className="sticky top-0 left-0 z-30 block w-full md:hidden">
          <Header_Movile />
        </div>

        {/* Portada 1 */}
        <div className="w-full h-[60vh] overflow-hidden -mt-[60px] bg-[#c5c5c5] flex justify-center items-center">
          <img
            src={Fondo}
            alt="Fondo"
            loading="eager"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Titulo */}
        <p
          className="mt-10 mb-5 text-[30px] md:text-[35px] font-light px-5 md:px-10 font-sans overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          NOVEDADES
        </p>

        {/* Lista de Productos 1 */}
        <section
          className="relative flex items-center group/button"
          style={{ width: "100%" }}
        >
          {MostrarBotonIzquierdo && (
            <button
              className="bg-[#ffffff] z-20 absolute left-[20px] w-[45px] h-[45px] rounded-[50px] justify-center items-center shadow-md hover:scale-105 transition-transform duration-300 flex"
              onClick={scrollIzquierda}
            >
              <img
                src={ArrowLeft}
                className="w-[6px] rotate-180"
              />
            </button>
          )}
          <ul
            ref={ulRef}
            className="flex justify-start space-x-1 overflow-x-auto font-light select-none no-scrollbar"
            style={{
              maxWidth: "100%",
              width: "100%",
              display: "flex",
            }}
          >
            {productAll.length > 0
              ? productAll.map((product, index) => (
                <li
                  className="hover:mt-[10px] w-[300px] min-w-[350px] text-md transition-transform duration-300 first:pl-5 last:pr-5"
                  onClick={() => abrirModalCart(product)}
                  key={index}
                >
                  <div className="h-[50vh] group relative">
                    {/* Juego de imagenes - Max 2 img */}
                    <img
                      src={product.urlP}
                      alt="producto"
                      className="absolute top-0 object-cover w-full h-full"
                    />
                    {product.stock <= 0 && (
                      <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-[14px] disabled">
                        Agotado
                      </button>
                    )}

                    {product.stock > 0 && (
                      <div className="absolute hidden bottom-1 right-1 md:block">
                        <button
                          onClick={() => abrirModalCart(product)}
                          className="shadow-md hidden group-hover:flex group/sub relative h-[30px] overflow-hidden items-center bg-[#ffffff] p-2 m-2 rounded-[200px] text-[#000] font-normal text-[10px]"
                        >
                          <img
                            src={Add}
                            alt="Boton Añadir al carrito"
                            className="w-[13px] h-[13px]"
                            loading="eager"
                          />
                          <p className="w-0 text-white transition-all duration-300 group-hover/sub:w-10 group-hover/sub:ml-2 group-hover/sub:text-black">
                            AÑADIR
                          </p>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Nombre Producto */}
                  <p className="pt-1">{product.nameP}</p>
                  <div className="flex gap-1">
                    {product.discount <= 1 ? (
                      <p>S/ {product.price.toFixed(2)}</p>
                    ) : (
                      <>
                        <p>
                          S/{" "}
                          {(
                            product.price -
                            (product.discount / 100) * product.price
                          ).toFixed(2)}
                        </p>
                        <p className="line-through text-[#ababab]">
                          S/ {product.price.toFixed(2)}
                        </p>
                      </>
                    )}
                  </div>
                </li>
              ))
              : Array.from({ length: 5 }).map((_, i) => (
                <li
                  className="w-[300px] min-w-[350px] text-md animate-pulse first:pl-5 last:pr-5"
                  key={i}
                >
                  <div className="bg-[#e7e7e7] h-[50vh] group relative group/foto"></div>
                  <p className="pt-1 bg-[#e7e7e7] rounded-[5px] w-[160px] h-[23px] my-[2px]"></p>
                  <div className="flex gap-3">
                    <p className="bg-[#e7e7e7] rounded-[5px] w-[60px] h-[23px]"></p>
                  </div>
                </li>
              ))}
          </ul>
          {MostrarBotonDerecho && productAll.length > 0 && (
            <button
              className="bg-[#ffffff] z-20 absolute  right-[20px] w-[45px] h-[45px] rounded-[50px] justify-center items-center shadow-md hover:scale-105 transition-transform duration-300 flex"
              onClick={scrollDerecha}
            >
              <img src={ArrowLeft} className="w-[6px]" />
            </button>
          )}
        </section>

        {/* Frase */}
        <div className="w-auto text-[20px] lg:text-[30px] font-light px-10 my-20 text-center italic overflow-hidden">
          <p className="" data-aos="fade-up" data-aos-duration="1000">
            "Cada pieza fue creada para recordarte que eres única, valiosa y
            capaz de conquistar el mundo. No solo uses joyas, exprésate con
            ellas"
          </p>
        </div>

        {/* Titulo 2 */}
        <p
          className="my-5 text-[30px] md:text-[35px] font-light px-5 md:px-10 font-sans overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          CATEGORÍAS
        </p>

        {/* Lista de Categorias */}
        <section
          className="relative flex items-center group/button"
          style={{ width: "100%" }}
        >
          <ul className="w-full h-auto flex md:hidden mx-5 flex-col space-y-4 justify-start font-light text-[16px]">
            {categoryAll.length > 0
              ? categoryAll.map((category, index) => (
                < CategoryCard key={index} index={index} category={category} />
              ))
              : Array.from({ length: 2 }).map((_, i) => (
                < CategoryCard key={i} index={null} category={false} />
              ))}
          </ul>

          <ul className="w-full h-auto hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-10 justify-start font-light text-[16px]">
            {categoryAll.length > 0
              ? categoryAll.map((category, index) => (
                < CategoryCard key={index} index={index} category={category} />
              ))
              : Array.from({ length: 2 }).map((_, i) => (
                < CategoryCard key={i} index={null} category={false} />
              ))}
          </ul>
        </section>

        {/* Portada 2 */}
        <div
          className="bg-[#bebebe] h-[70vh] mt-10"
          style={{
            backgroundImage: `url(${Fondo2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          loading="eager"
        ></div>

        {/* Baner 3 mensajes */}
        <section className="md:px-10 my-[10vh] text-[12px] flex gap-2 justify-between font-light mx-5 md:mx-10 text-center">
          <div className="overflow-hidden">
            <p className="font-medium">Calidad que brilla</p>
            <p>Acero inoxidable duradero y con estilo.</p>
          </div>
          <div className="overflow-hidden">
            <p className="font-medium ">Diseño que inspira</p>
            <p>Moderno, elegante y para todo momento.</p>
          </div>
          <div className="overflow-hidden">
            <p className="font-medium">Hecho para durar</p>
            <p>Resistente al agua y hipoalergénico.</p>
          </div>
        </section>

        {/* Titulo 2 */}
        <p
          className="pb-5 text-[30px] md:text-[35px] font-light px-5 font-sans"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          EN TENDENCIA
        </p>

        {/* Seccion de producto 2 */}
        <section className="relative flex items-center w-full h-auto">
          <ul className="grid w-full h-auto grid-cols-2 gap-2 px-5 font-light md:grid-cols-3">
            {productAll.length > 0
              ? productAll.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  abrirModalCart={abrirModalCart}
                />
              ))
              : Array.from({ length: 4 }).map((_, i) => (
                <ProductCard
                  key={i}
                  onProdut={null}
                  OnAbrirModalCart={null}
                />
              ))}
          </ul>
        </section>

        {/* Portada 3 */}
        <div className="bg-[#F2D0BD] w-[100wh] h-[50vh] md:h-[100vh] my-20 flex flex-col md:flex-row overflow-hidden">
          <section className="relative flex flex-col justify-between w-auto h-full p-10 font-light md:p-32">
            <div className="z-20">
              <p className="text-[28px] md:text-[50px] italic mb-8 md:mb-10">
                Cada joya tiene una historia… ¿ya elegiste la tuya?
              </p>
              <a
                href="#"
                className="px-5 py-3 my-5 text-sm font-normal text-white transition-colors duration-500 bg-black rounded-sm md:px-8 md:text-md hover:bg-white hover:text-black"
              >
                Visitanos
              </a>
            </div>
            <div className="z-20">
              <p
                className="text-[16px] md:text-[28px]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Descubre lo nuevo en nuestra tienda virtual, nos encontramos en
                <a href="#" className="font-medium hover:underline">
                  @mayikh.pe
                </a>
              </p>
            </div>
            <img
              src={icon_logo}
              alt="Imagen Logo"
              className="absolute -right-0 rotate-0 z-10 top-40 w-[250px] opacity-55"
              loading="eager"
            />
          </section>
          <div
            className="hidden bg-[#fff] border-t-2 border-b-2 w-[690px] md:flex flex-col justify-center items-center font-light"
            style={{
              backgroundImage: `url(${""})`,
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
