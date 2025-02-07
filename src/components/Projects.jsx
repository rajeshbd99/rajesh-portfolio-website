import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/projectsData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-400 mb-4">Projects</h2>
          <p className="text-xl font-medium text-gray-400">
            Showcasing a collection of projects that reflect my skills and passion for technology.
            These projects highlight my problem-solving abilities, creativity, and dedication to delivering high-quality solutions.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Image Section */}
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-72 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                  <Link to={`/project/${index}`} className="text-white bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                    View More
                  </Link>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description.slice(0, 100)}...</p>

                {/* Links Section */}
                <div className="flex justify-between items-center">
                  <a href={project.githubClient} className="flex items-center text-gray-300 hover:text-blue-400 transition space-x-1" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a href={project.live} className="flex items-center text-green-400 hover:text-green-500 space-x-1 transition" target="_blank" rel="noopener noreferrer">
                    <span>Live Demo</span> <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
