import {
  GiSandwich,
  GiNoodles,
  GiFrenchFries,
  GiRolledCloth,
  GiFruitBowl,
} from 'react-icons/gi';
import { FaGlassCheers, FaHamburger } from 'react-icons/fa';
import { BiDrink } from 'react-icons/bi';
import { MdOutlineFastfood } from 'react-icons/md';

export const Categories = [
  {
    id: 1,
    name: 'Burger',
    urlParam: 'burger',
    icon: <FaHamburger />,
  },
  {
    id: 2,
    name: 'Sandwich',
    urlParam: 'sandwich',
    icon: <GiSandwich />,
  },
  {
    id: 3,
    name: 'Pasta',
    urlParam: 'pasta',
    icon: <GiNoodles />,
  },
  {
    id: 4,
    name: 'Fries Jar',
    urlParam: 'fries-jar',
    icon: <GiFrenchFries />,
  },
  {
    id: 5,
    name: 'Wraps',
    urlParam: 'wraps',
    icon: <GiRolledCloth />,
  },
  {
    id: 6,
    name: 'Refreshers',
    urlParam: 'refreshers',
    icon: <BiDrink />,
  },
  {
    id: 7,
    name: 'Salad',
    urlParam: 'salad',
    icon: <GiFruitBowl />,
  },
  {
    id: 8,
    name: 'Shakes',
    urlParam: 'shakes',
    icon: <FaGlassCheers />,
  },
  {
    id: 9,
    name: 'Fries',
    urlParam: 'fries',
    icon: <GiFrenchFries />,
  },
  {
    id: 10,
    name: 'Snacks',
    urlParam: 'snaks',
    icon: <MdOutlineFastfood />,
  },
];
