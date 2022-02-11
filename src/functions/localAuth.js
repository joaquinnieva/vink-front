function localAuth(option) {
  if (option === 'login') {
    localStorage.setItem('sesion', '{token}');
  }
  if (option === 'logout') {
    window.location.reload();
    localStorage.removeItem('sesion');
  } else {
    return localStorage.getItem('sesion');
  }
}
export default localAuth;
