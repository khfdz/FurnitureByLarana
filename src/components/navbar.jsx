// components/Navbar/Navbar.jsx
import React from 'react';
import Larana from '../../public/images/larana.png';
import Cart from '../../public/images/cart.png';
import Profile from '../../public/images/profile.png';
import Search2 from '../../public/images/search2.png';



const Navbar = () => {
  return (
    <nav className="pl-20 pr-20 absolute -top-8 left-0 w-full text-black px-4 py-2 flex items-center justify-between z-10">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Larana} alt="Larana Logo" className="h-[150px]" />
        <h1 className="text-4xl font-small cursor-pointer font-alike -ml-[30px]">larana</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-xl ml-[30px]">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#furniture" className="hover:text-gray-400">Furniture</a>
        <a href="#profile" className="hover:text-gray-400">Blog</a>
      </div>

      {/* Right Links */}
      <div className="flex space-x-4 items-center text-lg">
  <img src={Profile} alt="Profile" className="h-[40px] w-auto cursor-pointer transition-transform duration-200 hover:scale-110" />
  <img src={Cart} alt="Cart" className="h-[30px] w-auto cursor-pointer transition-transform duration-200 hover:scale-110" />
  <div className="p-2 h-[40px] w-[40px] rounded-full overflow-hidden border-2 border-warna1 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110">
  <img src={Search2} alt="Search" className="h-full w-full object-cover cursor-pointer" />
</div>





</div>

    </nav>
  );
};

export default Navbar;
