import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/projectsData";
import { Github } from "lucide-react";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-400 mb-4 tracking-wide">
            My Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of my best projects showcasing skills in web development, UI/UX, and backend technologies.
          </p>
        </motion.div>

        {/* Grid Layout with Scroll Animation */}
        <div
          ref={ref}
          className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800/80 border border-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-green-400/30 hover:scale-[1.05]"
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-green-400">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {project.description.slice(0, 120)}...
                </p>

                {/* Buttons Section */}
                <div className="flex justify-between items-center mt-4">
                  {/* GitHub Link */}
                  <a
                    href={project.githubClient}
                    className="flex items-center text-gray-300 hover:text-blue-400 transition space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={22} />
                    <span className="text-sm sm:text-base">GitHub</span>
                  </a>

                  {/* View More Button */}
                  <Link
                    to={`/project/${index}`}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-all shadow-lg"
                  >
                    <FaEye size={18} />
                    <span>View Details</span>
                  </Link>

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    className="flex items-center text-green-400 hover:text-green-500 space-x-2 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm sm:text-base">Live Demo</span>
                    <FaExternalLinkAlt size={16} />
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
