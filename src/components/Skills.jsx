import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiReact, SiMongodb, SiTailwindcss, SiHtml5, SiCss3, SiCplusplus, SiPython, SiMysql, SiFirebase, SiVercel, SiNetlify } from "react-icons/si";

const Skills = () => {
    // Skills data with proficiency levels
    const skillsData = [
        {
            category: "Languages",
            icon: <FaCode />,
            skills: [
                { name: "C", icon: <SiCplusplus />, level: 85 },
                { name: "C++", icon: <SiCplusplus />, level: 90 },
                { name: "JavaScript", icon: <SiJavascript />, level: 95 },
                { name: "Python", icon: <SiPython />, level: 80 },
            ],
        },
        {
            category: "Frontend",
            icon: <SiReact />,
            skills: [
                { name: "HTML", icon: <SiHtml5 />, level: 95 },
                { name: "CSS", icon: <SiCss3 />, level: 90 },
                { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
                { name: "React", icon: <SiReact />, level: 92 },
            ],
        },
        {
            category: "Backend & Database",
            icon: <FaDatabase />,
            skills: [
                { name: "Node.js", icon: <FaNodeJs />, level: 80 },
                { name: "MongoDB", icon: <SiMongodb />, level: 85 },
                { name: "MySQL", icon: <SiMysql />, level: 75 },
                { name: "Firebase", icon: <SiFirebase />, level: 78 },
            ],
        },
        {
            category: "Other Technologies",
            icon: <FaTools />,
            skills: [
                { name: "Git", icon: <FaGitAlt />, level: 90 },
                { name: "GitHub", icon: <FaGithub />, level: 95 },
                { name: "Vercel", icon: <SiVercel />, level: 80 },
                { name: "Netlify", icon: <SiNetlify />, level: 78 },
            ],
        },
    ];

    return (
        <section id="skills" className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-6">
            <div className="max-w-7xl mx-auto mt-20">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold text-green-400 mb-4">My Skills</h2>
                    <p className="text-xl font-medium text-gray-500 mt-2 max-w-2xl mx-auto leading-relaxed">
                        I specialize in a variety of programming languages, frontend and backend technologies, databases, and tools.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            className="relative p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-lg transition-transform transform hover:scale-105 duration-300 border border-white/20"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                        >
                            {/* Category Title & Icon */}
                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-4xl shadow-lg shadow-green-500/50">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mt-4">{category.category}</h3>
                            </div>

                            {/* Skills List with Progress Bars */}
                            <ul className="mt-6 space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="group">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-3xl text-green-400">{skill.icon}</span>
                                                <span className="text-lg font-medium text-white">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-300">{skill.level}%</span>
                                        </div>
                                        {/* Progress Bar Animation */}
                                        <div className="w-full bg-gray-700 rounded-full h-2 mt-2 overflow-hidden">
                                            <motion.div
                                                className="bg-green-500 h-full"
                                                initial={{ width: "0%" }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                            ></motion.div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
