import logo from "../assets/logo.png";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="relative sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-white shadow-lg h-25">
      {/* Left Side: Logo */}
      <div className="flex items-center gap-2 md:gap-4 flogo-container">
        <img
          className="object-contain w-10 h-10 md:h-14 md:w-14"
          src={logo}
          alt="logo"
        />
        <h2 className="font-sans text-lg font-extrabold text-orange-500 cursor-pointer md:text-xl whitespace-nowrap">
          Swiggy
        </h2>
      </div>

      {/* Right Side Container for Nav, Cart, and Hamburger */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Nav Items (Hidden on mobile, visible on desktop) */}
        <nav
          className={
            menuOpen
              ? "flex flex-col absolute top-20 right-4 bg-white shadow-lg rounded-lg p-4 gap-2" // This is the mobile dropdown menu style
              : "hidden md:flex md:flex-row md:items-center" // Hidden on mobile, visible as a row on desktop
          }
        >
          <ul className="flex flex-col gap-2 font-medium md:flex-row md:items-center md:gap-6">
            <li className="hover:text-orange-500">
              Online Status: {onlineStatus ? "✅" : "❌"}
            </li>
            <li className="hover:text-orange-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
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

        {/* Cart Icon (Always Visible) */}
        <div className="text-xl font-bold hover:text-orange-500">
          <Link to="/cart" className="flex items-center gap-1">
            🛒
            <span className="text-base">({cartItems.length})</span>
          </Link>
        </div>

        {/* Hamburger Icon (Visible on mobile only) */}
        <button
          className="flex flex-col items-center justify-center w-8 h-8 cursor-pointer md:hidden focus:outline-none"
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
      </div>
    </header>
  );
};

export default Header;