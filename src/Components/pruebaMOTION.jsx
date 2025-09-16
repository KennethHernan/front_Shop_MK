import React from "react"
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// En tu componente principal:
function PruebaMotion() {

     const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Mientras más scroll, más se mueve hacia la derecha
  const x = useTransform(scrollYProgress, [0, 1], [0, 3000]); // 0px a 300px

  return (
  <div className="h-screen flex items-center bg-gray-100" ref={ref}  style={{ x }}>
      <motion.h1
        style={{ x }}
        className="text-6xl font-bold text-blue-600"
      >
        TEXTO QUE SE MUEVE →
      </motion.h1>
    </div>
  );
}
export default PruebaMotion;