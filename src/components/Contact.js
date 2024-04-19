import React from "react";
import butterfly from "../assets/butterfly.png";
import "../assets/Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <footer>
        <div
          className="container contact-container"
          // style={{ paddingTop: 25, paddingBottom: 25 }}
        >
          <div className="row">
            <div className="col-md-6 mt-5">
              <p style={{fontWeight:"400"}}>Download app from</p>
            <i class='bx bxl-play-store bx-lg' style={{rotate:"none"}}></i>
              <i class='bx bxl-apple bx-lg' style={{rotate:"none"}} ></i>
              
              <br /> <br />
              <br /> 
              {/* <p className="mb-2" style={{fontWeight:"400"}}>Subscribe to our Newsletter</p>
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
              </div> */}
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
          <div className="row" style={{marginRight:0 , marginLeft: 0}}>
            <div className="col-lg-2">
              <Link className="links" to="/policy">Privacy & Policy</Link>
            </div>
            <div className="col-lg-2">
              <Link className="links" to="/terms">Terms & Conditions</Link>
            </div>
            <div className="col-lg-2">
              <Link className="links" to="/shipping">Shipping and delivery</Link>
            </div>
            <div className="col-lg-2">
              <Link className="links" to="/cancellation">Cancellation and refund</Link>
            </div>
            <div className="col-lg-2">
              <Link className="links" to="/contact">Contact Us</Link>
            </div>
            <div className="col-lg-2">
              <Link className="links" to="/about">About</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
