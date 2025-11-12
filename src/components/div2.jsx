import React from 'react';
import Typewriter from 'typewriter-effect';

const Me = () => {
  return (
    <div className="bg-black text-pink-600 bg-cover bg-center text-2xl p-5">
      <div style={{ fontFamily: 'MobPsychic',lineHeight: '1.4',overflowWrap: 'break-word',whiteSpace: 'normal', letterSpacing: '-0.05em', textAlign: 'center',justifyContent: 'center',}}>
      <Typewriter
  onInit={(typewriter) => {
    typewriter
      .typeString("HELLO!! I AM PARWATHI JAYARAM.")
      .pauseFor(1000)
      .deleteAll()
      .typeString("I AM A FRONTEND DEVELOPER.")
      .pauseFor(1000)
      .deleteAll()
      .typeString("CHALLENGES ARE WELCOMED")
      .start();
  }}/>
      </div>
    </div>
  );
};

export default Me;
