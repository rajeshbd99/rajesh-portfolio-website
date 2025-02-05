import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const Banner = () => {
  const resumeLink =
    "https://drive.google.com/file/d/19g5xAH9Bi8kC3IsZxNOrl2zxD3ODPnY3/view?usp=sharing";

  return (
    <section
      id="home"
      className="h-full md:h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4"
    >
      <div className="max-w-7xl  mx-auto flex flex-col md:flex-row items-center gap-8 px-5 md:px-10">
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
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed text-justify w-full md:w-3xl">
            Passionate about creating dynamic, responsive, and visually appealing web applications, I specialize in both front-end and back-end development. My focus is on delivering seamless user experiences, clean code, and innovative solutions — lets build something amazing together!
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-64 h-64 mb-20 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-green-400 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profileImg}
            alt="Rajesh Chowdhury"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
