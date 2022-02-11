import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../../data/constants';
import './NotFound404.css';

const NotFound404 = () => {
  return (
    <div
      className="flex
            container-404
            items-center
            justify-center
            w-screen
            from-indigo-600
            to-blue-400"
    >
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold color-te text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-blue-600">Upss!</span> Página no encontrada
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">The page you’re looking for doesn’t exist.</p>

          <Link to="/home" className="px-6 py-2 text-sm font-semibold color-te rounded bg-gray-700 hover:bg-gray-600">
            {HOME}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
