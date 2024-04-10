import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { firestore, cartCollectionRef } from '../firebase';
function ProductInfo() {
  const [product, setProduct] = useState(null);
  const [addingToCart, setAddingToCart] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(firestore, 'products', productId);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          setProduct(productSnapshot.data());
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const addToCart = async () => {
    try {
      setAddingToCart(true); // Set loading state

      // Extract relevant data from the product
      const { name, sellerNm, location, contactNumber, description, price, type } = product;

      // Add the extracted data to the cart collection
      await addDoc(cartCollectionRef, {
        name,
        sellerNm,
        location,
        contactNumber,
        description,
        price,
        type,
        // Add userId as needed (e.g., get it from authentication context)
      });

      alert(`Added ${product.name} to your cart.`);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    } finally {
      setAddingToCart(false); // Reset loading state
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
            style={{aspectRatio: "1/1"}}
          />
        </div>
        <div className="col-md-8">
          <div className="card details-card" style={{ height: "100%", transform:"none", background:"none", border:"2px green solid" }}>
            <div className="card-body p-4">
            <h1 className="my-2"><span style={{backgroundColor:"#dcf8ab",padding:8,borderRadius:14,border:"2px solid green"}}>{product.name}</span></h1>
      <br/>
              <p className="card-text" style={{fontWeight:"800"}}>Rs {product.price.toFixed(0)}</p>
              <p className="card-text">Seller: {product.sellerNm}</p>
              <p className="card-text">Location: {product.location}</p>
              <p className="card-text">Contact: <a style={{textDecoration:"none"}} href={`tel:${product.contactNumber}`}>{product.contactNumber}</a>
 </p>
              <p className="card-text">Description: {product.description}</p>
              <p className="card-text">Exchange/Rent/Sell: {product.type}</p>
              <Link to="/checkout" className="btn btn-success w-100">
                    Buy Now
                  </Link>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
    </div>
  );
}

export default ProductInfo;
