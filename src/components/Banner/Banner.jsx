import React from 'react';

const Banner = ({ data }) => {
  return (
    <div className="min-h-[320px] flex justify-center items-center p-6 sm:p-8 md:p-12">
      <div className="container">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl p-6"
        >
          {/* First Column */}
          <div className="p-6 sm:p-8">
            <p className="text-sm">{data.discount}</p>
            <h1 className="uppercase text-4xl lg:text-7xl font-bold">{data.title}</h1>
            <p className="text-sm">{data.data}</p>
          </div>

          {/* Second Column */}
          <div className="relative flex justify-center items-center">
            <img
              src={data.image}
              alt=""
              className="scale-125 w-[250px] md:w-[340px] drop-shadow-2xl object-cover relative -top-6 sm:-top-8 md:-top-10"
            />
          </div>

          {/* Third Column */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p className="font-bold text-xl">{data.title2}</p>
            <p className="text-3xl sm:text-5xl font-bold">{data.title3}</p>
            <p className="text-sm tracking-wide leading-5">{data.title4}</p>
            <button
              style={{ color: data.bgColor }}
              className="bg-white py-2 px-4 rounded-full w-max"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
