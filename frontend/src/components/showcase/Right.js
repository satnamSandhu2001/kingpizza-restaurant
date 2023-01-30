import React from 'react';
import HeroBg from '../../img/hero-bg.png';
import { data } from '../../utils/ShowcaseStatic';
const Right = () => {
  return (
    <div className="py-2 flex-1 flex items-center relative">
      <img
        src={HeroBg}
        alt=""
        className="ml-auto lg:h-[550px] h-[420px] w-full lg:w-auto"
      />
      <div className="w-full h-full absolute flex items-center justify-center top-6 left-0 lg:px-30 lg:py-4 gap-4 flex-wrap ">
        {data.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer min-h-[140px] lg:min-h-[210px] min-w-[150px] lg:min-w-[200px] drop-shadow-lg p-2 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center"
          >
            <img
              src={item.imgSrc}
              alt="icecream"
              className="w-24 lg:w-40 -mt-10 lg:-mt-20"
            />
            <p className="text-base lg:text-lg font-semibold text-textColor">
              {item.title}
            </p>
            <p className="text-[10px] lg:text-lg text-lightGray font-semibold my-2 lg:my-3">
              {item.desc}
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="font-sans text-red-600">₹</span> {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Right;
