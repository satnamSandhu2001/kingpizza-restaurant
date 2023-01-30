import React from 'react';
import { BiRestaurant } from 'react-icons/bi';
import Button from '../filters/Button';
import { Categories } from '../../utils/Categories';

const Filter = ({ filter, setFilter }) => {
  return (
    <div
      className={`w-full py-10 flex items-center justify-start 2xl:justify-center h-auto gap-4 md:gap-8 px-2  overflow-x-scroll scroll-smooth select-none`}
      id="categoryCont"
    >
      <Button
        category={{
          id: 666,
          name: 'Menu',
          urlParam: 'all',
          icon: <BiRestaurant />,
        }}
        filter={filter}
        setFilter={setFilter}
      />
      {Categories.map((category) => {
        return (
          <Button
            key={category.id}
            category={category}
            filter={filter}
            setFilter={setFilter}
          />
        );
      })}
    </div>
  );
};

export default Filter;
