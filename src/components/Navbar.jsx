import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ mode }) => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // 🔑 Two separate resumes
  const devResume =
    "https://drive.google.com/file/d/1_MFnkE1-61OP3Sy8hc4lBbOrSjOELNdp/view?usp=sharing";
  const researchResume =
    "https://drive.google.com/file/d/1FCT1-Ckr-2PNwrAipYSvROkYp5ZMyOdY/view?usp=sharing";

  const resumeLink =
    mode === "developer" ? devResume : mode === "researcher" ? researchResume : "#";

  // Hide navbar completely in default mode
  if (mode === "default") return null;

  // Base menu
  let menuItems = ["Home", "About", "Skills", "Projects", "Research", "Contact"];

  // Restrict items depending on mode
  if (mode === "developer") {
    menuItems = menuItems.filter((item) => item !== "Research");
  } else if (mode === "researcher") {
    menuItems = menuItems.filter((item) => item !== "Projects");
  }

  return (
    <nav className="fixed w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-md p-4 z-10">
      <div className="mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <RouterLink to="/" className="text-2xl font-bold">
          Rajesh Chowdhury
        </RouterLink>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
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
          {menuItems.map((item) => (
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
                <RouterLink
                  to={`/#${item.toLowerCase()}`}
                  onClick={() => setNav(false)}
                >
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

Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Navbar;
