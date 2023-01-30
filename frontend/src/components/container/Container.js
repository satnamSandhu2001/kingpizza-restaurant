import { useLayoutEffect, useRef } from 'react';
import SingleFoodItem from '../foodItems/SingleFoodItem';

const Container = ({ scrollOffset, col, items, className }) => {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    if (null !== containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  }, [scrollOffset]);
  return (
    <div
      ref={containerRef}
      className={`${className} w-full my-12 flex items-center ${
        (!items || col) && 'justify-center'
      }   min-h-[200px] gap-4  px-2 ${
        !col
          ? 'overflow-x-scroll scrollbar-hidden scroll-smooth'
          : 'overflow-x-hidden flex-wrap'
      }`}
    >
      {items &&
        items.map((item) => (
          <SingleFoodItem key={item.id} item={item} col={col} />
        ))}
    </div>
  );
};

export default Container;
