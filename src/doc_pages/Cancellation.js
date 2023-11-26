import React from 'react';

function Cancellation() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Cancellation Policy</h2>

      <p>
        At NeighbourGoods, we understand that circumstances may arise that require you to cancel your order. Please review our cancellation policy below for more information.
      </p>

      <h3>Order Cancellation</h3>

      <p>
        You can cancel your order within [X] hours of placing it. After this time frame, your order may have already been processed and shipped.
      </p>

      <h3>How to Cancel an Order</h3>

      <p>
        To cancel an order, please follow these steps:
      </p>

      <ol>
        <li>Log in to your NeighbourGoods account.</li>
        <li>Go to your order history.</li>
        <li>Find the order you wish to cancel and click on the cancellation option.</li>
        <li>Follow the on-screen instructions to complete the cancellation process.</li>
      </ol>

      <h3>Refund Policy</h3>

      <p>
        If your order is eligible for cancellation, a refund will be issued to the original payment method. Please allow [Y] business days for the refund to reflect in your account.
      </p>

      <h3>Contact Us</h3>

      <p>
        If you have any questions or need assistance with the cancellation process, please contact our customer service team at [customer service email].
      </p>

      <p>
        Note: This cancellation policy applies to standard orders. For information about cancelling custom or made-to-order items, please refer to our customer support.
      </p>
    </div>
  );
}

export default Cancellation;
