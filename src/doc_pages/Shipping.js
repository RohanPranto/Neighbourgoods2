import React from 'react';

function Shipping() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shipping Information</h2>

      <p>
        Thank you for choosing Neighbourgoods! Here is some important information about our shipping process.
      </p>

      <h3>Shipping Methods</h3>

      <p>We offer the following shipping methods:</p>

      <ul>
        <li><strong>Standard Shipping:</strong> Takes [X] business days to deliver.</li>
        <li><strong>Express Shipping:</strong> Delivers within [Y] business days for expedited service.</li>
        {/* Add more shipping methods as needed */}
      </ul>

      <h3>Order Processing Time</h3>

      <p>
        Orders are processed and shipped within [Z] business days after payment confirmation. Please note that orders placed on weekends or holidays will be processed on the next business day.
      </p>

      <h3>Shipping Costs</h3>

      <p>
        Shipping costs are calculated based on the weight of your order and the selected shipping method. The total shipping cost will be displayed at checkout before you complete your purchase.
      </p>

      <h3>Tracking Your Order</h3>

      <p>
        Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the status and location of your package.
      </p>

      <h3>Shipping Restrictions</h3>

      <p>
        Neighbourgoods currently ships to [list of countries or regions]. If you are located outside of these areas, please contact our customer support for assistance.
      </p>

      <p>
        If you have any questions or concerns about your order or our shipping policies, please don't hesitate to contact our customer service team at [customer service email].
      </p>
    </div>
  );
}

export default Shipping;
