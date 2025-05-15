import React from 'react';
import { motion } from 'framer-motion';

function Header({ image, title, subtitle }) {
  return (
    <motion.div className="relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <img
        src={image}
        alt="header"
        className="w-full h-[16rem] md:h-[20rem] lg:h-[24rem] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 ,delay:0.5}}
      >
        <motion.h1
          className="text-2xl md:text-3xl font-semibold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h1>

        <motion.h3
          className="text-sm md:text-lg font-medium text-white mt-2 w-full lg:w-[60%] xl:w-[50%] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
}

export default Header;
