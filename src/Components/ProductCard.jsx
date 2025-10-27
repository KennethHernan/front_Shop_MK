import React from "react";

function ProductCard({ product, abrirModalCart }) {
  return (
    <>
      {product ? (
        <li
          className="w-auto mb-3 text-sm md:text-md hover:-mt-1"
          onClick={() => abrirModalCart(product)}
        >
          <div className="h-[25vh] md:h-[50vh] group relative">
            {/* Producto Imagen */}
            <img
              src={product.urlP}
              alt="Imagen de Producto"
              className="flex object-cover object-bottom w-full h-full"
              loading="lazy"
            />
            {/* Anuncio Stock */}
            {product.stock <= 0 && (
              <button className="bg-[#000000] absolute bottom-1 px-3 py-2 m-2 rounded-[5px] text-[#fff] text-xs disabled">
                Agotado
              </button>
            )}
          </div>
          {/* Producto Nombre */}
          <p className="pt-1">{product.nameP}</p>
          {/* Producto Precios y Descuento */}
          <div className="flex gap-1">
            {product.discount <= 1 ? (
              <p>
                S/ {product.price.toFixed(2)}
              </p>
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
               S/ {Number(product.price || 0).toFixed(2)}

                </p>
              </>
            )}
          </div>
        </li>
      ) : (
        <li className="w-auto mb-3 text-sm md:text-md animate-pulse">
          <div className="bg-[#e7e7e7] h-[25vh] group relative group/foto"></div>
          <p className="pt-1 bg-[#e7e7e7] rounded-[5px] w-[160px] h-[23px] my-[2px]"></p>
          <div className="flex gap-3">
            <p className="bg-[#e7e7e7] rounded-[5px] w-[60px] h-[23px]"></p>
          </div>
        </li>
      )}
    </>
  );
}

export default ProductCard;
