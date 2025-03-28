import { Link } from "react-router";
import Navbar from "../Layouts/Navbar";
import CardProduct from "../Fragments/CardProduct";
import { useEffect, useState } from "react";
import { getAllProducts, getBestFoods } from "../../../services/product.service";

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
              <Link to="foods" className="btn float-end" style={{ backgroundColor: "#FFC107" }}>
                Show all{" "}
              </Link>
            </div>
          </div>
          <div className="row mb-3">
            {products.map((product) => (
              <div className="col-md-4 mt-4" key={product.id}>
                <CardProduct id={product.id} title={product.name} price={product.price} img={product.img} description={product.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
