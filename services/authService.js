import axios from "axios";

const apiUrl = "http://localhost:7276/api/auth";

const Register = (userForRegister) => {
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
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const Login = (userForLogin) => {
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

export { Register, Login };
