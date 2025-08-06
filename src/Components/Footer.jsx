import { Link } from "react-router-dom";
import logo from "../assets/5E94E084-932C-4475-83D1-3E1280CB3255.png"

 function Footer() {
  return (
   <div
    className="flex flex-col w-full gap-4 p-12 pb-24 mt-6 overflow-hidden text-gray-700 bg-gray-100 md:flex-row text-medium justify-evenly font-montserrat"
   >
    {/* item1 */}
    <div className="flex flex-col items-start gap-2 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
     <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900 xs:text-lg xs:gap-1">
      <Link to="/">
       <img
        src={logo}
        className="w-8 xs:w-6"
        style={{ fill: "green" }}
        alt=""
       />{" "}
      </Link>
      <span className="text-orange-500 hover:text-orange-400">Swiggy</span>
     </h3>
     <span className="text-sm text-gray-500"> &copy; © 2025 Gopal Shukla</span>
     <span className="text-sm text-gray-500"> Inspired by Swiggy | UI Clone Project</span>
    </div>

    {/* item2 */}
    <div className="flex flex-col items-start gap-2 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
     <h3 className="text-lg font-bold text-gray-900 xs:text-sm">Company</h3>
     <span className="text-sm text-gray-500 hover:text-orange-400">About</span>
     <span className="text-sm text-gray-500 hover:text-orange-400">Careers</span>
     <span className="text-sm text-gray-500 hover:text-orange-400">Team</span>
     <span className="text-sm text-gray-500 hover:text-orange-400">Swiggy One</span>
     <span className="text-sm text-gray-500 hover:text-orange-400">Swiggy Instamart</span>
     <span className="text-sm text-gray-500 hover:text-orange-400">Swiggy Genie</span>
    </div>

    {/* item3 */}
    <div className="flex flex-col items-start gap-8 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
     <div className="flex flex-col gap-2 mb-10 xs:gap-1 whitespace-nowrap">
      <h3 className="text-lg font-bold text-gray-900 xs:text-sm">
       Contact us
      </h3>
      <span className="text-sm text-gray-500 hover:text-orange-400">Help & Support</span>
      <span className="text-sm text-gray-500 hover:text-orange-400">Partner with us</span>
      <span className="text-sm text-gray-500 hover:text-orange-400">Ride with us</span>
     </div>
     <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
      <h3 className="text-lg font-bold text-gray-900 xs:text-sm"> Legal</h3>
      <span className="text-sm text-gray-500 hover:text-orange-400">Terms & Conditions</span>
      <span className="text-sm text-gray-500 hover:text-orange-400">Cookie Policy</span>
      <span className="text-sm text-gray-500 hover:text-orange-400">Privacy Policy</span>
     </div>
    </div>

    {/* item4 */}
    <div className="flex flex-col items-start gap-2 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
     <h3 className="text-lg font-bold text-gray-900 xs:text-sm">
      We deliver to:
     </h3>
     <span className="text-sm text-gray-500 hover:text-orange-400">Bangalore</span>
     <span className="text-sm text-gray-500 hover:text-orange-400">Gurgaon</span>
     <span className="text-sm text-gray-500 hover:text-orange-400">Hyderabad</span>
     <span className="text-sm text-gray-500 hover:text-orange-400">Delhi</span>
     <span className="text-sm text-gray-500 hover:text-orange-400">Mumbai</span>
     <span className="text-sm text-gray-500 hover:text-orange-400">Pune</span>
    </div>
    {/* item5 */}
    <div className="flex flex-col items-start gap-2 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
     <h3 className="text-lg font-bold text-gray-900 xs:text-sm">
      Life at Swiggy
     </h3>
     <span className="text-sm text-gray-500 hover:text-orange-400">Explore with Swiggy</span>
     <span className="text-sm text-gray-500 hover:text-orange-400">Swiggy News</span>
     <span className="text-sm text-gray-500 hover:text-orange-400">Snackables</span>
    </div>

   </div>
  );
 }

 export default Footer;