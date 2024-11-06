import React from "react";
import Banner4 from "../../public/images/Banner4.png";

const Page4 = () => {
    return (
        <div className="flex bg-warna2 ml-[180px] mr-[180px] mt-[200px] rounded-2xl">
            <div className="flex  space-x-4">
                <div className="rounded-2xl p-8 -pl-[120px] pr-[100px]">
                <img src={Banner4} alt="Banner 4" className=" w-[300px] rounded-2xl" />
                </div>

                <div className="mt-[100px]">
                    <button className="border-2 border-warna1 text-warna1 text-sm px-4 py-1 rounded-2xl mb-4">About Us</button>
                    <p className="text-3xl font-normal mb-4">What Make Us
                        <br />
                        Different From Others
                    </p>
                    <p className="mb-2 text-xs">Unlesh your creativity with our versatile furniture options.
                        <br/>
                    Experience comfort and quality with our furniture.</p>
                    <p className="mb-2 text-xs">
                    Unlesh your creativity with our versatile furniture options.
                    <br/>
                    Experience comfort and quality with our furniture.
                    </p>
                    <button className="bg-black text-white text-sm px-6 py-2 rounded-2xl mt-4">Know More About Us</button>
                </div>
            </div>
        </div>
    );
};

export default Page4;