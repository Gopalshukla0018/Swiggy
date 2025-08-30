// import logo from "../assets/logo.png";
// import "../App.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const [loginBtn, setloginBtn] = useState("Login");
//   const onlineStatus = useOnlineStatus();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const cartItems = useSelector((store) => store.cart.items);

//   return (
//     <header className="relative sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-white shadow-lg h-25">
//       {/* Left Side: Logo */}
//       <div className="flex items-center gap-2 md:gap-4 flogo-container">
//         <img
//           className="object-contain w-10 h-10 md:h-14 md:w-14"
//           src={logo}
//           alt="logo"
//         />
//         <h2 className="font-sans text-lg font-extrabold text-orange-500 cursor-pointer md:text-xl whitespace-nowrap">
//           Swiggy
//         </h2>
//       </div>

//       {/* Right Side Container for Nav, Cart, and Hamburger */}
//       <div className="flex items-center gap-4 md:gap-6">
//         {/* Nav Items */}
//         <nav
//           className={
//             menuOpen
//               ? "flex flex-col absolute top-20 right-4 bg-white shadow-lg rounded-lg p-4 gap-2"
//               : "hidden md:flex md:flex-row md:items-center"
//           }
//         >
//           <ul className="flex flex-col gap-2 font-medium md:flex-row md:items-center md:gap-6">
//             <li className="hover:text-orange-500">
//               Online Status: {onlineStatus ? "✅" : "❌"}
//             </li>
//             <li className="hover:text-orange-500">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="hover:text-orange-500">
//               <Link to="/about">About</Link>
//             </li>
//             <li className="hover:text-orange-500">
//               <Link to="/contact">Contact Us</Link>
//             </li>
//             <li>
//               <button
//                 className="px-4 py-2 transition bg-orange-100 rounded cursor-pointer hover:text-orange-500 login-logout-button hover:bg-orange-200 active:scale-95"
//                 onClick={() => {
//                   loginBtn === "Login"
//                     ? setloginBtn("Logout")
//                     : setloginBtn("Login");
//                 }}
//               >
//                 {loginBtn}
//               </button>
//             </li>
//           </ul>
//         </nav>

//         {/* ==================================================== */}
//         {/* == NEW: Cart Icon with Red Notification Badge == */}
//         <Link to="/cart" className="relative">
//           <span className="text-3xl">🛒</span>
//           {cartItems.length > 0 && (
//             <span className="absolute top-[-5px] right-[-10px] flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
//               {cartItems.length}
//             </span>
//           )}
//         </Link>
//         {/* ==================================================== */}


//         {/* Hamburger Icon (Visible on mobile only) */}
//         <button
//           className="flex flex-col items-center justify-center w-8 h-8 cursor-pointer md:hidden focus:outline-none"
//           onClick={() => setMenuOpen((prev) => !prev)}
//           aria-label="Toggle menu"
//         >
//           <span
//             className={`block h-1 w-7 bg-gray-800 rounded transition-all duration-300 mb-1 ${
//               menuOpen ? "rotate-45 translate-y-2" : ""
//             }`}
//           ></span>
//           <span
//             className={`block h-1 w-7 bg-gray-800 rounded transition-all duration-300 mb-1 ${
//               menuOpen ? "opacity-0" : ""
//             }`}
//           ></span>
//           <span
//             className={`block h-1 w-7 bg-gray-800 rounded transition-all duration-300 ${
//               menuOpen ? "-rotate-45 -translate-y-2" : ""
//             }`}
//           ></span>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;



import logo from "../assets/logo.png";
import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  const [cartCount, setCartCount] = useState(cartItems.length);
  useEffect(() => {
    if (cartItems.length !== cartCount) {
      setCartCount(cartItems.length);
    }
  }, [cartItems]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white shadow-md "
    >
      {/* Left: Logo */}
      <Link to="/" className="flex items-center gap-2 md:gap-3">
        <motion.img
          initial={{ rotate: -20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="object-contain w-10 h-10 md:h-12 md:w-12"
          src={logo}
          alt="logo"
        />
        <h2 className="font-sans text-lg font-extrabold text-orange-500 md:text-xl">
          Swiggy
        </h2>
      </Link>

      {/* Right Side */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 font-medium">
            <li>Online: {onlineStatus ? "✅" : "❌"}</li>
            {["Home", "About", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="transition hover:text-orange-500"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
            <li>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="px-4 py-2 text-white transition bg-orange-500 rounded-lg hover:bg-orange-600"
                onClick={() =>
                  setloginBtn(loginBtn === "Login" ? "Logout" : "Login")
                }
              >
                {loginBtn}
              </motion.button>
            </li>
          </ul>
        </nav>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <motion.span
            key={cartItems.length}
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-3xl"
          >
            🛒
          </motion.span>
          {cartItems.length > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-[-6px] right-[-10px] flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white"
            >
              {cartItems.length}
            </motion.span>
          )}
        </Link>

        {/* Hamburger */}
        <button
          className="flex flex-col items-center justify-center w-8 h-8 cursor-pointer md:hidden focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-1 w-7 bg-gray-800 rounded transition-all duration-500 mb-1 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-7 bg-gray-800 rounded transition-all duration-500 mb-1 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-7 bg-gray-800 rounded transition-all duration-500 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute z-40 p-4 bg-white rounded-lg shadow-lg top-16 right-4 md:hidden"
          >
            <ul className="flex flex-col gap-3 font-medium">
              <li>Online: {onlineStatus ? "✅" : "❌"}</li>
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <button
                  className="px-4 py-2 text-white transition bg-orange-500 rounded-lg hover:bg-orange-600"
                  onClick={() => {
                    setloginBtn(loginBtn === "Login" ? "Logout" : "Login");
                    setMenuOpen(false);
                  }}
                >
                  {loginBtn}
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
