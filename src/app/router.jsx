import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import NotFound404 from '../pages/NotFound404/NotFound404';
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';

function Router() {
  return (
    <Routes>
      <Route exact path="/:username" element={<Profile />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/error" element={<NotFound404 />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  );
}
export default Router;
