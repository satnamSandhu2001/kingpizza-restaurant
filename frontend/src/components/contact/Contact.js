import React, { useRef } from 'react';
import ContactHeader from './ContactHeader';
import Form from './Form';

const Contact = ({ showContact, toogleContactForm }) => {
  const innerRef = useRef();
  const outerRef = useRef();

  if (innerRef.current) {
    if (showContact) {
      innerRef.current.classList.add('translate-x-0');
      innerRef.current.classList.remove('-translate-x-full');
    } else {
      innerRef.current.classList.add('-translate-x-full');
      innerRef.current.classList.remove('translate-x-0');
    }
  }
  if (outerRef.current) {
    if (showContact) {
      outerRef.current.classList.add('w-screen', 'h-screen');
    } else {
      outerRef.current.classList.remove('w-screen', 'h-screen');
    }
  }

  return (
    <div
      ref={outerRef}
      className="absolute top-0 left-0 z-50 overflow-hidden"
      style={{ background: 'rgba(0,0,0,0.5)' }}
    >
      <div
        ref={innerRef}
        className={`-translate-x-full duration-300 w-full h-screen md:w-[350px] bg-white md:backdrop-blur-sm flex flex-col z-[101] drop-shadow-xl fixed top-0 left-0`}
      >
        <ContactHeader toogleContactForm={toogleContactForm} />
        <Form />
      </div>
    </div>
  );
};

export default Contact;
