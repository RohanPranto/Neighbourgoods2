import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";
import baby from "../assets/baby.png";
import "../assets/Trade.css";

function Trade() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentType, setCurrentType] = useState("trade");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [searchTerm, setSearchTerm] = useState("");

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentItems = items.slice(indexOfFirstProduct, indexOfLastProduct);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const fetchItems = async (type) => {
    const itemCollection = collection(firestore, type);

    try {
      const querySnapshot = await getDocs(itemCollection);
      const itemData = [];

      querySnapshot.forEach((doc) => {
        itemData.push({ id: doc.id, ...doc.data() });
      });

      setItems(itemData);
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching ${type} items:`, error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(currentType);
  }, [currentType]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset page number when performing a new search
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentFilteredItems = filteredItems.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <div className="container tc2">
        <div className="row trade-container ">
          <div className="col-md-6">
            <p className="yellow-text">TRADE/RENT GOODS</p>
            <h1>Save money, reduce waste, and build a community.</h1>
            <p className="para-text">
              Our platform makes it easy to find and list items for rent or
              exchange, so you can get what you need without spending a lot of
              money or creating waste. Browse our listings or list your own
              today and start saving!
            </p>{" "}
            <br />
            <Link className="butn" to="/sell">
              List an Item <i className="bx bx-up-arrow-alt"></i>
            </Link>
          </div>
          <div className="col-md-6 alignMid p-4">
            <img src={baby} alt="" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h3 className="sub-header mb-3 text-center">What are you looking for?</h3>
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

        <div className="text-center mb-4">
          <button
            style={{ marginRight: "10px" }}
            className={`butn ${currentType === "trade" ? "butn" : "button1"}`}
            onClick={() => setCurrentType("trade")}
          >
            Trade
          </button>

          <button
            style={{ marginLeft: "10px" }}
            className={`butn ${currentType === "rent" ? "butn" : "button1"}`}
            onClick={() => setCurrentType("rent")}
          >
            Rent
          </button>
        </div>

        {loading ? (
          <>
          <div className="d-flex justify-content-center align-items-center" style={{height: "50vh"}}>
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            </div>
          </>
        ) : (
          <div className="my-3 row row-cols-2 row-cols-md-2 row-cols-lg-4">
            {currentFilteredItems.map((item) => (
              <div key={item.id} className="col mb-4">
                <div className="card card1 trade-card">
                  <img
                    src={item.imageUrl}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <strong>{item.name}</strong>
                    </h5>
                    <p className="card-text">{item.location}</p>
                    <p className="desc-text card-text">
                      Description: {item.description}
                    </p>

                    {/* Conditionally render based on currentType */}
                    {currentType === "trade" && (
                      <p className="card-text">
                        Exchange For: {item.exchangeFor}
                      </p>
                    )}

                    {currentType === "rent" && (
                      <div>
                        <p className="card-text">
                          {item.type}: {item.rentCost} / Month
                        </p>
                      </div>
                    )}
                    <Link
                      to={
                        currentType === "trade"
                          ? `/trade/${item.id}`
                          : `/rent/${item.id}`
                      }
                      className="btn btn-success mt-1"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center my-3 mt-5 mb-5">
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

export default Trade;
