import logo from "../assets/logo.png";
import "../App.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const [menuOpen, setMenuOpen] = useState(false);
  // subscribing to the store using the selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-white shadow-lg h-25">
      <div className="flex items-center gap-2 md:gap-4 flogo-container">
        <img className="object-contain w-10 h-10 md:h-14 md:w-14" src={logo} alt="logo" />
        <h2 className="font-sans text-lg font-extrabold text-orange-500 cursor-pointer md:text-xl whitespace-nowrap">Swiggy</h2>

      </div>
      {/* Hamburger Icon for mobile */}
      <button
        className="flex flex-col items-center justify-center w-10 h-10 cursor-pointer md:hidden focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-7 bg-gray-800 rounded transition-all duration-300 mb-1 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-7 bg-gray-800 rounded transition-all duration-300 mb-1 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-7 bg-gray-800 rounded transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* Nav Items */}
      <nav
        className={
          menuOpen
            ? "flex flex-col absolute top-20 right-4 bg-white shadow-lg rounded-lg p-4 gap-2 md:static md:flex-row md:items-center md:bg-transparent md:shadow-none md:p-0 md:gap-0"
            : "hidden md:flex md:flex-row md:items-center"
        }
      >
        <ul className="flex flex-col gap-2 md:flex-row md:p-4 md:m-4 md:gap-0">
          <li className="px-4 py-2 md:py-0 hover:text-orange-500 ">
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="px-4 py-2 md:py-0 hover:text-orange-500">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4 py-2 md:py-0 hover:text-orange-500">
            <Link to="/about"> About </Link>
          </li>
          <li className="px-4 py-2 md:py-0 hover:text-orange-500">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="px-4 py-2 text-xl font-bold md:py-0 hover:text-orange-500">
            <Link to="/cart"> <FaCartArrowDown /> ({cartItems.length}items) </Link>
          </li>
          <li className="px-4 py-2 md:py-0">
            <button
              className="px-4 py-2 transition bg-orange-100 rounded cursor-pointer hover:text-orange-500 login-logout-button hover:bg-orange-200 active:scale-95"
              onClick={() => {
                loginBtn === "Login"
                  ? setloginBtn("Logout")
                  : setloginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
