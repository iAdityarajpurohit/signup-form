import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Home = ({ logo, logo1, logo2, logo3 }) => {
  return (
    <>
      <div className="main-container">
        <div className="image">
          <img src={logo} alt="My Image" />
        </div>
        <div className="option-page">
          <Link to="/">signIn</Link>
          <Link to="/">LogIn</Link>
        </div>

        <div className="input-container">
          <input className="input" type="text" placeholder="Email Address" />
          <input className="input" type="text" placeholder="Password" />

          <button className="btn">LOGIN</button>
        </div>
        <Link className="forget-link" to="/">
          Forgot Password
        </Link>

        <p className="text">or login with</p>
        <div className="img">
          <img className="logo-img" src={logo1} alt="My Image" />
          <img className="logo-img" src={logo2} alt="My Image" />
          <img className="logo-img" src={logo3} alt="My Image" />
        </div>

      </div>
    </>
  );
};
export default Home;
