import React from "react";
import hanazawa from "../assets/hanazawa.png";
import aura from "../assets/aura.png"; 
import Tilt from 'react-parallax-tilt';
const Lib = () => {
  const auraTextStyle = {
    fontFamily: "'New Rocker', sans-serif",
    position: "absolute",
    color: "#FACC15",
    fontWeight: "bold",
    fontSize: "1.9rem",
    textShadow:
      "0 0 5px #FACC15, 0 0 15px #FACC15, 0 0 30px #FACC15, 0 0 60px #FACC15",
  };

  return (
    <div className="relative bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Title */}
      <h1
        style={{
          fontFamily: "'New Rocker', sans-serif",
          textShadow: "0 0 10px #FACC15",
        }}
        className="text-6xl mb-12 text-center text-yellow-400"
      >
        My favourite libraries are
      </h1>
      <div className="relative flex items-center justify-center w-full p-25">
        <Tilt>
        <img
          src={hanazawa}
          alt="Hanazawa"
          className="w-[400px] z-10 drop-shadow-[0_0_25px_#FACC15]"
        />
        </Tilt>
        <div className="absolute left-[15%] flex flex-col items-center space-y-20">
          {["React Three Fiber", "Lottie React"].map((lib, i) => (
            <div key={i} className="relative flex items-center justify-center">
              <img src={aura} alt="Aura" className="w-50 opacity-50 hover:opacity-60" />
              <span style={auraTextStyle} className="hover:text-yellow-700">{lib}</span>
            </div>
          ))}
        </div>
        <div className="absolute right-[15%] flex flex-col items-center space-y-20" >
          {["Framer Motion", "Tailwind CSS"].map((lib, i) => (
            <div key={i} className="relative flex items-center justify-center">
              <img src={aura} alt="Aura" className="w-50 opacity-50 hover:opacity-60" />
              <span style={auraTextStyle}>{lib}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lib;
