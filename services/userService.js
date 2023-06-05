import axios from "axios";

const apiUrl = "http://13.48.13.201:5000/api/Users";

const getUserByEmail = async (email) => {
  let response;
  
  await axios
    .get(apiUrl + "/getbyemail?email=" + email)
    .then((res) => {
      response = res.data.data;
      console.log('====================================');
      console.log("Get User By Email Response:", response);
      console.log('====================================');
    })
    .catch((err) => {
      response = err.response.data;
    });

  return response;
};

export { getUserByEmail };
