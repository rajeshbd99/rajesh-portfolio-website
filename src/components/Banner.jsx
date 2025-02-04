import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Hi, I'm Rajesh Chowdhury 👋
      </motion.h1>
      <p className="text-xl mt-4">A Passionate Web Developer & Competitive Programmer</p>
      <div className="flex space-x-6 mt-6">
        <FaGithub size={30} />
        <FaLinkedin size={30} />
        <FaTwitter size={30} />
      </div>
    </section>
  );
};

export default Banner;
