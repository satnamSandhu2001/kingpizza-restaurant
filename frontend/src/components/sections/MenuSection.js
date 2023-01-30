import { useState } from 'react';
import Container from '../container/Container';
import { Title } from './Sections';
import { MenuList } from '../../utils/FoodMenuList';
import Filter from '../filters/Filter';
import { FilterFood } from '../../utils/FilterCategory';

const MenuSection = ({ title }) => {
  const [scrollValue, setScrollValue] = useState(0);
  const [filter, setFilter] = useState('all');

  return (
    <section className="w-full my-5" id="menu">
      <div className="w-full flex items-center justify-center">
        <Title title={title || 'Our Hot Dishes'} center />
      </div>
      <Filter filter={filter} setFilter={setFilter} />

      <Container
        className="bg-containerbg rounded-md"
        col
        scrollOffset={scrollValue}
        items={filter === 'all' ? MenuList : FilterFood(filter)}
      />
    </section>
  );
};

export default MenuSection;
