import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import Trade from "./pages/Trade";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import TradeDetails from "./components/TradeDetails";
import Checkout from "./pages/Checkout";
import RideSharing from "./components/RideSharing";
import RideDetails from "./components/RideDetails";
import Rent from "./pages/Rent";
import About from "./pages/About";
import Policy from "./doc_pages/Policy";
import Cancellation from "./doc_pages/Cancellation";
import Shipping from "./doc_pages/Shipping";
import Terms from "./doc_pages/Terms";
import ProductInfo from "./components/ProductInfo";
import RentDetails from "./components/RentDetails";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/about" element={<About/>} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cancellation" element={<Cancellation />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/trade/:tradeId" element={<TradeDetails />} />
          <Route path="/rent/:rentId" element={<RentDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/ridesharing" element={<RideSharing />} />
          <Route path="/product/:productId" element={<ProductInfo />} />
          <Route path="/ridedetails/:id" element={<RideDetails />} />
        </Routes>
        <Contact />
      </Router>
    </div>
  );
}

export default App;
