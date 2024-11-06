// src/pages/Page1.js
import React from 'react';
import BannerImage from '../../public/images/banner1.png';
import HalfStats from '../components/halfStats';


const Page1 = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      {/* Background Image */}
      <img src={BannerImage} alt="Banner" className="absolute inset-0 -mt-[100px] w-[1440px] h-[780px] object-cover" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-start ml-[110px] mt-[150px]">
        <p className="text-black text-4xl font-medium px-4 py-2 rounded-lg text-justify">
          Furnish Your Dream
          <br />
          with our furniture
        </p>

        <p className="ml-4 mt-4 text-black text-xl font-medium text-justify">
          Unleash your creativity with our versatile furniture options.
          <br />
          Experience comfort and quality with our furniture.
        </p>

        {/* Buttons */}
        <div className="ml-4 mt-6 flex space-x-4">
          <button className="bg-warna1 text-white px-4 py-2 rounded-2xl w-[120px] font-semibold">Buy Now</button>
          <button className="text-warna1 border-2 border-warna1 px-4 py-2 rounded-2xl w-[120px] font-semibold">Explore</button>
        </div>

        {/* HalfStats Component */}
        <HalfStats />
      </div>
    </div>
  );
};

export default Page1;
