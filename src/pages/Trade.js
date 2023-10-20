import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';

function Trade() {
  const [tradeItems, setTradeItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTradeItems = async () => {
    const tradeCollection = collection(firestore, 'trade');

    try {
      const querySnapshot = await getDocs(tradeCollection);
      const tradeData = [];

      querySnapshot.forEach((doc) => {
        tradeData.push({ id: doc.id, ...doc.data() });
      });

      setTradeItems(tradeData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching trade items:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTradeItems();
  }, []);

  return (
    <div>
      <div className="container">
        <h1 className="my-4">Trade</h1>
        <Link className="btn btn-success" to="/sell">
          Enlist Item for Trade
        </Link>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="my-3 row row-cols-2 row-cols-md-2 row-cols-lg-5">
            {tradeItems.map((item) => (
              <div key={item.id} className="col mb-4">
                <div className="card">
                  <img src={item.imageUrl} className="card-img-top" style={{ height: "200px" }} alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.location}</p>
                    <p className="card-text">Description: {item.description}</p>
                    <p className="card-text">Seller's Name: {item.sellerNm}</p> {/* Add the seller's name here */}
                    <p className="card-text">Contact: {item.contactNumber}</p>
                    <p className="card-text">Type: {item.type}</p>
                    {/* Add a "Learn More" button that links to the product details page */}
                    <Link
                      to={`/product/${item.id}`}
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Trade;
