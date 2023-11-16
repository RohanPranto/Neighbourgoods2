import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { collection, query, getDocs, addDoc } from "firebase/firestore";
import { cartCollectionRef, firestore } from "../firebase";
import "../App.css";
import group69 from "../assets/Group69.png";
import { Link } from "react-router-dom";

function Buy({ setCartItems }) {
  const { user } = useAuth0();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [searchTerm, setSearchTerm] = useState("");

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset page number when performing a new search
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const fetchProducts = async () => {
    const productsCollection = collection(firestore, "products");
    const productsQuery = query(productsCollection);

    try {
      const querySnapshot = await getDocs(productsQuery);
      const productsData = [];

      querySnapshot.forEach((doc) => {
        productsData.push(doc.data());
      });

      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    try {
      await addDoc(cartCollectionRef, { ...product, userId: user.sub });

      alert(`Added ${product.name} to your cart.`);
      setCartItems((prevItems) => [
        ...prevItems,
        { ...product, userId: user.sub },
      ]);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container">
        <div className="row buy-container">
          <div className="col-md-6">
            <p className="yellow-text">BUY / SELL GOODS</p>
            <h1>Used products, new savings, new life..</h1> <br />
            <p className="para-text">
              Our platform makes it easy to find and list used products for
              sale. Buy the items you need at a fraction of the cost of new, and
              sell your unwanted items to give them a new life. By buying and
              selling used products, you can save money, reduce waste, and live
              more sustainably.
            </p>{" "}
            <br />
            <Link className="butn" to="/sell">
              List an Item <i className="bx bx-up-arrow-alt"></i>
            </Link>
          </div>

          <div className="col-md-6 alignMid ">
            <img className=" baby-img" src={group69} alt="buy page" />
          </div>
        </div>

        <h3 className="sub-header mb-4">What are you looking for?</h3>
        <div className="row mb-3">
          <div className="col-md-12">
            <input
              type="text"
              className="form-control f2"
              placeholder="Search by keyword..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4">
          {currentProducts.map((product) => (
            <div key={product.id} className="col mb-4">
              <div className="card card1">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{product.name}</strong>
                  </h5>
                  <p className="card-text">{product.location}</p>
                  <p className="card-text">Rs {product.price.toFixed(0)}</p>

                  <div className="text-center text-center mb-2 mt-1 d-grid gap-2">
                    <button
                      className="btn btn-success"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center my-3 mb-5">
          <button className="butn mr-3" onClick={() => paginate(1)}>
            Previous
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`button1 ${
                currentPage === number ? "btn-success" : "btn-secondary"
              } mx-2`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}
          <button
            className="butn ml-3"
            onClick={() => paginate(pageNumbers.length)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buy;
