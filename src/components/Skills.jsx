import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaNodeJs,FaGitAlt,FaGithub } from "react-icons/fa";
import { SiJavascript, SiReact, SiMongodb, SiTailwindcss, SiHtml5, SiCss3, SiCplusplus, SiPython, SiMysql, SiFirebase,SiVercel,SiNetlify } from "react-icons/si";

const Skills = () => {
    // Skills data
    const skillsData = [
        {
            category: "Languages",
            icon: <FaCode />,
            skills: [
                { name: "C", icon: <SiCplusplus /> },
                { name: "C++", icon: <SiCplusplus /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "Python", icon: <SiPython /> },
            ],
        },
        {
            category: "Frontend",
            icon: <SiReact />,
            skills: [
                { name: "HTML", icon: <SiHtml5 /> },
                { name: "CSS", icon: <SiCss3 /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { name: "React", icon: <SiReact /> },
            ],
        },
        {
            category: "Backend & Database",
            icon: <FaDatabase />,
            skills: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "Firebase", icon: <SiFirebase /> },
            ],
        },
        {
            category: "Other Technologies",
            icon: <FaTools />,
            skills: [
                { name: "Git", icon: <FaGitAlt /> },
                {name : "GitHub", icon: <FaGithub />},
                { name: "Vercel", icon: <SiVercel /> },
                { name: "Netlify", icon: <SiNetlify /> },
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
                        I specialize in a variety of programming languages, frontend and backend technologies, databases, and design tools.
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

      {/* Skills List */}
      <ul className="grid grid-cols-2 gap-6 mt-6">
        {category.skills.map((skill, skillIndex) => (
          <li
            key={skillIndex}
            className="flex flex-col items-center text-center group transform hover:scale-110 transition-all duration-300"
          >
            <div className="text-3xl p-3 bg-gray-700 rounded-xl text-green-400 group-hover:text-green-500 transition shadow-md group-hover:shadow-green-400">
              {skill.icon}
            </div>
            <span className="mt-2 text-gray-300 text-sm group-hover:text-white transition">
              {skill.name}
            </span>
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
