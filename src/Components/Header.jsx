import logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";  

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li> <Link to="/about">  About  </Link>
            </li>
          <li> <Link to="/contact">  Contact Us  </Link></li>
          <li> <Link to="/cart">  Cart  </Link> </li>
          <button
            className="login-logout-button"
            onClick={() => {
              loginBtn === "Login" ? setloginBtn("Logout") : setloginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
