import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getDetailProducts } from "../../../services/product.service";

const FoodDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProducts(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <div className="food-detail">
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/foods">Foods</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <strong>Food Detail</strong>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <img src={`/images/menus/${product.img}`} alt={product.name} className="img-fluid shadow rounded" />
          </div>
          <div className="col-md-6">
            <h2>
              <strong>{product.name}</strong>
            </h2>
            <hr />
            <h4>
              Harga : <strong>Rp. {product.price}</strong>
            </h4>
            <form>
              <div className="form-group">
                <label for="jumlah_pemesanan">Jumlah Pemesanan</label>
                <input type="number" className="form-control" v-model="pesan.jumlah_pemesanan" />
              </div>
              <div className="form-group mt-2">
                <label for="keterangan">Keterangan</label>
                <textarea name="keterangan" className="form-control" placeholder="Keterangan spt : Pedes, Nasi Setengah..." v-model="pesan.keterangan"></textarea>
              </div>

              <button type="submit" className="btn btn-success mt-2">
                <div className="float-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus-fill mb-1 me-1" viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0" />
                  </svg>
                </div>
                Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailPage;
