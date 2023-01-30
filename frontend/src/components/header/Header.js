import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigations from './Navigations';
import Logo from '../../img/logo.png';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import MobileNav from './MobileNav';

const Header = ({ toogleContactForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  return (
    <header className="w-screen fixed z-50 bg-cardOverlay backdrop-blur-md md:p-3 md:px-4 lg:p-6 lg:px-16">
      {/* Tablet and Desktop */}
      <div className="hidden md:flex w-full justify-between itesm-center">
        <Link to={'/'}>
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={Logo}
              alt="Logo"
              className="md:w-10 lg:w-12 object-cover"
            />
            <p className="text-headingColor md:text-lg lg:text-xl font-bold">
              KingPizza
            </p>
          </div>
        </Link>

        {/* navigation */}
        <Navigations toogleContactForm={toogleContactForm} />

        {/* User */}
      </div>

      {/* Mobile */}
      <div className="flex md:hidden w-full p-0 items-center justify-between">
        {isOpenMobileNav ? (
          <MobileNav
            isOpen={isOpenMobileNav}
            setIsOpen={setIsOpenMobileNav}
            toogleContactForm={toogleContactForm}
          />
        ) : (
          <div className="p-5 flex items-center justify-between w-full">
            <div
              className=" flex items-center justify-center"
              onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}
            >
              <HiOutlineMenuAlt2 className="text-headingColor text-4xl" />
            </div>
            <Link to={'/'}>
              <div className="flex items-center gap-2 cursor-pointer">
                <img src={Logo} alt="Logo" className="w-8 object-cover" />
                <p className="text-headingColor text-xl font-bold">KingPizza</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
