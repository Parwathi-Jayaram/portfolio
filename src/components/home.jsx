import React from 'react';

const Home = () => {
  return (
    <div className="bg-[url('src/assets/bg.jpg')] bg-cover bg-center h-120 flex items-center justify-center">
      <div className="relative w-120 h-120 group">
        <img
          id="mob-calm"
          src="src/assets/calm.png"
          alt="Calm Mob"
          className="absolute w-150 h-120 transition-opacity duration-1500 ease-in-out opacity-100 group-hover:opacity-0"
        />
        <img
          id="mob-angry"
          src="src/assets/angry.png"
          alt="Angry Mob"
          className="absolute w-150 h-120 transition-opacity duration-1500 ease-in-out opacity-0 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default Home;