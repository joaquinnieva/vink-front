import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Editicon from '../../components/EditIcon/EditIcon';
import Footer from '../../components/Footer/Footer';
import FormEdit from '../../components/Form/Form';
import Loader from '../../components/Loader/Loader';
import Navbar from '../../components/Navbar/Navbar';
import { EDIT_PROFILE, IN_LOAD } from '../../data/constants';
import { getUser } from '../../functions/apiService';
import './Profile.css';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const userLogged = useSelector((state) => state.auth.session);
  const navigate = useNavigate();
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(username).then((res) => {
      const userInfo = res[0];
      if (userInfo) {
        setUser(userInfo);
        setLoading(false);
      } else {
        navigate('/home');
      }
    });
    document.title = `${username} - Vink`;
  }, [username]);
  return (
    <>
      <section className="w-screen h-screen">
        {loading && (
          <span className="absolute left-1/2 -translate-x-1/2 inset-y-0 flex items-center">
            <Loader className="h-10 w-10 mr-3" />
            {IN_LOAD}
          </span>
        )}

        {user && (
          <>
            {user.username === userLogged.username && (
              <Popup
                trigger={
                  <button
                    type="button"
                    className="absolute rounded flex gap-2 text-gray-800 font-bold bg-gray-300 hover:bg-gray-100 top-0 right-0 px-6 py-2 m-10 p- z-10"
                  >
                    {EDIT_PROFILE}
                    <Editicon />
                  </button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal bg-transparent p-6">
                    <button className="close text-black" onClick={close}>
                      &times;
                    </button>
                    <FormEdit data={user} />
                  </div>
                )}
              </Popup>
            )}
            <div className="flex flex-wrap justify-center">
              <div className="w-full bg-zinc-900 shadow-lg transform duration-200 easy-in-out">
                {/* Background */}
                <div className="h-48 overflow-hidden">
                  {user.background ? (
                    <img className="w-full" src={user.background} alt={user.name} />
                  ) : (
                    <img
                      className="w-full"
                      src="https://asset.gecdesigns.com/img/backgrounds/modern-crystal-abstract-background-template-1612247149783-cover.webp"
                      alt="background"
                    />
                  )}
                </div>
                {/* Profile Photo */}
                <header className="flex overflow-x-hidden justify-start px-5 -mt-10 sm:ml-12">
                  {user.image ? (
                    <img className="h-32 w-32 bg-white p-1 rounded-full" src={user.image} alt={user.name} />
                  ) : (
                    <img
                      className="h-32 w-32 bg-white p-1 rounded-full"
                      src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8="
                      alt="avatar"
                    />
                  )}

                  <h2 className="flex flex-col sm:flex-row text-left items-center mt-10 ml-4 sm:ml-8 font-bold text-3xl text-gray-200">
                    {user.name || user.username}
                    <p className="text-gray-400 w-full"> &nbsp;@{user.username}</p>
                  </h2>
                </header>
                {/* Texts */}
                <div className="pb-10">
                  <div className="text-center px-4 lg:px-16">
                    <div className="flex flex-col mt-6 text-gray-300 h-auto">
                      {user.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.link}
                          target="_blank"
                          className="bg-gray-200 text-black rounded py-3 px-6 m-4 w-100"
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
      {userLogged ? <Navbar /> : <Footer />}
    </>
  );
};

export default Profile;
