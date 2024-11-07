import Banner5Part1 from "/images/banner5part1.png";
import Banner5Part2 from "/images/banner5part2.png";
import Banner5Part3 from "/images/banner5part3.png";

const Page5 = () => {
    return (
        <div className="flex justify-center -mt-[20px] -mb-[100px]">
            {/* Main container with red background */}
            <div className="flex space-x-4  w-[993px] rounded-2xl p-12  justify-center">

                {/* First item */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-warna2 p-6 rounded-2xl">
                    <div className="bg-white p-8 rounded-2xl items-center justify-center">
                    <img src={Banner5Part1} alt="Banner 5 Part 1" className="w-[200px] px-12 rounded-2xl" />
                    </div>
                    <p className="mt-4 font-semibold text-2xl">Unbeatable <br /> Selection</p>
                    <p className="mt-2 text-xs mt-6 mb-6">
                        Allows visitors to see all the available <br />
                        episodes and choose which ones <br />
                        they want to listen to.
                    </p>
                </div>                
                </div>

                                {/* First item */}
                                <div className="flex flex-col items-center text-center">
                    <div className="bg-warna2 p-6 rounded-2xl">
                    <div className="bg-white p-8 rounded-2xl items-center justify-center">
                    <img src={Banner5Part2} alt="Banner 5 Part 1" className="w-[200px] px-12 rounded-2xl" />
                    </div>
                    <p className="mt-4 font-semibold text-2xl">Expert Costumer <br /> Service</p>
                    <p className="mt-2 text-xs mt-6 mb-6">
                        Allows visitors to see all the available <br />
                        episodes and choose which ones <br />
                        they want to listen to.
                    </p>
                </div>                
                </div>

                
                                {/* First item */}
                                <div className="flex flex-col items-center text-center">
                    <div className="bg-warna2 p-6 rounded-2xl">
                    <div className="bg-white p-8 rounded-2xl items-center justify-center">
                    <img src={Banner5Part3} alt="Banner 5 Part 1" className="w-[200px] px-12 rounded-2xl" />
                    </div>
                    <p className="mt-4 font-semibold text-2xl">Amazing Value <br /> Every Day</p>
                    <p className="mt-2 text-xs mt-6 mb-6">
                        Allows visitors to see all the available <br />
                        episodes and choose which ones <br />
                        they want to listen to.
                    </p>
                </div>                
                </div>

                      </div>
        </div>
    );
};

export default Page5;
