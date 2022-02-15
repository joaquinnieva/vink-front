function localAuth(option, token) {
  if (option === 'login') {
    return localStorage.setItem('sesion', JSON.stringify(token));
  } else if (option === 'logout') {
    return localStorage.removeItem('sesion');
  } else {
    return localStorage.getItem('sesion');
  }
}
export default localAuth;
