//Logging out of the system

const Logout = () => {
  localStorage.removeItem("accesstoken");
  localStorage.removeItem("name");
  localStorage.removeItem("id");
  localStorage.removeItem("email");
  window.location.href = "/";
};

export default Logout;
