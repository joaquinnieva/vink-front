import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Landing from '../../components/LandingSVG/Landing';
import Navbar from '../../components/Navbar/Navbar';
import { REGISTER, VIEW_MORE } from '../../data/constants';
import './Home.css';

const Home = () => {
  const user = useSelector((state) => state.auth.session);

  useEffect(() => {
    document.title = 'Vink';
  }, [user]);
  return (
    <main>
      <Navbar brand={false} />
      <section className="text-gray-400 body-font h-screen flex items-center mt-16 sm:mt-0">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard
              tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
              try-hard chambray.
            </p>
            <div className="flex justify-center">
              <a className="inline-flex text-white bg-vink-800 border-0 py-2 px-6 focus:outline-none hover:bg-vink-700 rounded text-lg">
                {VIEW_MORE}
              </a>
              {!user && (
                <Link
                  to="/register"
                  className="ml-4 inline-flex text-gray-400 border-gray-700 border bg-gray-800 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                >
                  {REGISTER}
                </Link>
              )}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2  md:h-full w-5/6 flex justify-center">
            <Landing className="md:w-full sm:h-full h-1/2 w-2/3" />
          </div>
        </div>
      </section>

      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-vink-800 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Master Cleanse Reliac Heirloom</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-700 bg-opacity-60 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-vink-800 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">Shooting Stars</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
                    poutine.
                  </p>
                  <a className="mt-3 text-vink-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-700 bg-opacity-60 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-vink-800 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">The Catalyzer</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
                    poutine.
                  </p>
                  <a className="mt-3 text-vink-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-700 bg-opacity-60 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-vink-800 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">Neptune</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
                    poutine.
                  </p>
                  <a className="mt-3 text-vink-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5">Shooting Stars</h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-base">
              Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut,
              direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar
              tacos.
            </p>
          </div>
        </div>
      </section>
      {user && <Footer position="top" />}
    </main>
  );
};

export default Home;
