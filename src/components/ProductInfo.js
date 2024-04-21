import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { firestore, cartCollectionRef } from "../firebase";
import { useAuth0 } from "@auth0/auth0-react";


function ProductInfo({ setCartItems }) {
  const { isAuthenticated, user } = useAuth0();
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(firestore, "products", productId);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          setProduct(productSnapshot.data());
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const addToCart = async () => {
    try {
      if (!isAuthenticated) {
        console.error("User not authenticated");
        return;
      }

      if (!product) {
        console.error("Product not found");
        return;
      }

      await addDoc(cartCollectionRef, { ...product, userId: user.sub });
      alert(`Added ${product.name} to your cart.`);
      setCartItems((prevItems) => [
        ...prevItems,
        { ...product, userId: user.sub },
      ]);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  if (product === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row mb-3 mt-5">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img
            src={product.imageUrl}
            className="img-fluid"
            alt={product.name}
            style={{ aspectRatio: "1/1" }}
          />
        </div>
        <div className="col-md-8">
          <div
            className="card details-card"
            style={{
              height: "100%",
              transform: "none",
              background: "none",
              border: "2px green solid",
            }}
          >
            <div className="card-body p-4">
              <h1 className="my-2">
                <span
                  style={{
                    backgroundColor: "#dcf8ab",
                    padding: 8,
                    borderRadius: 14,
                    border: "2px solid green",
                  }}
                >
                  {product.name}
                </span>
              </h1>
              <br />
              <p className="card-text" style={{ fontWeight: "800" }}>
                Rs {product.price.toFixed(0)}
              </p>
              <p className="card-text">Seller: {product.sellerNm}</p>
              <p className="card-text">Location: {product.location}</p>
              <p className="card-text">
                Contact:{" "}
                <a
                  style={{ textDecoration: "none" }}
                  href={`tel:${product.contactNumber}`}
                >
                  {product.contactNumber}
                </a>
              </p>
              <p className="card-text">Description: {product.description}</p>
              <p className="card-text">Exchange/Rent/Sell: {product.type}</p>


              {isAuthenticated ? (
                <div>
                  <Link to="/checkout" className="btn btn-success w-100">
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-success"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              ) : (
                <p className="card-text">Login to buy or add to cart</p>
              )}

            </div>
          </div>
        </div>
      </div>
      <br /> <br />
    </div>
  );
}

export default ProductInfo;
