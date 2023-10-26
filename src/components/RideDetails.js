import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";

const RideDetails = () => {
  const { id } = useParams();
  const [rideData, setRideData] = useState(null);

  useEffect(() => {
    const rideSharingDocRef = doc(firestore, "ride-sharing", id);

    const fetchRideDetails = async () => {
      try {
        const rideDoc = await getDoc(rideSharingDocRef);

        if (rideDoc.exists()) {
          setRideData({ id: rideDoc.id, ...rideDoc.data() });
        } else {
          console.error("Ride document not found.");
        }
      } catch (error) {
        console.error("Error fetching ride details: ", error);
      }
    };

    fetchRideDetails();
  }, [id]);

  return (
    <div className="container mt-3">
      <h2>Ride Details</h2>
      {rideData ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {rideData.startingPoint} to {rideData.endPoint}
            </h5>
            <p className="card-text">Date: {rideData.date}</p>
            <p className="card-text">Passenger Count: {rideData.passengerCount}</p>
            <p className="card-text">Name: {rideData.name}</p>
            <p className="card-text">Age: {rideData.age}</p>
            <p className="card-text">Gender: {rideData.gender}</p>
            <p className="card-text">Contact Number: {rideData.contactNumber}</p>
          </div>
        </div>
      ) : (
        <p>Loading ride details...</p>
      )}
    </div>
  );
};

export default RideDetails;
