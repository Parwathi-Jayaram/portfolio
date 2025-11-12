import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="bg-pink-500 p-20 flex flex-col justify-center items-center text-black">
      <h1
        style={{
          fontFamily: "MobPsychic",
          lineHeight: "1.4",
          letterSpacing: "-0.05em",
          textAlign: "center",
        }}
        className="text-2xl mb-8"
      >
        CONTACT ME
      </h1>

      <div className="space-y-6 text-2xl font-bold">
        <a
          href="https://www.linkedin.com/in/parwathi-jayaram-18b596326/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 transition-transform transform hover:scale-105"
        >
          <FaLinkedin className="text-4xl" />
          <span>Parwathi Jayaram</span>
        </a>
        <a
          href="https://github.com/Parwathi-Jayaram"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:text-gray-800 transition-transform transform hover:scale-105"
        >
          <FaGithub className="text-4xl" />
          <span>Parwathi-Jayaram</span>
        </a>
        <div className="flex items-center gap-4">
          <BiLogoGmail className="text-4xl" />
          <span>parwathijayaram1@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
