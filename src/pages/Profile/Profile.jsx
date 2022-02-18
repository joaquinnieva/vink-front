import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Editicon from '../../components/EditIcon/EditIcon';
import FormEdit from '../../components/Form/Form';
import Loader from '../../components/Loader/Loader';
import Navbar from '../../components/Navbar/Navbar';
import VinkIcon from '../../components/VinkIcon/VinkIcon';
import { EDIT_PROFILE, IN_LOAD } from '../../data/constants';
import { getUser } from '../../functions/apiService';
import './Profile.css';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const userLogged = useSelector((state) => state.auth.session);
  const navigate = useNavigate();
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const userOptions = user?.options[0];
  const getDataUser = async () => {
    setUser(null);
    setLoading(true);
    const res = await getUser(username);
    const userInfo = res[0];
    if (userInfo) {
      setUser(userInfo);
      setLoading(false);
    } else {
      navigate('/home');
    }
  };

  useEffect(() => {
    getDataUser();
    document.title = `${username} - Vink`;
  }, [username, userLogged]);
  return (
    <section className="w-screen min-h-screen" style={{ background: userOptions?.color || '#202937' }}>
      {/* Loader */}
      {loading && (
        <span className="absolute left-1/2 -translate-x-1/2 inset-y-0 flex items-center text-white">
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
                <div className="modal bg-transparent">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <FormEdit data={user} close={close} />
                </div>
              )}
            </Popup>
          )}
          <div className="flex flex-wrap justify-center">
            <div className="w-full" style={{ background: userOptions?.color || '#202937' }}>
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
              <header className="flex overflow-hidden justify-start items-end px-5 -mt-10 sm:ml-12">
                {user.image ? (
                  <img
                    style={{ background: userOptions?.color || '#ffffff' }}
                    className="h-28 w-28 sm:h-32 sm:w-32 bg-black p-1 rounded-full"
                    src={user.image}
                    alt={user.name}
                  />
                ) : (
                  <img
                    style={{ background: userOptions?.color || '#ffffff' }}
                    className="h-28 w-28 sm:h-32 sm:w-32 bg-white p-1 rounded-full"
                    src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8="
                    alt="avatar"
                  />
                )}

                {/* name */}
                <div className="flex flex-col sm:flex-row h-fit text-left items-end sm:mb-4 ml-2 sm:ml-8 font-bold text-3xl text-gray-200">
                  <p
                    style={{ color: userOptions?.textColor || '#9ca3af' }}
                    className="text-gray-400 w-full whitespace-nowrap"
                  >
                    {user.name || user.username}
                  </p>
                  <p
                    style={{ color: userOptions?.textColor || '#9ca3af', opacity: '.6' }}
                    className="text-gray-400 w-full"
                  >
                    &nbsp;@{user.username}
                  </p>
                </div>
              </header>

              {/* descripcion */}
              <div>
                <div
                  className="m-4 mt-8 text-left min-h-16 px-4 lg:px-16 text-white"
                  style={{ color: userOptions?.textColor || '#ffffff' }}
                >
                  <ReactMarkdown
                    className="markdown"
                    children={user?.description}
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                  />
                </div>
              </div>

              {/* links */}
              <div className="">
                <div className="text-center px-4 lg:px-16 mb-10">
                  <div className="flex flex-col mt-6 h-auto">
                    {user.links?.map((link, index) => (
                      <a
                        key={index}
                        href={link.link}
                        target="_blank"
                        className={`bg-gray-200 text-black font-medium p-2 m-2 w-100 ${
                          userOptions?.buttonRadius || 'rounded'
                        }`}
                        style={{
                          background: userOptions?.buttonColor || '#fff',
                          color: userOptions?.buttonText || '#000',
                        }}
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

      {userLogged ? (
        <Navbar />
      ) : (
        <div className="relative w-screen flex justify-center">
          <Link to="/" className="h-auto w-auto">
            <VinkIcon
              colour={userOptions?.textColor || '#9ca3af'}
              className="drop-shadow-2xl my-4"
              height={40}
              width={120}
              complete
            />
          </Link>
        </div>
      )}
    </section>
  );
};

export default Profile;
