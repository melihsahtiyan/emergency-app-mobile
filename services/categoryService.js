import axios from "axios";

const apiUrl = "http://13.48.13.201:5000/api/Categories";

const getCategories = () => {
  return axios
    .get(apiUrl + "/getall")
    .then((res) => {
        // console.log("====================================");
        // console.log("Get Categories Response:", res.data.data);
        // console.log("====================================");
      return res.data.data.map((item) => ({ id: item.id, categoryName: item.categoryName }));
    })
    .catch((err) => {
      // console.log("====================================");
      // console.log("Get Categories Error Response:");
      // console.log(err);
    });
};

export { getCategories };
