import axios from "axios";

const apiUrl = "http://13.48.13.201:5000/api/Auth";

const register = (userForRegister) => {
  axios
    .post(apiUrl + "/register", {
      email: userForRegister.email,
      password: userForRegister.password,
      firstName: userForRegister.firstName,
      lastName: userForRegister.lastName,
      birthDate: userForRegister.birthDate,
      identityNumber: userForRegister.identityNumber,
    })
    .then((res) => {
      console.log("====================================");
      console.log("Register Response:");
      console.log(res);
      console.log("====================================");
    })
    .catch((err) => {
      console.error(err);
    });
};

const login = (userForLogin) => {
  axios
    .post(apiUrl + "/login", {
      email: userForLogin.email,
      password: userForLogin.password,
    })
    .then((res) => {
      console.log('====================================');
      console.log("Login Response:");
      console.log(res.data);
      console.log('====================================');
    })
    .catch((err) => {
      console.log(err);
    });
};

export { register, login };
