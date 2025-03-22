import { useEffect, useState } from "react";
import CardProduct from "../Fragments/CardProduct";
import { getAllProducts } from "../../../services/product.service";

const FoodsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts((data) => {
      setProducts(data);
    });
  });

  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>
            Food <strong>lists</strong>
          </h2>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="input-group mb-3">
            <input v-model="search" type="text" class="form-control" placeholder="Find your favorite food..." aria-label="Username" aria-describedby="basic-addon1" />
            <span class="input-group-text" id="basic-addon1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
                <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        {products.map((product) => (
          <div className="col-md-4 mt-4" key={product.id}>
            <CardProduct title={product.name} price={product.price} img={product.img} description={product.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
