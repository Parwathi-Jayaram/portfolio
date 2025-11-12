import React from 'react';
import bg from '../assets/bg.jpg';
import calm from '../assets/calm.png';
import angry from '../assets/angry.png';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-120 flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative w-120 h-120 group">
        <img
          id="mob-calm"
          src={calm}
          alt="Calm Mob"
          className="absolute w-150 h-120 transition-opacity duration-1500 ease-in-out opacity-100 group-hover:opacity-0"
        />
        <img
          id="mob-angry"
          src={angry}
          alt="Angry Mob"
          className="absolute w-150 h-120 transition-opacity duration-1500 ease-in-out opacity-0 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default Home;
