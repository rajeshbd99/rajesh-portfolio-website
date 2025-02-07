import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/projectsData";
import { Github } from "lucide-react";
import { GiLinkedRings } from "react-icons/gi";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-green-400 mb-4 tracking-wide">Projects</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work, demonstrating problem-solving, creativity, and expertise in building high-quality applications.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-green-400"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description.slice(0, 100)}...
                </p>

                {/* Links Section */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubClient}
                    className="flex items-center text-gray-300 hover:text-green-400 transition space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={22} />
                    <span className="text-sm">GitHub</span>
                  </a>

                  <Link
                    to={`/project/${index}`}
                    className="flex items-center text-white bg-gradient-to-r from-green-500 to-blue-500 px-5 py-2 rounded-lg hover:scale-105 transition shadow-lg"
                  >
                    View More
                  </Link>

                  <a
                    href={project.live}
                    className="flex items-center text-green-400 hover:text-green-500 space-x-2 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Live Demo</span>
                    <GiLinkedRings size={18} />
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
