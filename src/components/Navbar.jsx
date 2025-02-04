import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="fixed w-full bg-black text-white shadow-md p-4 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Rajesh Chowdhury</h1>
        <div className="md:hidden" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Skills", "Projects", "Contact", "Resume"].map((item) => (
            <li key={item} className="cursor-pointer hover:text-blue-500">
              <Link to={item.toLowerCase()} smooth duration={500}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
