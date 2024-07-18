'use client';
import React, { useState, useContext } from 'react';
import Image from 'next/image';
import ThemeContext from '@/context/ThemeContext';
import logo from "../assets/LogoNav.svg";
import menu from "../assets/menubar.png";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import cross from "../assets/cross.png";
import crosswhite from "../assets/crosswhite.png";
import menubarwhite from "../assets/menubarwhite.png"
import lognav from "../assets/Logo.svg"

const Navbar = () => {
  const [mobiledrop, setMobiledrop] = useState(false);
  const { darkMode, switchDark, switchLight } = useContext(ThemeContext);

  const mobileitem = [
    { list: 'Home' },
    { list: 'Service' },
    { list: 'Feature' },
    { list: 'Product' },
    { list: 'Testimonials' },
    { list: 'FAQ' },
  ];

  const toggleDarkMode = () => {
    darkMode === 'dark' ? switchLight() : switchDark();
  };

  return (
    <div className="h-16 w-full fixed top-0 flex items-center justify-around bg-white dark:bg-gray-800 z-50">
      <Image src={darkMode === 'dark' ? lognav : logo} alt="Logo" className="w-auto h-auto object-contain" />
      <div className="lg:hidden flex justify-between items-center w-[588px] text-gray-800 dark:text-gray-200">
        <p>Home</p>
        <p>Service</p>
        <p>Feature</p>
        <p>Product</p>
        <p>Testimonials</p>
        <p>FAQ</p>
      </div>
      <div className="lg:hidden flex w-[220px] h-[40px] justify-between items-center">
      <button onClick={toggleDarkMode}>
              <Image src={darkMode === 'dark' ? sun : moon} alt="Theme Toggle" className="w-6 h-6 object-contain" />
            </button>
        <button className="w-[77px] h-[40px] rounded flex justify-center items-center border border-gray-800 dark:border-gray-200">Login</button>
        <button className="w-[91px] h-[40px] rounded flex justify-center items-center bg-[#4CAF4F]">Sign up</button>
      </div>
      <button className="hidden lg:flex" onClick={() => setMobiledrop(!mobiledrop)}>
        <Image src={darkMode === 'dark'? menubarwhite : menu} alt="Menu" className="w-8 h-8 object-contain" />
      </button>
      {mobiledrop && (
        <div className="w-[300px] h-auto rounded-xl p-4 bg-white dark:bg-gray-800 absolute top-16 right-4 flex flex-col gap-4 shadow-lg">
          <div className="w-full flex justify-between items-center mt-4">
            <button onClick={toggleDarkMode}>
              <Image src={darkMode === 'dark' ? sun : moon} alt="Theme Toggle" className="w-6 h-6 object-contain" />
            </button>
            <button onClick={() => setMobiledrop(false)}>
              <Image src={darkMode === 'dark'? crosswhite : cross} alt="Close" className="w-6 h-6 object-contain" />
            </button>
          </div>
          {mobileitem.map((item, index) => (
            <div key={index} className="text-gray-800 dark:text-gray-200 text-xl font-semibold">{item.list}</div>
          ))}
          <div className="w-full flex justify-between items-center mt-4">
            <button className="w-[77px] h-[40px] rounded flex justify-center items-center border border-gray-800 dark:border-gray-200">Login</button>
            <button className="w-[91px] h-[40px] rounded flex justify-center items-center bg-[#4CAF4F]">Sign up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
