import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiReact, SiMongodb, SiTailwindcss, SiHtml5, SiCss3, SiCplusplus, SiPython, SiMysql, SiFirebase, SiVercel, SiNetlify } from "react-icons/si";

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

const SkillsTimeline = () => {
    return (
        <section id="skills" className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-6">
            <div className="max-w-6xl mx-auto mt-10 mb-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold text-green-400 mb-4">My Skills</h2>
                    <p className="text-base font-medium text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        I specialize in multiple programming languages, frontend and backend technologies, databases, and tools.
                    </p>
                </motion.div>

                <VerticalTimeline>
                    {skillsData.map((category, index) => (
                        <VerticalTimelineElement
                            key={index}
                            contentStyle={{ background: "#1f2937", color: "#fff" }}
                            contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
                            iconStyle={{ background: "#22c55e", color: "#fff" }}
                            icon={category.icon}
                        >
                            <h3 className="text-2xl font-bold text-green-400 mb-4 text-center">{category.category}</h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="group">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-3xl text-green-400">{skill.icon}</span>
                                                <span className="text-lg font-medium text-white">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-300">{skill.level}%</span>
                                        </div>
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
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default SkillsTimeline;
