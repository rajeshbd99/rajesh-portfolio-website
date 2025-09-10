import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaBriefcase } from "react-icons/fa";
import { FaGoogleScholar, FaResearchgate, FaOrcid, FaDatabase } from "react-icons/fa6";
import { SiIeee, SiLeetcode } from "react-icons/si";
import PropTypes from "prop-types";

// ✅ Accept mode as a prop
const AboutMe = ({ mode }) => {
    return (
        <section
            id="about"
            className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-5"
        >
            <div className="max-w-7xl mx-auto mt-12 mb-12">

                {/* Developer About Me */}
                {mode === "developer" && (
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-green-400 mb-6">About Me</h2>
                        <p className=" text-base font-medium text-gray-500 mt-2 leading-relaxed max-w-3xl mx-auto text-justify">
                            Hi, I am <span className="font-semibold text-white">Rajesh Chowdhury</span>,
                            a Computer Science Engineer and a passionate Full Stack Developer from Bangladesh.
                            With a strong foundation in coding and an eye for detail, I specialize in creating
                            efficient, scalable, and user-friendly web applications.
                        </p>
                    </motion.div>
                )}

                {/* Researcher About Me */}
                {mode === "researcher" && (
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-blue-400 mb-6">About Me</h2>
                        <p className="text-base font-medium text-gray-400 mt-2 leading-relaxed max-w-3xl mx-auto text-justify">
                            Hi, I am <span className="font-semibold text-white">Rajesh Chowdhury</span>,
                            a Computer Science Engineer and passionate Researcher exploring the frontiers of
                            <span className="text-blue-300"> Artificial Intelligence, Machine Learning, and Data Science</span>.
                            My research focuses on solving real-world problems through innovative algorithms,
                            applied experimentation, and interdisciplinary collaboration. I am dedicated to
                            publishing impactful work, driving technological advancement, and contributing to
                            the global research community.
                        </p>

                        {/* 🔹 Research Profile Section */}
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                            <a
                                href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=ncXmxkUAAAAJ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 shadow-lg transition flex items-center gap-4"
                            >
                                <FaGoogleScholar className="text-blue-400 text-3xl" />
                                <div>
                                    <h3 className="text-lg font-semibold">Google Scholar</h3>
                                    <p className="text-gray-400 text-sm">View my citations & publications</p>
                                </div>
                            </a>

                            <a
                                href="https://ieeexplore.ieee.org/author/972552533384256"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 shadow-lg transition flex items-center gap-4"
                            >
                                <SiIeee className="text-blue-300 text-3xl" />
                                <div>
                                    <h3 className="text-lg font-semibold">IEEE Profile</h3>
                                    <p className="text-gray-400 text-sm">Explore my IEEE contributions</p>
                                </div>
                            </a>

                            <a
                                href="https://www.researchgate.net/profile/Rajesh-Chowdhury?ev=hdr_xprf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 shadow-lg transition flex items-center gap-4"
                            >
                                <FaResearchgate className="text-green-400 text-3xl" />
                                <div>
                                    <h3 className="text-lg font-semibold">ResearchGate</h3>
                                    <p className="text-gray-400 text-sm">Connect with my research community</p>
                                </div>
                            </a>

                            <a
                                href="https://orcid.org/0009-0001-3871-4477"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 shadow-lg transition flex items-center gap-4"
                            >
                                <FaOrcid className="text-green-500 text-3xl" />
                                <div>
                                    <h3 className="text-lg font-semibold">ORCID</h3>
                                    <p className="text-gray-400 text-sm">My global research identity</p>
                                </div>
                            </a>

                            <a
                                href="https://www.kaggle.com/datasets/sudipchakrabarty/kiit-mita"
                                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 shadow-lg transition flex items-center gap-4"
                            >
                                <FaDatabase className="text-yellow-400 text-3xl" />
                                <div>
                                    <h3 className="text-lg font-semibold">Kaggle Dataset - Kiit-MiTA</h3>
                                    <p className="text-gray-400 text-sm">Explore my custom research dataset</p>
                                </div>
                            </a>

                            <a
                                href="https://leetcode.com/u/Rajeshbd2001/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 shadow-lg transition flex items-center gap-4"
                            >
                                <SiLeetcode className="text-green-400 text-3xl" />
                                <div>
                                    <h3 className="text-lg font-semibold">LeetCode Profile</h3>
                                    <p className="text-gray-400 text-sm">Check out my problem-solving journey</p>
                                </div>
                            </a>

                        </div>
                    </motion.div>
                )}

                {/* Education Section (common for both modes) */}
                <motion.div
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
                        <FaGraduationCap className="text-green-400 text-4xl mb-4" />
                        <h3 className="text-xl font-bold mb-2">Kalinga Institute of Industrial Technology</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Bachelor of Technology in Computer Science and Engineering<br />
                            <span className="text-gray-400">2021 - 2025</span><br />    
                            CGPA: 7.55/10.00
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
                        <FaGraduationCap className="text-green-400 text-4xl mb-4" />
                        <h3 className="text-xl font-bold mb-2">Chittagong Government Model School and College</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Higher Secondary School Certificate (Science)<br />
                            <span className="text-gray-400">2017 - 2020</span><br />
                            GPA: 5.00/5.00
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
                        <FaGraduationCap className="text-green-400 text-4xl mb-4" />
                        <h3 className="text-xl font-bold mb-2">Chittagong Government High School</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Secondary School Certificate (Science)<br />
                            <span className="text-gray-400">2015 - 2017</span><br />
                            GPA: 4.86/5.00
                        </p>
                    </div>
                </motion.div>

                {/* Achievements and Internship (same for both modes) */}
                <motion.div
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
                        <FaAward className="text-yellow-400 text-4xl mb-4" />
                        <h3 className="text-xl font-bold mb-2">Achievements</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            - Meta Hacker Cup 2022 (Global Rank 6,208)<br />
                            - AWS Academy Graduate<br />
                            - Problem Solving Certificate (Intermediate, HackerRank)<br />
                            - Programming Hero Web Development Course (Level 1)
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

AboutMe.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default AboutMe;
