import React from 'react';
import Button from '../Shared/Button';

const ProductCard = ({ data }) => {
  return (
    <div>
      <div className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
          {data.map((item) => (
            <div key={item.id} className="text-center group relative">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[180px] w-[260px] object-cover rounded-md"
                />
                <div
                  className="hidden group-hover:flex absolute top-0 left-0 h-full w-full 
                    bg-gray-200 bg-opacity-50 backdrop-blur-sm justify-center items-center duration-200"
                >
                  <Button
                    text={'Add to Cart'}
                    bgColor={"bg-primary"}
                    textColor={'text-white'}
                  />
                </div>
              </div>
              {/* Product Title and Price */}
              <div className="leading-7 mt-2">
                <h2 className="font-semibold">{item.title}</h2>
                <h2 className="font-bold text-lg">${item.price}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
