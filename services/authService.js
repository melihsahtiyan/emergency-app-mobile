import axios from "axios";

const apiUrl = "http://10.0.2.2:7276/api/auth";

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
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { register, login };
