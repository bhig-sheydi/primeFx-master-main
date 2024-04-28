import React from "react";
import About from "./About";
import HowItWorks from "./HowItWorks";
import { Link } from "react-router-dom";
import "./home.css";
import Backgroundimage from "../assets/bangkok-city.jpg";
import Hero4img from "../assets/box1.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="Home">
      <div className="Hero">
        <img src={Backgroundimage}></img>
        <div className="Hero-Container">
          <div className="Hero-Content">
            <h1>
              Become part of the world's <br></br>
              foremost authority in financial <br></br>
              investments.
            </h1>

            <div className="Log-Sign-Con">
              <button className="Sign">
                <h3>
                  <Link to="./Login.jsx">
                    LOG IN ACCOUNT
                  </Link>
                </h3>
              </button>

              <button className="Sign">
                <h3>
                  <Link className="Log-Link" to="/signup">
                    REGISTER ACCOUNT
                  </Link>
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HERO TWO //////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="Hero2">
        <a
          href="https://www.tradingview.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Track all Market in Trading View</h4>
        </a>
      </div>

      {/* HERO THREE //////////////////////////////////////////////////////////////////////////////////// */}
      <div className="Hero3"></div>

      {/* HERO FOUR /////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="Hero4">
        <div className="Hero4img">
          <img src={Hero4img}></img>
        </div>

        <div className="Hero4-content">
          <div className="R">
            <h1>
              Reliable Finance Management <br></br>Solution for Everyone
            </h1>
          </div>

          <div className="D">
            <h4>
              Discover our reliable finance management solution designed to
              empower individuals of all backgrounds. With user-friendly tools
              and expert guidance, taking control of your finances has never
              been easier. Whether you're a seasoned investor or just starting
              out, our solution ensures financial success for everyone.
            </h4>
          </div>

          <button className="G">GET STARTED</button>
        </div>
      </div>

      <section id="about">
        <About />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
    </div>
  );
};
