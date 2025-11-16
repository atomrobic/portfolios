import React from "react";
import Navbar from "../Components/Navbar";
import { DotBackground } from "../Components/DotBackground";

const Home = () => {
  return (
    <div className="relative bg-[#060010] min-h-screen overflow-hidden text-white">
      <Navbar />
      <DotBackground />
    </div>
  );
};

export default Home;