import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";

const RideSharingForm = () => {
  const { isAuthenticated, user } = useAuth0();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [startingPoint, setStartingPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [date, setDate] = useState("");
  const [passengerCount, setPassengerCount] = useState(1); // Default to 1 passenger

  const handlePostRide = async () => {
    if (!isAuthenticated) {
      // Display a message or a login prompt if the user is not authenticated
      return;
    }

    // Create a new ride-sharing listing object
    const rideListing = {
      name,
      age,
      gender,
      contactNumber,
      startingPoint,
      endPoint,
      date,
      passengerCount,
      userId: user.sub, // Include the user's ID
    };

    try {
      // Add the ride-sharing listing to Firestore
      const docRef = await addDoc(
        collection(firestore, "ride-sharing"),
        rideListing
      );

      // Clear the form fields after posting
      setName("");
      setAge("");
      setGender("");
      setContactNumber("");
      setStartingPoint("");
      setEndPoint("");
      setDate("");
      setPassengerCount(1);

      // Provide feedback to the user
      console.log("Ride-sharing listing posted with ID: ", docRef.id);

      // Show a success message and an alert
      alert("Your ride has been posted");
    } catch (error) {
      console.error("Error posting ride-sharing listing: ", error);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-2">Post a Ride</h2>
      {isAuthenticated ? (
        <form>
          <div className="form-group my-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group my-4">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="form-group my-4">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              className="form-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="PreferNotToSay">Prefer Not to Say</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="form-group my-4">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="text"
              id="contactNumber"
              className="form-control"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>

          <div className="form-group my-4">
            <label htmlFor="startingPoint">Starting Point</label>
            <input
              type="text"
              id="startingPoint"
              className="form-control"
              value={startingPoint}
              onChange={(e) => setStartingPoint(e.target.value)}
            />
          </div>

          <div className="form-group my-4">
            <label htmlFor="endPoint">End Point</label>
            <input
              type="text"
              id="endPoint"
              className="form-control"
              value={endPoint}
              onChange={(e) => setEndPoint(e.target.value)}
            />
          </div>

          <div className="form-group my-4">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group my-4">
            <label htmlFor="passengerCount">Passenger Count</label>
            <input
              type="number"
              id="passengerCount"
              className="form-control"
              value={passengerCount}
              onChange={(e) => setPassengerCount(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary mb-5 mt-3"
            onClick={handlePostRide}
          >
            Post
          </button>
        </form>
      ) : (
        <p>Please log in to post a ride-sharing listing.</p>
      )}
    </div>
  );
};

const RideSharingList = () => {
  const [rideListings, setRideListings] = useState([]);

  const fetchRideListings = async () => {
    const rideSharingCollection = collection(firestore, "ride-sharing");

    try {
      const querySnapshot = await getDocs(rideSharingCollection);
      const rideData = [];

      querySnapshot.forEach((doc) => {
        rideData.push({ id: doc.id, ...doc.data() });
      });

      setRideListings(rideData);
    } catch (error) {
      console.error("Error fetching ride-sharing listings: ", error);
    }
  };

  useEffect(() => {
    fetchRideListings();
  }, []);

  return (
    <div className="container">
      <h2>Existing Ride Listings</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {rideListings.map((listing) => (
          <div key={listing.id} className="col mb-4">
            <Link style={{textDecoration:"none"}} to={`/ridedetails/${listing.id}`}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {listing.startingPoint} to {listing.endPoint}
                </h5>
                <p className="card-text">
                  Date: {listing.date} - {listing.passengerCount} passengers
                </p>
                {/* Add other information here (name, age, gender, contactNumber) */}
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const RideSharing = () => {
  return (
    <div>
      <RideSharingForm />
      <RideSharingList />
    </div>
  );
};

export default RideSharing;
