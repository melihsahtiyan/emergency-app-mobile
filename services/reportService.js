import axios from "axios";

const apiUrl = "http://13.48.13.201:5000/api/Post";

const addPost = async (post) => {
  let response;

  await axios
    .post(apiUrl + "/add", post)
    .then((res) => {
      response = res.data;
      console.log("====================================");
      console.log("Add Post Response:", response);
      console.log("====================================");
    })
    .catch((err) => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      response = err.response.data;
    });

  return response;
};


export { addPost };