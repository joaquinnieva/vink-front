import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import Navbar from '../../components/Navbar/Navbar';
import { getUser } from '../../functions/apiService';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const userLogged = useSelector((state) => state.auth.session);
  const navigate = useNavigate();
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(username).then((res) => {
      const userResponse = res[0];
      if (userResponse) {
        setUser(userResponse);
        setLoading(false);
        console.log(userResponse);
      } else {
        navigate('/home');
      }
    });
    document.title = `${username} - Vink`;
  }, []);
  return (
    <>
      <section className="w-screen h-screen">
        {loading && (
          <span className="absolute left-1/2 -translate-x-1/2 inset-y-0 flex items-center">
            <Loader className="h-10 w-10 mr-3" />
            Cargando...
          </span>
        )}
        {user && (
          <div className="bg-gray-200 flex flex-wrap justify-center">
            <div className=" w-full bg-zinc-900 shadow-lg transform duration-200 easy-in-out">
              {/* Background */}
              <div className="h-32 overflow-hidden">
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
              <div className="flex justify-start px-5  -mt-10 sm:ml-12">
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
              </div>
              {/* Texts */}
              <div className="pb-10">
                <div className="text-center px-14">
                  <div className="mt-4 text-gray-300">
                    {user.links.map((link, index) => (
                      <p key={index}>
                        <a href={link.link} target="_blank">
                          {link.title}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      {userLogged ? <Navbar /> : <Footer />}
    </>
  );
};

export default Profile;
