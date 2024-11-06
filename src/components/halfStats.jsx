// src/components/HalfStats.js
import React from 'react';

const HalfStats = () => {
  return (
    <div className="ml-[200px] mt-[170px]">
    <div className="mt-[40px] text-5xl bg-warna1 rounded-2xl  h-[150px] w-[920px]  flex justify-center items-center space-x-16 ">
      <div className="text-white font- flex items-center space-x-4">
        <p className="">975+</p>
        <div className="text-sm">
          <p>Furniture and</p>
          <p>Home Equipment</p>
        </div>
      </div>
      <div className="text-white flex items-center space-x-4">
        <p className="">320+</p>
        <div className="text-sm">
          <p>Fresh Interior</p>
          <p>Deisgn Theme</p>
        </div>
      </div>
      <div className="text-white flex items-center space-x-4">
        <p className="">462+</p>
        <div className="text-sm">
          <p>Happy Clients</p>
          <p>More Of This</p>
        </div>
      </div>
     
    </div>
    </div>
  );
};

export default HalfStats;
