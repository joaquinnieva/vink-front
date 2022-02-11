import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN, REGISTER } from '../../data/constants';
import { navigationProfile } from '../../data/navigation';
import VinkIcon from '../VinkIcon/VinkIcon';
import './Navbar.css';

function Navbar() {
  const user = true;

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className=" flex  justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="block lg:hidden h-10 w-auto">
                    <VinkIcon height={40} width={130} />
                  </Link>
                  <Link to="/" className="hidden lg:block h-8 w-auto">
                    <VinkIcon height={40} width={130} complete />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="ml-3 relative">
                  <div>
                    {user ? (
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                          alt="perfil"
                        />
                      </Menu.Button>
                    ) : (
                      <div className="bg-gray-800 flex gap-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white pt-4">
                        <Link to="login" className="bg-vink-800 text-gray-900 rounded py-2 px-6 hover:bg-vink-700">
                          {LOGIN}
                        </Link>
                        <Link
                          to="register"
                          className="border border-gray-300 rounded py-2 px-6 hover:bg-gray-300 hover:text-gray-900"
                        >
                          {REGISTER}
                        </Link>
                      </div>
                    )}
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <div className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {navigationProfile.map((item, index) => (
                        <Link
                          key={index}
                          to={item.href}
                          className="block hover:bg-gray-200 px-4 py-2 text-sm text-gray-700"
                        >
                          {item.name}
                        </Link>
                      ))}

                      <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Cerrar Sesión</button>
                    </div>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
