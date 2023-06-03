import axios from "axios";

const apiUrl = "http://13.48.13.201:5000/api/Auth";

const register = async (userForRegister) => {
  let response;
  await axios
    .post(apiUrl + "/register", {
      email: userForRegister.email,
      password: userForRegister.password,
      firstName: userForRegister.firstName,
      lastName: userForRegister.lastName,
      birthDate: userForRegister.birthDate,
      identityNumber: userForRegister.identityNumber,
    })
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      console.log("====================================");
      console.log("Register Error Response:");
      console.log(err.response.data);
      response = err.response.data;
    });

  console.log("====================================");
  console.log("Register Response:", response);
  console.log("====================================");

  return response;
};

const login = async (userForLogin) => {
  let response;
  await axios
    .post(apiUrl + "/login", {
      email: userForLogin.email,
      password: userForLogin.password,
    })
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      console.log("====================================");
      console.log("Login Error Response:");
      console.log(err);
    });
  return response;
};

export { register, login };
