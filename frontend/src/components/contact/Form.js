import React, { useState } from 'react';
import { toast } from 'react-toastify';
import EmptyCartImg from '../../img/emptyCart.svg';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    return toast.info(`${name} Form handling is not implemented yet`, {
      position: 'top-left',
      autoClose: 3000,
    });
  };

  return (
    <div className="h-full w-full flex items-center flex-col justify-center px-4 pb-2 bg-primary">
      <img src={EmptyCartImg} alt="not found" className="w-[30%] h-[30%]" />
      <form
        action="#"
        className="mb-6 w-full flex itemx-center justify-center gap-y-3 flex-col"
      >
        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <textarea
            className="form-control block w-full min-h-[25vh] px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-orange-600 hover:bg-orange-700 w-full focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-1 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 block"
          onClick={submitForm}
        >
          Send Message
        </button>
      </form>

      <p className="text-sm cursor-pointer text-gray-500 dark:text-gray-400">
        <a href="tel:+919056161261" className="hover:underline">
          +91 90561-61261
        </a>
      </p>
    </div>
  );
};

export default Form;
