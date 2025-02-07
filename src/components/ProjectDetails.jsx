import { useParams } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub, FaTools, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import projects from "../data/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return (
      <div className="text-center text-white py-20">
        <h2 className="text-3xl font-bold text-red-500 animate-pulse">Project Not Found</h2>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-900 text-white min-h-screen px-6 md:px-20">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-green-400 mb-6 mt-10 text-center">
          {project.title}
        </h2>

        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full rounded-lg shadow-lg mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <p className="text-lg text-gray-300 mb-6 text-justify leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-6">
          <motion.div
            className="bg-gray-800 p-5 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <FaTools className="text-blue-400" /> Tech Stack:
            </h3>
            <p className="text-gray-300 mt-2">{project.techStack || "Not specified"}</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-5 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <FaLightbulb className="text-yellow-400" /> Challenges Faced:
            </h3>
            <p className="text-gray-300 mt-2">{project.challenges || "Not specified"}</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-5 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <FaExternalLinkAlt className="text-green-400" /> Future Improvements:
            </h3>
            <p className="text-gray-300 mt-2">{project.futurePlans || "Not specified"}</p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-10 flex justify-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a 
            href={project.githubClient} 
            className="flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub size={22} />
            <span>Github</span>
          </a>

          <a 
            href={project.live} 
            className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
