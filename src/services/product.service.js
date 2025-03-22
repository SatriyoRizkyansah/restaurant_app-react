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

export const addToCart = (data, onSuccess, onError) => {
  axios
    .post("http://localhost:3000/carts", data)
    .then((res) => {
      console.log(res.data);
      if (onSuccess) onSuccess(res.data);
    })
    .catch((err) => {
      console.log(err);
      if (onError) onError(err);
    });
};

export const getCarts = (callback) => {
  axios
    .get("http://localhost:3000/carts")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCarts = (id, callback) => {
  axios
    .delete("http://localhost:3000/carts/" + id)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
