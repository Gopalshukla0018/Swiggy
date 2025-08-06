import { Link } from "react-router-dom";
import logo from "../assets/5E94E084-932C-4475-83D1-3E1280CB3255.png";

// डेटा को व्यवस्थित रखना अभी भी एक अच्छा तरीका है
const footerSections = [
  {
    title: "Company",
    links: ["About", "Careers", "Team", "Swiggy One", "Swiggy Instamart", "Swiggy Genie"],
  },
  {
    title: "Contact us",
    links: ["Help & Support", "Partner with us", "Ride with us"],
  },
  {
    title: "Legal",
    links: ["Terms & Conditions", "Cookie Policy", "Privacy Policy"],
  },
  {
    title: "We deliver to:",
    links: ["Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune"],
  },
];

function Footer() {
 

  return (
    <footer className="px-8 py-12 text-gray-900 bg-gray-50 md:px-16 font-montserrat">
      <div className="container mx-auto">
        
       
        <div className="mb-10">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <img src={logo} className="w-8" alt="Swiggy Logo" />
            <span>Swiggy</span>
          </Link>
          <p className="mt-2 text-sm text-gray-400">&copy; 2025 Gopal Shukla</p>
        </div>

       
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 text-lg font-bold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-orange-500">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
}

export default Footer;