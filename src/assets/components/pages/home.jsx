import { Link } from "react-router";
import Navbar from "../Layouts/Navbar";
import CardProduct from "../Fragments/CardProduct";
import { useEffect, useState } from "react";
import { getAllProducts, getBestFoods } from "../../../services/product.service";

// const products = [
//   {
//     id: 1,
//     img: "nasi-goreng-telor.jpg",
//     name: "Nasi Goreng",
//     price: 15000,
//     description: "Nasi Goreng Telor",
//   },
//   {
//     id: 2,
//     img: "nasi-remes.jpg",
//     name: "Nasi Remes",
//     price: 15000,
//     description: "Nasi Remes",
//   },
// ];

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getBestFoods((data) => {
      setProducts(data);
    });
  });

  return (
    <div>
      <div className="home">
        {/* <Navbar /> */}
        <div className="container">
          <div className="row mt-4">
            <div className="col">
              <h2>
                Best <strong>Foods</strong>
              </h2>
            </div>
            <div className="col">
              <Link to="foods" className="btn btn-success float-end">
                Show all{" "}
              </Link>
            </div>
          </div>
          <div className="row mb-3">
            {products.map((product) => (
              <div className="col-md-4 mt-4" key={product.id}>
                <CardProduct title={product.name} price={product.price} img={product.img} description={product.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
