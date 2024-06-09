import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";

function RentDetails() {
  const [rent, setRent] = useState(null);
  const { rentId } = useParams();

  useEffect(() => {
    const fetchRent = async () => {
      try {
        const rentRef = doc(firestore, "rent", rentId);
        const rentSnapshot = await getDoc(rentRef);

        if (rentSnapshot.exists()) {
          setRent(rentSnapshot.data());
        } else {
          console.error("Rent item not found");
          alert("Rent item not found");
        }
      } catch (error) {
        console.error("Error fetching rent item:", error);
      }
    };

    fetchRent();
  }, [rentId]);

  if (rent === null) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row mb-3 mt-5">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img
            src={rent.imageUrl}
            style={{ aspectRatio: "1/1" }}
            className="img-fluid rounded shadow"
            alt={rent.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card details-card" style={{ height: "100%", transform: "none", background: "none", border: "3px solid green" }}>
            <div className="card-body">
              <h1
                style={{
                  backgroundColor: "#dcf8ab",
                  padding: 8,
                  borderRadius: 12,
                  border: "2px solid green",
                }}
              >
                {rent.name}
              </h1>
              <p className="card-text fw-bold">Rs {rent.rentCost} Per Month</p>
              <p className="card-text">
                <span className="badge bg-warning text-dark">Duration: {rent.rentDuration}</span>
              </p>
              <p className="card-text">
                <span className="badge bg-success text-dark">Location: {rent.location}</span>
              </p>
              <p className="card-text">Description: {rent.description}</p>
              <p className="card-text">
                Contact: <a style={{ textDecoration: "none" }} href={`tel:${rent.contactNumber}`}>{rent.contactNumber}</a>
              </p>
              <p className="card-text">Seller's Name: {rent.sellerNm}</p>
              <p className="card-text">Type: {rent.type}</p>
              {rent.type === "rent" && (
                <div>
                  <p className="card-text">Exchange For: {rent.exchangeFor}</p>
                  <p className="card-text">Exchange or Rent: {rent.exchangeOrRent}</p>
                  <p className="card-text">Item Used For How Long: {rent.itemUsedForHowLong}</p>
                  <p className="card-text">Product Condition: {rent.productCondition}</p>
                </div>
              )}
              <a className="btn btn-success" href={`tel:${rent.contactNumber}`}>
                <i className='bx bx-phone-call' style={{ rotate: "none" }}></i> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default RentDetails;
