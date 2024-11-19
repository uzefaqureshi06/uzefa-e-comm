import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vrt.png";
import Image3 from "../../assets/category/macbook.png";
import Button from '../Shared/Button'
const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "HEADPHONE",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "VIRTUAL",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "LAPTOP",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  return (
    <div className="container mx-auto px-4 max-w-[1336px] ">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[569px] hero-bg-color flex justify-center items-center "
      >

        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div
                key={data.id}
                className="!flex items-center flex-row px-6 py-8 justify-center 20"
              >
                {/* Left Text Section */}
                <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0  text-center sm:text-left order-2 sm:order-1 relative z-10  w-[50%]">
                  <h2 className="text-2xl sm:text-6xl lg:text-2xl font-bold text-gray-500 ">
                    {data.subtitle}
                  </h2>
                  <h1 className="text-5xl sm:text-6xl  lg:text-7xl  font-bold ">
                    {data.title}
                  </h1>
                  <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text[100px] xl:text-[150px] font-bold">
                    {data.title2}
                  </h1>
                  <Button 
                    text="Shop by Category"
                    bgColor="bg-primary"
                    lgbutton={true}
                    textColor="text-white"
                  />
                </div>


                <div className="order-1 sm:order-2 w-[50%]">
                  <div className="flex justify-center w-[68%] h-[100%]">
                    <img
                      src={data.img}
                      alt={data.title2}
                      className="w-[500px] h-auto sm-[500px]  sm-h-[500px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
