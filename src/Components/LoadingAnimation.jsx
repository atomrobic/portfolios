import React from 'react';
import MySVG from '../assets/file.svg'; // ✅ adjust path
import './Loader.css';

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      id="pre-load"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -100, // Move up slightly
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      <motion.div
        className="loader-inner"
        exit={{
          scale: 0.5,
          opacity: 0,
          y: -200, // Move further up towards where header image might be
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
      >
        <div className="loader-logo">
          <img
            src={MySVG}
            alt="Logo"
            style={{ width: '60px', height: '60px', borderRadius: '30px' }}
          />
        </div>

        {/* animated boxes */}
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
