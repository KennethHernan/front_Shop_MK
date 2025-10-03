import React from "react";
import { useAuth } from "../context/authSingleton";

function CategoryCard({ category, index }) {
  const { search, setSearch, setItemSearch,  } = useAuth();

  const BuscarCategoria = () => {
    setSearch(true);
    setItemSearch(category.category);
  }

  return (
    <>
      {category ? (
        <li className="w-full h-[40vh] hover:scale-95 bg-[#f0f0f0] overflow-hidden relative"
        onClick={() => BuscarCategoria()}>
          <img
            src={category.url}
            alt="Imagen de Categoria"
            className="h-[40vh] absolute -bottom-10 -rotate-12 right-0 object-cover object-top drop-shadow-custom"
          />
          <div className="absolute top-1 px-3 py-2 m-5 text-[25px] text-[#000000] font-sans disabled">
            <button className="text-xs text-white bg-black py-1 px-2 rounded-[3px] font-sans">
              Categoría N° {index + 1}
            </button>
            <p className="w-[150px] mt-2">{category.category}</p>
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
