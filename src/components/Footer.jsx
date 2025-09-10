import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white py-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-1 border-b border-gray-700">
        
        {/* Center - Social Links */}
        <div className="flex-grow flex justify-center space-x-6 mb-4 md: mt-4">
          <a href="https://facebook.com/rajesh2441139" className="text-white hover:text-blue-500">
            <FaFacebookF size={20} />
          </a>
          <a href="https://instagram.com/rajeshchowdhury08" className="text-white hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com/in/rajesh-chowdhury-361360224" className="text-white hover:text-blue-700">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://twitter.com/Rajeshbd3394" className="text-white hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://github.com/rajeshbd99" className="text-white hover:text-gray-400">
            <FaGithub size={20} />
          </a>
        </div>

        {/* Right - Visitor Counter */}
        <div id="footer-counter" className="text-right" dangerouslySetInnerHTML={{ __html: document.getElementById("visitor-counter")?.innerHTML || "" }} /> </div>

      {/* Bottom - Copyright */}
      <div className="text-center mt-4 pb-4 text-sm text-gray-400">
        © 2025 Rajesh Chowdhury. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
