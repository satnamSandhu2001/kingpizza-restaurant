import React from 'react';
import { Link } from 'react-router-dom';

const Navigations = ({ toogleContactForm }) => {
  return (
    <div className="flex items-center gap-8">
      <ul className={`flex items-center gap-8`}>
        <li className="md:text-base lg:text-lg text-lg text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="md:text-base lg:text-lg text-lg text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
          <Link to={'/'}>Menu</Link>
        </li>
        <li className="md:text-base lg:text-lg text-lg text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
          <Link to={'/'}>About us</Link>
        </li>
        <li
          className="md:text-base lg:text-lg text-lg text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
          onClick={toogleContactForm}
        >
          Contact us
        </li>
      </ul>
    </div>
  );
};

export default Navigations;
