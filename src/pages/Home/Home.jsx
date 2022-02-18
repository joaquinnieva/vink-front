import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Landing from '../../components/LandingSVG/Landing';
import Navbar from '../../components/Navbar/Navbar';
import { BRAND, LANDING_DESC, LANDING_TITLE, REGISTER, VIEW_MORE } from '../../data/constants';
import './Home.css';

const Home = () => {
  const user = useSelector((state) => state.auth.session);

  useEffect(() => {
    document.title = 'Vink';
  }, [user]);
  return (
    <>
      <Navbar />
      <main className="overflow-hidden w-screen h-screen flex items-center">
        <div className="max-w-1/2 px-4 sm:px-6 lg:pl-12 lg:pr-0 flex justify-center lg:justify-start">
          <div className="sm:text-center lg:text-left mb-32">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
              <span className="block text-center lg:text-left">{LANDING_TITLE}&nbsp;</span>
              <span className="block text-center lg:text-left text-vink-800 xl:inline">{BRAND}</span>
            </h1>
            <p className="text-base mt-8 mb-4 text-gray-400 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0 pr-0 lg:pr-16">
              {LANDING_DESC}
            </p>
            <div className="my-5 sm:my-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-200 bg-vink-800 hover:bg-vink-700 md:py-4 md:text-lg md:px-10"
                >
                  {VIEW_MORE}
                </a>
              </div>
              {!user && (
                <div className="mt-5 sm:mt-0 sm:ml-3">
                  <Link
                    to="/register"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-200 bg-gray-700 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                  >
                    {REGISTER}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="h-auto lg:absolute -z-10 lg:inset-y-0 lg:right-0 lg:w-1/2 justify-center sm:flex hidden">
          <Landing className="w-fit h-80 lg:h-auto lg:mt-20 lg:mb-32 lg:mr-10" />
        </div>
      </main>
      <section className="h-screen text-white font-medium mx-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima provident eum cumque atque fugiat molestias
        aliquam, quam saepe et aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima provident
        eum cumque atque fugiat molestias aliquam, quam saepe et aspernatur cum, voluptate quisLorem ipsum dolor sit
        amet consectetur adipisicing elit. A minima provident eum cumque atque fugiat molestias aliquam, quam saepe et
        aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima provident eum cumque atque fugiat
        molestias aliquam, quam saepe et aspernatur cum, voluptate quisquam rerum doloribcum, voluptate quisquam rerum
        doloribus tempore laboriosam accusantium veniam!Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        minima provident eum cumque atque fugiat molestias aliquam, quam saepe et aspernatur cum, voluptate quisquam
        rerum doloribus tempore laboriosLorem ipsum dolor sit amet consectetur adipisicing elit. A minima provident eum
        cumque atque fugiat molestias aliquam, quam saepe et aspernatur Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A minima provident eum cumque atque fugiat molestias aliquam, quam saepe et aspernatur cum,
        voluptate quisquam rerum doloribcum, voluptate quisquam rerum doloribus tempore laboriosam accusantium
        veniam!Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima provident eum cumque atque fugiat
        molestias aliquam, quam saepe et aspernatur cum, voluptate quisquam rerum doloribus tempore laLorem ipsum dolor
        sit amet consectetur adipisicing elit. A minima provident eum cumque atque fugiat molestias aliquam, quam saepe
        et aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima provident eum cumque atque
        fugiat molestias aliquam, quam saepe et aspernatur cum, voluptate quisLorem ipsum dolor sit amet consectetur
        adipisicing elit. A minima provident eum cumque atque fugiat molestias aliquam, quam saepe et aspernatur Lorem
        ipsum dolor sit amet consectetur adipisicing elit. A minima provident eum cumque atque fugiat molestias aliquam,
        quam saepe et aspernatur cum, voluptate quisquam rerum doloribcum, voluptate quisquam rerum doloribus tempore
        laboriosam accusantium veniam!Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima provident eum
        cumque atque fugiat molestias aliquam, quam saepe et aspernatur cum, voluptate quisquam rerum doloribus tempore
        laboriosLorem ipsum dolor sit amet consectetur adipisicing elit. A minima provident eum cumque atque fugiat
        molestias aliquam, quam saepe et aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima
        provident eum cumque atque fugiat molestias aliquam, quam saepe et aspernatur cum, voluptate quisquam rerum
        doloribcum, voluptate quisquam rerum doloribus tempore laboriosam accusantium veniam!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. A minima provident eum cumque atque fugiat molestias aliquam, quam saepe et
        aspernatur cum, voluptate quisquam rerum doloribus tempore laboriosquam rerum doloribcum, voluptate quisquam
        rerum doloribus tempore laboriosam accusantium veniam!Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        minima provident eum cumque atque fugiat molestias aliquam, quam saepe et aspernatur cum, voluptate quisquam
        rerum doloribus tempore laboriosam accusantium veniam!
      </section>
      {user && <Footer position="top" />}
    </>
  );
};

export default Home;
