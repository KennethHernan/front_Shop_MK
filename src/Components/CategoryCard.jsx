import React from "react";
import { useAuth } from "../context/authSingleton";

function CategoryCard({ category }) {
  const { setSearch, setItemSearch, } = useAuth();

  const BuscarCategoria = () => {
    setSearch(true);
    setItemSearch(category.category);
  }

  return (
    <>
      {category ? (
        <li className="w-full h-[40vh] md:h-[40vh] hover:scale-95 bg-[#f9f7f0] overflow-hidden relative"
          onClick={() => BuscarCategoria()}>
          <img
            src={category.url}
            alt="Imagen de Categoria"
            className="h-[40vh] md:h-[40vh] absolute -bottom-2 -rotate-12 right-0 object-cover object-top drop-shadow-custom"
          />
          <div className="absolute top-0 px-3 m-2 text-[25px] text-[#000000] font-sans disabled">
            <button className="text-xs  bg-white py-1 px-2 rounded-[3px] font-sans shadow-sm">
              {category.category}
            </button>
          </div>

          <div className="absolute hidden bg-black -rotate-90 bottom-10 px-3 py-2 m-5 text-[25px] text-[#000000] font-sans disabled">
            <p>{category.category}</p>
            <button className="text-xs hidden text-white bg-black py-1 px-2 rounded-[3px] hover:text-black transition-colors duration-300">
              Ver más
            </button>
          </div>
        </li>
      ) : (
        <li className="w-full h-[40vh] bg-[#f0f0f0] overflow-hidden relative animate-pulse">
        </li>
      )}
    </>
  );
}

export default CategoryCard;
