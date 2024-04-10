import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import tree1 from "../assets/tree1.png";
// @ts-ignore
import group2 from "../assets/Group2.png";
import group4 from "../assets/group3.png";
import group3 from "../assets/Maskgroup.png";
import planetclip from "../assets/planetclip.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import "../App.css";
import "../assets/Home.css";
function Home() {
  return (
    <div>
      {/* landing */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 home-div">
              <div>
                <h1>
                  Join us in the{" "}
                  <span
                    style={{
                      border: "3px solid #DCF8AB",
                      borderRadius: 40,
                      padding: "0px 12px",
                    }}
                  >
                    fight
                  </span>{" "}
                  for a{" "}
                  <span
                    style={{
                      backgroundColor: "#DCF8AB",
                      borderRadius: 40,
                      padding: "0px 12px",
                    }}
                  >
                    sustainable
                  </span>{" "}
                  future <img src={tree1} alt=""  className="sapling pb-1" />
                </h1>{" "}
                <br />
                
                <p className="para-text">
                  Never doubt that a small group of thoughtful, committed
                  citizens can change the world; indeed it’s the only thing that
                  ever has. – Margaret Mead
                </p>{" "}
                <br />
              </div>
              <a className="butn" href="#about-us">
                Learn More <i className="bx bx-up-arrow-alt"></i>
              </a>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid"
                style={{ boxShadow: "none" }}
                src={group2}
                alt="group"
              />
            </div>
          </div>
        </div>
      </section>

      {/* merquesssss */}
      <section className="section2">
        <div className="news-ticker">
          <marquee behavior="scroll" direction="left" loop="infinite">
            {/* Add your news items here */}
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Why discard if you can resell?</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Same Route? Share Commute!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Rent so someone doesn’t need to buy!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Why discard if you can resell?</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Same Route? Share Commute!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Rent so someone doesn’t need to buy!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Why discard if you can resell?</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Same Route? Share Commute!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Rent so someone doesn’t need to buy!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Why discard if you can resell?</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Same Route? Share Commute!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Rent so someone doesn’t need to buy!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Why discard if you can resell?</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Same Route? Share Commute!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Rent so someone doesn’t need to buy!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Why discard if you can resell?</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Same Route? Share Commute!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Rent so someone doesn’t need to buy!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Why discard if you can resell?</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Same Route? Share Commute!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Rent so someone doesn’t need to buy!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Why discard if you can resell?</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Same Route? Share Commute!</span>
            <img className="img-fluid" src={planetclip} alt="planetclip" />
            <span className="merq">Rent so someone doesn’t need to buy!</span>
          </marquee>
        </div>
      </section>
      {/* mission page */}
      <section className="section3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                className="img-fluid"
                style={{ boxShadow: "none" }}
                src={group3}
                alt="group"
              />
            </div>
            <div className="col-md-6 mission">
              <p className="yellow-text">Mission</p>
              <h1 id="about-us">
                {" "}
                We strive to{" "}
                <span
                  style={{
                    backgroundColor: "#DCF8AB",
                    borderRadius: 40,
                    padding: "0px 12px",
                  }}
                >
                  protect nature
                </span>{" "}
                for future generations.
              </h1>{" "}
              <br />
              <p className="yellow-text">How</p>
              <h1 id="about-us">
                {" "}
                By following the principle of{" "}
                <span style={{ fontWeight: "bold", color: "#C0D62C" }}>
                  Zero-Waste
                </span>
              </h1>{" "}
              <br />
              <p className="para-text">
                Opting for second-hand purchases, rentals, and ride-sharing
                significantly cuts waste, driving us closer to a zero-waste
                lifestyle. These choices extend product life, minimize new
                production, and promote eco-conscious habits.
              </p>
              <Link className="butn" to="/about">
                Learn More <i class="bx bx-up-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </div>{" "}
        <br /> <br /> <br />
      </section>

      {/* solution and cards */}
      <section className="section4 mt-5">
        <div className="container">
          <p className="yellow-text">Solutions</p>
          <h1>
            Zero Waste isn’t just about buying more sustainable products. It is
            about buying less things in general.
          </h1>{" "}
          <br /> <br />
          <div className="row">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <Link to="/buy" style={{ textDecoration: "none" }}>
                <div
                  className="card"
                  style={{ height: "95%", width: "90%", padding: 15 }}
                >
                  <img src={card1} className="card-img-top" alt="Card 1" />
                  <p className="p-3  card-title text-center">
                    Buy/Sell pre-loved goods
                  </p>
                </div>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <Link to="/ridesharing" style={{ textDecoration: "none" }}>
                <div
                  className="card"
                  style={{ height: "95%", width: "90%", padding: 15 }}
                >
                  <img src={card2} className="card-img-top" alt="Card 2" />
                  <p className="p-3  card-title text-center">Share a ride</p>
                </div>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <Link to="/trade" style={{ textDecoration: "none" }}>
                <div
                  className="card"
                  style={{ height: "95%", width: "90%", padding: 15 }}
                >
                  <img src={card3} className="card-img-top" alt="Card 3" />
                  <p className="p-3  card-title text-center">Trade / Rent</p>
                </div>
              </Link>
            </div>
          </div>{" "}
          <br /> <br />
        </div>
      </section>
      {/* newspaper cutout */}
      <section className="section5 ">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <img
                className="img-fluid news-img"
                style={{ boxShadow: "none", borderRadius: 15 }}
                src={group4}
                alt="group"
              />
            </div>
            <div className="col-md-6 mission ">
              <p className="yellow-text">News</p>
              <h1 id="about-us">
                We are socially obliged to act and{" "}
                <span
                  style={{
                    backgroundColor: "#DCF8AB",
                    borderRadius: 40,
                    padding: "0px 12px",
                  }}
                >
                  act now to protect
                </span>{" "}
                our planet
              </h1>{" "}
              <br />
              <p className="para-text" style={{ width: "100%" }}>
                The conversation around conserving the environment and
                protecting and preserving natural resources is gaining momentum
                globally. With the complete misuse and depletion of the earth’s
                resources, it’s time that our lifestyles become such that we
                incorporate sustainable habits in the smallest aspects of our
                life to balance out the negative impact on environment and
                gradually create a positive change in the long run. Read our
                latest news collection to get insights on whats happening around
                and stay updated.
              </p>
              <Link className="butn" to="/about">
                Read More <i className="bx bx-up-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </div>{" "}
        <br /> <br /> <br />
      </section>
    </div> // closing div tag
  );
}

export default Home;
