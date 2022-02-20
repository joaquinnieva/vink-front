import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';

function Router() {
  const user = useSelector((state) => state.auth.session);
  const userRoute = user?.username;
  return (
    <Routes>
      {user ? (
        <>
          <Route exact path="/login" element={<Navigate to={'/' + userRoute} />} />
          <Route exact path="/register" element={<Navigate to={'/' + userRoute} />} />
        </>
      ) : (
        <>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </>
      )}
      <Route exact path="/:username" element={<Profile />} />
      <Route exact path="/home" element={<Navigate to="/" />} />
      <Route exact path="/" element={<Home />} />
      {/* <Route exact path="/error" element={<NotFound404 />} /> */}
    </Routes>
  );
}
export default Router;
