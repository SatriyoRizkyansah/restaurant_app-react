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
    .get("http://localhost:3000/best-products")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetailProducts = (id, callback) => {
  axios
    .get("http://localhost:3000/products/" + id)
    .then((res) => {
      callback(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
