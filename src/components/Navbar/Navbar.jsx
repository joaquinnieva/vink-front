import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN, LOGOUT, PROFILE, REGISTER } from '../../data/constants';
import localAuth from '../../functions/localAuth';
import { logout } from '../../redux/slice/authSlice';
import VinkIcon from '../VinkIcon/VinkIcon';
import './Navbar.css';

function Navbar() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.session);
  const dispatch = useDispatch();
  const logoutButton = () => {
    dispatch(logout());
    navigate('/');
    setNav(false);
    localAuth('logout');
  };
  const navPosition = () => {
    if (user) {
      return setNav(true);
    }
  };

  useEffect(() => {
    navPosition();
  }, [user]);
  return (
    <nav className={`bg-gray-800 w-screen ${nav && 'fixed bottom-0'}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-16 m-2 justify-between">
          <div className="flex justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="block md:hidden h-10 w-auto">
                <VinkIcon height={40} width={120} />
              </Link>
              <Link to="/" className="hidden md:block h-8 w-auto">
                <VinkIcon height={40} width={130} complete />
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="ml-3 relative">
              <div>
                {user ? (
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    {user.image ? (
                      <img className="h-8 w-8 rounded-full" src={user.image} alt="perfil" />
                    ) : (
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                        alt="perfil"
                      />
                    )}
                  </Menu.Button>
                ) : (
                  <div className="bg-gray-800 flex gap-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <Link to="login" className="bg-vink-800 text-gray-100 rounded py-2 px-6 hover:bg-vink-700">
                      {LOGIN}
                    </Link>
                    <Link
                      to="register"
                      className="border border-gray-300 rounded py-2 px-6 hover:bg-gray-300 hover:text-gray-900 hidden sm:block"
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
                <div className="z-10 -top-24 mt-2 origin-top-right absolute right-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {user && (
                    <Link to={`/${user?.username}`} className="block hover:bg-gray-200 px-4 py-2 text-sm text-gray-700">
                      {PROFILE}
                    </Link>
                  )}
                  <button
                    type="button"
                    onClick={logoutButton}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                  >
                    {LOGOUT}
                  </button>
                </div>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
