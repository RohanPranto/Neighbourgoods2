import React, { useEffect, useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { cartCollectionRef } from './firebase';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import Trade from "./pages/Trade";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import { getDocs } from "@firebase/firestore";
import Checkout from "./pages/Checkout";
import RideSharing from "./components/RideSharing";
import RideDetails from "./components/RideDetails";
import Rent from "./pages/Rent";

function App() {
  const { isAuthenticated } = useAuth0();
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const querySnapshot = await getDocs(cartCollectionRef);
      const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCartItems(items);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    isAuthenticated ? fetchCartItems() : setCartItems([]);
  }, [isAuthenticated]);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/product/:tradeId" element={<ProductDetails />} />
          <Route path="/product/:rentId" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/ridesharing" element={<RideSharing />} />
          <Route path="/ridedetails/:id" element={<RideDetails />} />
        </Routes>

        <div style={{backgroundColor:"#90ee90" , paddingTop:"20px" , paddingBottom:"20px"}}>
        <Contact />
        </div>
      </Router>
    </div>
  );
}

export default App;
