import projects from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl text-center font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 px-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-4">
              <a href={project.github} className="text-blue-500">GitHub</a> | 
              <a href={project.live} className="text-green-500 ml-2">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
