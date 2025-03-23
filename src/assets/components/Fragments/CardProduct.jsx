import { Link } from "react-router";

const CardProduct = (props) => {
  const { title, price, img, description, id } = props;
  return (
    <div className="card shadow card-product h-100 d-flex flex-column">
      <img src={`images/menus/${img}`} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price : Rp. {price}</p>

        <div className="mt-auto">
          <Link to={`/foods/${id}`} className="btn" style={{ backgroundColor: "#FFC107" }}>
            <div className="float-start">
              {/* Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus-fill mb-1 me-1" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l..." />
              </svg>
            </div>
            Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
