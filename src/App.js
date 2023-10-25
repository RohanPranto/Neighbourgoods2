import React, { useEffect, useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { cartCollectionRef } from './firebase'; // Import the Firestore cart collection reference
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

function App() {
  const { isAuthenticated, user } = useAuth0();
  const [cartItems, setCartItems] = useState([]);

  // Function to fetch cart items from Firestore
  const fetchCartItems = async () => {
    try {
      // Create a query to fetch items associated with the current user
      const querySnapshot = await getDocs(cartCollectionRef);
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched cart items:", items);
      setCartItems(items);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      // Fetch cart items when the user is authenticated
      fetchCartItems();
    } else {
      // If the user is not authenticated, reset the cart
      setCartItems([]);
    }
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
          <Route path="/product/:tradeId" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout/>}/>

          {/* Add more routes for other pages */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
