import Home from './layout/home/Home';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import { useState } from 'react';

function App() {
  const [showContact, setshowContact] = useState(false);
  const toogleContactForm = () => {
    setshowContact(!showContact);
  };
  return (
    <>
      <ToastContainer />
      <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
        <Header toogleContactForm={toogleContactForm} />
        <Contact
          showContact={showContact}
          toogleContactForm={toogleContactForm}
        />
        <main
          className={'mt-16 md:mt-16 px-3 md:px-8 md:py-6 py-4 w-full h-auto'}
          onClick={() => {}}
        >
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
