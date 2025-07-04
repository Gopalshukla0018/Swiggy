import logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg  sticky top-0 bg-white">
      <div className="logo-container">
        <img className="h-20 w-50" src={logo} alt="logo" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            {" "}
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about"> About </Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/cart"> Cart </Link>{" "}
          </li>
          <button
            className="login-logout-button"
            onClick={() => {
              loginBtn === "Login"
                ? setloginBtn("Logout")
                : setloginBtn("Login");
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
