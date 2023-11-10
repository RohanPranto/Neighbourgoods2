import React from 'react';
import "../App.css";
function Contact() {
  return (
    <div>
      <div className="container contact-container" >
        <h1 className="mb-4">Contact Us</h1>
        <div className="row">
          <div className="col-md-6">
            <h3>Email:</h3>
            <p>
              <a style={{textDecoration: "none"}} href="mailto:contact@example.com">Neighbour@goods.com</a>
            </p>
            
          </div>
          <div  className="col-md-6">
            <h3>Social Media:</h3>
            <p>
              <a style={{textDecoration: "none"}} href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Neighbourgoods
              </a>
            </p>
            <p>
              <a style={{textDecoration: "none"}} href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> Neighbourgoods
              </a>
            </p>
            <p>
              <a style={{textDecoration: "none"}} href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp-square"></i> +91-6291637232
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
