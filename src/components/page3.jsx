import React from "react";
import Banner3Part1 from "../../public/images/banner3part1.png";
import Banner3Part2 from "../../public/images/banner3part2.png";
import Banner3Part3 from "../../public/images/banner3part3.png";
import Banner3Part4 from "../../public/images/banner3part4.png";
import Banner3Part5 from "../../public/images/banner3part5.png";
import Banner3Part6 from "../../public/images/banner3part6.png";
import Cart2 from "../../public/images/cart2.png";

const Page3 = () => {
    return (
        <div className="flex justify-center items-center h-screen mt-[200px]">
            {/* Container utama yang membungkus teks, tombol, dan grid gambar */}
            <div className="relative p-8 bg-warna2 w-[900px] max-w-5xl rounded-2xl">
                
                {/* Teks di pojok kiri atas */}
                <div className="absolute top-6 left-8 z-10">
                    <p className="text-3xl font-semibold">Modern Design For Any Budget</p>
                </div>

                {/* Button di pojok kanan atas */}
                <div className="absolute top-6 right-4 z-10">
                    <button className="px-4 py-1  text-warna1 font-semibold rounded-2xl border-2 border-warna1">
                        View All
                    </button>
                </div>

                {/* Grid layout untuk gambar */}
                <div className="grid grid-cols-3 grid-rows-2 gap-4 pt-14">
                    
                    {/* Kolom dan baris untuk setiap gambar */}
                                    {/* Kolom dan baris untuk setiap gambar */}
                <div className="relative flex justify-center items-center">
                    <img src={Banner3Part4} alt="Banner 3 Part 1" className="object-cover w-full h-full rounded-2xl" />
                    <p className="absolute bottom-[85px] left-4 text-white font-normal py-1 rounded text-xl">
                        Coffee Table
                    </p>
                    <p className="absolute bottom-16 left-4 text-white font-normal  py-1 rounded text-sm">
                        Start From
                    </p>
                    <p className="absolute bottom-8 left-4 text-white font-normal  py-1 rounded text-3xl">
                        $125.00
                    </p>
                    <div className="bg-warna1 w-[50px] h-[50px] rounded-2xl absolute bottom-4 right-2 flex items-center justify-center">
                        <img src={Cart2} alt="Cart Icon" className="h-6 w-6 cursor-pointer" />
                    </div>
                </div>

                        {/* Kolom dan baris untuk setiap gambar */}
                        <div className="relative flex justify-center items-center">
                    <img src={Banner3Part5} alt="Banner 3 Part 1" className="object-cover w-full h-full rounded-2xl" />
                    <div className="bg-black/40 w-full h-full absolute rounded-2xl">
                    <p className="absolute bottom-[85px] left-4 text-white font-normal py-1 rounded text-xl">
                        Entertaining
                    </p>
                    <p className="absolute bottom-16 left-4 text-white font-normal  py-1 rounded text-sm">
                        Start From
                    </p>
                    <p className="absolute bottom-8 left-4 text-white font-normal  py-1 rounded text-3xl">
                        $250.00
                    </p>
                    </div>
                    <div className="bg-warna1 w-[50px] h-[50px] rounded-2xl absolute bottom-4 right-2 flex items-center justify-center">
                        <img src={Cart2} alt="Cart Icon" className="h-6 w-6 cursor-pointer" />
                    </div>
                </div>

                       {/* Kolom dan baris untuk setiap gambar */}
                       <div className="relative flex justify-center items-center">
                    <img src={Banner3Part6} alt="Banner 3 Part 1" className="object-cover w-full h-full rounded-2xl" />
                    <div className="bg-black/20 w-full h-full absolute rounded-2xl">
                    <p className="absolute bottom-[85px] left-4 text-white font-normal py-1 rounded text-xl">
                        Kitchen Table
                    </p>
                    <p className="absolute bottom-16 left-4 text-white font-normal  py-1 rounded text-sm">
                        Start From
                    </p>
                    <p className="absolute bottom-8 left-4 text-white font-normal  py-1 rounded text-3xl">
                        $225.00
                    </p>
                    </div>
                    <div className="bg-warna1 w-[50px] h-[50px] rounded-2xl absolute bottom-4 right-2 flex items-center justify-center">
                        <img src={Cart2} alt="Cart Icon" className="h-6 w-6 cursor-pointer" />
                    </div>
                </div>
                
                       {/* Kolom dan baris untuk setiap gambar */}
                       <div className="relative flex justify-center items-center">
                    <img src={Banner3Part1} alt="Banner 3 Part 1" className="object-cover w-full h-full rounded-2xl" />
                    <div className="">
                    <p className="absolute bottom-[85px] left-4 text-white font-normal py-1 rounded text-xl">
                        Sectional
                    </p>
                    <p className="absolute bottom-16 left-4 text-white font-normal  py-1 rounded text-sm">
                        Start From
                    </p>
                    <p className="absolute bottom-8 left-4 text-white font-normal  py-1 rounded text-3xl">
                        $95.00
                    </p>
                    </div>
                    <div className="bg-warna1 w-[50px] h-[50px] rounded-2xl absolute bottom-4 right-2 flex items-center justify-center">
                        <img src={Cart2} alt="Cart Icon" className="h-6 w-6 cursor-pointer" />
                    </div>
                </div>

                       {/* Kolom dan baris untuk setiap gambar */}
                       <div className="relative flex justify-center items-center">
                    <img src={Banner3Part2} alt="Banner 3 Part 1" className="object-cover w-full h-full rounded-2xl" />
                    <div className="">
                    <p className="absolute bottom-[85px] left-4 text-white font-normal py-1 rounded text-xl">
                        Entertaining
                    </p>
                    <p className="absolute bottom-16 left-4 text-white font-normal  py-1 rounded text-sm">
                        Start From
                    </p>
                    <p className="absolute bottom-8 left-4 text-white font-normal  py-1 rounded text-3xl">
                        $250.00
                    </p>
                    </div>
                    <div className="bg-warna1 w-[50px] h-[50px] rounded-2xl absolute bottom-4 right-2 flex items-center justify-center">
                        <img src={Cart2} alt="Cart Icon" className="h-6 w-6 cursor-pointer" />
                    </div>
                </div>

                       {/* Kolom dan baris untuk setiap gambar */}
                       <div className="relative flex justify-center items-center">
                    <img src={Banner3Part3} alt="Banner 3 Part 1" className="object-cover w-full h-full rounded-2xl" />
                    <div className="w-full h-full absolute rounded-2xl">
                    <p className="absolute bottom-[85px] left-4 text-white font-normal py-1 rounded text-xl">
                        Leather
                    </p>
                    <p className="absolute bottom-16 left-4 text-white font-normal  py-1 rounded text-sm">
                        Start From
                    </p>
                    <p className="absolute bottom-8 left-4 text-white font-normal  py-1 rounded text-3xl">
                        $250.00
                    </p>
                    </div>
                    <div className="bg-warna1 w-[50px] h-[50px] rounded-2xl absolute bottom-4 right-2 flex items-center justify-center">
                        <img src={Cart2} alt="Cart Icon" className="h-6 w-6 cursor-pointer" />
                    </div>
                </div>

                    {/* Add remaining images with similar layout */}
                </div>
            </div>
        </div>
    );
};

export default Page3;
