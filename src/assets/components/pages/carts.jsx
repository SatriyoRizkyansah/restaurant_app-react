import { Link } from "react-router";

const CartPage = () => {
  return (
    <div className="cart">
      {/* <navbar :updateOrders="carts" /> */}

      <div className="container">
        {/* <!-- Breadmbumb --> */}
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
                  <strong>Cart</strong>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h2>
              Keranjang <strong>Saya</strong>
            </h2>
          </div>
          <div className="table-responsive mt-3">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Food</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total Amount</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <img src="'assets/images/menus/' + cart.product.gambar" className="rounded img-fluid shadow" alt="..." />
                  </td>
                  <td>
                    <strong>Name</strong>
                  </td>
                  <td>Description</td>
                  <td>jumlah pesanan</td>
                  <td>Rp. harga</td>
                  <td>Rp. total harga</td>
                  <td className="text-danger" align="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga : </strong>
                  </td>
                  <td align="right">
                    <strong>Rp. total harga</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <!-- Form Checkout --> */}
        {/* <div className="row justify-content-end">
        <div className="col-md-4">
          <form v-on:submit.prevent="pesanFood">
            <div className="form-group">
              <label for="nama">Name</label>
              <input type="text" className="form-control" id="nama" v-model="pesan.nama" />
            </div>
            <div className="form-group mt-2">
              <label for="nomer_meja">Table Number</label>
              <input type="text" className="form-control" id="nomer_meja" v-model="pesan.nomer_meja" />
            </div>

            <button type="submit" className="btn btn-success mt-2 float-end" @click="checkout">
              <div className="float-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus-fill mb-1 me-1" viewBox="0 0 16 16">
                  <path
                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"
                  />
                </svg>
              </div>
              Checkout
            </button>
          </form>
        </div>
        </div> */}
      </div>
    </div>
  );
};

export default CartPage;
