import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const resumeLink = "https://drive.google.com/file/d/19g5xAH9Bi8kC3IsZxNOrl2zxD3ODPnY3/view?usp=sharing";

  return (
    <nav className="fixed w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-md p-4 z-10">
      <div className=" mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <RouterLink to="/" className="text-2xl font-bold">Rajesh Chowdhury</RouterLink>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="cursor-pointer hover:text-blue-500">
              {isHomePage ? (
                <ScrollLink to={item.toLowerCase()} smooth duration={500}>
                  {item}
                </ScrollLink>
              ) : (
                <RouterLink to={`/#${item.toLowerCase()}`}>{item}</RouterLink>
              )}
            </li>
          ))}
          {/* Resume Button */}
          <li>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-gray-900 text-center space-y-6 py-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="cursor-pointer hover:text-blue-500">
              {isHomePage ? (
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  onClick={() => setNav(false)}
                >
                  {item}
                </ScrollLink>
              ) : (
                <RouterLink to={`/#${item.toLowerCase()}`} onClick={() => setNav(false)}>
                  {item}
                </RouterLink>
              )}
            </li>
          ))}
          {/* Resume Button for Mobile */}
          <li>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => setNav(false)}
            >
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
