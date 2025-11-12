import React from "react";
import dimpleImg from "../assets/dimple.png"; 
import Tilt from 'react-parallax-tilt';

const Tools = () => {
  const techStacks = ["HTML", "CSS", "JS", "REACT", "NEXTJS"];
  return (
    <div style={{ fontFamily: 'MobPsychic',lineHeight: '1.4',overflowWrap: 'break-word',whiteSpace: 'normal', letterSpacing: '-0.05em', textAlign: 'center',justifyContent: 'center',}}className="bg-black min-h-screen flex flex-wrap justify-center items-center gap-10">
      {techStacks.map((tech, index) => (
        <div
          key={index}
          className="relative w-80 h-80 flex justify-center items-center blur-xs hover:blur-none"
          style={{animation: "float 3s ease-in-out infinite",}}
        >
          <img
            src={dimpleImg}
            alt={tech}
            className="w-full h-full object-contain transition-transform duration-300 opacity-75"
          />
          <div className="absolute inset-0  opacity-40 blur-md animate-[spin_5s_linear_infinite]"/>
          <span className="absolute text-pink-600 text-lg font-bold drop-shadow-[0_0_5px_#00ffea]">
            {tech}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tools;
