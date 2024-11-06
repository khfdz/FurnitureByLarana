// src/pages/Page2.js
import React from 'react';
import Banner2Part1 from '../../public/images/banner2part1.png';
import Banner2Part2 from '../../public/images/banner2part2.png';
import Banner2Part3 from '../../public/images/banner2part3.png';
import IconButton1 from '../../public/images/button1.png';

const Page2 = () => {
  return (
    <div className="flex justify-center mt-[200px]">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-4xl">
        {/* Kolom A (Banner2Part1) */}
        <div className="flex flex-col row-span-2 justify-center items-center relative">
          <img src={Banner2Part1} alt="Banner 2 Part 1" className="object-cover w-full h-full rounded-2xl" />
          
          {/* Tombol di pojok kiri atas */}
          <div className="absolute top-5 left-5">
            <button className='border-2 border-warna1 text-warna1 text-sm px-2 py-1 rounded-2xl'>Our Collection</button>
            <p className='text-4xl font-semibold '>Modern
              <br />
              Furniture
            </p>
          </div>

          {/* Konten di bagian bawah gambar */}
          <div className="absolute bottom-2 right-2">
            <img src={IconButton1} alt="Icon Button 1" className="h-[100px]" />
          </div>
        </div>

        {/* Kolom B (Banner2Part2) */}
        <div className="flex justify-center items-center relative">
          <img src={Banner2Part2} alt="Banner 2 Part 2" className="object-cover w-full h-full rounded-2xl" />
          
          <div className="absolute top-5 left-5">
            <button className='border-2 border-warna1 text-warna1 text-sm px-2 py-1 rounded-2xl'>Our Collection</button>
            <p className='text-4xl font-semibold '>Outdoor
              <br />
              Seating
            </p>
          </div>

          <div className='absolute text-2xl font-bold bottom-12 left-5'>
            <p>50%
              <br />
              Discount
            </p>
          </div>

          {/* Konten di bagian bawah gambar */}
          <div className="absolute bottom-2 right-2">
            <img src={IconButton1} alt="Icon Button 1" className="h-[60px]" />
          </div>
        </div>

        {/* Kolom D (Banner2Part3) */}
        <div className="flex justify-center items-center relative">
          <img src={Banner2Part3} alt="Banner 2 Part 3" className="object-cover w-full h-full rounded-2xl" />
          
          <div className="absolute top-5 right-5 flex flex-col items-end">
            <button className='border-2 border-warna1 text-warna1 text-sm px-2 py-1 rounded-2xl'>Best Seller</button>
            <p className='text-4xl font-semibold text-right'>Comfort
              <br />
              Zone Chair
            </p>

            <p className='text-right mt-2 text-sm'>
              Unleash your creativity
              <br/>
              with our versatile furniture option.
            </p>
          </div>

          {/* Konten di bagian bawah gambar */}
          <div className="absolute bottom-2 right-2">
            <img src={IconButton1} alt="Icon Button 1" className="h-[60px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
