import axios from "axios";

export const getAllProducts = (callback) => {
  axios
    .get("http://localhost:3000/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getBestFoods = (callback) => {
  axios
    .get("http://localhost:3000/products")
    .then((res) => {
      callback(res.data.slice(0, 3));
    })
    .catch((err) => {
      console.log(err);
    });
};
