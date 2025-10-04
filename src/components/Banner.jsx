import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJsSquare,
  FaPython,
  FaBook
} from "react-icons/fa";
import {
  SiGooglescholar,
  SiIeee,
  SiKaggle,
  SiResearchgate,
  SiOrcid,
  SiTensorflow
} from "react-icons/si";
import profileImg from "../assets/profile.jpg";
import PropTypes from "prop-types";
import researchImg from "../assets/Rajesh Chowdhury.jpg";

const Banner = ({ mode, setMode, setShowContent }) => {
  const devResume =
    "https://drive.google.com/file/d/1_MFnkE1-61OP3Sy8hc4lBbOrSjOELNdp/view?usp=sharing";
  const researchResume =
    "https://drive.google.com/file/d/1FCT1-Ckr-2PNwrAipYSvROkYp5ZMyOdY/view?usp=sharing";

  const resumeLink =
    mode === "developer" ? devResume : mode === "researcher" ? researchResume : "#";

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
      className="relative min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4 overflow-hidden"
    >
      {/* Floating Icons */}
      {mode === "developer" && (
        <>
          <motion.div
            className="absolute top-16 left-10 text-red-500 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <FaHtml5 />
          </motion.div>
          <motion.div
            className="absolute top-32 right-16 text-blue-500 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <FaCss3Alt />
          </motion.div>
          <motion.div
            className="absolute bottom-20 left-14 text-yellow-500 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <FaJsSquare />
          </motion.div>
          <motion.div
            className="absolute bottom-32 right-20 text-cyan-400 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <FaReact />
          </motion.div>
          <motion.div
            className="absolute top-52 left-1/2 text-green-500 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <FaNodeJs />
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-1/3 text-purple-500 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <FaDatabase />
          </motion.div>
        </>
      )}

      {mode === "researcher" && (
        <>
          <motion.div
            className="absolute top-16 left-10 text-blue-400 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <SiGooglescholar />
          </motion.div>
          <motion.div
            className="absolute top-32 right-16 text-indigo-400 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <SiIeee />
          </motion.div>
          <motion.div
            className="absolute bottom-20 left-14 text-sky-400 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <SiKaggle />
          </motion.div>
          <motion.div
            className="absolute bottom-32 right-20 text-green-400 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <SiResearchgate />
          </motion.div>
          <motion.div
            className="absolute top-52 left-1/2 text-yellow-400 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <FaDatabase />
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 text-green-500 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <FaPython />
          </motion.div>
          <motion.div
            className="absolute top-10 right-1/4 text-orange-400 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <SiOrcid />
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-1/3 text-pink-400 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <SiTensorflow />
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-1/2 text-red-400 text-6xl opacity-30"
            variants={floatingVariants}
            animate="animate"
          >
            <FaBook />
          </motion.div>
        </>
      )}

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-5 md:px-10">
        {/* Left Content */}
        <motion.div
          className="text-white text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Banner heading changes based on mode */}
          {mode === "default" && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold mt-20 mb-4">
                👋 Welcome to My Portfolio
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Choose how you want to explore my world 🌍
              </h2>
            </>
          )}

          {mode === "developer" && (
            <>
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
                Passionate about creating dynamic, responsive, and visually
                appealing web applications, I specialize in both front-end and
                back-end development. My focus is on delivering seamless user
                experiences, clean code, and innovative solutions.
              </p>
            </>
          )}

          {mode === "researcher" && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold mt-20 mb-4">
                🔬 Research Mode Activated
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                Exploring <span className="text-purple-400">AI & ML</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
                <Typewriter
                  words={[
                    "AI & ML Researcher",
                    "Drone Detection & Classification",
                    "Predictive Analytics",
                    "Transforming Noisy Data into Insights",
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
                As a researcher, I explore AI, ML, and computer vision to solve
                real-world problems like drone detection and predictive
                analytics. My work focuses on adapting technology to noisy
                environments and ensuring practical applications through
                rigorous experimentation.
              </p>
            </>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {mode === "developer" && (
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 text-sm md:text-base"
              >
                See my Projects 🚀
              </a>
            )}

            {mode === "researcher" && (
              <a
                href="#research"
                className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 text-sm md:text-base"
              >
                See my Research 🔬
              </a>
            )}

            {mode !== "default" && (
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 text-sm md:text-base"
              >
                Download Resume 📄
              </a>
            )}
          </div>

          {/* Mode Toggle */}
          <div>
            <div className="flex justify-center gap-6 mb-10">
              {mode === "default" && (
                <>
                  <button
                    onClick={() => {
                      setMode("developer");
                      setShowContent(true);
                    }}
                    className={`relative px-6 py-3 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 ${mode === "developer"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105"
                      }`}
                  >
                    👨‍💻 Web Developer
                  </button>

                  <button
                    onClick={() => {
                      setMode("researcher");
                      setShowContent(true);
                    }}
                    className={`relative px-6 py-3 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 ${mode === "researcher"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105"
                      }`}
                  >
                    🔬 Researcher
                  </button>
                </>
              )}
            </div>

            {mode !== "default" && (
              <div className="mb-10 mx-28">
                <button
                  onClick={() => {
                    setMode("default");
                    setShowContent(false); // 👈 go back home
                  }}
                  className="px-6 py-3 rounded-xl text-base font-medium bg-gray-700 text-gray-300 hover:bg-gray-600 transition-all"
                >
                  ⬅️ Back to Home
                </button>
              </div>
            )}
          </div>

          {/* Social Media Links */}
          {mode !== "default" && (
            <div className="flex justify-center md:justify-start gap-4 mx-16">
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
          )}
        </motion.div>

        {/* Right Content */}
        {mode !== "default" && (
          <motion.div
            className={`relative mb-20 shadow-2xl transition-all duration-700
      ${mode === "researcher"
                ? "w-[260px] h-[320px] rounded-2xl border-4 border-blue-500 bg-white/10 backdrop-blur-md"
                : "w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-green-400"
              }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Glow effect */}
            <div
              className={`absolute inset-0 rounded-2xl blur-2xl animate-pulse
        ${mode === "researcher" ? "bg-blue-400/40" : "bg-green-400/50 rounded-full"}
      `}
            ></div>

            {/* Image */}
            <img
              src={mode === "researcher" ? researchImg : profileImg}
              alt="Rajesh Chowdhury"
              className={`w-full h-full relative z-10 transition-all duration-500
        ${mode === "researcher" ? "object-cover rounded-2xl" : "object-cover rounded-full"}
      `}
            />
          </motion.div>
        )}

      </div>
    </section>
  );
};

Banner.propTypes = {
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
  setShowContent: PropTypes.func.isRequired,
};

export default Banner;
