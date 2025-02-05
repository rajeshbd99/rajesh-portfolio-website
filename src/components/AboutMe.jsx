import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaBriefcase } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-5"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-green-400 mb-6">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Hi, I am <span className="font-semibold text-white">Rajesh Chowdhury</span>, a Computer Science Engineer and a passionate Full Stack Developer from Bangladesh. With a strong foundation in coding and an eye for detail, I specialize in creating efficient, scalable, and user-friendly web applications.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
            <FaGraduationCap className="text-green-400 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="font-semibold">Kalinga Institute of Industrial Technology</span><br />
              Bachelor of Technology in Computer Science and Engineering<br />
              <span className="text-gray-400">2021 - 2025</span>
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
            <FaAward className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Achievements</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              - Meta Hacker Cup 2022 (Global Rank 6,208)<br />
              - AWS Academy Graduate<br />
              - Problem Solving Certificate (HackerRank)<br />
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
            <FaBriefcase className="text-blue-400 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Internship</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sales and Marketing Intern<br />
              <span className="font-semibold">HighRadius, India</span><br />
              May 2024 - June 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
