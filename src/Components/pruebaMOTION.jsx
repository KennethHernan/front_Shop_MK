import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// En tu componente principal:
function PruebaMotion({ label }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  return (
    <p className="py-10 text-[35px] font-light ml-10">
      <motion.h1 style={{ x }} className="">
        {label}
      </motion.h1>
    </p>
  );
}
export default PruebaMotion;
