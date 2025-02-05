import { motion } from "framer-motion";
import projects from "../data/projectsData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-400 mb-4">Projects</h2>
        <p className="text-xl font-medium text-gray-500 mt-2">Showcasing a collection of projects that reflect my skills and passion for technology. <br/> These projects highlight my problem-solving abilities, creativity, and dedication to delivering high-quality solutions.</p>

      </div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 px-6 md:px-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover"
            />

            {/* Links Section (Always Clickable) */}
            <div className="p-6 flex justify-between items-center relative z-10">
              <div className="flex space-x-4">
                <a
                  href={project.githubClient}
                  className="flex items-center text-gray-300 hover:text-blue-400 transition space-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={22} />
                  <span className="text-sm">Client</span>
                </a>
                {project.githubServer && (
                  <a
                    href={project.githubServer}
                    className="flex items-center text-gray-300 hover:text-blue-400 transition space-x-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={22} />
                    <span className="text-sm">Server</span>
                  </a>
                )}
              </div>
              <a
                href={project.live}
                className="flex items-center text-green-400 hover:text-green-500 space-x-1 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Live Demo</span> <FaExternalLinkAlt size={16} />
              </a>
            </div>

            {/* Hover Overlay for Description (Not Blocking Links) */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-center px-6 transition duration-300 pointer-events-none">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
