import React from "react";
import "../assets/Trade.css";
import mouse from "../assets/mouse.png";
import "../assets/About.css"
function About() {
  return (
    <div className="about">
      <div className="container-fluid mt-3">
        <div className=" pb-3">
          <div className="alignMid">
            <h1 className="about-h1">
              We are not just <br /> visitors to this planet. We are its
              guardians.
            </h1>
          </div>
          <div className="text-center img">
          <a href="#text" className="text-decoration-none">
            <img src={mouse} alt="mouse" className="img-fluid pb-4" />
            <p className="yellow-text pb-5">SCROLL DOWN</p>
            </a>
          </div>
        </div>
      </div>

      <div id="text" className="container-fluid p-5 text">
        <div className="container text-white">
        <h3>While businesses and companies are bound by ESG guidelines to track their carbon footprint and make eco-conscious choices, individuals lack a similar metric system. This absence of accountability often leads to the consumption of unnecessary products and resources, exacerbating environmental degradation. At Somename, our mission is to bridge this gap by empowering individuals to make informed decisions that align with sustainability principles. By fostering a culture of conscious consumption, we can collectively reduce our environmental impact and create a more sustainable future for all.</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
