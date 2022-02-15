import Axios from 'axios';

const URI_API = `http://localhost:3001/api`;

export const loginUser = async (value) => {
  try {
    const res = await Axios.post(`${URI_API}/login`, value);
    const api = res.data;
    return api;
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (value) => {
  try {
    const res = await Axios.post(`${URI_API}/user`, value);
    const api = res.data;
    return api;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (param) => {
  try {
    const res = await Axios.get(`${URI_API}/user/${param}`);
    const api = res.data;
    return api;
  } catch (error) {
    console.log(error);
  }
};
