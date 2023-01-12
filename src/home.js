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
        <div> <p className="myPage">Welcome to my login Page !</p></div>
        <div className="option-page">
          <Link to="/" className="signup">Signup</Link>
          <Link to="/" className="login">Login</Link>
        </div>

        <div className="input-container">
          <input className="input" type="e-mail" placeholder="Email Address" />
          <input className="input" type="password" placeholder="Password" />

          <button className="btn">LOGIN</button>
        </div>
        <div>
        <Link className="forget-link" to="/">
          Forgot Password?
        </Link>
        </div>

        <p className="text">or login with</p>
        <div className="img-container">
        <div className="img">
        <a href="https://www.google.com/" ><img className="logo-img" src={logo1} alt="My Image" /></a>
          <a href="https://www.facebook.com/" ><img className="logo-img" src={logo2} alt="My Image" /></a>
          <a href="https://www.twitter.com/" ><img className="logo-img" src={logo3} alt="My Image" /></a>
        </div>
        </div>

        <div className="btm-container">
        <div className="bottom">
            <h6>Don't have an account ?<Link className="newLink" to="/">Create new Now !</Link></h6>
            <h6>By Signing Up, You agree with our <Link className="newLink" to="/">Terms and Conditions</Link></h6>
        </div>
        </div>

      </div>
    </>
  );
};
export default Home;
