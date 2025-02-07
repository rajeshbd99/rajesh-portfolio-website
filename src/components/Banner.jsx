import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaJsSquare } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const Banner = () => {
  const resumeLink =
    "https://drive.google.com/file/d/19g5xAH9Bi8kC3IsZxNOrl2zxD3ODPnY3/view?usp=sharing";

  // Floating animation variant
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative h-full md:h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4 overflow-hidden"
    >
      {/* Floating Icons */}
      <motion.div className="absolute top-16 left-10 text-red-500 text-6xl opacity-30" variants={floatingVariants} animate="animate">
        <FaHtml5 />
      </motion.div>
      <motion.div className="absolute top-32 right-16 text-blue-500 text-6xl opacity-30" variants={floatingVariants} animate="animate">
        <FaCss3Alt />
      </motion.div>
      <motion.div className="absolute bottom-20 left-14 text-yellow-500 text-6xl opacity-30" variants={floatingVariants} animate="animate">
        <FaJsSquare />
      </motion.div>
      <motion.div className="absolute bottom-32 right-20 text-cyan-400 text-6xl opacity-30" variants={floatingVariants} animate="animate">
        <FaReact />
      </motion.div>
      <motion.div className="absolute top-52 left-1/2 text-green-500 text-6xl opacity-30" variants={floatingVariants} animate="animate">
        <FaNodeJs />
      </motion.div>
      <motion.div className="absolute bottom-10 right-1/3 text-purple-500 text-6xl opacity-30" variants={floatingVariants} animate="animate">
        <FaDatabase />
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-5 md:px-10">
        {/* Left Content */}
        <motion.div
          className="text-white text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mt-20 mb-4">
            Hello <span className="text-green-400">There!</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            I am <span className="text-green-400">Rajesh Chowdhury</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
            <Typewriter
              words={[
                "A Full Stack Web Developer",
                "A Problem Solver",
                "Exploring the Tech Universe",
                "Let's build something amazing together!",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <p className="text-base font-medium text-gray-500 mt-2 md:text-lg mb-6 leading-relaxed text-justify w-full md:w-3xl">
            Passionate about creating dynamic, responsive, and visually appealing web applications, I specialize in both front-end and back-end development. My focus is on delivering seamless user experiences, clean code, and innovative solutions — let&apos;s build something amazing together!
          </p>

          {/* Buttons for Projects and Resume */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 text-sm md:text-base"
            >
              See my Projects 🚀
            </a>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 text-sm md:text-base"
            >
              Download Resume 📄
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/rajeshbd99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-full text-xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/rajesh-chowdhury-361360224"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-700 hover:bg-blue-600 px-4 py-3 rounded-full text-xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/Rajeshbd3394"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-500 hover:bg-blue-400 px-4 py-3 rounded-full text-xl transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/rajesh2441139"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-3 rounded-full text-xl transition"
            >
              <FaFacebook />
            </a>
          </div>
        </motion.div>

        {/* Right Content (Glowing Profile Image) */}
        <motion.div
          className="relative w-64 h-64 mb-20 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-green-400 shadow-lg overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-green-400 opacity-50 blur-xl rounded-full animate-spin"></div>
          <img
            src={profileImg}
            alt="Rajesh Chowdhury"
            className="w-full h-full object-cover relative z-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
