import { Link, useLocation, useNavigate } from "react-router-dom";

//import { useAuth } from "../context/AuthContext";
import ImagenLogo from "../assets/LOGO TEXTO.svg";
import Profile from "../assets/Profile.svg";
import Seach from "../assets/Seach.svg";
import Shop from "../assets/Shop.svg";
import { useState } from "react";

import React from "react";

function CustomLink({ to, label, ...props }) {
  const location = useLocation();
  const isHovered = location.pathname === to;
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <p
        {...props}
        className={`font-light text-xs hover:font-normal text-[#fff] ${
          isActive ? "font-normal" : ""
        }`}
      >
        {label}
      </p>
    </Link>
  );
}

function Sidebar({ navbar, onAbrirCarrito, cantidadCart, cartIconRef }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const modal = () => {
    // setActive(true);
    // setTimeout(() => {
    //   setActive(false);
    // }, 1000);
  };
  const Home = () => {
    console.log("Click");
    navigate("/");
  };

  return (
    <>
      <div>
        <div
          onMouseEnter={() => setActive(false)}
          className={`h-[80px] flex justify-between items-center px-10 transition-colors duration-300 ${
            navbar ? "bg-[#ffffff00]" : "bg-[#ffffff]"
          }`}
          s
        >
          <section className="flex">
            <div
              className={`h-auto group relative px-3 py-2 rounded-md flex transition-all duration-1000 
            ${navbar ? "hover:bg-[#cfcfcf]" : "hover:bg-[#eeeeee]"}`}
            >
              <CustomLink to="/" label="HOME" onMouseEnter={() => modal()} />

              <div className="absolute top-9 text-xs left-0 opacity-0 scale-95 translate-x-[-50px] pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-500 ease-out">
                <div className="w-full h-[200px] p-5 rounded-md  mt-2 bg-[#ffffff] ">
                  HOME
                </div>
              </div>
            </div>

            <div
              className={`h-auto group relative px-3 py-2 rounded-md flex transition-all duration-1000 
            ${navbar ? "hover:bg-[#cfcfcf]" : "hover:bg-[#eeeeee]"}`}
            >
              <CustomLink to="" label="JOYERIA" onMouseEnter={() => modal()} />
              <div className="absolute top-9 text-xs left-0 opacity-0 scale-95 translate-x-[-50px] pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-500 ease-out">
                <div className="w-[50vh] h-[200px] p-5 rounded-md  mt-2 bg-[#ffffff] ">
                  JOYERIA
                </div>
              </div>
            </div>

            <div
              className={`h-auto group relative px-3 py-2 rounded-md flex transition-all duration-1000 
            ${navbar ? "hover:bg-[#cfcfcf]" : "hover:bg-[#eeeeee]"}`}
            >
              <CustomLink to="" label="SOBRE MK" onMouseEnter={() => modal()} />

              <div className="absolute top-9 text-xs left-0 opacity-0 scale-95 translate-x-[-50px] pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-500 ease-out">
                <div className="w-[50vh] h-[200px] p-5 rounded-md  mt-2 bg-[#ffffff] ">
                  SOBRE MK
                </div>
              </div>
            </div>

            <div
              className={`h-auto group relative px-3 py-2 rounded-md flex transition-all duration-1000 
            ${navbar ? "hover:bg-[#cfcfcf]" : "hover:bg-[#eeeeee]"}`}
            >
              <CustomLink to="" label="LO NUEVO" onMouseEnter={() => modal()} />
              <div className="absolute top-9 text-xs left-0 opacity-0 scale-95 translate-x-[-50px] pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-500 ease-out">
                <div className="w-[50vh] h-[200px] p-5 rounded-md  mt-2 bg-[#ffffff] ">
                  LO NUEVO
                </div>
              </div>
            </div>
          </section>
          <img
            src={ImagenLogo}
            className={`w-[45px] transition-opacity duration-300 ${
              navbar ? "opacity-0" : "opacity-100"
            }`}
          />
          <div className="flex justify-end">
            <button onClick={Home} className="w-1/6 hover:w-1/5">
              <img src={Seach} />
            </button>
            <button onClick={Home} className="w-1/6 mx-5 hover:w-1/5">
              <img src={Profile} />
            </button>
            <button
              onClick={onAbrirCarrito}
              className="w-1/6 hover:w-1/5 relative"
            >
              <img src={Shop} ref={cartIconRef} />
              {cantidadCart.length > 0 && (
                <div className="bg-black text-[#fff] rounded-[100px] text-[10px] w-[15px] h-[15px] absolute right-0 -mt-[10px]">
                  {cantidadCart.length}
                </div>
              )}
            </button>
          </div>
        </div>
        {active == true ? (
          <div
            className="full bg-black h-[200px] m-10"
            onMouseEnter={() => modal()}
          ></div>
        ) : null}
      </div>
    </>
  );
}

export default Sidebar;
