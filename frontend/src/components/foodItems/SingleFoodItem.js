import React from 'react';

const SingleFoodItem = ({ item, col }) => {
  const { title, price, imageUrl, description } = item;

  return (
    <div
      className={`${
        !col ? 'w-[275px] min-w-[275px]' : 'w-[320px] min-w-[320px]'
      } md:w-[300px] md:min-w-[300px] ${
        col ? 'my-12' : 'my-2 md:my-5'
      } h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer group`}
    >
      <div className="w-full flex items-center justify-between">
        <img
          className="w-40 h-40 md:w-48 md:h-40 -mt-12 object-contain cursor-pointer group-hover:scale-110 transition-transform duration-500"
          alt={description}
          src={imageUrl}
        />
      </div>
      <div className="w-full flex items-end justify-end flex-col">
        <p className="text-textColor font-semi-bold text-lg">{title}</p>
        <p className="mt-1 text-sm text-gray-500">{description} </p>

        <div className="flex items-center justify-between gap-8 ">
          <p className="text-base text-headingColor font-semibold">
            <span className="text-red-600 font-sans">₹</span> {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodItem;
