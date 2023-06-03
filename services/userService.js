import axios from "axios";

const apiUrl = "http://13.48.13.201:5000/api/Users";

const getUserByEmail = async (email) => {
  const response = axios
    .get(apiUrl + "/getbyemail?email=" + email)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return err.response.data;
    });

  return response;
};

export { getUserByEmail };
