// src/components/Skills.jsx  (replace your current file with this)
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaFlask, FaAws, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript, SiReact, SiMongodb, SiTailwindcss, SiHtml5, SiCss3,
  SiCplusplus, SiPython, SiMysql, SiFirebase, SiVercel, SiNetlify,
  SiPytorch, SiTensorflow, SiScikitlearn, SiNumpy, SiPandas, SiOpencv,
  SiLatex, SiGithub, SiGooglecolab,
} from "react-icons/si";
import { BiBarChartAlt } from "react-icons/bi";
const webDevSkills = [
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
      { name: "Node.js", icon: <SiJavascript />, level: 80 },
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
      { name: "GitHub", icon: <SiGithub />, level: 95 },
      { name: "Vercel", icon: <SiVercel />, level: 80 },
      { name: "Netlify", icon: <SiNetlify />, level: 78 },
    ],
  },
];

const researchSkills = [
  {
    category: "Core ML / DL",
    icon: <FaFlask />,
    skills: [
      { name: "Python", icon: <SiPython />, level: 90 },
      { name: "PyTorch", icon: <SiPytorch />, level: 85 },
      { name: "TensorFlow", icon: <SiTensorflow />, level: 82 },
      { name: "Scikit-learn", icon: <SiScikitlearn />, level: 80 },
    ],
  },
  {
    category: "Computer Vision & NLP",
    icon: <FaCode />,
    skills: [
      { name: "CNNs & Object Detection", icon: <SiTensorflow />, level: 88 },
      { name: "YOLO Models", icon: <SiPytorch />, level: 85 },
      { name: "OpenCV", icon: <SiOpencv />, level: 80 },
      { name: "NLP / LLMs", icon: <SiPython />, level: 78 },
    ],
  },
  {
    category: "Data & Experimentation",
    icon: <FaDatabase />,
    skills: [
      { name: "Pandas", icon: <SiPandas />, level: 90 },
      { name: "NumPy", icon: <SiNumpy />, level: 88 },
      { name: "Matplotlib & Seaborn", icon: <SiPython />, level: 85 },
      { name: "Power BI", icon: <BiBarChartAlt />, level: 75 },
    ],
  },
  {
    category: "Tools & Reproducibility",
    icon: <FaTools />,
    skills: [
      { name: "AWS (S3, EC2)", icon: <FaAws />, level: 80 },
      { name: "Google Colab", icon: <SiGooglecolab />, level: 90 },
      { name: "LaTeX / Overleaf", icon: <SiLatex />, level: 85 },
      { name: "Git / GitHub", icon: <SiGithub />, level: 90 },
    ],
  },
];

const SkillsTimeline = ({ mode = "developer" }) => {
  // Accept both "research" and "researcher" for compatibility with your app
  const isResearch = mode === "research" || mode === "researcher";
  const skillsData = isResearch ? researchSkills : webDevSkills;

  const headingColor = isResearch ? "text-blue-400" : "text-green-400";
  const description = isResearch
    ? "I specialize in machine learning, deep learning, computer vision, and AI research tools."
    : "I specialize in multiple programming languages, frontend and backend technologies, databases, and tools.";

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
          <h2 className={`text-4xl font-bold ${headingColor} mb-4`}>My Skills</h2>
          <p className="text-base font-medium text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        <VerticalTimeline>
          {skillsData.map((category, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "#1f2937", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
              iconStyle={{ background: isResearch ? "#2563eb" : "#22c55e", color: "#fff" }}
              icon={category.icon}
            >
              <h3 className={`text-2xl font-bold ${headingColor} mb-4 text-center`}>{category.category}</h3>
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
                        className={`${isResearch ? "bg-blue-500" : "bg-green-500"} h-full`}
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
