import React, { useEffect, useState } from "react";
import { getDocs, deleteDoc, doc,  query, where } from "firebase/firestore";
import { cartCollectionRef } from "../firebase";
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";

// interface CartItem {
//   id: string;
//   image: string;
//   name: string;
//   price: number;
//   quantity: number;
//   userId: string; // Add a userId field to associate the item with the user
// }

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      const fetchUserCartItems = async () => {
        try {
          // Create a query to fetch items associated with the current user
          const q = query(cartCollectionRef, where("userId", "==", user.sub));

          const querySnapshot = await getDocs(q);
          const items = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("Fetched user's cart items:", items);
          setCartItems(items);
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      };

      fetchUserCartItems();
    }
  }, [user]);

  const removeFromCart = async (itemId) => {
    console.log("Removing item with ID:", itemId);
  
    try {
      await deleteDoc(doc(cartCollectionRef, itemId));
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      console.log("Item removed successfully from Firestore.");
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };
  
  

  return (
    <div className="container">
      <h1>Your Cart</h1>
      <div className="row row-cols-2 row-cols-md-6">
        {cartItems.map((item) => (
          <div key={item.id} className="col mb-4">
            <div className="card card1" style={{ textAlign: "left" }}>
              <img
                src={item.imageUrl}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body" style={{textAlign:"left" , padding:10}}>
                <h3 className="card-title" style={{textAlign:"left"}}>{item.name}</h3>
                <p className="card-text mb-2">Rs {item.price.toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id.toString())}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-4 d-grid gap-2">
        <Link
          className="btn btn-success"
          style={{ color: "white", textDecoration: "none" }}
          to="/checkout"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
