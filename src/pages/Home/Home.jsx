import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND, LANDING_DESC, LANDING_TITLE, REGISTER, VIEW_MORE } from '../../data/constants';
import training from '../../images/training.png';
import './Home.css';

const Home = () => {
  return (
    <main className="relative overflow-hidden home">
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left ">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
            <span className="block lg:w-3/5">{LANDING_TITLE}</span>
            <span className="block text-vink xl:inline">{BRAND}</span>
          </h1>
          <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {LANDING_DESC}
          </p>
          <div className="my-5 sm:my-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-vink-800 hover:bg-vink-700 md:py-4 md:text-lg md:px-10"
              >
                {VIEW_MORE}
              </a>
            </div>
            <div className="mt-5 sm:mt-0 sm:ml-3">
              <Link
                to="/register"
                className="w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md text-gray-900 bg-gray-300 hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
              >
                {REGISTER}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5 flex md:justify-center sm:justify-center">
        <img className="w-fit h-fit lg:my-20" src={training} alt="training" />
      </div>
    </main>
  );
};

export default Home;
