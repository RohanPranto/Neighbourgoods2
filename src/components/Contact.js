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
          <p>
            All rights reserved ©️Neighbourgoods 2023 <br />
            Developed by <a href="https://rohanpranto.github.io">RohanBiswas</a>{" "}
          · <br className="footfoot"/>
            Designed by <a href="https://monjimalahiri.me">Monjima Lahiri</a>
            <span className="up-arrow">
              <a className="p-2" href="#"><i className="bx bx-up-arrow-alt"></i></a>
              
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
