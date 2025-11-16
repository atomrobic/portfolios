import React from 'react';
import MySVG from '../assets/file.svg'; // ✅ adjust path
import './Loader.css';

const Loader = () => {
  return (
    <div id="pre-load">
      <div className="loader-inner">
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
      </div>
    </div>
  );
};

export default Loader;
