import React, { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { collection, query, getDocs, addDoc } from 'firebase/firestore';
import { cartCollectionRef, firestore } from '../firebase'; // Import the Firestore cart collection reference
import "../App.css"
function Buy({ setCartItems }) {
  const { user } = useAuth0(); // Import 'user' from useAuth0
  const [products, setProducts] = React.useState([]);

  // Function to fetch products from Firestore
  const fetchProducts = async () => {
    const productsCollection = collection(firestore, 'products');
    const productsQuery = query(productsCollection);

    try {
      const querySnapshot = await getDocs(productsQuery);
      const productsData = [];

      querySnapshot.forEach((doc) => {
        productsData.push(doc.data());
      });

      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    try {
      // Add the product to the Firestore cart collection
      await addDoc(cartCollectionRef, { ...product, userId: user.sub });

      alert(`Added ${product.name} to your cart.`);
      
      // Update the cart items using the prop
      setCartItems((prevItems) => [...prevItems, { ...product, userId: user.sub }]);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="mb-4">Buy</h1>
        <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4">
          {products.map((product) => (
            <div key={product.id} className="col mb-4">
              <div className="card" style={{ width: '80%', height: "100%" }}>
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.location}</p>
                  <p className="card-text">Rs {product.price.toFixed(0)}</p>
                  {/* <button
                    className="btn btn-success btn-sm" style={{ marginRight: '10px' }}
                    onClick={() => alert('Buy Now clicked for ' + product.name)}
                  >
                    Buy Now
                  </button>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button> */}
                  <div className="button-div">
                    <button
                      className="btn btn-success btn-sm" 
                      onClick={() => alert('Buy Now clicked for ' + product.name)}
                    >
                      Buy Now
                    </button>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Buy;
