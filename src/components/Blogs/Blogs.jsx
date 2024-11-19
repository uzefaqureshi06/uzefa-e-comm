import React from 'react';
import Heading from '../Shared/Heading';
import Img1 from '../../assets/blogs/blog-1.jpg';
import Img2 from '../../assets/blogs/blog-2.jpg';
import Img3 from '../../assets/blogs/blog-3.jpg';

const BlogData = [
  {
    title: "How to Choose Perfect SmartWatch",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    published: "Jan 20, 2024 by Dilshad",
    img: Img1,
  },
  {
    title: "How to Choose Perfect Gadget",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    published: "Jan 25, 2025 by Jilhad",
    img: Img2,
  },
  {
    title: "How to Choose Perfect VR HeadSet",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    published: "Jan 22, 2023 by Ramesh",
    img: Img3,
  },
];

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <Heading title="Recent News" subtitle="Explore Our Blogs" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 md:gap-7">
          {BlogData.map((data) => (
            <div
              key={data.title}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md"
            >
              <div className="relative group overflow-hidden rounded-2xl mb-4">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-[220px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-2 px-4 pb-4">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
