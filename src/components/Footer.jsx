import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (

    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-col justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">© 2025 Rajesh Chowdhury. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 mt-4">
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
      </div>
    </footer>

  );
};

export default Footer;
