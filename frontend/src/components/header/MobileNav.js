import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import Logo from '../../img/logo.png';

const MobileNav = ({ isOpen, setIsOpen, toogleContactForm }) => {
  return (
    <div className="flex flex-col bg-cardOverlay backdrop-blur-sm items-start justify-start gap-16 w-screen h-screen  overflow-y-hidden  z-50 overflow-hidden ">
      <div className="flex items-center justify-between w-screen h-24  px-10">
        <div
          className="relative flex items-center justify-center text-textColor"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdOutlineRestaurantMenu className="text-headingColor text-4xl" />
        </div>
      </div>
      <div
        className={`flex items-center justify-center w-full  h-72 gap-10 flex-col`}
      >
        <Link
          onClick={() => setIsOpen(!isOpen)}
          to={'/'}
          className="text-lg text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10"
        >
          Menu
        </Link>
        <Link
          onClick={() => setIsOpen(!isOpen)}
          to={'/'}
          className="text-lg text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10"
        >
          Services
        </Link>
        <Link
          onClick={() => setIsOpen(!isOpen)}
          to={'/'}
          className="text-lg text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10"
        >
          About
        </Link>
        <p
          onClick={toogleContactForm}
          className="text-lg text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10"
        >
          Contact
        </p>
      </div>

      <Link
        to={'/'}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center  justify-center w-full"
      >
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={Logo} alt="Logo" className="w-16 object-cover" />
          <p className="text-headingColor text-3xl font-bold">KingPizza</p>
        </div>
      </Link>
    </div>
  );
};

export default MobileNav;
