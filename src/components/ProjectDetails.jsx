import { useParams } from "react-router-dom";
import projects from "../data/projectsData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return (
      <div className="text-center text-white py-20">
        <h2 className="text-3xl font-bold text-red-500">Project Not Found</h2>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-900 text-white min-h-screen px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-green-400 mb-6 mt-10">{project.title}</h2>
        <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-lg mb-6" />
        <p className="text-lg text-gray-300 mb-4 text-justify">{project.description}</p>

        <div className="mt-4 space-y-4">
          <h3 className="text-2xl font-semibold text-white">Tech Stack:</h3>
          <p className="text-gray-300 text-justify ">{project.techStack || "Not specified"}</p>

          <h3 className="text-2xl font-semibold text-white">Challenges Faced:</h3>
          <p className="text-gray-300 text-justify">{project.challenges || "Not specified"}</p>

          <h3 className="text-2xl font-semibold text-white">Future Improvements:</h3>
          <p className="text-gray-300 text-justify">{project.futurePlans || "Not specified"}</p>
        </div>

        <div className="mt-10 flex justify-center gap-6">
          <a href={project.githubClient} className="btn btn-dash flex items-center text-gray-300 hover:text-blue-400 transition space-x-2" target="_blank" rel="noopener noreferrer">
            <FaGithub size={22} />
            <span>Github Repository</span>
          </a>
          <a href={project.live} className="btn btn-dash flex items-center text-green-400 hover:text-green-500 space-x-2 transition" target="_blank" rel="noopener noreferrer">
            <span>Live Demo</span>
            <FaExternalLinkAlt size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
