import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

function ProductInfo() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams(); // Get the productId from the route params

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(firestore, 'products', productId); // Assuming 'products' is the correct collection name
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

  if (product === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1 className="my-4">{product.name}</h1>
      <div className="row mb-3">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img src={product.imageUrl} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-8">
          <div className="card details-card" style={{ height: "100%" }}>
            <div className="card-body p-4">
            <p className="card-text">Seller: {product.sellerNm}</p>
              <p className="card-text">Location: {product.location}</p>
              <p className="card-text">Contact: {product.contactNumber}</p>
              <p className="card-text">Description: {product.description}</p>
              <p className="card-text">Price: Rs {product.price.toFixed(0)}</p>
                <p className="card-text">Exchange/Rent/Sell: {product.type}</p>
            </div>
          </div>
        </div>
      </div> <br /> <br />
    </div>
  );
}

export default ProductInfo;
