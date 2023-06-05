import axios from "axios";

const apiUrl = "http://13.48.13.201:5000/api/GptChats";

const addGptChat = async (gptChat) => {
  let response;

  await axios
    .post(apiUrl + "/add", gptChat)
    .then((res) => {
      response = res.data;
      console.log("Add GptChat Response:", response);
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err.response.data);
      console.log("====================================");
      response = err.response.data;
    });

  return response;
};

const getGptChatByPostId = async (postId) => {
  let response;
  await axios
    .get(apiUrl + "/getbypostid?postId=" + postId)
    .then((res) => {
      response = res.data.data;
      console.log("====================================");
      console.log("Get GptChat Response:", response);
      console.log("====================================");
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
      response = err.response.data;
    });
  return response;
};

export { addGptChat, getGptChatByPostId };
