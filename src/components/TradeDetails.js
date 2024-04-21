import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";

function TradeDetails() {
  const [trade, setTrade] = useState(null);
  const { tradeId } = useParams(); // Get the tradeId from the route params

  useEffect(() => {
    const fetchTrade = async () => {
      try {
        const tradeRef = doc(firestore, "trade", tradeId);
        const tradeSnapshot = await getDoc(tradeRef);

        if (tradeSnapshot.exists()) {
          setTrade(tradeSnapshot.data());
        } else {
          console.error("Trade item not found");
        }
      } catch (error) {
        console.error("Error fetching trade item:", error);
      }
    };

    fetchTrade();
  }, [tradeId]);

  if (trade === null) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{height: "90vh"}}>
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            </div>
    )
  }

  return (
    <div className="container">
      <div className="row mb-3 mt-5">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img src={trade.imageUrl} style={{aspectRatio:"1/1"}} className="img-fluid" alt={trade.name} />
        </div>
        <div className="col-md-8">
          <div
            className="card details-card p-3"
            style={{
              height: "100%",
              transform:"none",
              background: "none",
              border: "3px solid green",
            }}
          >
            <div className="card-body">
              <h1 style={{backgroundColor:"#dcf8ab",padding:8,borderRadius:12,border: "2px solid green",}}>{trade.name}</h1>
              <p className="card-text">Location: {trade.location}</p>
              <p className="card-text">Description: {trade.description}</p>
              <p className="card-text">Contact: <a style={{textDecoration:"none"}} href={`tel:${trade.contactNumber}`}>{trade.contactNumber}</a>
 </p>
              <p className="card-text">Sellers Name: {trade.sellerNm}</p>
              <p className="card-text">Type: {trade.type}</p>
              {trade.type === "Trade" && (
                <div>
                  <p className="card-text">
                    Exchange or Rent: {trade.exchangeOrRent}
                  </p>
                  <p className="card-text">Exchange For: {trade.exchangeFor}</p>
                  <p className="card-text">
                    Item Used For How Long: {trade.itemUsedForHowLong}
                  </p>
                  <p className="card-text">
                    Product Condition: {trade.productCondition}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>{" "}
      <br /> <br />
    </div>
  );
}

export default TradeDetails;
