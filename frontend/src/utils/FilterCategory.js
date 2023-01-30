import { MenuList } from '../utils/FoodMenuList';
export const FilterFood = (category) => {
  return MenuList?.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
};
