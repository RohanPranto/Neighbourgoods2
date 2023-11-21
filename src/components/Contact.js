import React from "react";
import butterfly from "../assets/butterfly.png";
import apple from "../assets/apple.png";
import playstore from "../assets/playstore.png";
import "../assets/Contact.css";

function Contact() {
  return (
    <div>
      <footer>
        <div
          className="container contact-container"
          style={{ paddingTop: 25, paddingBottom: 25 }}
        >
          <div className="row">
            <div className="col-md-6">
              <p>Download app from</p>
              <div className="icons">
                <div className="icon-container">
                  <img
                    src={playstore}
                    alt="playstore"
                    className="img-fluid icon"
                  />
                  <p>GooglePlay</p>
                </div>
                <div className="icon-container">
                  <img src={apple} alt="apple" className="img-fluid icon" />
                  <p>App Store</p>
                </div>
              </div>
              <br />
              <p className="mb-2">Subscribe to our Newsletter</p>
              <div className="input-group">
                <input
                  type="email"
                  className="input"
                  id="Email"
                  name="Email"
                  placeholder="yourname@email.com"
                />
                <input
                  className="button--submit"
                  value="Subscribe"
                  type="submit"
                />
              </div>
            </div>

            <div className="col-md-6 right-col">
              <img className="img-fluid" src={butterfly} alt="" />
            </div>
          </div>
        </div>
        <div className="green">
          <p style={{ marginBottom: 0 }} className="float-end">
          <a href="https://rohanpranto.github.io/">Developed by Rohan</a> ·{" "}
            <a href="https://monjimalahiri.me">
              Designed by Monjima
              <i style={{ rotate: "none", marginLeft: 5 }} className="bx"></i>
            </a> {""} · 

            <a style={{ textDecoration: "none" , paddingLeft:10}} href="#">
            Back to top
              <i
                style={{ rotate: "none", marginLeft: 5 }}
                className="bx bx-up-arrow-alt"
              ></i>
            </a>
          </p>
          <p style={{ marginBottom: 0 }}>
            © 2023 Neighbourgoods ·{" "}
            
            <a href="#" style={{textDecoration:"none"}}>All rights reserved</a> · <a href="#">Terms</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
