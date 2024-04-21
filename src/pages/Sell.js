import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import "../App.css";
import girl from "../assets/girl.png";
import { useAuth0 } from "@auth0/auth0-react";
function Sell() {
  const { isAuthenticated } = useAuth0();
  const [loading, setLoading] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productDescription, setProductDescription] = useState("");
  const [sellerLocation, setSellerLocation] = useState("");
  const [sellerContactNumber, setSellerContactNumber] = useState("");
  const [sellerName, setSellerName] = useState(""); // Add seller's name
  const [productType, setProductType] = useState("Sell");
  const [exchangeFor, setExchangeFor] = useState("");
  const [exchangeOrRent, setExchangeOrRent] = useState("Exchange");
  const [itemUsedForHowLong, setItemUsedForHowLong] = useState("");
  const [productCondition, setProductCondition] = useState("");

  //state for Rent
  const [rentDuration, setRentDuration] = useState("1m");
  const [rentCost, setRentCost] = useState("");

  const handleProductSubmit = async (e) => {

    if (!isAuthenticated) {
      // Display a message or a login prompt if the user is not authenticated
      return;
    }

    e.preventDefault();
    setLoading(true);
    const product = {
      name: productName,
      price: parseFloat(productPrice),
      imageUrl: productImage,
      description: productDescription,
      location: sellerLocation,
      contactNumber: sellerContactNumber,
      sellerNm: sellerName,
      type: productType,
      exchangeFor,
      exchangeOrRent,
      itemUsedForHowLong,
      productCondition,
      rentDuration,
      rentCost,
    };

    try {
      if (productType === "Sell") {
        await addDoc(collection(firestore, "products"), product);
      } else if (productType === "Trade") {
        await addDoc(collection(firestore, "trade"), product);
      } else if (productType === "Rent") {
        await addDoc(collection(firestore, "rent"), product);
      }

      setProductName("");
      setProductPrice("");
      setProductImage(null);
      setProductDescription("");
      setSellerLocation("");
      setSellerContactNumber("");
      setSellerName("");
      setExchangeFor("");
      setExchangeOrRent("Exchange");
      setItemUsedForHowLong("");
      setProductCondition("");
      setRentDuration("1m");
      setRentCost("");

      alert("The item has been enlisted.");
    } catch (error) {
      console.error("Error enlisting item:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProductImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // Function to conditionally render additional fields for 'Trade'
  const renderTradeFields = () => {
    if (productType === "Trade") {
      return (
        <div>
          <div className="mb-3">
            <label htmlFor="exchangeFor" className="form-label">
              Exchange For
            </label>
            <input
              type="text"
              className="form-control"
              id="exchangeFor"
              value={exchangeFor}
              onChange={(e) => setExchangeFor(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="itemUsedForHowLong" className="form-label">
              Item Used For How Long
            </label>
            <input
              type="text"
              className="form-control"
              id="itemUsedForHowLong"
              value={itemUsedForHowLong}
              onChange={(e) => setItemUsedForHowLong(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productCondition" className="form-label">
              Product Condition
            </label>
            <input
              type="text"
              className="form-control"
              id="productCondition"
              value={productCondition}
              onChange={(e) => setProductCondition(e.target.value)}
              required
            />
          </div>
        </div>
      );
    }
    return null;
  };
  // END OF TRADE FIELDS

  // Function to conditionally render additional fields for 'Rent'
  const renderRentFields = () => {
    if (productType === "Rent") {
      return (
        <div>
          <div className="mb-3">
            <label htmlFor="rentDuration" className="form-label">
              Rent Duration
            </label>
            <select
              className="form-select"
              style={{ boxShadow: "none", border: "2px solid #D7E5BE" }}
              id="rentDuration"
              value={rentDuration}
              onChange={(e) => setRentDuration(e.target.value)}
              required
            >
              <option value="1m">1 Month</option>
              <option value="6m">6 Months</option>
              <option value="1y">1 Year</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="rentCost" className="form-label">
              Rent Costing
            </label>
            <input
              type="number"
              className="form-control"
              id="rentCost"
              value={rentCost}
              onChange={(e) => setRentCost(e.target.value)}
              required
            />
          </div>
        </div>
      );
    }
    return null;
  };

  //end of rent

  return (
    <div>
      {isAuthenticated ? (
        <div className="container my-3">
        <h1 className="mb-4">Sell / Trade / Rent</h1>
        <div className="row">
          <div className="col-md-6 mb-5">
            <img
              src={girl}
              className="img-fluid"
              style={{ borderRadius: 35 }}
              alt="a girl"
            />
          </div>
          <div className="col-md-6">
            <form onSubmit={handleProductSubmit}>
              <div className="mb-3">
                <label htmlFor="productType" className="form-label">
                  Product for
                </label>
                <select
                  className="form-select"
                  style={{ boxShadow: "none", border: "2px solid #D7E5BE" }}
                  id="productType"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  required
                >
                  <option value="Sell">Sell</option>
                  <option value="Trade">Trade</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
              {productType === "Sell" && (
                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="mb-3">
                <label htmlFor="productImage" className="form-label">
                  Product Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="productImage"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productDescription" className="form-label">
                  Product Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productDescription"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sellerLocation" className="form-label">
                  Seller's Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sellerLocation"
                  value={sellerLocation}
                  onChange={(e) => setSellerLocation(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sellerContactNumber" className="form-label">
                  Seller's Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sellerContactNumber"
                  value={sellerContactNumber}
                  onChange={(e) => setSellerContactNumber(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sellerName" className="form-label">
                  Seller's Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sellerName"
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                />
              </div>

              {renderTradeFields()}
              {renderRentFields()}
              {loading ? (
                <button type="submit" className="butn" disabled>
                  Enlisting...
                </button>
              ) : (
                <button type="submit" className="butn">
                  Enlist Product
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      ) :(
        <div className="container vh-100 pt-5">
          <h1 style={{paddingLeft:20}}>Please login to continue</h1>
        </div>
      )}
    </div>
  );
}

export default Sell;
