import Banner6 from "/images/banner6.png";

const Page6 = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative mr-[180px] ml-[180px] w-full max-w-6xl">
                <img src={Banner6} alt="Banner 6" className="w-full h-full object-cover rounded-2xl" />
                {/* Text Section inside the image with right justification */}
                <div className="absolute right-8 top-24 px-8 text-black text-right">
                    <button className="border-2 border-warna1 text-warna1 text-sm px-2 py-1 rounded-2xl ">
                        Our Collection
                    </button>
                    <h1 className="mt-2 text-4xl font-bold">Transform Your Home</h1>
                    <h1 className="text-4xl font-bold">
                        With Our Stylish
                        <br />
                        Furniture!!!
                    </h1>
                    <p className="mt-2 text-sm text-black">Show Now and Discover Endless Possibilities for
                        <br />
                        Your Living Space
                    </p>
                    <button className="mt-4 bg-warna1 text-white text-sm px-6 py-2 rounded-2xl">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Page6;
