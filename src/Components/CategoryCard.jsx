import React from "react";

function CategoryCard({ category }) {
  return (
    <>
      {category ? (
        <a
          className="w-full h-[40vh] md:h-[70vh] overflow-hidden border-r border-b flex flex-col justify-center items-center text-sm group"
          href={`/categoria-producto/${category.id}`}
        >
          <img
            src={category.url}
            alt="Imagen de Categoria"
            className="h-[25vh] md:h-[30vh] object-cover object-top"
          />
          <div className="text-[#6e6e6e] font-sans uppercase group-hover:border-b pb-2 mt-5 transition-all duration-300">
            {category.category}
          </div>
        </a>
      ) : (
        <li className="w-full h-[40vh] bg-[#f0f0f0] overflow-hidden relative animate-pulse"></li>
      )}
    </>
  );
}

export default CategoryCard;
