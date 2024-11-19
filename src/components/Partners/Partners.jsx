import React from 'react';
import brand1 from '../../assets/brand/bre-1.png';
import brand2 from '../../assets/brand/bre-2.png';
import brand3 from '../../assets/brand/bre-3.png';
import brand4 from '../../assets/brand/bre-4.png';
import brand5 from '../../assets/brand/bre-5.png';
import brand6 from '../../assets/brand/bre-6.png';

const Partners = () => {
  return (
    <div className="py-8 mt-24 bg-gray-200 dark:bg-white/10">
    <div className="container">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 place-items-center">
        <img
          src={brand1}
          alt="Brand 1"
          className="w-[80px] grayscale hover:grayscale-0 transition duration-300 dark:invert"
        />
        {/* <img
          src={brand6}
          alt="Brand 1"
          className="w-[80px] grayscale hover:grayscale-0 transition duration-300 dark:invert"
        /> */}
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png"
          alt="Brand 2"
          className="w-[80px] grayscale hover:grayscale-0 transition duration-300 dark:invert"
        />
        <img
          src={brand3}
          alt="Brand 3"
          className="w-[80px] grayscale hover:grayscale-0 transition duration-300 dark:invert"
        />
        <img
          src={brand4}
          alt="Brand 4"
          className="w-[80px] grayscale hover:grayscale-0 transition duration-300 dark:invert"
        />
        <img
          src={brand5}
          alt="Brand 5"
          className="w-[80px] grayscale hover:grayscale-0 transition duration-300 dark:invert"
        />
      </div>
    </div>
  </div>
  
  );
};

export default Partners;
