import React from "react";
import close from "../assets/close_new.svg";
import search_Icon from "../assets/Seach.svg";
import { useAuth } from "../context/AuthContext";

function Search() {
  const { search, setSearch } = useAuth();
  return (
    <section
      className={`
          w-full px-5 bg-[#ffffff] flex justify-between transition-all duration-200 ease-linear overflow-hidden
          ${search ? "h-[60px] py-3" : "h-[0px]"}
        `}
    >
      <button className="rounded-md rounded-r-none border-[#0000002b] px-2 py-1 border-t border-l border-b">
        <img
          src={search_Icon}
          className="w-[35px] hover:scale-110 transition-transform duration-300 ease-linear"
          alt="Boton Buscar Producto"
        />
      </button>
      <input
        type="text"
        placeholder="Buscar Producto..."
        className="bg-[#fff] w-full mr-10 border-t border-r border-b border-[#0000002b] outline-none text-sm px-2 py-1 rounded-md rounded-l-none"
      />
      <button>
        <img
          src={close}
          onClick={() => setSearch(false)}
          className="w-[35px] hover:rotate-45 transition-transform duration-300 ease-linear"
          alt="Boton Cerrar Busqueda"
        />
      </button>
    </section>
  );
}

export default Search;
