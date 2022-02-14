import Axios from 'axios';

const URI = `http://localhost:3001/api`;

export function loginUser(param) {
  return Axios.get(`${URI}/login`).then((res) => {
    const api = res.data;
    return api;
  });
}

export function getUser(param) {
  return Axios.get(`${URI}/user/${param}`).then((res) => {
    const api = res.data;
    return api;
  });
}

export function postUser(param) {
  return Axios.get(`${URI}/user/${param}`).then((res) => {
    const api = res.data;
    return api;
  });
}
